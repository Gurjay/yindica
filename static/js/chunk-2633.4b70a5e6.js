(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2633","Ldxb"],{FjD5:function(e,t,l){},GtKI:function(e,t,l){"use strict";l.r(t);var a={components:{viewPad:l("Ldxb").default},props:{field:{required:!1,type:Object}},watch:{value:function(e){}},methods:{onChoose:function(e){var t=e.oldIndex,l=this.field.children[t];this.$emit("selectItem",l)},removeItem:function(e){for(var t=-1,l=0;l<this.field.children.length;l++)if(this.field.children[l].name=e.name){t=l;break}this.field.children.splice(t,1)}},computed:{}},i=(l("jFrN"),l("KHd+")),r=Object(i.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-collapse",{staticClass:"its_collapse",model:{value:e.field.properties.defaultExpand,callback:function(t){e.$set(e.field.properties,"defaultExpand",t)},expression:"field.properties.defaultExpand"}},[l("div",{staticClass:"its_det"},[l("el-row",{staticClass:"its_form_row"},[l("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[l("el-card",{staticClass:"box-card",attrs:{shadow:"naver"}},[l("el-collapse-item",{attrs:{title:e.field.properties.title,name:e.field.properties.expand}},[l("div",{staticClass:"clearfix its_card_header"}),e._v(" "),l("div",{staticClass:"its_card_body its_form_componet"},e._l(e.field.children,function(t,a){return l("el-col",{key:a,attrs:{span:t.width}},[l("viewPad",{tag:"component",attrs:{label:t.label,value:t.label,field:t},on:{removeItem:e.removeItem}})],1)}),1)])],1)],1)],1)],1)])},[],!1,null,null,null);t.default=r.exports},Ldxb:function(e,t,l){"use strict";l.r(t);var a={data:function(){return{currentValue:""}},model:{event:["selectItem","removeItem"]},props:{field:{required:!1,type:Object},value:{}},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("update:value",e)}},components:{}},i=l("KHd+"),r=Object(i.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-row",{staticStyle:{background:"#fff"}},[l("el-col",{attrs:{span:24}},[l(e.field.view,{tag:"component",attrs:{field:e.field},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}})],1)],1)},[],!1,null,null,null);t.default=r.exports},jFrN:function(e,t,l){"use strict";var a=l("FjD5");l.n(a).a}}]);