<template>
  <l-map id="map-leaflet" ref="map" style="height: 100%" :zoom="11" :center="[7.1473759, 122.1970634]">
    <l-tile-layer :url="'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'"></l-tile-layer>

    <l-control id="control-info" ref="info" class="info">
      <h4>Zamboanga City</h4>Hover over a barangay
    </l-control>

    <l-control position="bottomRight" class="info legend leaflet-bottom leaflet-right">
      <template v-for="(grade, index) in grades">
        <span :key="index" class="legend-span">
          <i
            :style="{
              background: getColor(grade, grades)
            }"
          ></i>
          <template v-if="index > 0">
            {{
            grades.length - 1 == index
            ? parseInt(grades[index - 1]) + parseInt(2)
            : grade
            }}{{
            grades.length - 1 == index
            ? '+'
            : '-' + (parseInt(grade) + parseInt(1))
            }}
          </template>

          <template v-else>{{ grade }}</template>

          <br />
        </span>
      </template>
    </l-control>

    <l-geo-json
      ref="geomap"
      :options="options"
      :geojson="geojson"
      :options-style="styleFunction"
    />
  </l-map>
</template>

<script>
import { reactive, toRefs, computed, watch } from '@vue/composition-api';
import useMap from '@/composables/useMap'

const highlightFeature = e => (info, props) => {
  var layer = e.target
  layer.setStyle({
    weight: 4,
    fillOpacity: 0.7
  })

  info.update(props)
}

const resetHighlight = e => info => {
  e.target.setStyle({ weight: 2, fillOpacity: 0.4 })

  info.update()
}

const zoomToFeature = e => map => {
  map.fitBounds(e.target.getBounds())
}



export default {
  setup() {
    const { geojson, patients, getColor, grades } = useMap()

    const state = reactive({
      geomap: null,
      map: null,
      info: null,
      fillColor: '#4099FF',
      styleFunction: computed(() => ({ properties }) => {
        const fillColor = properties.fillColor || state.fillColor // important! need touch fillColor in computed for re-calculate when change fillColor

        return {
          weight: 2,
          color: '#CCCCCC',
          fillColor: fillColor,
          fillOpacity: 0.4
        }
      }),
      options: computed(() => ({
        onEachFeature: (feature, layer) => {
          layer.on({
            mouseover: e => highlightFeature(e)(state.info, feature.properties),
            mouseout: e => resetHighlight(e)(state.info),
            click: e => zoomToFeature(e)(state.map)
          })
        }
      }))
    })

    watch(
      () => state.info,
      () => {
        if (state.info) {
          state.info.update = function(props) {
            const info_el = document.getElementById('control-info')
            info_el.style = `text-align: ${props ? 'left' : 'center'}`
            info_el.innerHTML =
              '<h4>Zamboanga City</h4>' +
              (props
                ? '<b>' +
                  props.name +
                  '</b><br />' +
                  'Confirmed: <span style="color: red">' +
                  (props.confirmed || 0) +
                  '</span><br />'
                : 'Hover over a barangay')
          }
        }
      }
    )
      
    return {
      ...toRefs(state),
      geojson,
      grades,
      getColor,
    }
  }
}
</script>

<style lang="scss" scoped>
#map-leaflet {
  z-index: 0;
  position: absolute;
}

#control-info {
  padding: 8px 14px;
  background-color: #262626;
  border-radius: 5px;
  box-shadow: 0px 1px 15px rgba(0,0,0,0.35);
}
</style>