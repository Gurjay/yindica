(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7eee"],{BNaF:function(e,t,a){"use strict";a.r(t);var l=a("YsWD"),o=a("Kw5r"),i=a("e+jF"),n=a.n(i);o.default.use(n.a);var r={components:{GridLayout:n.a.GridLayout,GridItem:n.a.GridItem},data:function(){return{dialogVisible:!1,newX:0,newY:0,layout:[],viewDashboard:!1,highS:!1,dynamicValidateForm:{domains2:"",domains:[{value:"",compare:""}]},formInline:{user:"",region:""},homepage:[],rules:{fileName:[{required:!0,trigger:"blur"}],name:[{required:!0,trigger:"blur"}],label:[{required:!0,trigger:"blur"}],resource:[{required:!0,trigger:"blur"}]}}},mounted:function(){this.homepage=l.homepage,this.layout=l.homeLayout},methods:{deletePack:function(){var e=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{customClass:"its_message_box",cancelButtonClass:"el-button--mini",confirmButtonClass:"el-button--mini",cancelButtonText:"取 消",confirmButtonText:"确 定",type:"warning"}).then(function(){e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}},s=(a("fMUQ"),a("KHd+")),d=Object(s.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"app-container ilayout-container"},[a("el-col",{attrs:{span:24}},[a("el-header",[a("el-row",[a("router-link",{attrs:{to:"/home/homepage/view"}},[a("el-button",{attrs:{size:"mini",type:"primary"}},[e._v("新增")])],1),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.deletePack}},[e._v("删除")])],1)],1),e._v(" "),a("el-main",[a("itsnow-filter"),e._v(" "),a("div",{staticClass:"its_table",staticStyle:{"padding-top":"0"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.homepage,border:""}},[a("el-table-column",{attrs:{type:"selection",width:"45",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"label",label:"视图标识","min-width":"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"视图名称","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{on:{click:function(t){e.viewDashboard=!0}}},[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"agreement",label:"业务分类","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"describe",label:"描述","min-width":"250"}}),e._v(" "),a("el-table-column",{attrs:{prop:"plug",label:"插件","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tab",label:"标记","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"date",label:"更新时间","min-width":"160"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-edit"}}),e._v(" "),"--"!=t.row.plug?a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"重置",placement:"top-start"}},[a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-refresh-left"}})],1):"系统"==t.row.tab?a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top-start"}},[a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-delete",disabled:""}})],1):a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top-start"}},[a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-delete"}})],1)]}}])})],1)],1),e._v(" "),a("div",{staticClass:"block its_pagination"},[a("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"page-sizes":[10,25,50,80,100],"page-size":25,total:3,background:"",layout:"total, sizes, prev, pager, next, jumper"}})],1)],1)],1),e._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"快照",visible:e.dialogVisible,width:"420px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-row",{staticClass:"its_dialogBody"},[a("div",{staticClass:"its_det"},[a("el-row",{staticClass:"its_form_row"},[a("el-form",{attrs:{"label-width":"60px",rules:e.rules}},[a("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[a("el-col",{attrs:{span:21,offset:1}},[a("el-form-item",{attrs:{label:"文件名",prop:"fileName"}},[a("itsnow-text",{attrs:{placeholder:"请输入"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"路径",prop:"path"}},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入"},model:{value:e.input3,callback:function(t){e.input3=t},expression:"input3"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-folder-opened"},slot:"append"})],1)],1)],1)],1)],1)],1)],1)]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")])],1)],1),e._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"预览",visible:e.viewDashboard,width:"800px"},on:{"update:visible":function(t){e.viewDashboard=t}}},[a("el-header",{staticStyle:{"border-radius":"0",margin:"0",background:"#fff","border-bottom":"1px solid #cfd2d6"}},[a("el-button",{staticStyle:{width:"auto",padding:"5px"},attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-edit"},on:{click:function(t){e.dialogVisible5=!0}}}),e._v(" "),a("el-button",{staticStyle:{width:"auto",padding:"5px"},attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-camera"},on:{click:function(t){e.dialogVisible=!0}}}),e._v(" "),a("el-button",{staticStyle:{width:"auto",padding:"5px"},attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-full-screen"}})],1),e._v(" "),a("grid-layout",{attrs:{layout:e.layout,"col-num":12,"row-height":30,"is-draggable":!0,"is-resizable":!0,"is-mirrored":!1,"vertical-compact":!0,margin:[0,0],"use-css-transforms":!0}},[a("grid-item",{key:e.layout[0].id,staticStyle:{background:"#eee"},attrs:{x:e.layout[0].x,y:e.layout[0].y,w:e.layout[0].w,h:e.layout[0].h,i:e.layout[0].i},on:{resize:e.resizeEvent,move:e.moveEvent,resized:e.resizedEvent,moved:e.movedEvent}},[a("div",{staticClass:"its_widget_header"},[e._v("\n                    "+e._s(e.layout[0].i)+"\n\n                ")]),e._v(" "),void 0],2),e._v(" "),a("grid-item",{key:e.layout[1].id,staticStyle:{background:"#ddd"},attrs:{x:e.layout[1].x,y:e.layout[1].y,w:e.layout[1].w,h:e.layout[1].h,i:e.layout[1].i},on:{resize:e.resizeEvent,move:e.moveEvent,resized:e.resizedEvent,moved:e.movedEvent}},[a("div",{staticClass:"its_widget_header"},[e._v("\n                    "+e._s(e.layout[1].i)+"\n\n                ")]),e._v(" "),void 0],2),e._v(" "),a("grid-item",{key:e.layout[2].id,staticStyle:{background:"#ccc"},attrs:{x:e.layout[2].x,y:e.layout[2].y,w:e.layout[2].w,h:e.layout[2].h,i:e.layout[2].i},on:{resize:e.resizeEvent,move:e.moveEvent,resized:e.resizedEvent,moved:e.movedEvent}},[a("div",{staticClass:"its_widget_header"},[e._v("\n                    "+e._s(e.layout[2].i)+"\n\n                ")]),e._v(" "),void 0],2),e._v(" "),a("grid-item",{key:e.layout[3].id,staticStyle:{background:"#ccc"},attrs:{x:e.layout[3].x,y:e.layout[3].y,w:e.layout[3].w,h:e.layout[3].h,i:e.layout[3].i},on:{resize:e.resizeEvent,move:e.moveEvent,resized:e.resizedEvent,moved:e.movedEvent}},[a("div",{staticClass:"its_widget_header"},[e._v("\n                    "+e._s(e.layout[3].i)+"\n\n                ")]),e._v(" "),void 0],2)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.viewDashboard=!1}}},[e._v("确 定")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.viewDashboard=!1}}},[e._v("取 消")])],1)],1)],1)},[],!1,null,"5b63d1ea",null);t.default=d.exports},YsWD:function(e){e.exports={widget:[{date:"2019-02-15 15:56:10",label:"CMDBcolume1",name:"按类型分类的配置项实例统计",modules:"配置中心",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"CMDBcolume2",name:"某些配置类型在某时段新增配置项实例的统计",modules:"配置中心",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"CMDBPie1",name:"按类型分类的配置项实例统计百分比",modules:"配置中心",panelType:"饼图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"CMDBPie2",name:"某些配置类型在某时段新增配置项实例的统计百分比",modules:"配置中心",panelType:"饼图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"CMDBLine1",name:"按类型分类的配置项实例统计",modules:"配置中心",panelType:"折线图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"CMDBLine2",name:"某些配置类型在某时段新增配置项实例的统计",modules:"配置中心",panelType:"折线图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"CMDBTable1",name:"按类型分类的配置项实例统计表格",modules:"配置中心",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"CMDBTable2",name:"某些配置类型在某时段新增配置项实例的统计表格",modules:"配置中心",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"topo_info",name:"网络拓扑图",plug:"--",modules:"监控中心",panelType:"拓扑图",describe:"这里是一段关于这个面板的描述",dataSource:"topo",tab:"系统"},{date:"2019-02-15 15:56:10",label:"alarmEvent_info",plug:"--",name:"某些资源当前告警信息",modules:"监控中心",panelType:"当前告警",describe:"这里是一段关于这个面板的描述",dataSource:"alarm",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"alarmEvent2_info",plug:"--",name:"变量当前告警信息",modules:"监控中心",panelType:"当前告警",describe:"这里是一段关于这个面板的描述",dataSource:"alarm",tab:"系统"},{date:"2019-02-15 15:56:10",label:"linux_info",name:"Linux资源信息",modules:"监控中心",panelType:"时序图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"Linux",tab:"自定义"},{date:"2016-05-03 10:12:36",label:"monitorTable_info",name:"某些资源监控表格信息",modules:"监控中心",panelType:"组件",describe:"这里是一段关于这个面板的描述",plug:"--",dataSource:"monitor",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"lastData_info",plug:"--",name:"某资源的最新数据",modules:"监控中心",panelType:"最新数据",describe:"这里是一段关于这个面板的描述",dataSource:"monitor",tab:"系统"},{date:"2019-02-15 15:56:10",label:"serviceTool_info",plug:"--",name:"某资源的服务工具",modules:"监控中心",panelType:"工具",describe:"这里是一段关于这个面板的描述",dataSource:"operation",tab:"系统"},{date:"2019-02-15 15:56:10",label:"monitorColume",name:"某些类型在某时段新增资源实例的统计",modules:"监控中心",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"Linux",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"monitorLine",name:"某些类型在某时段新增资源实例的统计",modules:"监控中心",panelType:"折线图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"Linux",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"Availability_info",plug:"--",name:"某资源的可用率",modules:"监控中心",panelType:"饼图",describe:"这里是一段关于这个面板的描述",dataSource:"monitor",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"monitorPie",plug:"--",name:"某些类型在某时段新增资源实例的统计百分比",modules:"监控中心",panelType:"饼图",describe:"这里是一段关于这个面板的描述",dataSource:"monitor",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"monitorTable",plug:"--",name:"某些类型在某时段新增资源实例的统计",modules:"监控中心",panelType:"表格",describe:"这里是一段关于这个面板的描述",dataSource:"monitor",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"monitorHealthy",plug:"--",name:"健康状态表",modules:"监控中心",panelType:"状态表",describe:"这里是一段关于这个面板的描述",dataSource:"monitor",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"monitorPerformance",plug:"--",name:"性能指标项值的显示",modules:"监控中心",panelType:"性能指标",describe:"这里是一段关于这个面板的描述",dataSource:"monitor",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowStatus",modules:"运维中心",name:"某工单按流程状态工单数统计",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowMonth",modules:"运维中心",name:"某工单在最近一年的每月中各状态处理统计",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowType",modules:"运维中心",name:"各工单类型的工单数统计",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowTypeChoiceColume",modules:"运维中心",name:"状态分类下的工单数统计",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowStatusPie",modules:"运维中心",name:"某工单按流程状态工单数统计百分比",panelType:"饼图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowStatusLine",modules:"运维中心",name:"某工单按流程状态工单数统计",panelType:"折线图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowMonthLine",modules:"运维中心",name:"某工单在最近一年的每月中各状态处理统计",panelType:"折线图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowTypeLine",modules:"运维中心",name:"各工单类型的工单数统计",panelType:"折线图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowTypeChoiceLine",modules:"运维中心",name:"状态分类下的工单数统计",panelType:"折线图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowStatusTable",modules:"运维中心",name:"某工单按流程状态工单数统计",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowMonthTable",modules:"运维中心",name:"某工单在最近一年的每月中各状态处理统计",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowTypeTable",modules:"运维中心",name:"各工单类型的工单数统计",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowTypeTable",modules:"运维中心",name:"各工单类型的工单数统计",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowMonthAll",modules:"运维中心",name:"各工单类型在最近一年的每月新发起的数量统计",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"operationTool_info",modules:"操作中心",name:"某些配置类型可执行的工具数量统计",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"operation",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"operationToolColume",modules:"操作中心",name:"某些配置类型可执行的工具数量统计",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"operation",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"operationToolLine",modules:"操作中心",name:"某些配置类型可执行的工具数量统计",panelType:"折线图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"operation",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"operationToolPie",modules:"操作中心",name:"某些配置类型可执行的工具数量统计百分比",panelType:"饼图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"operation",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"operationToolTable",modules:"操作中心",name:"最近一天即将执行的作业列表",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"operation",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"operationToolTableJob",modules:"操作中心",name:"执行中的作业列表",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"operation",tab:"自定义"}],homepage:[{date:"2016-05-03 10:12:36",label:"its_dashboard",name:"首页",plug:"服务器插件包",agreement:"综合",describe:"这里是关于这块视图的描述",tab:"系统"},{date:"2019-02-15 15:56:10",label:"itsm_center",name:"运维统计",agreement:"运维中心",plug:"--",describe:"这里是关于这块视图的描述",tab:"系统"},{date:"2019-02-15 15:56:10",label:"monitor_center",name:"监控总览",plug:"--",agreement:"监控中心",describe:"这里是关于这块视图的描述",tab:"自定义"}],homeLayout:[{x:0,y:0,w:8,h:13,i:"当前实时告警",id:1},{x:8,y:0,w:4,h:7,i:"一分钟系统负载",id:2},{x:8,y:7,w:4,h:6,i:"工单状态统计图",id:3},{x:0,y:13,w:4,h:6,i:"网络拓扑图",id:4},{x:4,y:13,w:4,h:6,i:"账户列表信息",id:5},{x:8,y:13,w:4,h:6,i:"2019年月工单数量统计图",id:6}],platform:[{id:1,title:"workflow流程有问题",content:"这里是通知的相关内容",sendTime:"2019-02-15 15:56:10",modules:"运维中心"},{id:2,title:"拓扑图显示无法自动排列",content:"这里是通知的相关内容",sendTime:"2019-02-15 15:56:10",modules:"监控中心"},{id:3,title:"Host下的工具统计无法显示",content:"这里是通知的相关内容",sendTime:"2019-02-15 15:56:10",modules:"操作中心"},{id:4,title:"Linux配置问题",content:"这里是通知的相关内容",sendTime:"2019-02-15 15:56:10",modules:"配置中心"}],sendOut:[{id:1,title:"workflow流程有问题",content:"这里是通知的相关内容",sendTime:"2019-02-15 15:56:10",modules:"运维中心",person:"张三",chanle:"短信",status:"完成"},{id:2,title:"拓扑图显示无法自动排列",content:"这里是通知的相关内容",sendTime:"2019-02-15 15:56:10",modules:"监控中心",person:"李四",chanle:"邮件",status:"异常"},{id:3,title:"Host下的工具统计无法显示",content:"这里是通知的相关内容",sendTime:"2019-02-15 15:56:10",modules:"操作中心",person:"王五",chanle:"IM",status:"完成"},{id:4,title:"Linux配置问题",content:"这里是通知的相关内容",sendTime:"2019-02-15 15:56:10",modules:"配置中心",person:"张三",chanle:"短信",status:"完成"}]}},fMUQ:function(e,t,a){"use strict";var l=a("rfnT");a.n(l).a},rfnT:function(e,t,a){}}]);