(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-098b"],{"9Q8S":function(t,e,l){"use strict";l.r(e);var a={data:function(){return{activeName:["1","2","3"],addform:{name:"A1",netblock:"",netblock2:"",action:"1"},add:!1,boxShow:!0,networkTable:[{netblock:"互联网",netblock2:"公众区",resource:"A1,A2",resource2:"A3,A4",tcp:"80,82,84",udp:"60-66",action:"开放",time:"永久",st:"局委办发起",make:"--"},{netblock:"资源区",netblock2:"公众区",resource:"B1,B2",resource2:"B3,B4",tcp:"--",udp:"161",action:"关闭",time:"2021-03-21",st:"系统自动",make:"--"}],rules:{name:[{required:!0,message:"请输入"}]}}},methods:{sentBoxShow:function(){this.boxShow=!this.boxShow}}},o=(l("QwQK"),l("KHd+")),r=Object(o.a)(a,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"form_tool"},[l("div",{staticClass:"form_tool_bar",on:{click:t.sentBoxShow}},[t._v("\n        网络策略\n        "),l("div",{staticStyle:{width:"auto",float:"right","padding-right":"8px",height:"25px"}},[t.boxShow?l("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-down"},on:{click:t.sentBoxShow}}):l("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-right"},on:{click:t.sentBoxShow}})],1)]),t._v(" "),t.boxShow?l("div",{staticClass:"its_table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{"header-row-class-name":"its_table_header",border:"",data:t.networkTable,"max-height":"322px"}},[l("el-table-column",{attrs:{type:"index",label:"序号",width:"55px",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{label:"源地址",prop:"resource","min-width":"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v("\n                        "+t._s(e.row.resource)+"\n                    ")])]}}],null,!1,1640341068)}),t._v(" "),l("el-table-column",{attrs:{label:"源网络区域",prop:"netblock","min-width":"90px"}}),t._v(" "),l("el-table-column",{attrs:{label:"目标地址",prop:"resource2","min-width":"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v("\n                        "+t._s(e.row.resource2)+"\n                    ")])]}}],null,!1,876693150)}),t._v(" "),l("el-table-column",{attrs:{label:"目标网络区域",prop:"netblock2","min-width":"90px"}}),t._v(" "),l("el-table-column",{attrs:{label:"TCP端口",prop:"tcp","min-width":"100px"}}),t._v(" "),l("el-table-column",{attrs:{label:"UDP端口",prop:"udp","min-width":"100px"}}),t._v(" "),l("el-table-column",{attrs:{label:"生效时间",prop:"time","min-width":"90px"}}),t._v(" "),l("el-table-column",{attrs:{label:"策略入口",prop:"st",width:"100px"}}),t._v(" "),l("el-table-column",{attrs:{label:"用途",prop:"make",width:"100px","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"动作",prop:"action",width:"60px"}})],1)],1):t._e(),t._v(" "),l("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.add,title:"编辑",width:"1040px",top:"5vh"},on:{"update:visible":function(e){t.add=e}}},[l("div",{staticClass:"its_det"},[l("el-row",{staticClass:"its_form_row"},[l("el-form",{attrs:{model:t.addform,size:"mini","label-width":"120px",rules:t.rules}},[l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"生效时间"}},[l("el-select",{attrs:{value:"永久",placeholder:"请输入内容"}},[l("el-option",{attrs:{label:"永久",value:"1"}}),t._v(" "),l("el-option",{attrs:{label:"自定义",value:"2"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"动作"}},[l("el-select",{attrs:{value:"1",disabled:"",placeholder:"请输入内容"}},[l("el-option",{attrs:{label:"开放",value:"1"}}),t._v(" "),l("el-option",{attrs:{label:"关闭",value:"2"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"源地址",prop:"name"}},[l("el-col",{attrs:{span:4}},[l("el-select",{attrs:{placeholder:"请输入内容"},model:{value:t.addform.netblock,callback:function(e){t.$set(t.addform,"netblock",e)},expression:"addform.netblock"}},[l("el-option",{attrs:{label:"资源区",value:"1"}}),t._v(" "),l("el-option",{attrs:{label:"公众区",value:"2"}}),t._v(" "),l("el-option",{attrs:{label:"互联网",value:"3"}})],1)],1),t._v(" "),l("el-col",{staticStyle:{"padding-left":"5px"},attrs:{span:20}},[l("el-select",{attrs:{multiple:"","allow-create":"",filterable:"","default-first-option":"",placeholder:"请选择云服务器或输入IP地址(段),如:192.168.0.1 或 192.168.0.1-5  ",size:"mini"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"目标地址",prop:"name"}},[l("el-col",{attrs:{span:4}},[l("el-select",{attrs:{placeholder:"请输入内容"},model:{value:t.addform.netblock2,callback:function(e){t.$set(t.addform,"netblock2",e)},expression:"addform.netblock2"}},[l("el-option",{attrs:{label:"资源区",value:"1"}}),t._v(" "),l("el-option",{attrs:{label:"公众区",value:"2"}}),t._v(" "),l("el-option",{attrs:{label:"互联网",value:"3"}})],1)],1),t._v(" "),l("el-col",{staticStyle:{"padding-left":"5px"},attrs:{span:20}},[l("el-select",{attrs:{multiple:"","allow-create":"",filterable:"","default-first-option":"",placeholder:"请选择云服务器或输入IP地址(段),如:192.168.0.1 或 192.168.0.1-5  ",size:"mini"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"TCP端口"}},[l("el-input",{attrs:{placeholder:"请输入端口号，如8060，1020-1060",size:"mini"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"UDP端口"}},[l("el-input",{attrs:{placeholder:"请输入端口号，如8060，1020-1060",size:"mini"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"用途"}},[l("el-input",{attrs:{type:"textarea",rows:2,disabled:"",placeholder:"请填写此次申请的业务用途，如：用于部署此系统的WEB应用"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:" "}},[l("el-alert",{attrs:{type:"error",closable:!1}},[l("template",{slot:"title"},[l("div",[t._v("1. 考虑到安全原因，Windows远程桌面原TCP3389端口请使用40000端口号进行策略申请及访问，Linux远程管理 ssh原TCP22端口请使用8122端口号进行策略申请及访问，TCP/UDP 135-139、111、445端口不予开放;")]),t._v(" "),l("div",[t._v("2. 政务云外访问政务云内业务系统的远程端口，必须经过堡垒机，由政务云分配相应账号；")]),t._v(" "),l("div",[t._v("3. 用户访问阿里云服务器后台必须通过堡垒机，不开放直通路径；")])])],2)],1)],1)],1)],1)],1),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add=!1}}},[t._v("确 定")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add=!1}}},[t._v("取 消")])],1)])],1)},[],!1,null,null,null);e.default=r.exports},HQF4:function(t,e,l){},QwQK:function(t,e,l){"use strict";var a=l("HQF4");l.n(a).a}}]);