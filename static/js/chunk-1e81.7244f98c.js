(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1e81"],{JxFM:function(t,e,a){"use strict";var l=a("TPDS");a.n(l).a},"L/AP":function(t,e,a){"use strict";var l=a("xdCQ");a.n(l).a},TPDS:function(t,e,a){},WKj9:function(t,e,a){"use strict";a.r(e);var l={data:function(){return{activeName:["1","2","3"],addform:{name:"A1",netblock:"",netblock2:"",action:"1"},add:!1,add2:!1,add33:!1,boxShow:!0,choiceModule5:["Huawei_A1","Huawei_B1"],networkTable:[{netblock:"actting",netblock2:"hao123456",resource:"112.121.160.17",resource2:"Huawei_A1,Huawei_B1",tcp:"80,82,84",udp:"60-66",action:"开放",time:"永久",st:"人工",make:"--"},{netblock:"acount",netblock2:"make0091",resource:"111.101.131.12",resource2:"B3,B4",tcp:"--",udp:"161",action:"关闭",time:"2021-03-21",st:"人工",make:"--"}],cloudTable:[{name:"Huawei_A1",system:"CentOS 7.6 64bit",cpu:"4C",memory:"8",IP:"10.68.128.145",hard:"50",nas:"200G",oss:"250G",ots:"500G",lb:"Lb1",demand:"ess1",netblock:"公众区",action:"新增",desc:"业务需要"},{name:"Huawei_B1",system:"CentOS 7.6 64bit",cpu:"4",memory:"16",hard:"200",IP:"10.68.128.121",nas:"50G",oss:"1T",ots:"0G",action:"变更",lb:"Lb3",demand:"ess2",netblock:"资源区",desc:"业务需求"},{name:"HuaweiK2",system:"CentOS 7.6 64bit",cpu:"2C",IP:"10.68.128.141",memory:"4",hard:"250",nas:"100G",oss:"150G",ots:"100G",lb:"Lb1",demand:"ess1",netblock:"公众区",action:"变更",desc:"业务需要"},{name:"Huawei_C1",system:"CentOS 7.6 64bit",cpu:"2C",IP:"10.68.128.156",memory:"4",hard:"250",nas:"100G",oss:"150G",ots:"100G",lb:"Lb1",demand:"ess1",netblock:"公众区",action:"回收",desc:"业务需要"}],rules:{name:[{required:!0,message:"请输入"}]}}},methods:{sentBoxShow:function(){this.boxShow=!this.boxShow}}},o=(a("L/AP"),a("JxFM"),a("KHd+")),i=Object(o.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_tool"},[a("div",{staticClass:"form_tool_bar",on:{click:t.sentBoxShow}},[t._v("\n        堡垒机账号\n         "),a("div",{staticStyle:{width:"auto",float:"right","padding-right":"8px",height:"25px"}},[t.boxShow?a("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-down"},on:{click:t.sentBoxShow}}):a("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-right"},on:{click:t.sentBoxShow}})],1)]),t._v(" "),t.boxShow?a("div",{staticClass:"its_table"},[a("el-col",{staticStyle:{"border-bottom":"1px solid #ddd",padding:"5px"}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"新增账号",enterable:!1,"hide-after":2200,placement:"bottom"}},[a("el-button",{staticStyle:{padding:"6px"},attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-plus"},on:{click:function(e){t.add=!0}}})],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{"header-row-class-name":"its_table_header",border:"",data:t.networkTable,"max-height":"322px"}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"55px",Huaweign:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"管理地址",prop:"resource","min-width":"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("\n                        "+t._s(e.row.resource)+"\n                    ")])]}}],null,!1,1640341068)}),t._v(" "),a("el-table-column",{attrs:{label:"堡垒机账号",prop:"netblock","min-width":"90px"}}),t._v(" "),a("el-table-column",{attrs:{label:"堡垒机密码",prop:"netblock2","min-width":"90px"}}),t._v(" "),a("el-table-column",{attrs:{label:"管理服务器",prop:"resource2","min-width":"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("\n                        "+t._s(e.row.resource2)+"\n                    ")])]}}],null,!1,876693150)}),t._v(" "),a("el-table-column",{attrs:{label:"操作",prop:"operation",width:"70px"}},[[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",enterable:!1,"hide-after":2200,placement:"bottom"}},[a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-edit"},on:{click:function(e){t.add33=!0}}})],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",enterable:!1,"hide-after":2200,placement:"bottom"}},[a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-delete"}})],1)]],2)],1)],1):t._e(),t._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.add,title:"新增账号",width:"860px",top:"5vh"},on:{"update:visible":function(e){t.add=e}}},[a("div",{staticClass:"its_det"},[a("el-row",{staticClass:"its_form_row"},[a("el-form",{attrs:{model:t.addform,size:"mini","label-width":"120px",rules:t.rules}},[a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"管理地址",prop:"name"}},[a("el-select",{attrs:{placeholder:"请选择"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"堡垒机账号",prop:"name"}},[a("el-input")],1)],1),t._v(" "),a("el-col",{attrs:{span:11,offset:1}},[a("el-form-item",{attrs:{label:"堡垒机密码",prop:"name"}},[a("el-input")],1)],1),t._v(" "),a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"管理服务器",prop:"name"}},[a("el-col",{staticStyle:{width:"calc(100% - 32px)",display:"flex"},attrs:{span:24}},[a("el-select",{attrs:{filterable:"","allow-create":"",remote:"",size:"mini","popper-class":"its_multipleSelect_dropDown",multiple:"",placeholder:"请选择"},model:{value:t.choiceModule4,callback:function(e){t.choiceModule4=e},expression:"choiceModule4"}})],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"选择",enterable:!1,"hide-after":2200,placement:"bottom"}},[a("el-button",{staticClass:"inputBtn",attrs:{type:"primary",plain:"",size:"mini",icon:"iconfont icontable"},on:{click:function(e){t.add2=!0}}})],1)],1)],1)],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add=!1}}},[t._v("确 定")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add=!1}}},[t._v("取 消")])],1)]),t._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.add33,title:"编辑账号",width:"860px",top:"5vh"},on:{"update:visible":function(e){t.add33=e}}},[a("div",{staticClass:"its_det"},[a("el-row",{staticClass:"its_form_row"},[a("el-form",{attrs:{model:t.addform,size:"mini","label-width":"120px",rules:t.rules}},[a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"管理地址",prop:"name"}},[a("el-select",{attrs:{value:"112.121.160.17",placeholder:"请选择"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"堡垒机账号",prop:"name"}},[a("el-input",{attrs:{value:"actting"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:11,offset:1}},[a("el-form-item",{attrs:{label:"堡垒机密码",prop:"name"}},[a("el-input",{attrs:{value:"hao123456"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"管理服务器",prop:"name"}},[a("el-col",{staticStyle:{width:"calc(100% - 32px)",display:"flex"},attrs:{span:24}},[a("el-select",{attrs:{filterable:"","allow-create":"",remote:"",size:"mini","popper-class":"its_multipleSelect_dropDown",multiple:"",placeholder:"请选择"},model:{value:t.choiceModule5,callback:function(e){t.choiceModule5=e},expression:"choiceModule5"}})],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"选择",enterable:!1,"hide-after":2200,placement:"bottom"}},[a("el-button",{staticClass:"inputBtn",attrs:{type:"primary",plain:"",size:"mini",icon:"iconfont icontable"},on:{click:function(e){t.add2=!0}}})],1)],1)],1)],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add33=!1}}},[t._v("确 定")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add33=!1}}},[t._v("取 消")])],1)]),t._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.add2,title:"选择云服务器",width:"860px",top:"5vh"},on:{"update:visible":function(e){t.add2=e}}},[a("div",{staticClass:"its_table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"max-height":"322px",border:"",data:t.cloudTable}},[a("el-table-column",{attrs:{type:"selection",width:"45",Huaweign:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"序号",type:"index",width:"55",Huaweign:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"云服务器名称","show-overflow-tooltip":!0,"min-width":"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"IP",label:"内网IP","min-width":"110"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add2=!1}}},[t._v("确 定")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add2=!1}}},[t._v("取 消")])],1)])],1)},[],!1,null,"432a4bba",null);e.default=i.exports},xdCQ:function(t,e,a){}}]);