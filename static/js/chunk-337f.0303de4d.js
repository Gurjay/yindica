(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-337f"],{"/CYA":function(t,e,a){},"4goK":function(t,e,a){},"5FqH":function(t,e,a){"use strict";var l=a("Sdbo");a.n(l).a},"6sat":function(t,e,a){"use strict";var l=a("B6Ew");a.n(l).a},B6Ew:function(t,e,a){},D8x0:function(t,e,a){"use strict";var l=a("vCln");a.n(l).a},IpW8:function(t,e,a){"use strict";a.r(e);a("dzmM"),a("54jj");var l=a("Kw5r"),i=a("e+jF"),o=a.n(i);l.default.use(o.a);var s={components:{GridLayout:o.a.GridLayout,GridItem:o.a.GridItem},data:function(){return{itsmType:["故障单"],multipleSelection:!0,itsmChartData:[{id:1,name:"故障单",number:5},{id:2,name:"派工单",number:10},{id:3,name:"请求单",number:34}],openResourceMore:!1,hiddenTitle:!0,activeTable:"real",panelStyleChart3:3,layout:[{x:0,y:0,w:12,h:7,id:1}],activeNamesTest:[],selectTime:"1",dialogVisibleSet3:!1,kpiList:["故障单"],monitorStatistic:[{label:"待办",name:12,name2:3,name3:32},{label:"已处理",name:35,name2:16,name3:21},{label:"已关闭",name:21,name2:31,name3:10},{label:"所有",name:68,name2:50,name3:64}],options:[{value:"1",label:"故障单"},{value:"2",label:"派工单"},{value:"3",label:"请求单"}],checkList:["待办","已处理","已关闭","所有"],rules:{name:[{trigger:"blur",required:!0}]}}},mounted:function(){},methods:{handleNodeClick:function(t){this.link=t.$treeNodeId,console.log(t.$treeNodeId)}}},n=(a("PMMe"),a("D8x0"),a("6sat"),a("5FqH"),a("XRsr"),a("KHd+")),r=Object(n.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("grid-layout",{staticStyle:{height:"410px"},attrs:{layout:t.layout,"col-num":12,"row-height":54,"is-draggable":!1,"is-resizable":!1,"is-mirrored":!1,"vertical-compact":!0,margin:[0,0],"use-css-transforms":!0}},[a("grid-item",{staticStyle:{background:"#eee"},attrs:{w:12,h:8}},[a("div",{staticClass:"its_widget_header"},[t._v("\n                不同状态分类下的工单数统计\n                "),a("span",{staticStyle:{float:"right"}},[a("el-button",{staticStyle:{padding:"0"},attrs:{type:"text",size:"mini",icon:"el-icon-s-tools"},on:{click:function(e){t.dialogVisibleSet3=!0}}})],1)]),t._v(" "),[a("el-row",{staticClass:"its_chart_temple"},[a("el-form",{staticStyle:{position:"absolute",width:"auto",right:"5px","z-index":"1",top:"6px"},attrs:{"label-width":"0px"}},[a("el-col",[a("el-col",{staticStyle:{width:"82px","text-align":"right"}},[a("el-radio-group",{attrs:{size:"mini"},model:{value:t.panelStyleChart3,callback:function(e){t.panelStyleChart3=e},expression:"panelStyleChart3"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"柱状图",placement:"top-start"}},[2!=t.panelStyleChart3?a("el-radio-button",{attrs:{type:"text",label:2}},[a("i",{staticClass:"iconfont iconzhuzhuangtu"})]):t._e()],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"折线图",placement:"top-start"}},[3!=t.panelStyleChart3?a("el-radio-button",{attrs:{type:"text",label:3}},[a("i",{staticClass:"iconfont iconduidiezhexiantu"})]):t._e()],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"表格",placement:"top-start"}},[1!=t.panelStyleChart3?a("el-radio-button",{attrs:{type:"text",label:1}},[a("i",{staticClass:"iconfont iconbiaoge"})]):t._e()],1)],1)],1)],1)],1),t._v(" "),4==t.panelStyleChart3?a("div",{staticClass:"chart-container",staticStyle:{position:"relative",float:"left","min-height":"350px",width:"100%"}},[a("itsnow-pieL",{attrs:{height:"412px",width:"100%"}})],1):t._e(),t._v(" "),1==t.panelStyleChart3?a("el-col",{staticStyle:{"padding-top":"34px",background:"#fff"}},[a("div",{staticClass:"its_table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.monitorStatistic,fit:"",stripe:"",border:""}},[a("el-table-column",{attrs:{"min-width":"100",label:"状态分类",prop:"label"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name","min-width":"100",label:"故障单"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name2","min-width":"100",label:"派工单"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name3","min-width":"100",label:"请求单"}})],1)],1)]):t._e(),t._v(" "),2==t.panelStyleChart3?a("div",{staticClass:"chart-container",staticStyle:{position:"relative",float:"left",height:"412px",width:"100%"}},[a("el-image",{attrs:{src:"src/images/common/itsnow-typeChoiceColume.png"}})],1):t._e(),t._v(" "),3==t.panelStyleChart3?a("div",{staticClass:"chart-container",staticStyle:{position:"relative",float:"left",height:"412px",width:"100%"}},[a("el-image",{attrs:{src:"src/images/common/itsnow-typeChoiceLine.png"}})],1):t._e()],1)]],2)],1),t._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"设置",top:"5vh","append-to-body":"",visible:t.dialogVisibleSet3,width:"800px"},on:{"update:visible":function(e){t.dialogVisibleSet3=e}}},[a("el-row",{staticClass:"its_dialogBody"},[a("div",{staticClass:"its_det"},[a("el-row",{staticClass:"its_form_row"},[a("el-form",{attrs:{"label-width":"85px",rules:t.rules}},[a("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{label:"面板标识",prop:"widgetName"}},[a("itsnow-text",{attrs:{value:"Workflow_info",readonly:""}})],1),t._v(" "),a("el-form-item",{attrs:{label:"面板名称"}},[a("itsnow-text",{attrs:{value:"各工单类型在不同状态分类下的工单数统计",readonly:""}})],1)],1),t._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{label:"图表类型",prop:"panelType"}},[a("el-radio-group",{attrs:{size:"mini"},model:{value:t.panelType,callback:function(e){t.panelType=e},expression:"panelType"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"柱状图",placement:"top-start"}},[a("el-radio-button",{attrs:{label:1,disabled:""}},[a("i",{staticClass:"iconfont iconzhuzhuangtu"})])],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"图表风格",prop:"panelType"}},[a("el-radio-group",{attrs:{size:"mini"},model:{value:t.panelStyle,callback:function(e){t.panelStyle=e},expression:"panelStyle"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"基础柱状图",placement:"top-start"}},[a("el-radio-button",{attrs:{label:1}},[a("i",{staticClass:"iconfont icontubiaoduoweizhuzhuangtu1"})])],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"堆叠柱状图",placement:"top-start"}},[a("el-radio-button",{attrs:{label:2}},[a("i",{staticClass:"iconfont iconzhuzhuangtu1"})])],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"纵向基础柱状图",placement:"top-start"}},[a("el-radio-button",{attrs:{label:3}},[a("i",{staticClass:"iconfont icontubiaoduoweizhuzhuangtu"})])],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"纵向堆叠柱状图",placement:"top-start"}},[a("el-radio-button",{attrs:{label:4}},[a("i",{staticClass:"iconfont iconzhuzhuangtu2-copy"})])],1)],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:21,offset:1}},[a("el-form-item",{attrs:{label:"标题"}},[a("el-col",[a("el-col",{attrs:{span:24}},[t.hiddenTitle?t._e():a("el-select",{model:{value:t.hiddenTitle,callback:function(e){t.hiddenTitle=e},expression:"hiddenTitle"}},[a("el-option",{attrs:{label:"隐藏",value:!1}}),t._v(" "),a("el-option",{attrs:{label:"显示",value:!0}})],1)],1),t._v(" "),a("el-col",{attrs:{span:4}},[t.hiddenTitle?a("el-select",{model:{value:t.hiddenTitle,callback:function(e){t.hiddenTitle=e},expression:"hiddenTitle"}},[a("el-option",{attrs:{label:"隐藏",value:!1}}),t._v(" "),a("el-option",{attrs:{label:"显示",value:!0}})],1):t._e()],1),t._v(" "),t.hiddenTitle?a("el-col",{staticStyle:{"padding-left":"5px"},attrs:{span:20}},[a("itsnow-text",{attrs:{value:"不同状态分类下的工单数统计"}})],1):t._e()],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:21,offset:1}},[a("el-form-item",{attrs:{label:"X轴标签"}},[a("el-select",{attrs:{value:"1",placeholder:"请选择",disabled:"",size:"mini"}},[a("el-option",{attrs:{label:"状态分类",value:"1"}})],1)],1),t._v(" "),a("el-form-item",{staticClass:"its_date_picker",attrs:{label:"状态分类"}},[a("el-checkbox-group",{model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[a("el-checkbox",{attrs:{label:"待办"}}),t._v(" "),a("el-checkbox",{attrs:{label:"已处理"}}),t._v(" "),a("el-checkbox",{attrs:{label:"已关闭"}}),t._v(" "),a("el-checkbox",{attrs:{label:"所有"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"工单类型"}},[a("el-col",{staticClass:"form_tool"},[a("div",{staticClass:"its_table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.itsmChartData,"show-header":!1,border:"",scripe:""}},[a("el-table-column",{attrs:{type:"selection",width:"45",align:"center"}},[a("el-checkbox",{model:{value:t.multipleSelection,callback:function(e){t.multipleSelection=e},expression:"multipleSelection"}})],1),t._v(" "),a("el-table-column",{attrs:{prop:"name","min-width":"200"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",enterable:!1,content:"上移",placement:"top-start"}},["待办"!=e.row.name?a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-top"}}):a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-top",disabled:""}})],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",enterable:!1,content:"下移",placement:"top-start"}},["所有"!=e.row.name?a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-bottom"}}):a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-bottom",disabled:""}})],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",enterable:!1,content:"置顶",placement:"top-start"}},["待办"!=e.row.name?a("el-button",{staticStyle:{transform:"rotate(180deg)"},attrs:{type:"text",size:"mini",icon:"el-icon-download"}}):a("el-button",{staticStyle:{transform:"rotate(180deg)"},attrs:{type:"text",size:"mini",icon:"el-icon-download",disabled:""}})],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",enterable:!1,content:"置顶",placement:"top-start"}},["所有"!=e.row.name?a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-download"}}):a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-download",disabled:""}})],1)]}}])})],1)],1)])],1),t._v(" "),a("el-form-item",{attrs:{label:"刷新"}},[a("el-select",{model:{value:t.refresh,callback:function(e){t.refresh=e},expression:"refresh"}},t._l(t.refreshs,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1)],1)],1)],1)],1)]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisibleSet3=!1}}},[t._v("确 定")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisibleSet3=!1}}},[t._v("取 消")])],1)],1)],1)},[],!1,null,"4e8470ba",null);e.default=r.exports},PMMe:function(t,e,a){"use strict";var l=a("4goK");a.n(l).a},Sdbo:function(t,e,a){},XRsr:function(t,e,a){"use strict";var l=a("/CYA");a.n(l).a},vCln:function(t,e,a){}}]);