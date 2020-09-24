import Vue from 'vue'
import { LMap, LTileLayer, LGeoJson, LControl } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-control', LControl)
Vue.component('l-geo-json', LGeoJson)
