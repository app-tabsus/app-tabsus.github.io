(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{833:function(e,t,o){var content=o(861);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(141).default)("0dee24ef",content,!0,{sourceMap:!1})},860:function(e,t,o){"use strict";o(833)},861:function(e,t,o){var r=o(140)((function(i){return i[1]}));r.push([e.i,'.ol-popup[data-v-2689c761]{position:absolute;background-color:#fff;box-shadow:0 1px 4px rgba(0,0,0,.2);padding:15px;border-radius:10px;border:1px solid #ccc;bottom:12px;left:-50px;min-width:180px}.ol-popup[data-v-2689c761]:after,.ol-popup[data-v-2689c761]:before{top:100%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}.ol-popup[data-v-2689c761]:after{border-top-color:#fff;border-width:10px;left:48px;margin-left:-10px}.ol-popup[data-v-2689c761]:before{border-top-color:#ccc;border-width:11px;left:48px;margin-left:-11px}.ol-popup-closer[data-v-2689c761]{text-decoration:none;position:absolute;top:2px;right:8px}.ol-popup-closer[data-v-2689c761]:after{content:"✖"}',""]),r.locals={},e.exports=r},870:function(e,t,o){"use strict";o.r(t);o(68);var r={name:"OlPopover",props:{feature:{type:Object,required:!0}},methods:{close:function(e){e.target.blur(),this.$emit("close")}}},n=(o(860),o(195)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"card bg-base-100 shadow-xl ol-popup"},[t("a",{staticClass:"ol-popup-closer",attrs:{id:"popup-closer"},on:{click:e.close}}),e._v(" "),e.feature.properties?t("div",{attrs:{id:"card-body popup-content"}},[e.feature.properties.name?t("h2",{staticClass:"card-title"},[e._v("\n      "+e._s(e.feature.properties.name)+"\n    ")]):e._e(),e._v(" "),e.feature.properties.name?t("p",[e._v("\n      "+e._s(e.feature.properties.name)+"\n    ")]):e._e(),e._v(" "),e.feature.properties.count?t("p",[e._v("\n      Ocorrência: "+e._s(e._f("locateNumber")(e.feature.properties.count))+"\n    ")]):e._e(),e._v(" "),e.feature.properties.incidence?t("p",[e._v("\n      Incidência: "+e._s(e._f("locateNumber")(e.feature.properties.incidence))+"\n    ")]):e._e(),e._v(" "),e.feature.properties.populations?t("p",[e._v("\n      População: "+e._s(e._f("locateNumber")(e.feature.properties.populations))+"\n    ")]):e._e(),e._v(" "),t("div",{staticClass:"card-actions justify-end"},[t("button",{staticClass:"btn btn-xs btn-primary",on:{click:e.close}},[e._v("fechar")])])]):e._e()])}),[],!1,null,"2689c761",null);t.default=component.exports}}]);