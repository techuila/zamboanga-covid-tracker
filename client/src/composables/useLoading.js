import { reactive, toRefs } from '@vue/composition-api'

export default function useTheme () {
  const state = reactive({
    loading: true,
    requestCount: 0
  })

  const setRequestCount = (payload) => {
    // If payload is true then increment request count, else decrement
    const requestCount = payload ? ++state.requestCount : --state.requestCount
    payload = {
      loading: requestCount !== 0 ? true : false,
      requestCount
    }
  }

  return {
    ...toRefs(state),
    setRequestCount
  }
}