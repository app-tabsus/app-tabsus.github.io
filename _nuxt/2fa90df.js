(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1036:function(e,t,n){"use strict";n.r(t);n(68),n(85),n(17),n(26),n(184),n(87),n(45),n(110),n(164),n(198),n(86);var r=n(70),o=(n(117),n(127),n(28),n(340),n(869),n(339),n(93),n(69),n(985)),l=n(817),c=n.n(l),f=n(8);function d(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var v={name:"PainelSinascMap",props:{mapFeatures:{type:Array,required:!0},occurrences:{type:Array,required:!0},incidence:{type:Boolean,required:!0},zoom:{type:Number,default:6.3}},data:function(){return{center:[-43.0691055,-6.8420932],rotation:0,marker:n(986),features:[],featureOverlay:[],selectedFeatures:[],fillGray:new this.$ol.Fill({color:"rgba(255,255,255,0.3)"}),rangesCount:[],rangesIncidence:[],ranges:[],legendControl:null,colors:f.a.palette.sunSet}},computed:{},watch:{mapFeatures:function(e){this.features=Object(r.a)(e)},occurrences:function(e){this.updatedOccurrences(e)},ranges:function(e){this.updatedRanges(e)},incidence:function(){this.coloringMap(this.occurrences)}},created:function(){this.id=this.$route.params.id},beforeMount:function(){0===this.features.length&&(this.features=Object(r.a)(this.mapFeatures))},mounted:function(){var e=this;this.$nextTick((function(){setTimeout((function(){e.initControl()}),2e3)}))},activated:function(){},updated:function(){},methods:{initControl:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;this.$nextTick((function(){void 0!==e.$refs.map?(e.setControltMap(e.$refs.map.$map),e.$emit("mount",e.$refs.map.$map),0===e.rangesCount.length&&e.updatedOccurrences(e.occurrences)):t>0&&e.initControl(t-1)}))},geometryTypeToCmpName:function(e){return"vl-geom-"+Object(o.kebabCase)(e)},setEventMap:function(e){var t=this;e.map.forEachFeatureAtPixel(e.pixel,(function(e){var n=t.features.find((function(t){return t.id===e.getId()}));return void 0!==n&&(t.featureOverlay=[],t.featureOverlay.push(n)),!0}))},setNameMap:function(e){var t=this;this.$refs.mapFeatures.$source.forEachFeature((function(e){e.setStyle(new t.$ol.Style({stroke:new t.$ol.Stroke({color:"#cccccc",width:1}),fill:new t.$ol.Fill({color:"rgba(217,217,217, 0.5)"})})),e.getStyle().setText(new t.$ol.Text({text:e.getProperties().name,font:"12px Calibri,sans-serif",fill:new t.$ol.Fill({color:"#000"}),stroke:new t.$ol.Stroke({color:"#fff",width:4})}))}))},setControltMap:function(map){var e=new this.$olExt.PrintDialog({lang:"ptBR"});map.addControl(e)},generateRangeClass:function(e){var t=this.$ss.max(e),n=this.$ss.min(e),r=[],o=Math.log10(t)-Math.log10(n);o<1&&(o+=1);for(var i=n;i<=t;i=Math.round(i*o,2))r.push([i,Math.round(i*o,2)]);return r},generateRangeIncidenceClass:function(e){for(var t=this.$ss.max(e),n=this.$ss.min(e),r=Math.log10(e.length),o=Math.round(1+3.3*r),l=[],i=n;i<=t;i+=Math.round(t/o))l.push([i,i+Math.round(t/o)]);return l},updatedOccurrences:function(e){var t,n=this,r=null,o=[],l=[],f=d(this.features);try{for(f.s();!(t=f.n()).done;){var h=t.value;h.properties.count=0,h.properties.incidence=0}}catch(e){f.e(e)}finally{f.f()}var v=this.fillGray;this.$refs.mapFeatures.$source.forEachFeature((function(e){e.setStyle(new n.$ol.Style({stroke:new n.$ol.Stroke({color:c()("#ba68c8",.1),width:1}),fill:v})),e.setProperties({count:0}),e.setProperties({incidence:0})}));for(var m=0;m<e.length;m++){var y=e[m];null!==(r=this.findFeature(y))&&(r.properties.count=y.count,y.incidence=parseFloat((y.count/r.properties.populations*1e5).toFixed(2)),r.properties.incidence=y.incidence,y.count>0&&(o.push(y.count),l.push(y.incidence))),e.length-1===m&&(this.rangesCount=this.generateRangeClass(o),this.rangesIncidence=this.generateRangeIncidenceClass(l),this.coloringMap(e))}},coloringMap:function(e){var t,n=null,r=d(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;null!==(n=this.findFeature(o))&&this.updateFeature(n,o)}}catch(e){r.e(e)}finally{r.f()}},updatedRanges:function(e){var t=this;if(void 0!==this.$refs.map.$map){var map=this.$refs.map.$map,title="";title=this.incidence?"Incidência":"Ocorrência";var legend=new this.$olExt.Legend({title:title,margin:5});null!=this.legendControl&&map.removeControl(this.legendControl),this.legendControl=new this.$olExt.LegendControl({legend:legend,collapsed:!1}),map.addControl(this.legendControl);for(var i=0;i<e.length;i++)legend.addItem({title:"".concat(e[i][0]," - ").concat(e[i][1]),typeGeom:"Point",style:new this.$ol.Style({image:new this.$ol.RegularShape({points:4,radius:15,angle:Math.PI/4,stroke:new this.$ol.Stroke({color:c()("#ba68c8",.1),width:1}),fill:new this.$ol.Fill({color:c()(this.colors[i],.7)})})})})}else setTimeout((function(){t.updatedRanges(e)}),2e3)},updateFeature:function(e,t){var n=this,o=this.$refs.mapFeatures.$source.getFeatureById(e.id);if(null!=o){var l=this.fillGray;if(this.incidence){this.ranges=Object(r.a)(this.rangesIncidence);for(var i=0;i<this.rangesIncidence.length;i++)if(t.incidence>=this.rangesIncidence[i][0]&&t.incidence<=this.rangesIncidence[i][1]){l=new this.$ol.Fill({color:c()(this.colors[i],.7)});break}}else{this.ranges=Object(r.a)(this.rangesCount);for(var f=0;f<this.rangesCount.length;f++)if(t.count>=this.rangesCount[f][0]&&t.count<=this.rangesCount[f][1]){l=new this.$ol.Fill({color:c()(this.colors[f],.7)});break}}o.setProperties({count:t.count}),o.setProperties({incidence:t.incidence}),o.setStyle(new this.$ol.Style({stroke:new this.$ol.Stroke({color:c()("#ba68c8",.1),width:1}),fill:l,text:new this.$ol.Text({text:e.properties.name,font:"12px Calibri,sans-serif",fill:new this.$ol.Fill({color:"#000"}),stroke:new this.$ol.Stroke({color:"#fff",width:4})})}))}else setTimeout((function(){n.updateFeature(e,t)}),1e3)},findFeature:function(e){var t,n=null,r=d(this.features);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(6===e.ibge_id.toString().length){if(o.properties.ibge_id_short===e.ibge_id){n=o;break}}else if(o.properties.ibge_id===e.ibge_id){n=o;break}}}catch(e){r.e(e)}finally{r.f()}return n},update:function(e){e.length>0?this.$emit("select",e[0]):this.$emit("select",null)}}},m=v,y=n(195),component=Object(y.a)(m,(function(){var e=this,t=e._self._c;return t("div",[t("vl-map",{ref:"map",staticStyle:{height:"80vh"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,"data-projection":"EPSG:4326"},on:{pointermove:e.setEventMap}},[t("vl-view",{attrs:{zoom:e.zoom,center:e.center,rotation:e.rotation},on:{"update:center":function(t){e.center=t},"update:rotation":function(t){e.rotation=t}}}),e._v(" "),t("vl-layer-tile",{attrs:{id:"osm"}},[t("vl-source-osm")],1),e._v(" "),t("vl-layer-vector",[t("vl-source-vector",{ref:"mapFeatures",attrs:{features:e.features},on:{"update:features":function(t){e.features=t}}})],1),e._v(" "),t("vl-layer-vector",[t("vl-source-vector",{ref:"featureOverlay",attrs:{features:e.featureOverlay},on:{"update:features":function(t){e.featureOverlay=t}}}),e._v(" "),t("vl-style-box",[t("vl-style-stroke",{attrs:{color:"rgba(255,255,255,0.3)",width:3}}),e._v(" "),t("vl-style-fill",{attrs:{color:"rgba(10, 182, 255, 0.5)"}})],1)],1),e._v(" "),e._t("layer-chart"),e._v(" "),e._t("layer-flow-arrow"),e._v(" "),t("vl-interaction-select",{attrs:{features:e.selectedFeatures},on:{"update:features":[function(t){e.selectedFeatures=t},e.update]},scopedSlots:e._u([{key:"default",fn:function(n){return e._l(n.features,(function(n){return t("vl-overlay",{key:n.id,staticClass:"feature-popup",attrs:{id:n.id,position:e.$olExt.findPointOnSurface(n.geometry),"auto-pan":!0,"auto-pan-animation":{duration:300}}},[t("div",{staticClass:"card text-center shadow-2xl bg-base-100"},[t("div",{staticClass:"card-body"},[t("h2",{staticClass:"card-title"},[e._v(e._s(n.properties.name))]),e._v(" "),t("p",[e._v("\n                "+e._s(n.properties.name)+"\n              ")]),e._v(" "),n.properties.count?t("p",[e._v("\n                Ocorrência: "+e._s(e._f("locateNumber")(n.properties.count))+"\n              ")]):e._e(),e._v(" "),n.properties.incidence?t("p",[e._v("\n                Incidência: "+e._s(e._f("locateNumber")(n.properties.incidence))+"\n              ")]):e._e(),e._v(" "),n.properties.populations?t("p",[e._v("\n                População: "+e._s(e._f("locateNumber")(n.properties.populations))+"\n              ")]):e._e(),e._v(" "),t("div",{staticClass:"justify-center card-actions"},[t("button",{staticClass:"btn btn-outline btn-accent",on:{click:function(t){e.selectedFeatures=e.selectedFeatures.filter((function(e){return e.id!==n.id}))}}},[e._v("\n                  Fechar\n                ")])])])])])}))}}])})],2)],1)}),[],!1,null,null,null);t.default=component.exports},986:function(e,t,n){e.exports=n.p+"img/marker.97db9bf.png"}}]);