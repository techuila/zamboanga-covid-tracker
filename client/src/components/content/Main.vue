<template>
  <!-- <h3>Case Info</h3> -->
    <helper-tab :data="tabs" v-model="selected">
      <template>
        <!-- Case Info Tab Pane -->
        <div :class="`tab-pane ${selected == 0 && 'active-pane'} flex-container`">
          <!--  ========================== 
                          Header
                ========================== -->
          <div class="date-filter-container" @click="openDatePicker">
            <div class="left">
              <h2 class="date-title">
                2020
              </h2>

              <span class="date-subtitle">
                Monday, August 31 
              </span>
            </div>

            <div class="right">
              <i class="dropdown fas fa-chevron-down"></i>
            </div>

            <el-date-picker
              id="date-picker"
              ref="datePicker"
              v-model="date"
              type="date"
              placeholder="Pick a Date"
              format="yyyy/MM/dd"
              value-format="yyyy-MM-dd"
              :style="{ width: 0, height: 0, position: 'absolute', bottom: '5px', zIndex: -1 }"
            >
            </el-date-picker>


          </div>

          <!--  ========================== 
                          Body (filter)
                ========================== -->
          <div style="margin-top: 30px">
            <el-radio-group v-model="selectedStatus" size="medium" :style="{ display: 'flex', width: '100%' }">
              <el-radio-button v-for="(e, i) in statusTabs" :label="e" :key="i" :style="{ width: '100%' }"></el-radio-button>
            </el-radio-group>
          </div>

          <!-- Body content -->
          <div class="barangay-card-container">
            <!-- <p>Barangays</p> -->

            <el-card v-for="(e, i) in barangays" class="barangay-card" shadow="always" :key="i">
              <div class="label">
                <span class="title">{{ e.label }}</span>
                <h3>{{ e.value }}</h3>
              </div>

              <div class="mini-chart">
                <TrendChart
                  :datasets="[
                    {
                      data: [10, 50, 20, 100, 40, 60, 80],
                      showPoints: true,
                      fill: true,
                      smooth: true,
                      className: `curve-${selectedStatus.toLowerCase().replace(' ', '-')}`
                    }
                  ]"
                  padding="5 5 0" 
                  :interactive="true">
                </TrendChart>
              </div>
            </el-card>
          </div>

          <!--  ==========================
                        Apex Chart
                ==========================-->
          <div id="chart">
            <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
          </div>
        </div>

        <!-- Tweets Tab Pane -->
        <div :class="`tab-pane ${selected == 1 && 'active-pane'}`">
          <TwitterFeed src="https://twitter.com/axlcuyugan/lists/zamboanga-city-updates?ref_src=twsrc%5Etfw" dark />
        </div>
      </template>
    </helper-tab>
</template>

<script>
import { onBeforeUpdate, reactive, toRefs, ref } from '@vue/composition-api'

export default {
  setup (_, { root }) {
    const tab = reactive({
      tabs: [
        {
          label: 'Case Info',
          class: 'fas fa-chart-pie'
        }, 
        {
          label: 'Tweets',
          class: 'fab fa-twitter'
        }
      ],
      selected: 0
    })
    const bodyData = reactive({
      selectedStatus: 'Total Cases',
      statusTabs: ['Total Cases', 'Deaths', 'Recovered']
    })
    const chart = reactive({
      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      chartOptions: {
        chart: {
          type: 'area',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#FF385F', '#23D160', '#FFFFFF'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Outbreak trend overtime',
          align: 'left'
        },
        subtitle: {
          text: 'Comulative Count',
          align: 'left'
        },
        theme: {
          mode: 'dark',
          palette: 'palette1',
          monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: 'light',
            shadeIntensity: 0.65
          }
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: 'left'
        }
      }
    })
    const barangays = ref([
      {
        label: 'Tetuan',
        value: '102,210'
      },
      {
        label: 'Putik',
        value: '12,210'
      },
      {
        label: 'Guiwan',
        value: '1,231'
      },
    ])
    const date = ref('')
    const datePicker = ref(null)

    onBeforeUpdate(() => {
      datePicker.value = null
    })

    const openDatePicker = () => {
      // document.getElementById('date-picker').click()
      console.log(datePicker.value.$el)
      root.$nextTick(() => datePicker.value.focus())
      return false
    }

    return {
      ...toRefs(tab),
      ...toRefs(bodyData),
      ...toRefs(chart),
      date,
      barangays,
      openDatePicker,
      datePicker
    }
  }
}
</script>

<style lang="scss" scoped>
#chart {
  min-height: 377.5px;
  padding: 0.75rem;
  overflow: hidden;
  border-radius: 5px;
  background-color: #3c3c3c;
}

.tab-pane {
  height: 100%;
  margin: 0px 4px;
  position: relative;

  .date-filter-container {
    display: flex;
    cursor: pointer;
    position: relative;
    width: max-content;
    align-items: center;
    background-color: #131317;

    .left {
      padding-right: 12px;
      
      .date-subtitle {
        font-size: 1.15em;
      }
    }

    .right {
      border-left: 1px solid rgba(161, 161, 161, 0.3);
      .dropdown {
        margin-left: 15px;
      }
    }
  }
  
  &:not(.active-pane) {
    display: none;
  }
}

.barangay-card-container {
  flex-grow: 1;
  padding-top: 18px;

  p {
    margin: 20px 0;
  }

  .barangay-card {
    border: none;
    height: 70px;
    color: #FFF;
    box-shadow: none;
    background-color: transparent;
    // background-color: #5c5c5c;
    // box-shadow: 0 1px 7px rgba(0, 0, 0, 0.4);

    .label {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .title {
        color: #D1D1D1;
      }
    }
  }
}

.active-pane {
  padding: 0 20px 24px 20px;
  overflow-y: scroll;

  &:not(.flex-container) {
    display: initial;
  }
}
</style>