(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-bb37","3K/k"],{"+e5s":function(e,t,n){},"3K/k":function(e,t,n){"use strict";n.r(t);var o=n("v0Ws");t.default={queryForms:function(e,t,n){var a={name:e,pageNo:t,pageSize:n};return Object(o.f)({url:"api/v2/forms",method:"get",params:a})},getForm:function(e){return Object(o.f)({url:"api/v2/forms/"+e,method:"get"})},createForm:function(e){return Object(o.f)({url:"api/v2/forms",method:"post",data:e})},updateForm:function(e,t){return Object(o.f)({url:"api/v2/forms/"+e,method:"put",data:t})},deleteForm:function(e){return Object(o.f)({url:"api/v2/forms/"+e,method:"delete"})}}},A4Ta:function(e,t,n){"use strict";var o=n("+e5s");n.n(o).a},"OmO/":function(e,t,n){"use strict";n.r(t);var o=n("3K/k"),a=n("Hqiv"),i={data:function(){return{checked:!0,checked2:!1,listModel:{config:{selectionMode:"selection",readonly:!1,columns:[{name:"id",label:"表单标识",minwidth:"200"},{name:"name",label:"表单名称",minwidth:"200",type:"link",router:{url:"#"}},{name:"father",label:"数据表",minwidth:"200",type:"link",router:{url:"#"}},{name:"onceForm",label:"单表单流程",minwidth:"100",type:"template"},{name:"desc",label:"描述",minwidth:"350"},{name:"flag",label:"标记",minwidth:"100"},{name:"date",label:"更新时间",minwidth:"160",type:"date"}],actionWidth:"70",actions:[{name:"edit",icon:"el-icon-edit"},{name:"delete",icon:"el-icon-delete",validation:function(e){if("自定义"==e.flag)return!0}}],pageSize:10,total:0},page:[]}}},created:function(){this.listModel.page=a.workflow_form_All},mounted:function(){},methods:{loadForms:function(e,t){var n=this;o.default.queryForms("",e,t).then(function(o){var a=n.listModel.config;a.pageSize=t,a.pageIndex=e,a.total=o.data.total;var i={config:a,page:o.data.rows};n.listModel=i})},rowAction:function(e,t,n){"delete"==e?this.removeForm(t,n):"edit"==e&&this.$router.push({name:"EditForm",params:{id:n.id}})},removeForm:function(e,t){var n=this;this.$confirm("即将删除此表单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.default.deleteForm(t.id).then(function(e){n.$message({message:"删除成功",type:"success"}),n.loadForms(1,20)})}).catch(function(){n.$message.error("删除失败")})}}},r=(n("A4Ta"),n("KHd+")),l=Object(r.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"app-container ilayout-container"},[n("el-container",[n("el-header",[n("router-link",{attrs:{to:"/setting/devSetting/devSettingForm/add"}},[n("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("新增")])],1),e._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("删除")])],1),e._v(" "),n("el-main",[n("itsnow-filter-page-list",{on:{rowAction:e.rowAction,loadPage:e.loadForms},scopedSlots:e._u([{key:"row",fn:function(t){var o=t.row;return["onceForm"==t.column.name?n("div",["true"==o.onceForm?n("el-checkbox",{attrs:{disabled:""},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}):e._e(),e._v(" "),"false"==o.onceForm?n("el-checkbox",{attrs:{disabled:""},model:{value:e.checked2,callback:function(t){e.checked2=t},expression:"checked2"}}):e._e()],1):e._e()]}}]),model:{value:e.listModel,callback:function(t){e.listModel=t},expression:"listModel"}})],1)],1)],1)},[],!1,null,"3c6a76f4",null);t.default=l.exports}}]);