(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-bf10"],{"4+dz":function(t,e,a){"use strict";var l=a("Q0M3");a.n(l).a},GZOi:function(t,e,a){"use strict";var l=a("ugGD");a.n(l).a},NT0I:function(t,e,a){"use strict";var l=a("W6Wv");a.n(l).a},Q0M3:function(t,e,a){},W6Wv:function(t,e,a){},ugGD:function(t,e,a){},yE0q:function(t,e,a){"use strict";a.r(e);var l=a("dzmM"),s=a("54jj"),i=a("Smy8"),o={components:{Chart:a("sSBk").a},data:function(){return{discoverTreeAll:!1,treeT:[],dataLatitude:"1",resourceChoice:["Linux[172.16.3.52]"],openResource:!1,xTime:[],widgetForm:[],radio:!1,methData:!1,kpiValue:["[总CPU使用率统计][CPU使用率]"],bingUser:!1,resourceDef:"1",busniessData2:["账户"],busniessData3:["Linux"],busniessData4:["Aix"],busniessData5:["Windows"],busniessData6:["topoView"],form_monthCount:["form_monthCount"],countNumber:["数量"],showList:[{value:"nickName",label:"昵称"},{value:"account",label:"账户"},{value:"mobile",label:"手机"},{value:"satus",label:"状态"},{value:"user",label:"人员"},{value:"update",label:"更新日期"}],choiceGroup:1,modulesChoice:"4",totalList:[],chartsDataSource:[{}],y:["内存使率","CPU使用率/CPU使用率前10的进程列表"],x:["时间"],x22:["工单类型"],alarmEventValue:["alarmEvent"],pieValue:["Linux"],topoViewValue:["topoView"],pageModel:[],num:10,panelType:7,panelStyle:1,sort:"顺序",paging:!1,dataSource:["账户"],busniessData:"1",showColumn:["昵称","账户","手机","人员","更新日期"],sortShow:"更新日期",activeNames:["1","2"],brokenLine:["Linux"],highS:!1,dynamicValidateForm:{domains2:"",domains:[{value:"",compare:""}]},formInline:{user:"",region:""},dataAlt:"2",restaurants:[],showColumns:[{value:"nickName",label:"昵称"},{value:"account",label:"账户"},{value:"mobile",label:"手机"},{value:"satus",label:"状态"},{value:"user",label:"人员"},{value:"update",label:"更新日期"}],resourceTypeLinux2:[{id:1}],selectTime:"1",busniessDataList:[{value:"all",label:"全局"},{value:"itsm,",label:"运维中心"},{value:"monitor",label:"监控中心"},{value:"operation",label:"操作中心"},{value:"resource",label:"资源中心"}],rules:{widgetName:[{trigger:"blur",required:!0}],dataSource:[{trigger:"blur",required:!0}],law:[{trigger:"blur",required:!0}]},classData:[{className:"Linux",classLabel:"Linux",classify:"Host",tab:"系统",date:"2019-02-15 15:56:10",desc:"Linux"},{className:"Database",classLabel:"数据库",classify:"Resource",tab:"系统",date:"2019-02-15 15:56:10",desc:"数据库"},{className:"its_role",classLabel:"角色",classify:"动态类",date:"2019-02-15 15:56:10",tab:"自定义",desc:""},{className:"IpDevice",classLabel:"IP设备",date:"2019-02-15 15:56:10",classify:"Resource",tab:"自定义",desc:"IP设备"}],yData:[{id:2,prototypeName:"Memory",prototype:"内存使用率",children:[{id:3,prototypeName:"proMemory",prototype:"内存使用率前10的进程列表"}]},{id:4,prototypeName:"Cpu",prototype:"CPU使用率",children:[{id:5,prototypeName:"procPcpu",prototype:"cpu使用率前10的进程列表"},{id:6,prototypeName:"stopCpu",prototype:"停止运行的Cpu列表"}]}]}},mounted:function(){this.treeT=l.dataType,this.resourceType=s.resourceType,this.restaurants=this.loadAll(),this.pageModel=i.account},methods:{addData:function(){this.chartsDataSource.unshift({name:""})},loadAll:function(){return[{value:"全局",address:"all"},{value:"运维中心",address:"itsm"},{value:"监控中心",address:"monitor"},{value:"操作中心",address:"operation"},{value:"资源中心",address:"resource"}]}}},r=(a("NT0I"),a("GZOi"),a("4+dz"),a("KHd+")),n=Object(r.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"app-container ilayout-container"},[a("el-container",{staticClass:"sub"},[a("el-header",[a("router-link",{attrs:{to:"/home/homeSetting/widget"}},[a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("返回")])],1),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("上一条")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("下一条")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("新增")])],1),t._v(" "),a("el-main",[a("el-collapse",{staticClass:"its_collapse",model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[a("div",{staticClass:"its_det"},[a("el-row",{staticClass:"its_form_row"},[a("el-form",{staticClass:"demo-ruleForm",attrs:{"label-width":"100px",rules:t.rules}},[a("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"naver"}},[a("el-collapse-item",{attrs:{title:"基本信息",name:"1"}},[a("div",{staticClass:"clearfix its_card_header"}),t._v(" "),a("el-row",{staticClass:"its_card_body"},[a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{label:"面板标识",prop:"widgetName"}},[a("itsnow-text",{attrs:{readonly:""}})],1),t._v(" "),a("el-form-item",{attrs:{label:"面板名称"}},[a("itsnow-text")],1),t._v(" "),a("el-form-item",{attrs:{label:"业务分类"}},[a("el-select",{attrs:{value:"3",disabled:"",placeholder:"请选择"}},[a("el-option",{attrs:{label:"综合",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"运维中心",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"监控中心",value:"3"}}),t._v(" "),a("el-option",{attrs:{label:"操作中心",value:"4"}}),t._v(" "),a("el-option",{attrs:{label:"资源中心",value:"5"}}),t._v(" "),a("el-option",{attrs:{label:"配置中心",value:"6"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{label:"标记"}},[a("itsnow-text",{attrs:{value:"系统",readonly:""}})],1),t._v(" "),a("el-form-item",{attrs:{label:"插件"}},[a("el-input",{staticClass:"its_link",attrs:{value:"",readonly:""}})],1)],1),t._v(" "),a("el-col",{attrs:{span:21,offset:1}},[a("el-form-item",{attrs:{label:"描述",prop:""}},[a("itsnow-textarea")],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"its_det"},[a("el-row",{staticClass:"its_form_row"},[a("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"naver"}},[a("el-collapse-item",{attrs:{title:"面板信息",name:"2"}},[a("div",{staticClass:"clearfix its_card_header"}),t._v(" "),a("el-row",{staticClass:"its_card_body"},[a("el-form",{staticClass:"demo-ruleForm",attrs:{"label-width":"100px",rules:t.rules}},[a("el-col",{attrs:{span:21,offset:1}},[a("el-form-item",{attrs:{label:"数据源",prop:"className"}},[a("el-col",{staticClass:"form_tool"},[a("div",{staticClass:"its_table must",staticStyle:{"padding-top":"0"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.widgetForm,stripe:"",border:""}},[a("el-table-column",{attrs:{label:"微服务",prop:"appName","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-select",{attrs:{disabled:"",placeholder:"请选择"},model:{value:t.modulesChoice,callback:function(e){t.modulesChoice=e},expression:"modulesChoice"}},[a("el-option",{attrs:{label:"--",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"ITSM",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"MONITOR",value:"3"}}),t._v(" "),a("el-option",{attrs:{label:"CMDB",value:"4"}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"className",label:"对象","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form-item",{attrs:{label:" ","label-width":"1px",prop:"law"}},[a("el-select",{staticClass:"its_multiple_select ",attrs:{disabled:"",size:"mini",multiple:"","popper-class":"its_multipleSelect_dropDown",placeholder:"请选择"},model:{value:t.pieValue,callback:function(e){t.pieValue=e},expression:"pieValue"}},[a("el-option")],1)],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"别名",prop:"alias","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-form-item",{attrs:{label:" ","label-width":"0",prop:"alias"}},[a("itsnow-text",{attrs:{readonly:"",value:"Linux"}})],1)]}}])})],1)],1)])],1)],1),t._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{label:"图表类型",prop:"panelType"}},[a("el-radio-group",{attrs:{size:"mini"},model:{value:t.panelType,callback:function(e){t.panelType=e},expression:"panelType"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"表格",placement:"top-start"}},[a("el-radio-button",{attrs:{label:1,disabled:""}},[a("i",{staticClass:"iconfont iconbiaoge"})])],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"折线图",placement:"top-start"}},[a("el-radio-button",{attrs:{label:2,disabled:""}},[a("i",{staticClass:"iconfont iconduidiezhexiantu"})])],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"柱状图",placement:"top-start"}},[a("el-radio-button",{attrs:{label:3,disabled:""}},[a("i",{staticClass:"iconfont iconzhuzhuangtu"})])],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"饼图",placement:"top-start"}},[a("el-radio-button",{attrs:{label:4,disabled:""}},[a("i",{staticClass:"iconfont iconbingtu1"})])],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"拓扑图",placement:"top-start"}},[a("el-radio-button",{attrs:{label:5,disabled:""}},[a("i",{staticClass:"iconfont icontuoputu"})])],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"当前告警",placement:"top-start"}},[a("el-radio-button",{attrs:{label:6,disabled:""}},[a("i",{staticClass:"iconfont icongaojing"})])],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"状态表",placement:"top-start"}},[a("el-radio-button",{attrs:{label:7}},[a("i",{staticClass:"iconfont iconhealth"})])],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"时序图",placement:"top-start"}},[a("el-radio-button",{attrs:{label:8,disabled:""}},[a("i",{staticClass:"iconfont icondaiban"})])],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"组件",placement:"top-start"}},[a("el-radio-button",{attrs:{label:9,disabled:""}},[a("i",{staticClass:"iconfont iconyuebao"})])],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"工具",placement:"top-start"}},[a("el-radio-button",{attrs:{label:10,disabled:""}},[a("i",{staticClass:"iconfont iconwujingongju"})])],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"最新数据",placement:"top-start"}},[a("el-radio-button",{attrs:{label:11,disabled:""}},[a("i",{staticClass:"iconfont icontianjiashijianduan"})])],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"性能指标",placement:"top-start"}},[a("el-radio-button",{attrs:{label:12,disabled:""}},[a("i",{staticClass:"iconfont iconxingneng1"})])],1)],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{label:"图表风格"}},[a("el-radio-group",{attrs:{size:"mini"},model:{value:t.panelStyle,callback:function(e){t.panelStyle=e},expression:"panelStyle"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"状态表",placement:"top-start"}},[a("el-radio-button",{attrs:{label:7}},[a("i",{staticClass:"iconfont iconhealth"})])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.discoverTreeAll,title:"监控类型","append-to-body":"",width:"280px",top:"5vh"},on:{"update:visible":function(e){t.discoverTreeAll=e}}},[a("el-row",{staticClass:"its_dialogBody"},[a("div",{staticClass:"its_det"},[a("el-row",{staticClass:"its_form_row"},[a("el-form",{attrs:{"label-width":"100px",rules:t.rules}},[a("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[a("el-row",{staticClass:"its_card_body"},[a("el-header",{staticStyle:{margin:"0"}},[a("el-row",[a("itsnow-text",{staticStyle:{width:"100px"}}),t._v(" "),a("el-button",{staticStyle:{padding:"5px",width:"auto"},attrs:{size:"mini",type:"primary",icon:"el-icon-search"}}),t._v(" "),t.openFold?a("el-button",{staticStyle:{padding:"5px",width:"auto"},attrs:{size:"mini",type:"primary",icon:"el-icon-folder-opened"},on:{click:function(e){t.openFold=!1}}}):t._e(),t._v(" "),t.openFold?t._e():a("el-button",{staticStyle:{padding:"5px",width:"auto"},attrs:{size:"mini",type:"primary",icon:"el-icon-folder"},on:{click:function(e){t.openFold=!0}}})],1)],1),t._v(" "),a("el-col",{staticStyle:{"margin-top":"5px"},attrs:{span:24}},[a("el-aside",{staticClass:"its_tree",staticStyle:{"min-width":"auto"}},[a("el-tree",{attrs:{"show-checkbox":"","node-key":"id","default-expanded-keys":[1],data:t.treeT}})],1)],1)],1)],1)],1)],1)],1)]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.discoverTreeAll=!1}}},[t._v("确 定")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.discoverTreeAll=!1}}},[t._v("取 消")])],1)],1)],1)],1)],1)],1)},[],!1,null,"492381d6",null);e.default=n.exports}}]);