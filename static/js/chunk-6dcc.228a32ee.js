(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6dcc"],{"+0MQ":function(e,a,t){"use strict";t.r(a);var o=t("54jj"),l=t("Smy8"),i=(t("YsWD"),t("Kw5r")),d=t("e+jF"),n=t.n(d);i.default.use(n.a);var r={components:{GridLayout:n.a.GridLayout,GridItem:n.a.GridItem},data:function(){return{layout:[{x:0,y:0,w:8,h:13,i:"当前实时告2222警",id:1},{x:8,y:0,w:4,h:7,i:"一分钟系统负载",id:2},{x:8,y:7,w:4,h:6,i:"工单状态统计图",id:3},{x:0,y:13,w:4,h:6,i:"网络拓扑图",id:4},{x:4,y:13,w:4,h:6,i:"账户列表信息",id:5},{x:8,y:13,w:4,h:6,i:"2019年月工单数量统计图",id:6}],activeIndex:"1",isCollapse:!1,activeNamesTest:["1","2","3"],monitorT:[],dialogVisible:!1,rules:{name:[{trigger:"blur",required:!0}]}}},mounted:function(){this.resourceTypeLinux=[o.resourceTypeLinux[0]],this.resourceTypeAIX=o.resourceTypeAIX,this.dataAccound=l.account},methods:{deletePack:function(){var e=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{customClass:"its_message_box",cancelButtonClass:"el-button--mini",confirmButtonClass:"el-button--mini",cancelButtonText:"取 消",confirmButtonText:"确 定",type:"warning"}).then(function(){e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}},s=(t("HvTY"),t("VFbm"),t("dTOd"),t("KHd+")),u=Object(s.a)(r,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-row",{staticClass:"app-container ilayout-container"},[t("el-container",{staticClass:"sub"},[t("el-main",{staticStyle:{"max-height":"calc(100vh - 140px)"}},[t("grid-layout",{attrs:{layout:e.layout,"col-num":12,"row-height":30,"is-draggable":e.isCollapse,"is-resizable":e.isCollapse,"is-mirrored":!1,"vertical-compact":!0,margin:[0,0],"use-css-transforms":!0}},[t("grid-item",{key:e.layout[0].id,staticStyle:{background:"#eee"},attrs:{x:e.layout[0].x,y:e.layout[0].y,w:e.layout[0].w,h:e.layout[0].h,i:e.layout[0].i},on:{resize:e.resizeEvent,move:e.moveEvent,resized:e.resizedEvent,moved:e.movedEvent}},[t("div",{staticClass:"its_widget_header"},[e._v("\n                        "+e._s(e.layout[0].i)+"\n                    ")]),e._v(" "),[t("dash-alarm")]],2),e._v(" "),t("grid-item",{key:e.layout[1].id,staticStyle:{background:"#ddd"},attrs:{x:e.layout[1].x,y:e.layout[1].y,w:e.layout[1].w,h:e.layout[1].h,i:e.layout[1].i},on:{resize:e.resizeEvent,move:e.moveEvent,resized:e.resizedEvent,moved:e.movedEvent}},[t("div",{staticClass:"its_widget_header"},[e._v("\n                        "+e._s(e.layout[1].i)+"\n\n                    ")]),e._v(" "),[t("dash-Colume",{attrs:{id:1}})]],2),e._v(" "),t("grid-item",{key:e.layout[2].id,staticStyle:{background:"#ccc"},attrs:{x:e.layout[2].x,y:e.layout[2].y,w:e.layout[2].w,h:e.layout[2].h,i:e.layout[2].i},on:{resize:e.resizeEvent,move:e.moveEvent,resized:e.resizedEvent,moved:e.movedEvent}},[t("div",{staticClass:"its_widget_header"},[e._v("\n                        "+e._s(e.layout[2].i)+"\n                    ")]),e._v(" "),[t("dash-Pie",{attrs:{id:2}})]],2),e._v(" "),t("grid-item",{key:e.layout[3].id,staticStyle:{background:"#ccc"},attrs:{x:e.layout[3].x,y:e.layout[3].y,w:e.layout[3].w,h:e.layout[3].h,i:e.layout[3].i},on:{resize:e.resizeEvent,move:e.moveEvent,resized:e.resizedEvent,moved:e.movedEvent}},[t("div",{staticClass:"its_widget_header"},[e._v("\n                        "+e._s(e.layout[3].i)+"\n\n                    ")]),e._v(" "),[t("dash-Line",{attrs:{id:3}})]],2),e._v(" "),t("grid-item",{key:e.layout[4].id,staticStyle:{background:"#ddd"},attrs:{x:e.layout[4].x,y:e.layout[4].y,w:e.layout[4].w,h:e.layout[4].h,i:e.layout[4].i},on:{resize:e.resizeEvent,move:e.moveEvent,resized:e.resizedEvent,moved:e.movedEvent}},[t("div",{staticClass:"its_widget_header"},[e._v("\n                        "+e._s(e.layout[4].i)+"\n                    ")]),e._v(" "),void 0],2),e._v(" "),t("grid-item",{key:e.layout[5].id,staticStyle:{background:"#ccc"},attrs:{x:e.layout[5].x,y:e.layout[5].y,w:e.layout[5].w,h:e.layout[5].h,i:e.layout[5].i},on:{resize:e.resizeEvent,move:e.moveEvent,resized:e.resizedEvent,moved:e.movedEvent}},[t("div",{staticClass:"its_widget_header"},[e._v("\n                        "+e._s(e.layout[0].i)+"\n                    ")]),e._v(" "),void 0],2)],1)],1)],1)],1)},[],!1,null,"ded27630",null);a.default=u.exports},"2VM/":function(e,a,t){},Gymm:function(e,a,t){},HvTY:function(e,a,t){"use strict";var o=t("2VM/");t.n(o).a},VFbm:function(e,a,t){"use strict";var o=t("yLps");t.n(o).a},YsWD:function(e){e.exports={widget:[{date:"2019-02-15 15:56:10",label:"CMDBcolume1",name:"按类型分类的配置项实例统计",modules:"配置中心",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"CMDBcolume2",name:"某些配置类型在某时段新增配置项实例的统计",modules:"配置中心",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"CMDBPie1",name:"按类型分类的配置项实例统计百分比",modules:"配置中心",panelType:"饼图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"CMDBPie2",name:"某些配置类型在某时段新增配置项实例的统计百分比",modules:"配置中心",panelType:"饼图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"CMDBLine1",name:"按类型分类的配置项实例统计",modules:"配置中心",panelType:"折线图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"CMDBLine2",name:"某些配置类型在某时段新增配置项实例的统计",modules:"配置中心",panelType:"折线图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"CMDBTable1",name:"按类型分类的配置项实例统计表格",modules:"配置中心",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"CMDBTable2",name:"某些配置类型在某时段新增配置项实例的统计表格",modules:"配置中心",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"topo_info",name:"网络拓扑图",plug:"--",modules:"监控中心",panelType:"拓扑图",describe:"这里是一段关于这个面板的描述",dataSource:"topo",tab:"系统"},{date:"2019-02-15 15:56:10",label:"alarmEvent_info",plug:"--",name:"某些资源当前告警信息",modules:"监控中心",panelType:"当前告警",describe:"这里是一段关于这个面板的描述",dataSource:"alarm",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"alarmEvent2_info",plug:"--",name:"变量当前告警信息",modules:"监控中心",panelType:"当前告警",describe:"这里是一段关于这个面板的描述",dataSource:"alarm",tab:"系统"},{date:"2019-02-15 15:56:10",label:"linux_info",name:"Linux资源信息",modules:"监控中心",panelType:"时序图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"Linux",tab:"自定义"},{date:"2016-05-03 10:12:36",label:"monitorTable_info",name:"某些资源监控表格信息",modules:"监控中心",panelType:"组件",describe:"这里是一段关于这个面板的描述",plug:"--",dataSource:"monitor",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"lastData_info",plug:"--",name:"某资源的最新数据",modules:"监控中心",panelType:"最新数据",describe:"这里是一段关于这个面板的描述",dataSource:"monitor",tab:"系统"},{date:"2019-02-15 15:56:10",label:"serviceTool_info",plug:"--",name:"某资源的服务工具",modules:"监控中心",panelType:"工具",describe:"这里是一段关于这个面板的描述",dataSource:"operation",tab:"系统"},{date:"2019-02-15 15:56:10",label:"monitorColume",name:"某些类型在某时段新增资源实例的统计",modules:"监控中心",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"Linux",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"monitorLine",name:"某些类型在某时段新增资源实例的统计",modules:"监控中心",panelType:"折线图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"Linux",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"Availability_info",plug:"--",name:"某资源的可用率",modules:"监控中心",panelType:"饼图",describe:"这里是一段关于这个面板的描述",dataSource:"monitor",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"monitorPie",plug:"--",name:"某些类型在某时段新增资源实例的统计百分比",modules:"监控中心",panelType:"饼图",describe:"这里是一段关于这个面板的描述",dataSource:"monitor",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"monitorTable",plug:"--",name:"某些类型在某时段新增资源实例的统计",modules:"监控中心",panelType:"表格",describe:"这里是一段关于这个面板的描述",dataSource:"monitor",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"monitorHealthy",plug:"--",name:"健康状态表",modules:"监控中心",panelType:"状态表",describe:"这里是一段关于这个面板的描述",dataSource:"monitor",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"monitorPerformance",plug:"--",name:"性能指标项值的显示",modules:"监控中心",panelType:"性能指标",describe:"这里是一段关于这个面板的描述",dataSource:"monitor",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowStatus",modules:"运维中心",name:"某工单按流程状态工单数统计",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowMonth",modules:"运维中心",name:"某工单在最近一年的每月中各状态处理统计",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowType",modules:"运维中心",name:"各工单类型的工单数统计",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowTypeChoiceColume",modules:"运维中心",name:"状态分类下的工单数统计",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowStatusPie",modules:"运维中心",name:"某工单按流程状态工单数统计百分比",panelType:"饼图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowStatusLine",modules:"运维中心",name:"某工单按流程状态工单数统计",panelType:"折线图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowMonthLine",modules:"运维中心",name:"某工单在最近一年的每月中各状态处理统计",panelType:"折线图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowTypeLine",modules:"运维中心",name:"各工单类型的工单数统计",panelType:"折线图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowTypeChoiceLine",modules:"运维中心",name:"状态分类下的工单数统计",panelType:"折线图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowStatusTable",modules:"运维中心",name:"某工单按流程状态工单数统计",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowMonthTable",modules:"运维中心",name:"某工单在最近一年的每月中各状态处理统计",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowTypeTable",modules:"运维中心",name:"各工单类型的工单数统计",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowTypeTable",modules:"运维中心",name:"各工单类型的工单数统计",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"WorkflowMonthAll",modules:"运维中心",name:"各工单类型在最近一年的每月新发起的数量统计",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"workflow",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"operationTool_info",modules:"操作中心",name:"某些配置类型可执行的工具数量统计",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"operation",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"operationToolColume",modules:"操作中心",name:"某些配置类型可执行的工具数量统计",panelType:"柱状图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"operation",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"operationToolLine",modules:"操作中心",name:"某些配置类型可执行的工具数量统计",panelType:"折线图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"operation",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"operationToolPie",modules:"操作中心",name:"某些配置类型可执行的工具数量统计百分比",panelType:"饼图",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"operation",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"operationToolTable",modules:"操作中心",name:"最近一天即将执行的作业列表",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"operation",tab:"自定义"},{date:"2019-02-15 15:56:10",label:"operationToolTableJob",modules:"操作中心",name:"执行中的作业列表",panelType:"表格",plug:"--",describe:"这里是一段关于这个面板的描述",dataSource:"operation",tab:"自定义"}],homepage:[{date:"2016-05-03 10:12:36",label:"its_dashboard",name:"首页",plug:"服务器插件包",agreement:"综合",describe:"这里是关于这块视图的描述",tab:"系统"},{date:"2019-02-15 15:56:10",label:"itsm_center",name:"运维统计",agreement:"运维中心",plug:"--",describe:"这里是关于这块视图的描述",tab:"系统"},{date:"2019-02-15 15:56:10",label:"monitor_center",name:"监控总览",plug:"--",agreement:"监控中心",describe:"这里是关于这块视图的描述",tab:"自定义"}],homeLayout:[{x:0,y:0,w:8,h:13,i:"当前实时告警",id:1},{x:8,y:0,w:4,h:7,i:"一分钟系统负载",id:2},{x:8,y:7,w:4,h:6,i:"工单状态统计图",id:3},{x:0,y:13,w:4,h:6,i:"网络拓扑图",id:4},{x:4,y:13,w:4,h:6,i:"账户列表信息",id:5},{x:8,y:13,w:4,h:6,i:"2019年月工单数量统计图",id:6}],platform:[{id:1,title:"workflow流程有问题",content:"这里是通知的相关内容",sendTime:"2019-02-15 15:56:10",modules:"运维中心"},{id:2,title:"拓扑图显示无法自动排列",content:"这里是通知的相关内容",sendTime:"2019-02-15 15:56:10",modules:"监控中心"},{id:3,title:"Host下的工具统计无法显示",content:"这里是通知的相关内容",sendTime:"2019-02-15 15:56:10",modules:"操作中心"},{id:4,title:"Linux配置问题",content:"这里是通知的相关内容",sendTime:"2019-02-15 15:56:10",modules:"配置中心"}],sendOut:[{id:1,title:"workflow流程有问题",content:"这里是通知的相关内容",sendTime:"2019-02-15 15:56:10",modules:"运维中心",person:"张三",chanle:"短信",status:"完成"},{id:2,title:"拓扑图显示无法自动排列",content:"这里是通知的相关内容",sendTime:"2019-02-15 15:56:10",modules:"监控中心",person:"李四",chanle:"邮件",status:"异常"},{id:3,title:"Host下的工具统计无法显示",content:"这里是通知的相关内容",sendTime:"2019-02-15 15:56:10",modules:"操作中心",person:"王五",chanle:"IM",status:"完成"},{id:4,title:"Linux配置问题",content:"这里是通知的相关内容",sendTime:"2019-02-15 15:56:10",modules:"配置中心",person:"张三",chanle:"短信",status:"完成"}]}},dTOd:function(e,a,t){"use strict";var o=t("Gymm");t.n(o).a},yLps:function(e,a,t){}}]);