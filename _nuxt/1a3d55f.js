(window.webpackJsonp=window.webpackJsonp||[]).push([[50,14],{794:function(t,e,o){var content=o(800);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(141).default)("f9bdcf9e",content,!0,{sourceMap:!1})},799:function(t,e,o){"use strict";o(794)},800:function(t,e,o){var n=o(140)((function(i){return i[1]}));n.push([t.i,".overlay[data-v-395215aa]{position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:50;display:flex;height:100vh;width:100%;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;--tw-bg-opacity:1;background-color:rgb(55 65 81 / var(--tw-bg-opacity));opacity:0.75}.overlay-content[data-v-395215aa]{position:absolute;z-index:50;display:flex;height:100%;width:100%;align-items:center;justify-content:center;background-color:rgb(55 65 81 / var(--tw-bg-opacity));--tw-bg-opacity:0.75}.loader[data-v-395215aa]{border-top-color:#3498db;animation:spinner-395215aa 1.5s linear infinite}@keyframes spinner-395215aa{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),n.locals={},t.exports=n},801:function(t,e,o){"use strict";o.r(e);var n={name:"OverlayComponent",props:{show:{type:Boolean,default:!1}}},r=(o(799),o(195)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[t.show?e("div",{staticClass:"overlay-content",attrs:{"wire:loading":""}},[e("div",{staticClass:"btn btn-primary btn-outline btn-lg loading"},[t._v("\n      Carregando...\n    ")])]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"395215aa",null);e.default=component.exports},802:function(t,e,o){"use strict";o(68);e.a={data:function(){return{}},methods:{setFiltersLocation:function(t,e){return null==this.$store.state[e].locationType?void 0!==t.location_type&&(delete t.scope_location,delete t.location_type,delete t.location_id):(t.scope_location=this.$store.state[e].scopeLocation,t.location_type=this.$store.state[e].locationType,t.location_id=this.$store.state[e].locationId),this.locationName=this.$store.state[e].locationName,t},setFiltersCids:function(t,e,o){return void 0!==t.column_filters&&(delete t.column_filters,delete t.term_filters),void 0!==t.column_filter_or&&(delete t.column_filter_or,delete t.term_filter_or_range),null!=this.$store.state[e].filter_cids&&(t.column_filters=o,t.term_filters=this.$store.state[e].filter_cids),null!=this.$store.state[e].filter_groups_cids&&(t.column_filter_or=[o],t.term_filter_or_range=this.$store.state[e].filter_groups_cids),null!=this.$store.state[e].filter_chapters_cids&&(t.column_filter_or=[o],t.term_filter_or_range=this.$store.state[e].filter_chapters_cids),t},resetFilters:function(t){this.$store.commit("".concat(this.module,"/setScopo"),{scopeLocation:t}),this.$store.commit("".concat(this.module,"/setLocation"),{locationType:null,locationId:null,locationName:this.locationName})},changeLocationFilter:function(t){this.name=t.locationName,this.locationName=t.locationName,this.$store.commit("".concat(this.module,"/setLocationName"),{locationName:t.locationName}),this.setAllFilters()}}}},805:function(t,e,o){t.exports=o.p+"img/piaui_logo.85ac4d2.png"},811:function(t,e,o){t.exports=o.p+"img/maranhao_logo.e8fbeeb.png"},999:function(t,e,o){"use strict";o.r(e);o(68);var n=o(14);o(93),o(17),o(74),o(110),o(85),o(196),o(40),o(197);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"PainelSih",mixins:[o(802).a],data:function(){return{img:o(576),initial:null!==this.$store.state.sih.initial?this.$store.state.sih.initial:"pi",name:null!==this.$store.state.sih.locationName?this.$store.state.sih.locationName:"Piauí",locationName:null!==this.$store.state.sih.locationName?this.$store.state.sih.locationName:"Piauí",scopeLocation:"",module:"sih",optionsScopeLocation:[{name:"Residêntes",value:"munic_res"},{name:"Ocorrência",value:"munic_mov"}],urlBase:"v1/dataset/datasus/sih/",urlBaseSerie:"v1/dataset/serie/datasus/sih/",urlBaseSerieRange:"v1/dataset/serie/range/datasus/sih/",url:"",urlSerie:"",urlSerieRange:"",checkedDatasets:[],locations:[{initial:"pi",name:"Piauí",img:o(805)},{initial:"ma",name:"Maranhão",img:o(811)}],paramsDatasets:{limit:20},paramsSerieByMonth:{scope_location:this.$store.state.sih.scopeLocation,per:"mes_cmpt",rating:"n_aih",operation:"count",per_page:12,page:1},paramsSeriePermanenceByMonth:{scope_location:this.$store.state.sih.scopeLocation,per:"mes_cmpt",rating:"dias_perm",operation:"sum",per_page:12,page:1},paramsSerieUtiByMonth:{scope_location:this.$store.state.sih.scopeLocation,per:"mes_cmpt",rating:"uti_mes_to",operation:"sum",per_page:12,page:1},paramsSerieDeathByMonth:{scope_location:this.$store.state.sih.scopeLocation,per:"mes_cmpt",rating:"morte",operation:"sum",per_page:12,page:1},paramsSerieByValTot:{scope_location:this.$store.state.sih.scopeLocation,per:"val_tot",operation:"sum",per_page:12,page:1},loading:!0,countLoading:0,limitLoading:3}},computed:{},watch:{checkedDatasets:function(t){this.changeDatasets(t)}},created:function(){this.url="".concat(this.urlBase).concat(this.initial),this.urlSerie="".concat(this.urlBaseSerie).concat(this.initial),this.urlSerieRange="".concat(this.urlBaseSerieRange).concat(this.initial),this.$store.commit("".concat(this.module,"/setLocationName"),{locationName:this.locationName}),this.setAllFilters()},beforeMount:function(){},mounted:function(){this.$nextTick((function(){}))},activated:function(){},updated:function(){},methods:{changeLocationState:function(t){var e=this;this.$store.commit("".concat(this.module,"/setInitial"),{initial:t}),this.url="".concat(this.urlBase).concat(t),this.urlSerie="".concat(this.urlBaseSerie).concat(t),this.urlSerieRange="".concat(this.urlBaseSerieRange).concat(t),this.locations.every((function(o){return o.initial!==t||(e.initial=o.initial,e.name=o.name,e.locationName=o.name,e.$store.commit("".concat(e.module,"/setLocationName"),{locationName:e.locationName}),!1)})),this.resetFilters("munic_mov"),this.setAllFilters()},changeDatasets:function(t){this.checkedDatasets=t},setFilters:function(t){return t=this.setFiltersLocation(t,this.module),c({},t=this.setFiltersCids(t,this.module,"diag_princ"))},setAllFilters:function(){this.paramsDatasets=c({},this.setFilters(this.paramsDatasets)),this.paramsSerieByMonth=this.setFilters(this.paramsSerieByMonth),this.paramsSeriePermanenceByMonth=this.setFilters(this.paramsSeriePermanenceByMonth),this.paramsSerieUtiByMonth=this.setFilters(this.paramsSerieUtiByMonth),this.paramsSerieDeathByMonth=this.setFilters(this.paramsSerieDeathByMonth),this.paramsSerieByValTot=this.setFilters(this.paramsSerieByValTot)},incrementLoad:function(){this.countLoading++,this.countLoading===this.limitLoading&&(this.countLoading=0,this.loading=!1)}}},d=o(195),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("Overlay",{attrs:{show:t.loading}},[e("div",{staticClass:"drawer drawer-end"},[e("input",{staticClass:"drawer-toggle",attrs:{id:"filter-drawer",type:"checkbox"}}),t._v(" "),e("div",{staticClass:"drawer-content"},[e("div",[e("LazyPainelNavbar",{attrs:{location:t.initial,locations:t.locations},on:{changeLocation:t.changeLocationState},scopedSlots:t._u([{key:"end",fn:function(){return[e("label",{staticClass:"btn btn-ghost drawer-button",attrs:{for:"filter-drawer"}},[e("fa-icon",{staticClass:"icon-menu",attrs:{icon:"filter"}})],1)]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-3"},[e("div",[e("LazyPainelCardDatasets",{ref:"cardDatasets",attrs:{title:t.locationName,url:t.url,sort:"year",system:"sih",params:t.paramsDatasets},on:{"update:title":function(e){t.locationName=e},"update:url":function(e){t.url=e},"update:params":function(e){t.paramsDatasets=e},checked:t.changeDatasets,loadend:t.incrementLoad}})],1),t._v(" "),e("div",{staticClass:"col-span-2"},[e("client-only",[e("LazyPainelBarChartSihDataset",{attrs:{title:"AIH Aprovadas e Rejeitadas",datasets:t.checkedDatasets,"location-name":t.locationName},on:{"update:datasets":function(e){t.checkedDatasets=e},"update:locationName":function(e){t.locationName=e},"update:location-name":function(e){t.locationName=e}}})],1)],1)]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 gap-1"},[e("div",[e("client-only",[e("LazyPainelBarChartSihValues",{ref:"serieByValues",attrs:{title:"Valor das AIH Aprovadas e Rejeitadas",datasets:t.checkedDatasets,"location-name":t.locationName,params:t.paramsSerieByValTot,url:t.urlSerie},on:{"update:datasets":function(e){t.checkedDatasets=e},"update:locationName":function(e){t.locationName=e},"update:location-name":function(e){t.locationName=e},"update:params":function(e){t.paramsSerieByValTot=e},"update:url":function(e){t.urlSerie=e},loadend:t.incrementLoad}})],1)],1)]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2"},[e("div",[e("client-only",[e("LazyPainelBarChartDataset",{attrs:{title:"Quantidade total de AIH ",datasets:t.checkedDatasets,"location-name":t.locationName},on:{"update:datasets":function(e){t.checkedDatasets=e},"update:locationName":function(e){t.locationName=e},"update:location-name":function(e){t.locationName=e}}})],1)],1),t._v(" "),e("div",[e("client-only",[e("LazyPainelLineChart",{ref:"serieByMonth",attrs:{title:"AIH por mês: ",datasets:t.checkedDatasets,"location-name":t.locationName,params:t.paramsSerieByMonth,url:t.urlSerie},on:{"update:datasets":function(e){t.checkedDatasets=e},"update:locationName":function(e){t.locationName=e},"update:location-name":function(e){t.locationName=e},"update:params":function(e){t.paramsSerieByMonth=e},"update:url":function(e){t.urlSerie=e},loadend:t.incrementLoad}})],1)],1)]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2"},[e("div",[e("client-only",[e("LazyPainelLineChart",{ref:"seriePermanenceByMonth",attrs:{title:"Diárias de AIH por mês: ",datasets:t.checkedDatasets,"location-name":t.locationName,params:t.paramsSeriePermanenceByMonth,url:t.urlSerie,operation:"sum"},on:{"update:datasets":function(e){t.checkedDatasets=e},"update:locationName":function(e){t.locationName=e},"update:location-name":function(e){t.locationName=e},"update:params":function(e){t.paramsSeriePermanenceByMonth=e},"update:url":function(e){t.urlSerie=e},loadend:t.incrementLoad}})],1)],1),t._v(" "),e("div",[e("client-only",[e("LazyPainelLineChart",{ref:"serieUtiByMonth",attrs:{title:"Diárias de UTI por mês: ",datasets:t.checkedDatasets,"location-name":t.locationName,params:t.paramsSerieUtiByMonth,url:t.urlSerie,operation:"sum"},on:{"update:datasets":function(e){t.checkedDatasets=e},"update:locationName":function(e){t.locationName=e},"update:location-name":function(e){t.locationName=e},"update:params":function(e){t.paramsSerieUtiByMonth=e},"update:url":function(e){t.urlSerie=e},loadend:t.incrementLoad}})],1)],1)]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 gap-1"},[e("div",[e("client-only",[e("LazyPainelLineChart",{ref:"serieDeathByMonth",attrs:{title:"Óbitos por mês: ",datasets:t.checkedDatasets,"location-name":t.locationName,params:t.paramsSerieDeathByMonth,url:t.urlSerie,operation:"sum"},on:{"update:datasets":function(e){t.checkedDatasets=e},"update:locationName":function(e){t.locationName=e},"update:location-name":function(e){t.locationName=e},"update:params":function(e){t.paramsSerieDeathByMonth=e},"update:url":function(e){t.urlSerie=e},loadend:t.incrementLoad}})],1)],1)])],1)]),t._v(" "),e("div",{staticClass:"drawer-side"},[e("label",{staticClass:"drawer-overlay",attrs:{for:"filter-drawer"}}),t._v(" "),e("div",{staticClass:"card text-center shadow-2xl w-11/12 menu overflow-y-auto bg-base-100 text-base-content p-1"},[e("div",{staticClass:"card-body grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2"},[e("LazyPainelTableCities",{ref:"tableCities",attrs:{initial:t.initial,name:t.name,painel:"sih","options-scope-location":t.optionsScopeLocation},on:{"update:initial":function(e){t.initial=e},"update:name":function(e){t.name=e},"update:optionsScopeLocation":function(e){t.optionsScopeLocation=e},"update:options-scope-location":function(e){t.optionsScopeLocation=e},changeLocation:t.changeLocationFilter}}),t._v(" "),e("LazyPainelCardCids",{attrs:{loading:t.loading,store:"sih"},on:{"update:loading":function(e){t.loading=e},update:t.setAllFilters}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Overlay:o(801).default})}}]);