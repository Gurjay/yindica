(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6dc8","chunk-75ba","chunk-149c","8pZb"],{"70CH":function(e,t,l){},"8pZb":function(e,t,l){"use strict";l.r(t);var a=l("v0Ws");t.default={queryClasses:function(e,t,l,s,i){var n={pageNo:s,pageSize:i||20};return Object(a.c)({url:"/api/v2/classes",method:"get",params:n})},getClass:function(e){var t={name:e,inherited:!0};return Object(a.c)({url:"/api/v2/classes/"+e,method:"get",params:t})}}},DN7L:function(e,t,l){"use strict";l.r(t);var a=l("t2rG"),s=l.n(a),i={components:{ElForm:l("syjH").a,draggable:s.a},model:{event:["confirm","cancel"]},data:function(){return{typeChoose:["1","2"],classes:[{name:"class1",label:"元类型1"},{name:"class2",label:"元类型2"}],list1:[{label:"字段1",name:1},{label:"字段2",name:2},{label:"字段3",name:3},{label:"字段4",name:4}],list2:[{label:"字段5",name:5},{label:"字段6",name:6},{label:"字段7",name:7}]}},props:{show:{type:Boolean}},methods:{onConfirm:function(e){this.$emit("confirm",e)},onCancel:function(e){this.$emit("cancel")}}},n=(l("L5Dx"),l("KHd+")),o=Object(n.a)(i,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"类型选择",visible:e.show,top:"8vh"},on:{"update:visible":function(t){e.show=t}}},[l("el-row",{staticClass:"its_dialogBody"},[l("el-collapse",{staticClass:"its_collapse",model:{value:e.typeChoose,callback:function(t){e.typeChoose=t},expression:"typeChoose"}},[l("div",{staticClass:"its_det sub"},[l("el-row",{staticClass:"its_form_row"},[l("el-form",{attrs:{"label-width":"100px",rules:e.rules}},[l("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[l("el-card",{staticClass:"box-card",attrs:{shadow:"naver"}},[l("el-collapse-item",{attrs:{title:"选择类型",name:"1"}},[l("div",{staticClass:"clearfix its_card_header"}),e._v(" "),l("el-row",{staticClass:"its_card_body"},[l("div",{staticClass:"its_table"},[l("el-table",{attrs:{"highlight-current-row":"",data:e.classes,border:""}},[l("el-table-column",{attrs:{prop:"name",label:"标识"}}),e._v(" "),l("el-table-column",{attrs:{prop:"label",label:"名称"}})],1)],1)])],1)],1)],1)],1)],1)],1)])],1),e._v(" "),l("el-row",{attrs:{span:24}},[l("el-col",{attrs:{span:4}},[l("label",[e._v("显示列")])]),e._v(" "),l("el-col",{staticStyle:{background:"#e5e9f2","min-height":"200px",outline:"1px dashed"},attrs:{span:10}},[l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v("隐藏")])]),e._v(" "),l("draggable",{attrs:{list:e.list1,group:"people"}},e._l(e.list1,function(t,a){return l("li",{key:a,staticStyle:{background:"#e5e9f2","min-height":"30px",outline:"1px dashed"},attrs:{name:t.name}},[e._v(e._s(t.label)+"\n            ")])}),0)],1)],1),e._v(" "),l("el-col",{staticStyle:{background:"#e5e9f2","min-height":"200px",outline:"1px dashed"},attrs:{span:10}},[l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v("显示")])]),e._v(" "),l("draggable",{attrs:{list:e.list2,group:"people"}},e._l(e.list2,function(t,a){return l("li",{key:a,staticStyle:{background:"#e5e9f2","min-height":"30px",outline:"1px dashed"},attrs:{name:t.name}},[e._v(e._s(t.label)+"\n            ")])}),0)],1)],1)],1),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:e.onConfirm}},[e._v("确 定")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.onCancel}},[e._v("取 消")])],1)],1)},[],!1,null,null,null);t.default=o.exports},L5Dx:function(e,t,l){"use strict";var a=l("70CH");l.n(a).a},UPHN:function(e,t,l){"use strict";l.r(t);var a=l("8pZb"),s={components:{},model:{event:["confirm","cancel"]},data:function(){return{showSelect:!1,config:{selectionMode:"single",readonly:!1,columns:[{name:"name",label:"标识",width:"200"},{name:"label",label:"名称",width:"200"},{name:"type",label:"数据类型",width:"200"},{name:"description",label:"描述",width:""}],actions:[]},rows:[]}},props:{bindClass:{required:!1},bindName:{required:!1}},methods:{onCurrentChange:function(e){this.tempField=e.name},removeSelectField:function(){this.field.bindName=""},openFieldSelect:function(e){this.tempField="",this.showSelect=!0},onConfirm:function(){this.bindName=null==this.tempField?"":this.tempField,this.$emit("confirm",this.bindName),this.showSelect=!1},onCancel:function(){this.showSelect=!1}},mounted:function(){var e=this;null!=this.bindClass&&""!=this.bindClass?a.default.getClass(this.bindClass).then(function(t){e.rows=t.data.properties}):this.rows=[]}},i=l("KHd+"),n=Object(i.a)(s,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-form-item",{attrs:{label:"关联字段"}},[l("el-col",{staticStyle:{width:"calc(100% - 32px)"},attrs:{span:24}},[null==e.bindName||""==e.bindName?l("el-input",{attrs:{readonly:""}}):e._e(),e._v(" "),null!=e.bindName&&""!=e.bindName?l("el-tag",{key:"bindName",attrs:{closable:""},on:{close:e.removeSelectField}},[e._v("\n        "+e._s(e.bindName)+"\n      ")]):e._e()],1),e._v(" "),l("el-button",{staticClass:"inputBtn",attrs:{type:"primary",plain:"",size:"mini",icon:"iconfont icontable"},on:{click:e.openFieldSelect}})],1),e._v(" "),e.showSelect?l("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"字段选择",visible:e.showSelect,top:"8vh"},on:{"update:visible":function(t){e.showSelect=t}}},[l("itsnow-list",{attrs:{config:e.config},on:{current:e.onCurrentChange},model:{value:e.rows,callback:function(t){e.rows=t},expression:"rows"}}),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:e.onConfirm}},[e._v("确 定")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.onCancel}},[e._v("取 消")])],1)],1):e._e()],1)},[],!1,null,null,null);t.default=n.exports},iThX:function(e,t,l){"use strict";l.r(t);var a=l("Lgs+"),s=l("DN7L"),i=l("UPHN"),n={components:{ElRow:a.a,typeSelect:s.default,fieldSelect:i.default},data:function(){return{selectClass:{name:"type",label:"元类型1"},activeNames:"expand",showSelect:!1}},props:{field:{required:!1}},methods:{addColumn:function(){this.field.properties.columns.push({name:"col1",label:"新增列",width:100})},removeColumn:function(e,t){this.field.properties.columns.splice(t,1)},openClassSelect:function(){this.showSelect=!0},closeClassSelect:function(){this.showSelect=!1},removeSelectClass:function(){this.selectClass=null}}},o=l("KHd+"),r=Object(o.a)(n,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-row",[l("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[l("el-collapse-item",{attrs:{title:"显示",name:"expand"}},[l("el-form",{staticClass:"list_form",attrs:{"label-width":"60px"}},[l("el-form-item",{attrs:{label:"名称"}},[l("el-input",{model:{value:e.field.name,callback:function(t){e.$set(e.field,"name",t)},expression:"field.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"宽度"}},[l("el-radio-group",{model:{value:e.field.width,callback:function(t){e.$set(e.field,"width",t)},expression:"field.width"}},[l("el-radio",{attrs:{label:6}},[e._v("1/4")]),e._v(" "),l("el-radio",{attrs:{label:12}},[e._v("1/2")]),e._v(" "),l("el-radio",{attrs:{label:18}},[e._v("3/4")]),e._v(" "),l("el-radio",{attrs:{label:24}},[e._v("1")])],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"高度"}},[l("el-input-number",{attrs:{size:"mini","controls-position":"right",min:50,step:50},model:{value:e.field.properties.height,callback:function(t){e.$set(e.field.properties,"height",t)},expression:"field.properties.height"}})],1)],1)],1),e._v(" "),l("el-collapse-item",{attrs:{title:"数据",name:"expand"}},[l("el-form",{staticClass:"list_form",attrs:{"label-width":"60px"}},[l("el-form-item",{attrs:{label:"关联"}},[l("el-col",{staticStyle:{width:"calc(100% - 32px)"},attrs:{span:24}},[null==e.selectClass?l("el-input",{attrs:{readonly:""}}):e._e(),e._v(" "),null!=e.selectClass?l("el-tag",{key:e.selectClass.label,staticStyle:{width:"100%"},attrs:{closable:""},on:{close:e.removeSelectClass}},[e._v("\n              "+e._s(e.selectClass.label)+"\n            ")]):e._e()],1),e._v(" "),l("el-button",{staticClass:"inputBtn",attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-edit-outline"},on:{click:e.openClassSelect}})],1),e._v(" "),l("div",{staticStyle:{"padding-left":"3px","border-bottom":"1px solid #f1f1f1"}},[l("el-button",{attrs:{size:"mini",type:"text"},on:{click:e.addColumn}},[e._v("新增")])],1),e._v(" "),l("div",{staticClass:"its_table"},[l("el-table",{attrs:{data:e.field.properties.columns,stripe:""}},[l("el-table-column",{attrs:{prop:"name",label:"标识","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{model:{value:t.row.name,callback:function(l){e.$set(t.row,"name",l)},expression:"scope.row.name"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"label",label:"名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{model:{value:t.row.label,callback:function(l){e.$set(t.row,"label",l)},expression:"scope.row.label"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"操作",fixed:"right",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{icon:"el-icon-delete",type:"text"},on:{click:function(l){return e.removeColumn(t.row,t.$index)}}})]}}])})],1)],1)],1)],1)],1),e._v(" "),l("el-row",[l("type-select",{attrs:{show:e.showSelect},on:{cancel:e.closeClassSelect,confirm:e.closeClassSelect}})],1)],1)},[],!1,null,null,null);t.default=r.exports}}]);