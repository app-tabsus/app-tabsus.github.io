(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1028:function(t,e,r){"use strict";r.r(e);r(93),r(26),r(17),r(68),r(184),r(87),r(45),r(110),r(164),r(198),r(86);var o=r(8);function n(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,f=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){f=!0,n=t},f:function(){try{l||null==r.return||r.return()}finally{if(f)throw n}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var l={name:"BarChartSihDataset",mixins:[r(804).a],props:{title:{type:String,default:""},value:{type:String,default:""},desc:{type:String,default:""},button:{type:String,default:"Mais"},datasets:{type:Array,required:!0},locationName:{type:String,default:""},palette:{type:String,default:"field"}},data:function(){return{series:[],options:{chart:{type:"bar",height:320,stacked:!0},theme:{mode:this.$store.state.modeChart},plotOptions:{bar:{borderRadius:5,barHeight:"70%",horizontal:!0,dataLabels:{position:"bottom"}}},dataLabels:{enabled:!0,offsetX:40,style:{fontSize:"12px",colors:["#2C272E"]},formatter:function(t){if(void 0!==t)return t.toLocaleString("pt-BR")},background:{enabled:!0,foreColor:"#fff",padding:4,borderRadius:10,borderWidth:1,borderColor:"#fff",opacity:.5,dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}}},colors:o.a.palette[this.palette],stroke:{width:1,colors:["#fff"]},title:{text:"".concat(this.title," ").concat(this.locationName),align:"center",floating:!0},xaxis:{categories:[],labels:{formatter:function(t){if(void 0!==t)return t.toLocaleString("pt-BR")}}},yaxis:{title:{text:void 0}},tooltip:{y:{formatter:function(t){if(void 0!==t)return t.toLocaleString("pt-BR")}}},fill:{opacity:1}}}},watch:{deep:!0,immediate:!0,datasets:function(t){this.updateChart()},"$store.state.modeChart":function(){this.$refs.chart.chart.updateOptions({theme:{mode:this.$store.state.modeChart},title:{text:"".concat(this.title," ").concat(this.locationName)}})}},mounted:function(){},methods:{updateChart:function(){var t,e=[],r=[],o=[],c=n(this.datasets);try{for(c.s();!(t=c.n()).done;){var l=t.value;o.push("".concat(l.year,": ").concat(this.locationName)),e.push(l.approved),r.push(l.rejected)}}catch(t){c.e(t)}finally{c.f()}this.$refs.chart.chart.updateOptions({series:[{name:"Aprovados",data:e},{name:"Rejeitados",data:r}],xaxis:{categories:o},title:{text:"".concat(this.title," ").concat(this.locationName)}}),this.$emit("loadend")}}},f=r(195),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card text-center shadow-2xl m-2"},[e("div",{staticClass:"card-body pl-2 pr-1 py-1"},[e("div",{attrs:{id:"chart"}},[e("ApexChart",{ref:"chart",attrs:{type:"bar",height:"320",options:t.options,series:t.series}})],1)])])}),[],!1,null,null,null);e.default=component.exports},804:function(t,e,r){"use strict";r(74),r(110),r(85),r(17),r(196),r(40),r(197);var o=r(14);r(127);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={data:function(){return{}},methods:{update:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;this.$nextTick((function(){void 0!==e.$refs.chart?e.$refs.chart.chart.updateOptions(c({theme:{mode:e.$store.state.modeChart}},t)):r>0&&setTimeout((function(){e.update(t,r-1)}),500)}))}}}}}]);