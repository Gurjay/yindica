(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-64c5"],{Flz9:function(t,e,l){},LAwH:function(t,e,l){"use strict";l.r(e);var a={data:function(){return{discoverTab:"1",activeName:["1","2","3","4","5"],showSelect:!1,addform:{name:"Huawei_slb1",netblock:"1",netblock2:"",action:"1",cloud:[],cloudedit:""},add:!1,add2:!1,add3:!1,add22:!1,loadbalanceTable:[{name:"Huawei_slb1",netblock:"公众区",cloud:"Huawei_A1",http:"--",https:"--",tcp:"--",udp:"80",desc:"业务需要",action:"新增"},{name:"Huawei_slb2",netblock:"资源区",cloud:"Ali_A3,Ali_A4",http:"--",https:"--",ip:"112.121.12.162",tcp:"441,442,443",udp:"--",desc:"业务需要",action:"变更"},{name:"Ali_slb3",netblock:"资源区",cloud:"A6",ip:"112.121.12.158",http:"90",https:"80,82",tcp:"160-163",udp:"--",desc:"业务需要",action:"回收"}],destArray:[{label:"A1",value:1},{label:"A2",value:2},{label:"A3",value:3,address:"11.73.61.12"},{label:"A4",value:4,address:"131.123.61.9"},{label:"A5",value:5,address:"131.123.61.13"}],boxShow:!0,selectTable:[{name:"M2",system:"CentOS 7.6 64bit",cpu:"4C",memory:"8",hard:"50",nas:"200G",oss:"250G",ots:"500G",lb:"Lb1",demand:"ess1",netblock:"公众区",action:"新增",desc:"业务需要"},{name:"C1",system:"CentOS 7.6 64bit",cpu:"2C",memory:"4",hard:"250",nas:"100G",oss:"150G",ots:"100G",lb:"Lb1",demand:"ess1",netblock:"公众区",action:"回收",desc:"业务需要"}],rules:{name:[{required:!0,message:"请输入"}]}}},methods:{sentBoxShow:function(){this.boxShow=!this.boxShow}}},o=(l("xh39"),l("KHd+")),s=Object(o.a)(a,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"form_tool"},[l("div",{staticClass:"form_tool_bar",on:{click:t.sentBoxShow}},[t._v("\n        负载均衡\n         "),l("div",{staticStyle:{width:"auto",float:"right","padding-right":"8px",height:"25px"}},[t.boxShow?l("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-down"},on:{click:t.sentBoxShow}}):l("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-right"},on:{click:t.sentBoxShow}})],1)]),t._v(" "),t.boxShow?l("div",{staticClass:"its_table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{"header-row-class-name":"its_table_header",border:"",data:t.loadbalanceTable,"max-height":"322px"}},[l("el-table-column",{attrs:{type:"index",label:"序号",width:"55px",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{label:"负载均衡名称",prop:"name","min-width":"120px","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"内网IP",prop:"ip",width:"100px","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return["新增"==e.row.action?l("span",[t._v("--")]):l("span",[t._v(t._s(e.row.ip))])]}}],null,!1,1971800088)}),t._v(" "),l("el-table-column",{attrs:{label:"网络区域",prop:"netblock",width:"90px"}}),t._v(" "),l("el-table-column",{attrs:{label:"云服务器名称","min-width":"120px",prop:"cloud","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"HTTP端口",prop:"http","min-width":"80px"}}),t._v(" "),l("el-table-column",{attrs:{label:"HTTPS端口",prop:"https","min-width":"80px"}}),t._v(" "),l("el-table-column",{attrs:{label:"TCP端口",prop:"tcp","min-width":"80px"}}),t._v(" "),l("el-table-column",{attrs:{label:"UDP端口",prop:"udp","min-width":"80px"}}),t._v(" "),l("el-table-column",{attrs:{label:"用途",prop:"desc","min-width":"100px","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"动作",prop:"action",width:"60px"}}),t._v(" "),l("el-table-column",{attrs:{label:"操作",fixed:"right",prop:"operaiton",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return["回收"==e.row.action?l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"查看",enterable:!1,"hide-after":2200,placement:"bottom"}},[l("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-view"},on:{click:function(e){t.add22=!0}}})],1):l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"查看",enterable:!1,"hide-after":2200,placement:"bottom"}},[l("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-view"},on:{click:function(e){t.add=!0}}})],1),t._v(" "),"回收"!=e.row.action?l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",enterable:!1,"hide-after":2200,placement:"bottom"}},[l("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-edit"},on:{click:function(e){t.add3=!0}}})],1):l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",enterable:!1,"hide-after":2200,placement:"bottom"}},[l("el-button",{attrs:{type:"text",size:"mini",disabled:"",icon:"el-icon-edit"}})],1),t._v(" "),l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",enterable:!1,"hide-after":2200,placement:"bottom"}},[l("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-delete"},on:{click:function(e){t.add=!0}}})],1)]}}],null,!1,2325697269)})],1)],1):t._e(),t._v(" "),l("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.add,title:"查看",width:"1040px",top:"5vh"},on:{"update:visible":function(e){t.add=e}}},[l("div",{staticClass:"its_tabs"},[l("el-tabs",{attrs:{type:"border-card"},model:{value:t.discoverTab,callback:function(e){t.discoverTab=e},expression:"discoverTab"}},[l("el-tab-pane",{attrs:{label:"负载均衡详情",name:"1"}},[l("div",{staticClass:"its_det"},[l("el-row",{staticClass:"its_form_row"},[l("el-form",{ref:"form",attrs:{model:t.addform,size:"mini",disabled:"","label-width":"120px",rules:t.rules}},[l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"负载均衡名称"}},[l("el-input",{attrs:{value:t.addform.name,disabled:"",placeholder:"请输入名称",size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"内网IP",prop:"memory"}},[l("el-input",{attrs:{value:t.addform.address||"--",placeholder:"请输入名称",disabled:"",size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"业务系统",prop:"address"}},[l("el-input",{attrs:{value:"宁波市基层社会服务管理综合信息系统",placeholder:"请输入名称",disabled:"",size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"网络区域"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{value:"公众区",disabled:"",placeholder:"请选择",size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"TCP端口"}},[l("el-input",{attrs:{value:t.addform.tcpPorts||"--",disabled:"",placeholder:"请输入端口号,如8060,1020-1060",size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"UDP端口"}},[l("el-input",{attrs:{value:t.addform.udp||"--",disabled:"",placeholder:"请输入端口号,如8060,1020-1060",size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"云服务器"}},[l("div",{staticClass:"its_table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{"max-height":"322px",border:"",data:[{}]}},[l("el-table-column",{attrs:{label:"序号",type:"index",width:"55",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"label",label:"云服务器名称","show-overflow-tooltip":!0,"min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                        Huawei_A1\n                                                    ")]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"address",label:"内网IP","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                        --\n                                                    ")]}}])})],1)],1)])],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"互联网地址"}},[l("div",{staticClass:"its_table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{"header-row-class-name":"its_table_header",border:"",data:[],"max-height":"322px"}},[l("el-table-column",{attrs:{label:"电信IP","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                        "+t._s(e.row.Telecom||"--")+"\n                                                    ")]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"移动IP","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                        "+t._s(e.row.Mobile||"--")+"\n                                                    ")]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"联通IP","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                        "+t._s(e.row.Unicom||"--")+"\n                                                    ")]}}])})],1)],1)])],1)],1)],1)],1)]),t._v(" "),l("el-tab-pane",{attrs:{label:"负载均衡新增申请",name:"2"}},[l("div",{staticClass:"its_det"},[l("el-row",{staticClass:"its_form_row"},[l("el-form",{attrs:{model:t.addform,size:"mini",disabled:"","label-width":"120px",rules:t.rules}},[l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"负载均衡名称",prop:"name"}},[l("el-input",{attrs:{placeholder:"请输入"},model:{value:t.addform.name,callback:function(e){t.$set(t.addform,"name",e)},expression:"addform.name"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"网络区域"}},[l("el-select",{attrs:{disabled:"1"!=t.addform.action&&""==t.addform.cloudedit,placeholder:"请输入内容"},model:{value:t.addform.netblock,callback:function(e){t.$set(t.addform,"netblock",e)},expression:"addform.netblock"}},[l("el-option",{attrs:{label:"资源区",value:"1"}}),t._v(" "),l("el-option",{attrs:{label:"公众区",value:"2"}}),t._v(" "),l("el-option",{attrs:{label:"互联网",value:"3"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"云服务器",prop:"name"}},["1"==t.addform.action?l("el-select",{attrs:{multiple:"",placeholder:"请选择",size:"mini"},model:{value:t.addform.cloud,callback:function(e){t.$set(t.addform,"cloud",e)},expression:"addform.cloud"}},t._l(t.destArray,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[l("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),t._v(" "),l("span",{staticStyle:{float:"right",color:"#333","font-size":"12px","padding-right":"10px"}},[t._v(t._s(e.address||"--"))])])}),1):l("el-select",{attrs:{multiple:"",placeholder:"请选择",value:[3,4,5],size:"mini",disabled:"3"==t.addform.action&&""==t.addform.cloudedit}},t._l(t.destArray,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[l("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),t._v(" "),l("span",{staticStyle:{float:"right",color:"#333","font-size":"12px","padding-right":"10px"}},[t._v(t._s(e.address||"--"))])])}),1)],1)],1),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"TCP端口"}},[l("el-input",{attrs:{placeholder:"请输入端口号，如8060，1020-1060",value:2==t.addform.action?"441,442,443":"",disabled:3==t.addform.action&&""==t.addform.cloudedit,size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"UDP端口"}},[l("el-input",{attrs:{placeholder:"请输入端口号，如8060，1020-1060",disabled:3==t.addform.action&&""==t.addform.cloudedit,size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"用途",prop:"name"}},[l("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请填写此次申请的业务用途，如：用于部署此系统的WEB应用"}})],1)],1)],1)],1)],1)])],1)],1),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add=!1}}},[t._v("取 消")])],1)]),t._v(" "),l("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.add3,title:"编辑",width:"1040px",top:"5vh"},on:{"update:visible":function(e){t.add3=e}}},[l("div",{staticClass:"its_det"},[l("el-row",{staticClass:"its_form_row"},[l("el-form",{attrs:{model:t.addform,size:"mini","label-width":"120px",rules:t.rules}},[l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"负载均衡名称"}},[l("el-input",{attrs:{placeholder:"请输入",disabled:""},model:{value:t.addform.name,callback:function(e){t.$set(t.addform,"name",e)},expression:"addform.name"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"网络区域"}},[l("el-select",{attrs:{disabled:"",placeholder:"请输入内容"},model:{value:t.addform.netblock,callback:function(e){t.$set(t.addform,"netblock",e)},expression:"addform.netblock"}},[l("el-option",{attrs:{label:"资源区",value:"1"}}),t._v(" "),l("el-option",{attrs:{label:"公众区",value:"2"}}),t._v(" "),l("el-option",{attrs:{label:"互联网",value:"3"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"动作"}},[l("el-select",{attrs:{value:"新增",disabled:"",placeholder:"请输入内容"}},[l("el-option",{attrs:{label:"新增",value:"1"}}),t._v(" "),l("el-option",{attrs:{label:"变更",value:"2"}}),t._v(" "),l("el-option",{attrs:{label:"回收",value:"3"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"云服务器",prop:"name"}},["1"==t.addform.action?l("el-select",{attrs:{multiple:"",placeholder:"请选择",size:"mini"},model:{value:t.addform.cloud,callback:function(e){t.$set(t.addform,"cloud",e)},expression:"addform.cloud"}},t._l(t.destArray,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[l("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),t._v(" "),l("span",{staticStyle:{float:"right",color:"#333","font-size":"12px","padding-right":"10px"}},[t._v(t._s(e.address||"--"))])])}),1):l("el-select",{attrs:{multiple:"",placeholder:"请选择",value:[3,4,5],size:"mini",disabled:"3"==t.addform.action&&""==t.addform.cloudedit}},t._l(t.destArray,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[l("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),t._v(" "),l("span",{staticStyle:{float:"right",color:"#333","font-size":"12px","padding-right":"10px"}},[t._v(t._s(e.address||"--"))])])}),1)],1)],1),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"TCP端口"}},[l("el-input",{attrs:{placeholder:"请输入端口号，如8060，1020-1060",value:2==t.addform.action?"441,442,443":"",size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"UDP端口"}},[l("el-input",{attrs:{placeholder:"请输入端口号，如8060，1020-1060",size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"用途",prop:"name"}},[l("el-input",{attrs:{type:"textarea",rows:2,disabled:"",placeholder:"请填写此次申请的业务用途，如：用于部署此系统的WEB应用"}})],1)],1)],1)],1)],1),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add3=!1}}},[t._v("确 定")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add3=!1}}},[t._v("取 消")])],1)]),t._v(" "),l("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.add2,title:"查看",width:"1040px",top:"5vh"},on:{"update:visible":function(e){t.add2=e}}},[l("div",{staticClass:"its_tabs"},[l("el-tabs",{attrs:{type:"border-card"},model:{value:t.discoverTab,callback:function(e){t.discoverTab=e},expression:"discoverTab"}},[l("el-tab-pane",{attrs:{label:"负载均衡详情",name:"1"}},[l("div",{staticClass:"its_det"},[l("el-row",{staticClass:"its_form_row"},[l("el-form",{ref:"form",attrs:{model:t.addform,size:"mini",disabled:"","label-width":"120px",rules:t.rules}},[l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"负载均衡名称"}},[l("el-input",{attrs:{value:t.addform.name,disabled:"",placeholder:"请输入名称",size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"内网IP",prop:"memory"}},[l("el-input",{attrs:{value:t.addform.address||"--",placeholder:"请输入名称",disabled:"",size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"业务系统",prop:"address"}},[l("el-input",{attrs:{value:"宁波市基层社会服务管理综合信息系统",placeholder:"请输入名称",disabled:"",size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"网络区域"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{value:"公众区",disabled:"",placeholder:"请选择",size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"TCP端口"}},[l("el-input",{attrs:{value:t.addform.tcpPorts||"--",disabled:"",placeholder:"请输入端口号,如8060,1020-1060",size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"UDP端口"}},[l("el-input",{attrs:{value:t.addform.udp||"--",disabled:"",placeholder:"请输入端口号,如8060,1020-1060",size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"云服务器"}},[l("div",{staticClass:"its_table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{"max-height":"322px",border:"",data:[{}]}},[l("el-table-column",{attrs:{label:"序号",type:"index",width:"55",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"label",label:"云服务器名称","show-overflow-tooltip":!0,"min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                        Huawei_A1\n                                                    ")]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"address",label:"内网IP","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                        --\n                                                    ")]}}])})],1)],1)])],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"互联网地址"}},[l("div",{staticClass:"its_table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{"header-row-class-name":"its_table_header",border:"",data:[],"max-height":"322px"}},[l("el-table-column",{attrs:{label:"电信IP","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                        "+t._s(e.row.Telecom||"--")+"\n                                                    ")]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"移动IP","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                        "+t._s(e.row.Mobile||"--")+"\n                                                    ")]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"联通IP","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                        "+t._s(e.row.Unicom||"--")+"\n                                                    ")]}}])})],1)],1)])],1)],1)],1)],1)]),t._v(" "),l("el-tab-pane",{attrs:{label:"负载均衡变更申请",name:"2"}},[l("div",{staticClass:"its_det"},[l("el-row",{staticClass:"its_form_row"},[l("el-form",{attrs:{model:t.addform,size:"mini",disabled:"","label-width":"120px",rules:t.rules}},[l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"负载均衡名称",prop:"name"}},[l("el-input",{attrs:{placeholder:"请输入"},model:{value:t.addform.name,callback:function(e){t.$set(t.addform,"name",e)},expression:"addform.name"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"网络区域"}},[l("el-select",{attrs:{disabled:"1"!=t.addform.action&&""==t.addform.cloudedit,placeholder:"请输入内容"},model:{value:t.addform.netblock,callback:function(e){t.$set(t.addform,"netblock",e)},expression:"addform.netblock"}},[l("el-option",{attrs:{label:"资源区",value:"1"}}),t._v(" "),l("el-option",{attrs:{label:"公众区",value:"2"}}),t._v(" "),l("el-option",{attrs:{label:"互联网",value:"3"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"变更前云服务器"}},[l("div",{staticClass:"its_table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{"max-height":"322px",border:"",data:[{}]}},[l("el-table-column",{attrs:{label:"序号",type:"index",width:"55",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"label",label:"云服务器名称","show-overflow-tooltip":!0,"min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                        Huawei_A8\n                                                    ")]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"address",label:"内网IP","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                        112.122.131.11\n                                                    ")]}}])})],1)],1)])],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"变更后云服务器"}},[l("div",{staticClass:"its_table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{"max-height":"322px",border:"",data:[{}]}},[l("el-table-column",{attrs:{label:"序号",type:"index",width:"55",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"label",label:"云服务器名称","show-overflow-tooltip":!0,"min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                        Huawei_c1\n                                                    ")]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"address",label:"内网IP","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                                                        111.211.222.11\n                                                    ")]}}])})],1)],1)])],1),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"TCP端口"}},[l("el-input",{attrs:{placeholder:"请输入端口号，如8060，1020-1060",value:2==t.addform.action?"441,442,443":"",disabled:3==t.addform.action&&""==t.addform.cloudedit,size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"UDP端口"}},[l("el-input",{attrs:{placeholder:"请输入端口号，如8060，1020-1060",disabled:3==t.addform.action&&""==t.addform.cloudedit,size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"HTTP端口"}},[l("el-input",{attrs:{placeholder:"请输入端口号，如8060，1020-1060",disabled:3==t.addform.action&&""==t.addform.cloudedit,value:2==t.addform.action?"90":"",size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"HTTPS端口"}},[l("el-input",{attrs:{placeholder:"请输入端口号，如8060，1020-1060",disabled:3==t.addform.action&&""==t.addform.cloudedit,size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"用途",prop:"name"}},[l("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请填写此次申请的业务用途，如：用于部署此系统的WEB应用"}})],1)],1)],1)],1)],1)])],1)],1),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add2=!1}}},[t._v("取 消")])],1)]),t._v(" "),l("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.add22,title:"查看",width:"1040px",top:"5vh"},on:{"update:visible":function(e){t.add22=e}}},[l("div",{staticClass:"its_tabs"},[l("el-tabs",{attrs:{type:"border-card"},model:{value:t.discoverTab,callback:function(e){t.discoverTab=e},expression:"discoverTab"}},[l("el-tab-pane",{attrs:{label:"负载均衡回收申请",name:"1"}},[l("div",{staticClass:"its_det"},[l("el-row",{staticClass:"its_form_row"},[l("el-form",{attrs:{model:t.addform,size:"mini",disabled:"","label-width":"120px",rules:t.rules}},[l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"负载均衡名称",prop:"name"}},[l("el-input",{attrs:{value:"Ali_slb3",placeholder:"请输入"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"网络区域"}},[l("el-select",{attrs:{disabled:"1"!=t.addform.action&&""==t.addform.cloudedit,placeholder:"请输入内容"},model:{value:t.addform.netblock,callback:function(e){t.$set(t.addform,"netblock",e)},expression:"addform.netblock"}},[l("el-option",{attrs:{label:"资源区",value:"1"}}),t._v(" "),l("el-option",{attrs:{label:"公众区",value:"2"}}),t._v(" "),l("el-option",{attrs:{label:"互联网",value:"3"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"云服务器",prop:"name"}},["1"==t.addform.action?l("el-select",{attrs:{multiple:"",placeholder:"请选择",size:"mini"},model:{value:t.addform.cloud,callback:function(e){t.$set(t.addform,"cloud",e)},expression:"addform.cloud"}},t._l(t.destArray,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[l("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),t._v(" "),l("span",{staticStyle:{float:"right",color:"#333","font-size":"12px","padding-right":"10px"}},[t._v(t._s(e.address||"--"))])])}),1):l("el-select",{attrs:{multiple:"",placeholder:"请选择",value:[3,4,5],size:"mini",disabled:"3"==t.addform.action&&""==t.addform.cloudedit}},t._l(t.destArray,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[l("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),t._v(" "),l("span",{staticStyle:{float:"right",color:"#333","font-size":"12px","padding-right":"10px"}},[t._v(t._s(e.address||"--"))])])}),1)],1)],1),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"TCP端口"}},[l("el-input",{attrs:{placeholder:"请输入端口号，如8060，1020-1060",value:2==t.addform.action?"441,442,443":"",disabled:3==t.addform.action&&""==t.addform.cloudedit,size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"UDP端口"}},[l("el-input",{attrs:{placeholder:"请输入端口号，如8060，1020-1060",disabled:3==t.addform.action&&""==t.addform.cloudedit,size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"HTTPS端口"}},[l("el-input",{attrs:{placeholder:"请输入端口号，如8060，1020-1060",value:2==t.addform.action?"441,442,443":"",disabled:3==t.addform.action&&""==t.addform.cloudedit,size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"HTTP端口"}},[l("el-input",{attrs:{placeholder:"请输入端口号，如8060，1020-1060",disabled:3==t.addform.action&&""==t.addform.cloudedit,size:"mini"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"用途",prop:"name"}},[l("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请填写此次申请的业务用途，如：用于部署此系统的WEB应用"}})],1)],1)],1)],1)],1)])],1)],1),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add22=!1}}},[t._v("取 消")])],1)])],1)},[],!1,null,null,null);e.default=s.exports},xh39:function(t,e,l){"use strict";var a=l("Flz9");l.n(a).a}}]);