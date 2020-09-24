<template>
  <l-map id="map-leaflet" ref="map" style="height: 100%" :zoom="11" :center="[7.1473759, 122.1970634]">
    <l-tile-layer :url="'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'"></l-tile-layer>

    <l-control id="control-info" ref="info" class="info">
      <h4>Zamboanga City</h4>Hover over a barangay
    </l-control>

    <l-control position="bottomRight" class="info legend leaflet-bottom leaflet-right">
      <!-- <template v-for="(grade, index) in grades">
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
      </template> -->
    </l-control>

    <!-- <l-geo-json
      ref="geomap"
      :geojson="geojson"
      :options="options"
      :options-style="styleFunction"
    /> -->
  </l-map>
</template>

<script>
export default {
  
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