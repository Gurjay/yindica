(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0b4c"],{"/VL6":function(t,e,l){"use strict";l.r(e);var a={data:function(){return{showSelect:!1,addform:{name:"ess1",action:"1",netblock:"1",cloud:"A3",number:"10",min:"2",max:"10",desc:"--",cloudedit:""},add3:!1,add:!1,demandTable:[{name:"ess1",netblock:"公众区",cloud:"2C 8G",system:"centos_7_7",number:"10",min:"2",max:"10",action:"新增",desc:"业务需求"},{name:"ess2",netblock:"资源区",cloud:"6C 12G",system:"win2019_dtc",number:"50",min:"11",max:"23",action:"变更",desc:"业务需求"},{name:"ess3",netblock:"资源区",cloud:"8C 16G",system:"win2019_dtc",number:"50",min:"11",max:"23",action:"回收",desc:"业务需求"}],selectTable:[{name:"M2",system:"CentOS 7.6 64bit",cpu:"4C",memory:"8",hard:"50",nas:"200G",oss:"250G",ots:"500G",lb:"Lb1",demand:"ess1",netblock:"公众区",action:"新增",desc:"业务需要"},{name:"C1",system:"CentOS 7.6 64bit",cpu:"2C",memory:"4",hard:"250",nas:"100G",oss:"150G",ots:"100G",lb:"Lb1",demand:"ess1",netblock:"公众区",action:"回收",desc:"业务需要"}],destArray:[{label:"2C 4G",value:1},{label:"4C 8G",value:2},{label:"6C 8G",value:3}],boxShow:!0,rules:{name:[{required:!0,message:"请输入"}]}}},methods:{sentBoxShow:function(){this.boxShow=!this.boxShow}}},o=(l("1bpf"),l("KHd+")),s=Object(o.a)(a,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"form_tool"},[l("div",{staticClass:"form_tool_bar",on:{click:t.sentBoxShow}},[t._v("\n        弹性伸缩\n        "),l("div",{staticStyle:{width:"auto",float:"right","padding-right":"8px",height:"25px"}},[t.boxShow?l("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-down"},on:{click:t.sentBoxShow}}):l("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-right"},on:{click:t.sentBoxShow}})],1)]),t._v(" "),t.boxShow?l("div",{staticClass:"its_table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{"header-row-class-name":"its_table_header",border:"",data:t.demandTable,"max-height":"322px"}},[l("el-table-column",{attrs:{type:"index",label:"序号",width:"55px",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{label:"弹性伸缩名称",prop:"name","min-width":"100px","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v("\n                        "+t._s(e.row.name)+"\n                    ")])]}}],null,!1,1887514273)}),t._v(" "),l("el-table-column",{attrs:{label:"网络区域",prop:"netblock",width:"90px"}}),t._v(" "),l("el-table-column",{attrs:{label:"云服务器规格","min-width":"100px",prop:"cloud","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v("\n                        "+t._s(e.row.cloud)+"\n                    ")])]}}],null,!1,3513936919)}),t._v(" "),l("el-table-column",{attrs:{label:"操作系统",prop:"system","min-width":"120px"}}),t._v(" "),l("el-table-column",{attrs:{label:"伸缩总数(台)",prop:"number","min-width":"80px"}}),t._v(" "),l("el-table-column",{attrs:{label:"最大伸缩(台)",prop:"max","min-width":"80px"}}),t._v(" "),l("el-table-column",{attrs:{label:"最小伸缩(台)",prop:"min","min-width":"80px"}}),t._v(" "),l("el-table-column",{attrs:{label:"用途",prop:"desc","min-width":"100px","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"动作",prop:"action",width:"60px"}})],1)],1):t._e(),t._v(" "),l("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.add3,title:"编辑",width:"1040px",top:"5vh"},on:{"update:visible":function(e){t.add3=e}}},[l("div",{staticClass:"its_det"},[l("el-row",{staticClass:"its_form_row"},[l("el-form",{attrs:{model:t.addform,size:"mini","label-width":"120px",rules:t.rules}},[l("el-col",{attrs:{span:11}},["1"==t.addform.action?l("el-form-item",{attrs:{label:"弹性伸缩名称",prop:"name"}},[l("el-input",{attrs:{disabled:"",placeholder:"请输入"},model:{value:t.addform.name,callback:function(e){t.$set(t.addform,"name",e)},expression:"addform.name"}})],1):l("el-form-item",{attrs:{label:"弹性伸缩名称",prop:"name"}},[l("el-input",{attrs:{placeholder:"请选择"},model:{value:t.addform.cloudedit,callback:function(e){t.$set(t.addform,"cloudedit",e)},expression:"addform.cloudedit"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"网络区域"}},[l("el-select",{attrs:{disabled:"",placeholder:"请输入内容"},model:{value:t.addform.netblock,callback:function(e){t.$set(t.addform,"netblock",e)},expression:"addform.netblock"}},[l("el-option",{attrs:{label:"资源区",value:"1"}}),t._v(" "),l("el-option",{attrs:{label:"公众区",value:"2"}}),t._v(" "),l("el-option",{attrs:{label:"互联网",value:"3"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"动作"}},[l("el-select",{attrs:{disabled:"",placeholder:"请输入内容"},model:{value:t.addform.action,callback:function(e){t.$set(t.addform,"action",e)},expression:"addform.action"}},[l("el-option",{attrs:{label:"新增",value:"1"}}),t._v(" "),l("el-option",{attrs:{label:"变更",value:"2"}}),t._v(" "),l("el-option",{attrs:{label:"回收",value:"3"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"操作系统"}},[l("el-select",{attrs:{value:"CentOS 7.6 64bit",placeholder:"请输入内容"}},[l("el-option",{attrs:{label:"CentOS 7.5 64bit",value:"1"}}),t._v(" "),l("el-option",{attrs:{label:"CentOS 7.6 64bit",value:"2"}}),t._v(" "),l("el-option",{attrs:{label:"Windows Server 2008 R2 64bit",value:"3"}}),t._v(" "),l("el-option",{attrs:{label:"Windows Server 2012 R2 64bit",value:"4"}}),t._v(" "),l("el-option",{attrs:{label:"统信 UOS SP1",value:"5"}}),t._v(" "),l("el-option",{attrs:{label:"UOS V1030",value:"6"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"云服务器规格"}},[l("el-select",{attrs:{placeholder:"请选择",value:1,size:"small"}},t._l(t.destArray,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[l("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),t._v(" "),l("span",{staticStyle:{float:"right",color:"#333","font-size":"12px","padding-right":"10px"}},[t._v(t._s(e.address||"--"))])])}),1)],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"伸缩总数(台)"}},["2"==t.addform.action?l("div",{staticClass:"flexLayout_row"},[l("el-input",{attrs:{placeholder:"请输入",value:1,size:"small"}}),t._v(" "),l("div",{staticStyle:{padding:"0 5px","text-align":"center"}},[t._v("→")]),t._v(" "),l("el-input",{attrs:{placeholder:"请输入",value:10,size:"small"}})],1):l("el-input",{attrs:{placeholder:"请输入",value:1==t.addform.action?"":"50",size:"small"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"最大伸缩(台)"}},["2"==t.addform.action?l("div",{staticClass:"flexLayout_row"},[l("el-input",{attrs:{placeholder:"请输入",value:1,size:"small"}}),t._v(" "),l("div",{staticStyle:{padding:"0 5px","text-align":"center"}},[t._v("→")]),t._v(" "),l("el-input",{attrs:{placeholder:"请输入",value:10,size:"small"}})],1):l("el-input",{attrs:{placeholder:"请输入",value:1==t.addform.action?"":"23",size:"small"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"最小伸缩(台)"}},["2"==t.addform.action?l("div",{staticClass:"flexLayout_row"},[l("el-input",{attrs:{placeholder:"请输入",value:1,size:"small"}}),t._v(" "),l("div",{staticStyle:{padding:"0 5px","text-align":"center"}},[t._v("→")]),t._v(" "),l("el-input",{attrs:{placeholder:"请输入",value:10,size:"small"}})],1):l("el-input",{attrs:{placeholder:"请输入",value:1==t.addform.action?"":"11",size:"small"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"用途",prop:"name"}},[l("el-input",{attrs:{type:"textarea",rows:2,disabled:"",placeholder:"请填写此次申请的业务用途，如：用于部署此系统的WEB应用"}})],1)],1)],1)],1)],1),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add3=!1}}},[t._v("确 定")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add3=!1}}},[t._v("取 消")])],1)])],1)},[],!1,null,null,null);e.default=s.exports},"1bpf":function(t,e,l){"use strict";var a=l("MYER");l.n(a).a},MYER:function(t,e,l){}}]);