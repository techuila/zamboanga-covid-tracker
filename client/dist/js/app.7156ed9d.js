(function(e){function t(t){for(var n,s,c=t[0],i=t[1],l=t[2],u=0,d=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o=[];function s(e){return c.p+"js/"+({Login:"Login",about:"about"}[e]||e)+"."+{Login:"b9bb25ce",about:"5017c3ad"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(e);var l=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var f=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"11fe":function(e,t,a){},"1eb8":function(e,t,a){},"262f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("h2",[e._v("Coronavirus COVID-19")]),a("p",{staticClass:"subtitle"},[e._v("Zamboanga City")]),e._v(" "),a("br"),a("div",{staticClass:"info"},e._l(e.infos,(function(e,t){return a("helper-card",{key:t,attrs:{info:e}})})),1)])},r=[],o=a("a6f4"),s={setup:function(){var e=Object(o["d"])([{title:"Infected",value:"200,000",class:"fas fa-virus",style:{backgroundColor:"#BA3131"}},{title:"Active",value:"10,231",class:"fas fa-exclamation-triangle",style:{backgroundColor:"#F5C87B"}},{title:"Deaths",value:"28,711",class:"fas fa-skull-crossbones",style:{backgroundColor:"#4E4D52"}},{title:"Recovered",value:"123,456",class:"fas fa-plus",style:{backgroundColor:"#409EFF"}}]);return{infos:e}}},c=s,i=(a("b22a"),a("2877")),l=Object(i["a"])(c,n,r,!1,null,"609b3cde",null);t["default"]=l.exports},"31ce":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("div",{staticClass:"icon",style:Object.assign({},e.info.style,{boxShadow:"0 1px 10px "+e.info.style.backgroundColor})},[a("i",{class:e.info.class})]),a("div",{staticClass:"card-content"},[a("p",{staticClass:"card-title"},[e._v(e._s(e.info.title))]),a("h3",{staticClass:"card-subtitle"},[e._v(e._s(e.info.value))])])])},r=[],o={props:["info"]},s=o,c=(a("7f08"),a("2877")),i=Object(c["a"])(s,n,r,!1,null,"3b12df3c",null);t["default"]=i.exports},"463f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("l-map",{ref:"map",staticStyle:{height:"100%"},attrs:{id:"map-leaflet",zoom:11,center:[7.1473759,122.1970634]}},[a("l-tile-layer",{attrs:{url:"https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"}}),a("l-control",{ref:"info",staticClass:"info",attrs:{id:"control-info"}},[a("h4",[e._v("Zamboanga City")]),e._v("Hover over a barangay ")]),a("l-control",{staticClass:"info legend leaflet-bottom leaflet-right",attrs:{position:"bottomRight"}})],1)},r=[],o={},s=o,c=(a("cfe9"),a("2877")),i=Object(c["a"])(s,n,r,!1,null,"41e429a9",null);t["default"]=i.exports},4797:function(e,t,a){"use strict";var n=a("5c70"),r=a.n(n);r.a},"506d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],s={},c=s,i=(a("5c0b"),a("2877")),l=Object(i["a"])(c,r,o,!1,null,null,null),u=l.exports,f=(a("d3b7"),a("8c4f")),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard-container"}},[a("el-alert",{staticClass:"dashboard-info",attrs:{title:"Site is still under development",type:"info",effect:"dark",center:"","show-icon":""}}),a("div",{attrs:{id:"dashboard"}},[a("div",{staticClass:"content"},[a("core-header"),a("core-map")],1),a("core-sidebar")],1)],1)},p=[],b={setup:function(){}},v=b,h=(a("6faa"),Object(i["a"])(v,d,p,!1,null,"0c9a0572",null)),m=h.exports;n["default"].use(f["a"]);var y=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return a.e("Login").then(a.bind(null,"a55b"))}}],g=new f["a"]({mode:"history",base:"/",routes:y}),_=g,w=a("1321"),O=a.n(w);n["default"].use(O.a),n["default"].component("apexchart",O.a);var k=a("5c96"),C=a.n(k),j=a("b2d6"),x=a.n(j);a("0fae");n["default"].use(C.a,{locale:x.a});var T=a("2699"),E=a("a40a"),P=a("2253"),S=a("044a");a("6cc5");n["default"].component("l-map",T["a"]),n["default"].component("l-tile-layer",E["a"]),n["default"].component("l-control",P["a"]),n["default"].component("l-geo-json",S["a"]);var M=a("201b"),$=a.n(M);n["default"].use($.a);a("a5d8"),a("15f5"),a("4160"),a("ac1f"),a("5319"),a("159b"),a("ddb0");var D=a("8103"),L=a.n(D),Z=a("bba4"),A=a.n(Z),F=a("ffe0");F.keys().forEach((function(e){var t=F(e),a=L()(A()(e.replace(/^\.\//,"").replace(/\.\w+$/,"")));n["default"].component(a,t.default||t)}));var z=a("9483");Object(z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var H=a("a6f4");n["default"].config.productionTip=!1,n["default"].use(H["a"]),new n["default"]({router:_,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"5c70":function(e,t,a){},"6faa":function(e,t,a){"use strict";var n=a("a4b6"),r=a.n(n);r.a},"7f08":function(e,t,a){"use strict";var n=a("11fe"),r=a.n(n);r.a},8721:function(e,t,a){"use strict";var n=a("1eb8"),r=a.n(n);r.a},"997b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"sidebar"}},[a("helper-tab",{attrs:{data:e.tabs},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[[a("div",{class:"tab-pane "+(0==e.selected&&"active-pane")},[a("div",{staticClass:"date-filter-container",on:{click:e.openDatePicker}},[a("div",{staticClass:"left"},[a("h2",{staticClass:"date-title"},[e._v(" 2020 ")]),a("span",{staticClass:"date-subtitle"},[e._v(" Monday, August 31 ")])]),a("div",{staticClass:"right"},[a("i",{staticClass:"dropdown fas fa-chevron-down"})]),a("el-date-picker",{ref:"datePicker",style:{width:0,height:0,position:"absolute",bottom:"5px",zIndex:-1},attrs:{id:"date-picker",type:"date",placeholder:"Pick a Date",format:"yyyy/MM/dd","value-format":"yyyy-MM-dd"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),a("div",{staticStyle:{"margin-top":"30px"}},[a("el-radio-group",{style:{display:"flex",width:"100%"},attrs:{size:"medium"},model:{value:e.selectedStatus,callback:function(t){e.selectedStatus=t},expression:"selectedStatus"}},e._l(e.statusTabs,(function(e,t){return a("el-radio-button",{key:t,style:{width:"100%"},attrs:{label:e}})})),1)],1),a("div",{staticClass:"barangay-card-container"},[a("p",[e._v("Barangays")]),a("el-card",{staticClass:"barangay-card",attrs:{shadow:"always"}},[e._v(" Tetuan ")]),a("el-card",{staticClass:"barangay-card",attrs:{shadow:"always"}},[e._v(" Putik ")])],1),a("apexchart",{attrs:{type:"area",height:"350",options:e.chartOptions,series:e.series}})],1),a("div",{class:"tab-pane "+(1==e.selected&&"active-pane")},[a("TwitterFeed",{attrs:{src:"https://twitter.com/axlcuyugan/lists/zamboanga-city-updates?ref_src=twsrc%5Etfw",dark:""}})],1)]],2)],1)},r=[],o=a("5530"),s=a("a6f4"),c={setup:function(e,t){var a=t.root,n=Object(s["c"])({tabs:[{label:"Case Info",class:"fas fa-chart-pie"},{label:"Tweets",class:"fab fa-twitter"}],selected:0}),r=Object(s["c"])({selectedStatus:"",statusTabs:["Total Cases","Deaths","Recovered"]}),c=Object(s["c"])({series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}],chartOptions:{chart:{height:350,type:"area"},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}}),i=Object(s["d"])(""),l=Object(s["d"])(null);Object(s["b"])((function(){l.value=null}));var u=function(){return console.log(l.value.$el),a.$nextTick((function(){return l.value.focus()})),!1};return Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(s["e"])(n)),Object(s["e"])(r)),Object(s["e"])(c)),{},{date:i,openDatePicker:u,datePicker:l})}},i=c,l=(a("4797"),a("2877")),u=Object(l["a"])(i,n,r,!1,null,"70e4e972",null);t["default"]=u.exports},"9c0c":function(e,t,a){},"9ffb":function(e,t,a){},a4b6:function(e,t,a){},b22a:function(e,t,a){"use strict";var n=a("506d"),r=a.n(n);r.a},bc7c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tab-container"},[a("div",{staticClass:"tab-header"},e._l(e.data,(function(t,n){return a("div",{key:n,class:"tab "+(e.value==n&&"tab-active"),on:{click:function(t){return e.$emit("input",n)}}},[a("i",{class:t.class}),e._v(" "+e._s(t.label)+" ")])})),0),e._t("default")],2)},r=[],o={props:["data","value"]},s=o,c=(a("8721"),a("2877")),i=Object(c["a"])(s,n,r,!1,null,"126263a6",null);t["default"]=i.exports},cfe9:function(e,t,a){"use strict";var n=a("9ffb"),r=a.n(n);r.a},ffe0:function(e,t,a){var n={"./core/Header.vue":"262f","./core/Map.vue":"463f","./core/Sidebar.vue":"997b","./helper/Card.vue":"31ce","./helper/Tab.vue":"bc7c"};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id="ffe0"}});
//# sourceMappingURL=app.7156ed9d.js.map