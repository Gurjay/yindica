(window.webpackJsonp=window.webpackJsonp||[]).push([["9VXy"],{"9VXy":function(t,e,l){"use strict";l.r(e);var o=l("Lgs+"),a={data:function(){return{objects:[{name:"name1",label:"aaaa",width:300},{name:"name2",label:"bbbb",width:300}],showAdd:!1,showSelect:!1}},components:{ElCol:l("H4I7").a,ElRow:o.a},props:{field:{required:!1}},watch:{value:function(t){}},methods:{removeColumn:function(t,e){this.field.properties.columns.splice(e,1)},openClassSelect:function(){}}},n=l("KHd+"),s=Object(n.a)(a,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-col",{staticClass:"form_tool"},[l("el-col",{staticClass:"form_tool_bar"},[l("el-button",{attrs:{size:"mini",type:"text",plain:""},on:{click:function(e){t.showAdd=!0}}},[t._v("新增")]),t._v(" "),l("el-button",{attrs:{size:"mini",type:"text",plain:""},on:{click:function(e){t.showSelect=!0}}},[t._v("选择")])],1),t._v(" "),l("div",{staticClass:"its_table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.field.data,border:"",stripe:""}},t._l(t.field.properties.columns,function(t){return l("el-table-column",{attrs:{prop:t.name,label:t.label,"min-width":t.width,align:"left"}})}),1),t._v(" "),l("el-dialog",{attrs:{title:"选择",visible:t.showSelect},on:{"update:visible":function(e){t.showSelect=e}}},[l("el-form",[l("el-row",[l("el-col",{attrs:{span:23}},[l("el-table",{attrs:{data:t.objects,border:""}},[l("el-table-column",{attrs:{prop:"name",label:"标识"}}),t._v(" "),l("el-table-column",{attrs:{prop:"label",label:"名称"}})],1)],1)],1)],1),t._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showSelect=!1}}},[t._v("确 定")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showSelect=!1}}},[t._v("取 消")])],1)],1)],1)],1)},[],!1,null,null,null);e.default=s.exports}}]);