(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-efc1"],{CyJK:function(t,e,a){},NVHf:function(t,e,a){"use strict";a.r(e);var i=a("YTpH"),n=a("54jj"),l={components:{VueContext:i.VueContext},data:function(){return{selectedServerAgentList:[],highS:!1,dynamicValidateForm:{domains2:"",domains:[{value:"",compare:""}]},formInline:{user:"",region:""},alarmLog:[],monitorT:[],monitorT2:[{}],link:[],monitorTlinux:[],dialogVisible:!1,top:0,left:0,rules:{name:[{trigger:"blur",required:!0}],label:[{trigger:"blur",required:!0}]}}},mounted:function(){this.alarmLog=n.alarmLog,this.monitorT=n.monitorT,this.monitorTlinux=n.monitorTlinux,this.pageModel.page=n.allData},created:function(){this.pageModel={config:{selectionMode:"single",readonly:!1,columns:[{name:"resourceType",label:"资源类型",width:"100",type:""},{name:"name",label:"模板名称",minwidth:"200",type:"link",router:{url:"/monitor/monitorSetting/monitorTemple/view"}},{label:"管理状态",name:"managementState",type:"template",width:"80px"},{label:"缺省",name:"default",width:"50px",type:""},{name:"souece",label:"插件",minwidth:"100",type:""},{name:"description",label:"描述",minwidth:"150",type:""},{name:"tab",label:"标记",width:"80",type:""},{name:"date",label:"更新时间",minwidth:"160",type:"date"}]},page:[]},this.queryTreeData()},methods:{deletePack:function(){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{customClass:"its_message_box",cancelButtonClass:"el-button--mini",confirmButtonClass:"el-button--mini",cancelButtonText:"取 消",confirmButtonText:"确 定",type:"warning"}).then(function(){t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handleNodeClick:function(t){this.link=t.$treeNodeId,this.addt=null,console.log(t.$treeNodeId)},setCheckedNodes:function(){this.$refs.treeT.setCheckedNodes([{id:1,label:"主机"}])},handleClick:function(t,e){console.log(t,e)},serverAgentHasSelected:function(t){this.selectedServerAgentList=[t]},addT:function(t){this.addt=t}}},o=(a("Y4Qi"),a("KHd+")),s=Object(o.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"app-container ilayout-container"},[a("el-container",{staticClass:"sub"},[a("el-header",[a("el-row",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("新增")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("启用")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("停用")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.deletePack}},[t._v("删除")])],1)],1),t._v(" "),a("el-main",[a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.dialogVisible,title:"监控模板",width:"860px",top:"8vh"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"its_det"},[a("el-row",{staticClass:"its_form_row"},[a("el-form",{attrs:{"label-width":"100px",rules:t.rules}},[a("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"naver"}},[a("el-row",{staticClass:"its_card_body"},[a("itsnow-filter-page-list",{on:{current:t.serverAgentHasSelected},scopedSlots:t._u([{key:"row",fn:function(e){var i=e.row;return["managementState"==e.column.name?a("div",["停用"==i.managementState?a("span",{staticStyle:{color:"red"}},[t._v(t._s(i.managementState))]):t._e(),t._v(" "),"启用"==i.managementState?a("span",{staticStyle:{color:"#00c100"}},[t._v(t._s(i.managementState))]):t._e()]):t._e()]}}]),model:{value:t.pageModel,callback:function(e){t.pageModel=e},expression:"pageModel"}})],1)],1)],1)],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[""!=t.selectedServerAgentList?a("router-link",{attrs:{to:"/monitor/monitorSetting/alarmCheck/ruleLog/add"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("下一步")])],1):t._e(),t._v(" "),""==t.selectedServerAgentList?a("el-button",{attrs:{type:"primary",disabled:""}},[t._v("下一步")]):t._e(),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")])],1)]),t._v(" "),a("itsnow-filter"),t._v(" "),a("div",{staticClass:"its_table",staticStyle:{"padding-top":"0"}},[a("el-table",{ref:"alarmLog",staticStyle:{width:"100%"},attrs:{data:t.alarmLog,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"selection",width:"45"}}),t._v(" "),a("el-table-column",{attrs:{label:"告警名称",prop:"name","min-width":"250px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"/monitor/monitorSetting/alarmCheck/ruleLog/view"}},[a("a",[t._v(t._s(e.row.name))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{filters:[{text:"紧急",value:"1"},{text:"严重",value:"2"},{text:"普通",value:"3"},{text:"警告",value:"4"},{text:"提示",value:"5"}],"filter-method":t.filterTag,label:"告警等级",prop:"level","min-width":"100px","filter-placement":"bottom-end"},scopedSlots:t._u([{key:"default",fn:function(e){return["紧急"==e.row.level?a("el-tag",{attrs:{size:"mini",type:"danger"}},[t._v(t._s(e.row.level))]):t._e(),t._v(" "),"警告"==e.row.level?a("el-tag",{attrs:{size:"mini",type:"warning"}},[t._v(t._s(e.row.level))]):t._e(),t._v(" "),"提示"==e.row.level?a("el-tag",{attrs:{size:"mini",type:"info"}},[t._v(t._s(e.row.level))]):t._e(),t._v(" "),"高级"==e.row.level?a("el-tag",{attrs:{size:"mini",type:"success"}},[t._v(t._s(e.row.level))]):t._e(),t._v(" "),"普通"==e.row.level?a("el-tag",{attrs:{size:"mini"}},[t._v(t._s(e.row.level))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"管理状态",prop:"managementState","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return["启用"==e.row.managementState?a("span",{staticStyle:{color:"#00c100"}},[t._v(t._s(e.row.managementState))]):t._e(),t._v(" "),"停用"==e.row.managementState?a("span",{staticStyle:{color:"red"}},[t._v(t._s(e.row.managementState))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"监控模板",prop:"monitorT","min-width":"200px"}}),t._v(" "),a("el-table-column",{attrs:{label:"更新时间",prop:"date","min-width":"150px"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"停用",placement:"top-start"}},["启用"==e.row.managementState?a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-circle-close"}}):t._e()],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"启用",placement:"top-start"}},["停用"==e.row.managementState?a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-video-play"}}):t._e()],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top-start"}},[a("router-link",{attrs:{to:"/monitor/monitorSetting/alarmCheck/ruleLog/edit"}},["停用"==e.row.managementState?a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-edit"}}):a("el-button",{attrs:{type:"text",size:"mini",disabled:"",icon:"el-icon-edit"}})],1)],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top-start"}},["停用"==e.row.managementState?a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-delete"}}):a("el-button",{attrs:{type:"text",size:"mini",disabled:"",icon:"el-icon-delete"}})],1)]}}])})],1)],1),t._v(" "),a("div",{staticClass:"block its_pagination"},[a("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"page-sizes":[10,25,50,80,100],"page-size":25,total:4,background:"",layout:"total, sizes, prev, pager, next, jumper"}})],1)],1)],1)],1)},[],!1,null,"579a0b9e",null);e.default=s.exports},Y4Qi:function(t,e,a){"use strict";var i=a("CyJK");a.n(i).a}}]);