(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b770","chunk-4baf","UFUG"],{"+Y5g":function(e,t,l){"use strict";l.r(t);var i=l("UFUG"),a={components:{},model:{event:["confirm","cancel"]},data:function(){return{showSelect:!1,config:{selectionMode:"single",readonly:!1,columns:[{name:"name",label:"标识",width:"200"},{name:"label",label:"名称",width:"200"},{name:"type",label:"数据类型",width:"200"},{name:"description",label:"描述",width:""}],actions:[]},rows:[]}},props:{bindClass:{required:!1},bindName:{required:!1}},methods:{onCurrentChange:function(e){this.tempField=e.name},removeSelectField:function(){this.field.bindName=""},openFieldSelect:function(e){this.tempField="",this.showSelect=!0},onConfirm:function(){this.bindName=null==this.tempField?"":this.tempField,this.$emit("confirm",this.bindName),this.showSelect=!1},onCancel:function(){this.showSelect=!1}},mounted:function(){var e=this;null!=this.bindClass&&""!=this.bindClass?i.default.getClass(this.bindClass).then(function(t){e.rows=t.data.properties}):this.rows=[]}},n=l("KHd+"),s=Object(n.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-form-item",{attrs:{label:"关联字段"}},[l("el-col",{staticStyle:{width:"calc(100% - 32px)"},attrs:{span:24}},[null==e.bindName||""==e.bindName?l("el-input",{attrs:{readonly:""}}):e._e(),e._v(" "),null!=e.bindName&&""!=e.bindName?l("el-tag",{key:"bindName",attrs:{closable:""},on:{close:e.removeSelectField}},[e._v("\n        "+e._s(e.bindName)+"\n      ")]):e._e()],1),e._v(" "),l("el-button",{staticClass:"inputBtn",attrs:{type:"primary",plain:"",size:"mini",icon:"iconfont icontable"},on:{click:e.openFieldSelect}})],1),e._v(" "),e.showSelect?l("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"字段选择",visible:e.showSelect,top:"8vh"},on:{"update:visible":function(t){e.showSelect=t}}},[l("itsnow-list",{attrs:{config:e.config},on:{current:e.onCurrentChange},model:{value:e.rows,callback:function(t){e.rows=t},expression:"rows"}}),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:e.onConfirm}},[e._v("确 定")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.onCancel}},[e._v("取 消")])],1)],1):e._e()],1)},[],!1,null,null,null);t.default=s.exports},CTP1:function(e,t,l){"use strict";l.r(t);var i={components:{fieldSelect:l("+Y5g").default},data:function(){return{activeNames:["expand"],showSelect:!1}},props:{field:{type:Object},bindClass:{type:String}},methods:{confirmField:function(e){null!=e&&""!=e&&(this.field.bindName=e)},addOption:function(){this.field.properties.options.push({value:"",label:""})}}},a=l("KHd+"),n=Object(a.a)(i,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-row",[l("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[l("el-collapse-item",{attrs:{title:"显示",name:"expand"}},[l("el-form",{staticClass:"list_form",attrs:{"label-width":"60px"}},[l("el-form-item",{attrs:{label:"名称"}},[l("el-input",{model:{value:e.field.name,callback:function(t){e.$set(e.field,"name",t)},expression:"field.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"显示名"}},[l("el-input",{model:{value:e.field.label,callback:function(t){e.$set(e.field,"label",t)},expression:"field.label"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"宽度"}},[l("el-radio-group",{model:{value:e.field.width,callback:function(t){e.$set(e.field,"width",t)},expression:"field.width"}},[l("el-radio",{attrs:{label:6}},[e._v("1/4")]),e._v(" "),l("el-radio",{attrs:{label:12}},[e._v("1/2")]),e._v(" "),l("el-radio",{attrs:{label:18}},[e._v("3/4")]),e._v(" "),l("el-radio",{attrs:{label:24}},[e._v("1")])],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"只读"}},[l("el-switch",{model:{value:e.field.readonly,callback:function(t){e.$set(e.field,"readonly",t)},expression:"field.readonly"}})],1)],1)],1),e._v(" "),l("el-collapse-item",{attrs:{title:"数据",name:"expand"}},[l("el-form",{staticClass:"list_form",attrs:{"label-width":"60px"}},[l("field-select",{attrs:{bindClass:e.bindClass,bindName:e.field.bindName},on:{confirm:e.confirmField}}),e._v(" "),l("el-form-item",{attrs:{label:"格式"}},[l("el-radio-group",{model:{value:e.field.properties.timeType,callback:function(t){e.$set(e.field.properties,"timeType",t)},expression:"field.properties.timeType"}},[l("el-radio",{attrs:{label:"date"}},[e._v("日期")]),e._v(" "),l("el-radio",{attrs:{label:"datetime"}},[e._v("日期+时间")])],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"必填"}},[l("el-switch",{model:{value:e.field.require,callback:function(t){e.$set(e.field,"require",t)},expression:"field.require"}})],1)],1)],1)],1)],1)},[],!1,null,null,null);t.default=n.exports},UFUG:function(e,t,l){"use strict";l.r(t);var i=l("v0Ws");t.default={queryClasses:function(e,t,l,a,n){var s={pageNo:a,pageSize:n||20};return Object(i.c)({url:"/api/v2/classes",method:"get",params:s})},getClass:function(e){var t={name:e,inherited:!0};return Object(i.c)({url:"/api/v2/classes/"+e,method:"get",params:t})}}}}]);