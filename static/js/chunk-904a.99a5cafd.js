(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-904a"],{"3keN":function(t,e,a){"use strict";a.r(e);var l=a("Hqiv"),i=a("Smy8");var o={data:function(){return function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}({getZero:!1,workflow_Classify:"1",usersDialogVisible:!1,onceFormCheck:!1,dialogVisible2:!1,dialogVisible3:!1,dialogVisible4:!1,classify:1,upType:"1",workflow_Status:[],workStatusAdd:!1,dataTable:!1,addRoleModle:!1,workflow_Status_All:[],workflow_form_All:[],devSettingData:[],workflow_form_All_radio:"",dataRole:[],activeNamesTest:["1","2","3","4","5","6"],rules:{serial:[{trigger:"blur",required:!0}],name:[{trigger:"blur",required:!0}],form:[{trigger:"blur",required:!0}],reportUser:[{trigger:"blur",required:!0}],class:[{trigger:"blur",required:!0}],rule:[{trigger:"blur",required:!0}]},userEditPageModel:{config:{selectionMode:"selection",readonly:!1,columns:[{name:"name",label:"规则标识",minwidth:"200"},{name:"label",label:"规则名称",minwidth:"200",type:"link",router:{url:"#"}},{name:"desc",label:"描述",minwidth:"150"},{name:"tab",label:"标记",minwidth:"100"},{name:"date",label:"更新时间",minwidth:"160"}]},page:[{name:"smartRulesPerson",label:"智能用户规则A",desc:"这里是一段规则的描述",role:"智能用户规则A",tab:"系统",date:"2019-09-30 17:05:31"}]},highS:!1,dynamicValidateForm:{domains2:"",domains:[{value:"",compare:""}]},formInline:{user:"",region:""},dataAccound:[]},"dataAccound",[])},mounted:function(){this.dataAccound=i.account,this.dataRole=i.role,this.dataUserGroup=i.userGroup,this.workflowData=l.workflowData,this.workflow_Status=l.workflowStatus,this.workflow_Status_All=l.workflowStatus,this.workflow_form_All=l.workflow_form_All,this.devSettingData=i.devSettingData},methods:{addData:function(){this.workflow_Status.unshift({name:""})},deleteRow:function(t,e){e.splice(t,1)}}},s=(a("cxCc"),a("M+IS"),a("KHd+")),r=Object(s.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"app-container ilayout-container"},[a("el-container",{staticClass:"cmdb_details sub"},[a("el-header",{},[a("div",{staticClass:"its_button"},[a("router-link",{attrs:{to:"/customerService/customerServiceSetting/publicAccounts"}},[a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("返回")])],1),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("上一条")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("下一条")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("保存")])],1)]),t._v(" "),a("el-main",[a("div",{staticClass:"its_tabs"},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"基本信息"}},[a("el-collapse",{staticClass:"its_collapse",model:{value:t.activeNamesTest,callback:function(e){t.activeNamesTest=e},expression:"activeNamesTest"}},[a("div",{staticClass:"its_det"},[a("el-row",{staticClass:"its_form_row"},[a("el-form",{attrs:{"label-width":"100px",rules:t.rules}},[a("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"naver"}},[a("el-collapse-item",{attrs:{title:"基本信息",name:"1"}},[a("div",{staticClass:"clearfix its_card_header"}),t._v(" "),a("el-row",{staticClass:"its_card_body"},[a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{label:"工作流标识",prop:"name"}},[a("itsnow-text")],1),t._v(" "),a("el-form-item",{attrs:{label:"工作流名称",prop:"label"}},[a("itsnow-text")],1),t._v(" "),a("el-form-item",{attrs:{label:"流水号前缀",prop:"serial"}},[a("itsnow-text")],1),t._v(" "),a("el-form-item",{attrs:{label:"单表单流程"}},[a("el-checkbox",{model:{value:t.onceFormCheck,callback:function(e){t.onceFormCheck=e},expression:"onceFormCheck"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{label:"标记"}},[a("itsnow-text",{attrs:{value:"自定义",readonly:""}})],1),t._v(" "),a("el-form-item",{attrs:{label:"运维分类"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.workflow_Classify,callback:function(e){t.workflow_Classify=e},expression:"workflow_Classify"}},[a("el-option",{attrs:{label:"请求",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"故障",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"问题",value:"3"}}),t._v(" "),a("el-option",{attrs:{label:"变更",value:"4"}}),t._v(" "),a("el-option",{attrs:{label:"发布",value:"5"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"流水号补零"}},[a("el-col",{staticStyle:{width:"30px"},attrs:{span:24}},[a("el-checkbox",{model:{value:t.getZero,callback:function(e){t.getZero=e},expression:"getZero"}})],1),t._v(" "),a("el-col",{staticStyle:{width:"calc(100% - 30px)"},attrs:{span:24}},[1==t.getZero?a("el-input",{attrs:{placeholder:"请输入位数"}}):t._e()],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:10,offset:1}},[1==t.onceFormCheck?a("el-form-item",{attrs:{label:"表单",prop:"form"}},[a("el-col",{staticStyle:{width:"calc(100% - 32px)"},attrs:{span:24}},[a("el-input",{attrs:{readonly:""}})],1),t._v(" "),a("el-button",{staticClass:"inputBtn",attrs:{type:"primary",plain:"",size:"mini",icon:"iconfont icontable"},on:{click:function(e){t.dataTable=!0}}})],1):t._e(),t._v(" "),0==t.onceFormCheck?a("el-form-item",{attrs:{label:"表单",prop:"form"}},[a("el-col",{staticStyle:{width:"calc(100% - 32px)"},attrs:{span:24}},[a("el-input",{attrs:{readonly:""}})],1),t._v(" "),a("el-button",{staticClass:"inputBtn",attrs:{type:"primary",plain:"",size:"mini",icon:"iconfont icontable"},on:{click:function(e){t.dataTable=!0}}})],1):t._e()],1),t._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{label:"发起人"}},[a("el-col",{staticStyle:{width:"calc(100% - 32px)"},attrs:{span:24}},[a("el-input",{attrs:{value:""}})],1),t._v(" "),a("el-button",{staticClass:"inputBtn",attrs:{type:"primary",plain:"",size:"mini",icon:"iconfont icontable"},on:{click:function(e){t.addRoleModle=!0}}})],1),t._v(" "),a("el-form-item",{attrs:{label:"处理人"}},[a("el-col",{staticStyle:{width:"calc(100% - 32px)"},attrs:{span:24}},[a("el-input",{attrs:{value:""}})],1),t._v(" "),a("el-button",{staticClass:"inputBtn",attrs:{type:"primary",plain:"",size:"mini",icon:"iconfont icontable"},on:{click:function(e){t.addRoleModle=!0}}})],1)],1),t._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{label:"关注人"}},[a("el-col",{staticStyle:{width:"calc(100% - 32px)"},attrs:{span:24}},[a("el-input",{attrs:{value:""}})],1),t._v(" "),a("el-button",{staticClass:"inputBtn",attrs:{type:"primary",plain:"",size:"mini",icon:"iconfont icontable"},on:{click:function(e){t.addRoleModle=!0}}})],1),t._v(" "),a("el-form-item",{attrs:{label:"提交模式"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.upType,callback:function(e){t.upType=e},expression:"upType"}},[a("el-option",{attrs:{label:"弹出",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"同层",value:"2"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:21,offset:1}},[a("el-form-item",{attrs:{label:"描述",prop:"desc"}},[a("itsnow-textarea")],1)],1)],1)],1)],1)],1)],1)],1)],1)])],1),t._v(" "),a("el-tab-pane",{staticStyle:{padding:"0px"},attrs:{label:"设计器"}},[a("el-row",{staticClass:"el-main",staticStyle:{"min-height":"calc(100vh - 220px)",padding:"0px"}},[a("itsnow-workflow")],1)],1)],1)],1),t._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.addRoleModle,title:"流程角色",width:"850px",top:"8vh"},on:{"update:visible":function(e){t.addRoleModle=e}}},[a("div",{staticClass:"its_det"},[a("el-row",[a("itsnow-filter"),t._v(" "),a("itsnow-list",{staticClass:"sub_raido_hidelabel",attrs:{config:t.userEditPageModel.config},model:{value:t.userEditPageModel.page,callback:function(e){t.$set(t.userEditPageModel,"page",e)},expression:"userEditPageModel.page"}}),t._v(" "),a("div",{staticClass:"block its_pagination"},[a("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"page-sizes":[10,25,50,80,100],"page-size":25,total:4,background:"",layout:"total, sizes, prev, pager, next, jumper"}})],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addRoleModle=!1}}},[t._v("确 定")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addRoleModle=!1}}},[t._v("取 消")])],1)]),t._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"数据表",visible:t.dataTable,width:"860px"},on:{"update:visible":function(e){t.dataTable=e}}},[a("itsnow-filter"),t._v(" "),a("div",{staticClass:"its_table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.devSettingData,"highlight-current-row":"","row-key":"id","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"},border:""}},[a("el-table-column",{attrs:{width:"85"}},[a("el-radio",{model:{value:t.workflow_form_All_radio,callback:function(e){t.workflow_form_All_radio=e},expression:"workflow_form_All_radio"}})],1),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"数据表标识","min-width":"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"数据表名称","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"#"}},[a("a",[t._v(t._s(e.row.name))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"describe",label:"描述","min-width":"350"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tab",label:"标记",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"date",label:"更新时间","min-width":"160"}})],1)],1),t._v(" "),a("div",{staticClass:"block its_pagination"},[a("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"page-sizes":[10,25,50,80,100],"page-size":25,total:4,background:"",layout:"total, sizes, prev, pager, next, jumper"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataTable=!1}}},[t._v("确 定")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataTable=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"表单",visible:t.dataTable,width:"860px"},on:{"update:visible":function(e){t.dataTable=e}}},[a("itsnow-filter"),t._v(" "),a("div",{staticClass:"its_table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"highlight-current-row":"",data:t.workflow_form_All,stripe:"",border:""}},[a("el-table-column",{attrs:{width:"45",align:"center"}},[a("el-radio",{model:{value:t.workflow_form_All_radio,callback:function(e){t.workflow_form_All_radio=e},expression:"workflow_form_All_radio"}})],1),t._v(" "),a("el-table-column",{attrs:{prop:"id",label:"表单标识","min-width":"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"表单名称","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"father",label:"分类","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"desc",label:"描述","min-width":"350"}}),t._v(" "),a("el-table-column",{attrs:{prop:"flag",label:"标记","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"date",label:"更新时间","min-width":"160"}})],1)],1),t._v(" "),a("div",{staticClass:"block its_pagination"},[a("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"page-sizes":[10,25,50,80,100],"page-size":25,total:4,background:"",layout:"total, sizes, prev, pager, next, jumper"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataTable=!1}}},[t._v("确 定")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataTable=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.dialogVisible2,title:"账户",width:"940px"},on:{"update:visible":function(e){t.dialogVisible2=e}}},[a("itsnow-filter"),t._v(" "),a("div",{staticClass:"its_table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dataAccound,scripe:"",border:""}},[a("el-table-column",{attrs:{type:"selection",width:"45",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"fullname",label:"昵称","min-width":"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"账户","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"手机",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"locked",label:"状态",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["锁定"==e.row.locked?a("span",{staticStyle:{color:"red"}},[t._v("锁定")]):t._e(),t._v(" "),"解锁"==e.row.locked?a("span",{staticStyle:{color:"#00c100"}},[t._v("解锁")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"user",label:"人员","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updated",label:"更新时间","min-width":"160"}})],1)],1),t._v(" "),a("div",{staticClass:"block its_pagination"},[a("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"page-sizes":[10,25,50,80,100],"page-size":25,total:4,background:"",layout:"total, sizes, prev, pager, next, jumper"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible2=!1}}},[t._v("确 定")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible2=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.dialogVisible3,title:"账户组",width:"750px"},on:{"update:visible":function(e){t.dialogVisible3=e}}},[a("el-row",{staticClass:"its_det"},[a("el-col",{staticClass:"its_card_body"},[a("itsnow-filter"),t._v(" "),a("div",{staticClass:"its_table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dataUserGroup,scripe:"",border:""}},[a("el-table-column",{attrs:{type:"selection",width:"45",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"账户组标识","min-width":"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"label",label:"账户组名称","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",[t._v(t._s(e.row.label))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"description",label:"描述",width:"350"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updated",label:"更新时间","min-width":"160"}})],1)],1),t._v(" "),a("div",{staticClass:"block its_pagination"},[a("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"page-sizes":[10,25,50,80,100],"page-size":25,total:4,background:"",layout:"total, sizes, prev, pager, next, jumper"}})],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible3=!1}}},[t._v("确 定")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible3=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.dialogVisible4,title:"角色",width:"840px"},on:{"update:visible":function(e){t.dialogVisible4=e}}},[a("el-row",{staticClass:"its_det"},[a("el-col",{staticClass:"its_card_body"},[a("itsnow-filter"),t._v(" "),a("div",{staticClass:"its_table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dataRole,scripe:"",border:""}},[a("el-table-column",{attrs:{type:"selection",width:"45",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"角色标识","min-width":"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"label",label:"角色名称","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",[t._v(t._s(e.row.label))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"description",label:"描述",width:"350"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updated",label:"更新时间","min-width":"160"}})],1)],1),t._v(" "),a("div",{staticClass:"block its_pagination"},[a("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"page-sizes":[10,25,50,80,100],"page-size":25,total:4,background:"",layout:"total, sizes, prev, pager, next, jumper"}})],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible4=!1}}},[t._v("确 定")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible4=!1}}},[t._v("取 消")])],1)],1)],1)],1)],1)},[],!1,null,"5714f1d6",null);e.default=r.exports},BX5i:function(t,e,a){},"M+IS":function(t,e,a){"use strict";var l=a("NnA/");a.n(l).a},"NnA/":function(t,e,a){},cxCc:function(t,e,a){"use strict";var l=a("BX5i");a.n(l).a}}]);