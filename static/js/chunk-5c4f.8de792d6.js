(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5c4f"],{"5D8k":function(t,e,o){},"5Dbv":function(t,e,o){"use strict";o.r(e);var a={data:function(){return{activeName:["1","2","3"],addform:{name:"A1",netblock:"",netblock2:"",action:"1"},add:!1,boxShow:!0,networkTable:[{netblock:"actting",netblock2:"hao123456",resource:"112.121.160.17",resource2:"A3,A4",tcp:"80,82,84",udp:"60-66",action:"开放",time:"永久",st:"人工",make:"--"},{netblock:"acount",netblock2:"make0091",resource:"111.101.131.12",resource2:"B3,B4",tcp:"--",udp:"161",action:"关闭",time:"2021-03-21",st:"人工",make:"--"}],rules:{name:[{required:!0,message:"请输入"}]}}},methods:{sentBoxShow:function(){this.boxShow=!this.boxShow}}},n=(o("v8Io"),o("KHd+")),l=Object(n.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form_tool"},[o("div",{staticClass:"form_tool_bar",on:{click:t.sentBoxShow}},[t._v("\n        堡垒机\n         "),o("div",{staticStyle:{width:"auto",float:"right","padding-right":"8px",height:"25px"}},[t.boxShow?o("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-down"},on:{click:t.sentBoxShow}}):o("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-right"},on:{click:t.sentBoxShow}})],1)]),t._v(" "),t.boxShow?o("div",{staticClass:"its_table"},[o("el-table",{staticStyle:{width:"100%"},attrs:{"header-row-class-name":"its_table_header",border:"",data:t.networkTable,"max-height":"322px"}},[o("el-table-column",{attrs:{type:"index",label:"序号",width:"55px",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{label:"管理地址",prop:"resource","min-width":"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v("\n                          "+t._s(e.row.resource)+"\n                        ")])]}}],null,!1,2007159500)}),t._v(" "),o("el-table-column",{attrs:{label:"堡垒机账号",prop:"netblock","min-width":"90px"}}),t._v(" "),o("el-table-column",{attrs:{label:"堡垒机密码",prop:"netblock2","min-width":"90px"}}),t._v(" "),o("el-table-column",{attrs:{label:"管理服务器",prop:"resource2","min-width":"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v("\n                         "+t._s(e.row.resource2)+"\n                        ")])]}}],null,!1,2445604094)})],1)],1):t._e(),t._v(" "),o("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.add,title:"查看",width:"1040px",top:"5vh"},on:{"update:visible":function(e){t.add=e}}},[o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add=!1}}},[t._v("取 消")])],1)])],1)},[],!1,null,null,null);e.default=l.exports},v8Io:function(t,e,o){"use strict";var a=o("5D8k");o.n(a).a}}]);