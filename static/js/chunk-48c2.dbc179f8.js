(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-48c2","chunk-66ca","duqm","chunk-86e6","JMKR"],{"+g5C":function(e,t,l){"use strict";l.r(t);var a=l("JMKR"),i={components:{},model:{event:["confirm","cancel"]},data:function(){return{showSelect:!1,config:{selectionMode:"single",readonly:!1,columns:[{name:"name",label:"标识",width:"200"},{name:"label",label:"名称",width:"200"},{name:"type",label:"数据类型",width:"200"},{name:"description",label:"描述",width:""}],actions:[]},rows:[]}},props:{bindClass:{required:!1},bindName:{required:!1}},methods:{onCurrentChange:function(e){this.tempField=e.name},removeSelectField:function(){this.field.bindName=""},openFieldSelect:function(e){this.tempField="",this.showSelect=!0},onConfirm:function(){this.bindName=null==this.tempField?"":this.tempField,this.$emit("confirm",this.bindName),this.showSelect=!1},onCancel:function(){this.showSelect=!1}},mounted:function(){var e=this;null!=this.bindClass&&""!=this.bindClass?a.default.getClass(this.bindClass).then(function(t){e.rows=t.data.properties}):this.rows=[]}},n=l("KHd+"),s=Object(n.a)(i,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-form-item",{attrs:{label:"关联字段"}},[l("el-col",{staticStyle:{width:"calc(100% - 32px)"},attrs:{span:24}},[null==e.bindName||""==e.bindName?l("el-input",{attrs:{readonly:""}}):e._e(),e._v(" "),null!=e.bindName&&""!=e.bindName?l("el-tag",{key:"bindName",attrs:{closable:""},on:{close:e.removeSelectField}},[e._v("\n        "+e._s(e.bindName)+"\n      ")]):e._e()],1),e._v(" "),l("el-button",{staticClass:"inputBtn",attrs:{type:"primary",plain:"",size:"mini",icon:"iconfont icontable"},on:{click:e.openFieldSelect}})],1),e._v(" "),e.showSelect?l("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"字段选择",visible:e.showSelect,top:"8vh"},on:{"update:visible":function(t){e.showSelect=t}}},[l("itsnow-list",{attrs:{config:e.config},on:{current:e.onCurrentChange},model:{value:e.rows,callback:function(t){e.rows=t},expression:"rows"}}),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:e.onConfirm}},[e._v("确 定")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.onCancel}},[e._v("取 消")])],1)],1):e._e()],1)},[],!1,null,null,null);t.default=s.exports},"6DZA":function(e,t,l){"use strict";l.r(t);var a=l("Kw5r"),i=l("duqm"),n=l("odsL");a.default.component("form-tab-view",i.default),a.default.component("form-tab-setting",n.default),t.default={example:{type:"tab",view:"form-tab-view",editorView:"form-tab-view",setting:"form-tab-setting",resizable:!0,name:"tab",label:"标签页",readonly:!1,require:!1,hidden:!1,width:24,properties:{tabs:[{label:"标签页1",type:"form"}]}}}},JMKR:function(e,t,l){"use strict";l.r(t);var a=l("v0Ws");t.default={queryClasses:function(e,t,l,i,n){var s={pageNo:i,pageSize:n||20};return Object(a.c)({url:"/api/v2/classes",method:"get",params:s})},getClass:function(e){var t={name:e,inherited:!0};return Object(a.c)({url:"/api/v2/classes/"+e,method:"get",params:t})}}},duqm:function(e,t,l){"use strict";l.r(t);var a={props:{field:{required:!1}},watch:{value:function(e){}}},i=l("KHd+"),n=Object(i.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"its_det"},[t("el-tabs",{attrs:{type:"border-card"}},this._l(this.field.properties.tabs,function(e){return t("el-tab-pane",{attrs:{label:e.label}},[t("br")])}),1)],1)},[],!1,null,null,null);t.default=n.exports},oXEE:function(e,t,l){},odsL:function(e,t,l){"use strict";l.r(t);var a={components:{fieldSelect:l("+g5C").default},data:function(){return{activeNames:"expand"}},props:{field:{required:!1}},methods:{addTab:function(){this.field.properties.tabs.push({label:"新增标签页",type:"form"})},removeTab:function(e,t){this.field.properties.tabs.splice(t,1)}}},i=(l("pLx/"),l("KHd+")),n=Object(i.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[l("el-collapse-item",{attrs:{title:"显示",name:"expand"}},[l("el-form",{staticClass:"list_form",attrs:{"label-width":"60px"}},[l("el-form-item",{attrs:{label:"名称"}},[l("el-input",{model:{value:e.field.name,callback:function(t){e.$set(e.field,"name",t)},expression:"field.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"宽度"}},[l("el-radio-group",{model:{value:e.field.width,callback:function(t){e.$set(e.field,"width",t)},expression:"field.width"}},[l("el-radio",{attrs:{label:6}},[e._v("1/4")]),e._v(" "),l("el-radio",{attrs:{label:12}},[e._v("1/2")]),e._v(" "),l("el-radio",{attrs:{label:18}},[e._v("3/4")]),e._v(" "),l("el-radio",{attrs:{label:24}},[e._v("1")])],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"高度"}},[l("el-input-number",{attrs:{size:"mini","controls-position":"right",min:50,step:50},model:{value:e.field.properties.height,callback:function(t){e.$set(e.field.properties,"height",t)},expression:"field.properties.height"}})],1)],1)],1),e._v(" "),l("el-collapse-item",{attrs:{title:"数据",name:"expand"}},[l("el-form",{staticClass:"list_form",attrs:{"label-width":"60px"}},[l("div",{staticStyle:{"padding-left":"3px","border-bottom":"1px solid #f1f1f1"}},[l("el-button",{attrs:{size:"mini",type:"text"},on:{click:e.addTab}},[e._v("新增")])],1),e._v(" "),l("el-col",{staticClass:"its_table"},[l("el-table",{attrs:{data:e.field.properties.tabs,stripe:""}},[l("el-table-column",{attrs:{prop:"label",label:"名称","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{model:{value:t.row.label,callback:function(l){e.$set(t.row,"label",l)},expression:"scope.row.label"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"type",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.type,callback:function(l){e.$set(t.row,"type",l)},expression:"scope.row.type"}},[l("el-option",{key:"form",attrs:{label:"表单",value:"form"}}),e._v(" "),l("el-option",{key:"custom",attrs:{label:"自定义",value:"custom"}})],1)]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"操作",fixed:"right",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{icon:"el-icon-delete",type:"text"},on:{click:function(l){return e.removeTab(t.row,t.$index)}}})]}}])})],1)],1)],1)],1)],1)},[],!1,null,null,null);t.default=n.exports},"pLx/":function(e,t,l){"use strict";var a=l("oXEE");l.n(a).a}}]);