(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0434","2PMj","Ldxb","chunk-2b59","AB2E","chunk-2633"],{"0BPm":function(e,t,l){"use strict";var a=l("Gnsn");l.n(a).a},"2PMj":function(e,t,l){"use strict";l.r(t);var a=l("t2rG"),i={model:{event:["selectItem","removeItem"]},props:{field:{required:!1,type:Object}},components:{draggable:l.n(a).a},computed:{},methods:{onItemSelect:function(e){this.$emit("selectItem",e)},removeItem:function(e){this.$emit("removeItem",this.field)}},watch:{value:function(e){}}},r=l("KHd+"),n=Object(r.a)(i,function(){var e=this.$createElement,t=this._self._c||e;return t("el-row",[t("el-col",{attrs:{span:24}},[t(this.field.editorView,{tag:"component",attrs:{field:this.field},on:{selectItem:this.onItemSelect}})],1),this._v(" "),t("el-button",{staticStyle:{padding:"0",position:"absolute",right:"-3px",top:"-3px"},attrs:{type:"danger",size:"mini",icon:"el-icon-close"},on:{click:this.removeItem}})],1)},[],!1,null,null,null);t.default=n.exports},"6dh0":function(e,t,l){"use strict";l.r(t);var a=l("Kw5r"),i=l("GtKI"),r=l("Jhcc"),n=l("AB2E");a.default.component("form-group-view",i.default),a.default.component("form-group-editor",r.default),a.default.component("form-group-setting",n.default),t.default={example:{type:"group",view:"form-group-view",editorView:"form-group-editor",setting:"form-group-setting",resizable:!0,name:"group",label:"组",readonly:!1,require:!1,hidden:!1,width:24,properties:{title:"标题",expand:"expand",defaultExpand:["expand"]},children:[]}}},AB2E:function(e,t,l){"use strict";l.r(t);var a={data:function(){return{activeNames:"expand"}},props:{field:{required:!1}}},i=l("KHd+"),r=Object(i.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[l("el-collapse-item",{attrs:{title:"显示",name:"expand"}},[l("el-form",{staticClass:"list_form",attrs:{"label-width":"60px"}},[l("el-form-item",{attrs:{label:"名称"}},[l("el-input",{model:{value:e.field.name,callback:function(t){e.$set(e.field,"name",t)},expression:"field.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"宽度"}},[l("el-radio-group",{model:{value:e.field.width,callback:function(t){e.$set(e.field,"width",t)},expression:"field.width"}},[l("el-radio",{attrs:{label:6}},[e._v("1/4")]),e._v(" "),l("el-radio",{attrs:{label:12}},[e._v("1/2")]),e._v(" "),l("el-radio",{attrs:{label:18}},[e._v("3/4")]),e._v(" "),l("el-radio",{attrs:{label:24}},[e._v("1")])],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"标题"}},[l("el-input",{attrs:{autosize:""},model:{value:e.field.properties.title,callback:function(t){e.$set(e.field.properties,"title",t)},expression:"field.properties.title"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"默认"}},[l("el-radio-group",{model:{value:e.field.properties.expand,callback:function(t){e.$set(e.field.properties,"expand",t)},expression:"field.properties.expand"}},[l("el-radio",{attrs:{label:"expand"}},[e._v("展开")]),e._v(" "),l("el-radio",{attrs:{label:"none"}},[e._v("收起")])],1)],1)],1)],1)],1)},[],!1,null,null,null);t.default=r.exports},FjD5:function(e,t,l){},Gnsn:function(e,t,l){},GtKI:function(e,t,l){"use strict";l.r(t);var a={components:{viewPad:l("Ldxb").default},props:{field:{required:!1,type:Object}},watch:{value:function(e){}},methods:{onChoose:function(e){var t=e.oldIndex,l=this.field.children[t];this.$emit("selectItem",l)},removeItem:function(e){for(var t=-1,l=0;l<this.field.children.length;l++)if(this.field.children[l].name=e.name){t=l;break}this.field.children.splice(t,1)}},computed:{}},i=(l("jFrN"),l("KHd+")),r=Object(i.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-collapse",{staticClass:"its_collapse",model:{value:e.field.properties.defaultExpand,callback:function(t){e.$set(e.field.properties,"defaultExpand",t)},expression:"field.properties.defaultExpand"}},[l("div",{staticClass:"its_det"},[l("el-row",{staticClass:"its_form_row"},[l("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[l("el-card",{staticClass:"box-card",attrs:{shadow:"naver"}},[l("el-collapse-item",{attrs:{title:e.field.properties.title,name:e.field.properties.expand}},[l("div",{staticClass:"clearfix its_card_header"}),e._v(" "),l("div",{staticClass:"its_card_body its_form_componet"},e._l(e.field.children,function(t,a){return l("el-col",{key:a,attrs:{span:t.width}},[l("viewPad",{tag:"component",attrs:{label:t.label,value:t.label,field:t},on:{removeItem:e.removeItem}})],1)}),1)])],1)],1)],1)],1)])},[],!1,null,null,null);t.default=r.exports},Jhcc:function(e,t,l){"use strict";l.r(t);var a=l("t2rG"),i=l.n(a),r={components:{dragPad:l("2PMj").default,draggable:i.a},props:{field:{required:!1,type:Object}},watch:{value:function(e){}},methods:{onChoose:function(e){var t=e.oldIndex,l=this.field.children[t];this.$emit("selectItem",l)},removeItem:function(e){for(var t=-1,l=0;l<this.field.children.length;l++)if(this.field.children[l].name=e.name){t=l;break}this.field.children.splice(t,1)}},computed:{dragOptions:function(){return{animation:0,ghostClass:"ghost",group:{name:"bbb",put:["layout","item","aaa","bbb"]}}}}},n=(l("0BPm"),l("KHd+")),s=Object(n.a)(r,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-collapse",{staticClass:"its_collapse",model:{value:e.field.properties.defaultExpand,callback:function(t){e.$set(e.field.properties,"defaultExpand",t)},expression:"field.properties.defaultExpand"}},[l("div",{staticClass:"its_det"},[l("el-row",{staticClass:"its_form_row"},[l("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[l("el-card",{staticClass:"box-card",attrs:{shadow:"naver"}},[l("el-collapse-item",{attrs:{title:e.field.properties.title,name:e.field.properties.expand}},[l("div",{staticClass:"clearfix its_card_header"}),e._v(" "),l("el-row",{staticClass:"its_card_body"},[l("draggable",e._b({on:{choose:e.onChoose},model:{value:e.field.children,callback:function(t){e.$set(e.field,"children",t)},expression:"field.children"}},"draggable",e.dragOptions,!1),[l("transition-group",{staticStyle:{"min-height":"50px"},attrs:{type:"transition",name:"flip-list",tag:"div"}},e._l(e.field.children,function(t,a){return l("el-col",{key:a,staticStyle:{outline:"0.5px dashed #aaa",padding:"2px"},attrs:{span:t.width}},[l("dragPad",{tag:"component",attrs:{label:t.label,value:t.label,field:t},on:{removeItem:e.removeItem}})],1)}),1)],1)],1)],1)],1)],1)],1)],1)])},[],!1,null,null,null);t.default=s.exports},Ldxb:function(e,t,l){"use strict";l.r(t);var a={data:function(){return{currentValue:""}},model:{event:["selectItem","removeItem"]},props:{field:{required:!1,type:Object},value:{}},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("update:value",e)}},components:{}},i=l("KHd+"),r=Object(i.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-row",{staticStyle:{background:"#fff"}},[l("el-col",{attrs:{span:24}},[l(e.field.view,{tag:"component",attrs:{field:e.field},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}})],1)],1)},[],!1,null,null,null);t.default=r.exports},jFrN:function(e,t,l){"use strict";var a=l("FjD5");l.n(a).a}}]);