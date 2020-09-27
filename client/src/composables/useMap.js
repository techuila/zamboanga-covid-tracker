import { getInitialApi } from '@/api'
import { reactive, toRefs, computed } from '@vue/composition-api'
import groupBy from '@/utils/groupBy'

const colors = ['#cccccc', '#db9090', '#c76568', '#b7424c', '#aa2539']

export default function useMap () {
  const state = reactive({
    info: {
      confirmed_cases: null,
      currently_admitted: null,
      recovered: null,
      deaths: null
    },
    patients: [],
    giojson: null,
    grades: computed(() => [
      1,
      ...(confirmed.value
        ? [0.3, 0.6, 1].map(e =>
            parseFloat(parseFloat(confirmed.value) * parseFloat(e)).toFixed(0)
          )
        : [])
    ]),
    geojson: computed(() => {

      let areas = {
        inZamboanga: Object.values(
          groupBy(
            state.patients.filter(e => e.is_in_zamboanga),
            'barangay'
          )
        ).map(e => ({
          name: e[0].barangay,
          value: e.length
        })),
        notInZamboanga: Object.values(
          groupBy(
            state.patients.filter(e => !e.is_in_zamboanga),
            'barangay'
          )
        ).map(e => ({
          name: e[0].barangay,
          value: e.length
        }))
      }

      if (state.giojson) {
        state.giojson.features = state.giojson.features.map(e => {
          const isFound = areas.inZamboanga.find(
            s => s.name == e.properties.name
          )
  
          if (isFound) {
            return {
              ...e,
              properties: {
                ...e.properties,
                confirmed: isFound.value,
                fillColor: getColor(isFound.value, state.grades)
              }
            }
          }
  
          return e
        })
      }

      return state.giojson
    }),
    logs: {
      Confirmed: [],
      Recovered: [],
      Dead: []
    }
  })
  const confirmed = computed(() => {
    state.info = {
      confirmed_cases: state.patients.length,
      currently_admitted: state.patients.filter(
        e => e.status === 'Currently Admitted'
      ).length,
      deaths: state.patients.filter(e => e.status === 'Dead').length,
      recovered: state.patients.filter(e => e.status === 'Recovered').length
    }

    return state.info.confirmed_cases
  })
  
  const execute = async () => {
    const payload = await getInitialApi()
    const logs = Object.assign({}, state.logs) // Store copy of state logs to local variable (but not referenced)
    let dates = []

    /*
      *  Arrange received data format from server to [[_date_, _value_], [...]] (for apex chart)
      **/
    payload.logs.forEach(log => {
      const s_date = new Date(log.date_created).getTime()
      const currentLog = logs[log.status] // Get reference of local variable logs
      const prevCases =
        currentLog.length !== 0 ? currentLog[currentLog.length - 1][1] : 0 // Get previous case from array to accumulate all cases

      // Stores all dates from data received from server to local variable "dates"
      if (dates.length !== 0) {
        // Insert current date from data received (server) if it doesn't exist on local variable "dates"
        if ((dates[dates.length - 1], s_date)) dates.push(s_date)
      } else dates.push(s_date) // Insert current date if length of local variable "dates" is 0

      // Insert data to local variable "logs" (depends which property from the loop)
      currentLog.push([s_date, parseInt(prevCases) + parseInt(log.cases)])
    })

    /*
      *  Fill data from missing dates, all 3 length of data should be equal (state.map.logs)
      **/
    Object.values(logs).forEach(item => {
      // Fill data from index 0 to end if current date on array (date) is less than the date from the state.map.logs[_property_]
      dates.forEach(date => {
        item.forEach((log, index) => {
          // If date doesn't exist on the state.map.logs AND less then the current date array (dates), then fill data before the index
          if (item.every(c_log => c_log[0] !== date) && log[0] > date)
            item.splice(index, 0, [date, index > 0 ? item[index - 1][1] : 0])
        })
      })

      // Fill data from end of state.map.logs[_property_].date_created, if it's greater than the current date on the array (dates)
      dates.forEach(date => {
        const currentItem = item[item.length - 1]
        if (currentItem[0] < date) item.push([date, currentItem[1]])
      })
    })

    state.logs = logs
    state.patients = payload.patients
    state.giojson = payload.geojson
    console.log(state.patients)
  }
  execute()

  function getColor(value, grades) {
    if ([0, 2].every(e => e >= grades.length)) return

    return value >= grades[3]
      ? colors[4]
      : value >= grades[2]
      ? colors[3]
      : value >= grades[1]
      ? colors[2]
      : value >= grades[0]
      ? colors[1]
      : value == 0
      ? colors[0]
      : colors[0]
  }

  return {
    ...toRefs(state),
    getColor
  }
}