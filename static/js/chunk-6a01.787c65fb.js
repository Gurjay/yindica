(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6a01"],{lpDS:function(e,t,o){"use strict";o.r(t);var n={data:function(){return{activeName:["1","2","3"],addform:{name:"SQL1",netblock:"1",action:"1",type:"1"},cloudDataBaseTable:[{name:"SQL1",type:"数据库",databaseType:"MySql5.6(事务型)",netType:"公网链接",version:"5.7",netblock:"经典网络",white:"177.142.21.11-18,172.168.11.44",cpu:"4",memory:"6",cloud:"2C 8G",size:"500G",action:"新增",node:"2",desc:"--"},{name:"ADS2",type:"数据库",databaseType:"MySql5.6(分析型)",netType:"内网链接",version:"1.0",netblock:"公众区",white:"172.168.11.31-35",cpu:"8",cloud:"4C 8G",memory:"16",size:"750G",node:"58",action:"变更",desc:"--"},{name:"RDS1",type:"数据库",databaseType:"Redis2.8",netType:"集群",version:"2.8",netblock:"资源区",white:"188.162.10.2",cpu:"4",cloud:"4G主从高配版",memory:"16",size:"250G",action:"回收",node:"--",desc:"--"},{name:"RDS2",type:"分析型数据库",databaseType:"Redis4.0",netType:"内网链接",version:"--",netblock:"公众区",cloud:"8G主从高配版",white:"--",cpu:"16",memory:"64",size:"750G",node:"--",action:"新增",desc:"--"}],boxShow:!0,add:!1,rules:{name:[{required:!0,message:"请输入"}]}}},methods:{sentBoxShow:function(){this.boxShow=!this.boxShow}}},a=(o("uIIr"),o("KHd+")),l=Object(a.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"form_tool"},[o("div",{staticClass:"form_tool_bar",on:{click:e.sentBoxShow}},[e._v("\n        云数据库\n        "),o("div",{staticStyle:{width:"auto",float:"right","padding-right":"8px",height:"25px"}},[e.boxShow?o("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-down"},on:{click:e.sentBoxShow}}):o("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-right"},on:{click:e.sentBoxShow}})],1)]),e._v(" "),e.boxShow?o("div",{staticClass:"its_table"},[o("el-table",{staticStyle:{width:"100%"},attrs:{"header-row-class-name":"its_table_header",border:"",data:e.cloudDataBaseTable,"max-height":"322px"}},[o("el-table-column",{attrs:{type:"index",label:"序号",width:"55px",align:"center"}}),e._v(" "),o("el-table-column",{attrs:{label:"数据库名称",prop:"name","min-width":"120px","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v("\n                            "+e._s(t.row.name)+"\n                        ")])]}}],null,!1,3142312609)}),e._v(" "),o("el-table-column",{attrs:{label:"网络区域",prop:"netblock",width:"100px"}}),e._v(" "),o("el-table-column",{attrs:{label:"数据库类型",prop:"databaseType",width:"150px"}}),e._v(" "),o("el-table-column",{attrs:{label:"云服务器规格","min-width":"100px",prop:"cloud","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v("\n                            "+e._s(t.row.cloud)+"\n                        ")])]}}],null,!1,1427186711)}),e._v(" "),o("el-table-column",{attrs:{label:"存储空间",prop:"size","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.size))])]}}],null,!1,601952707)}),e._v(" "),o("el-table-column",{attrs:{label:"节点数",prop:"node","min-width":"80px"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.node))])]}}],null,!1,73974118)}),e._v(" "),o("el-table-column",{attrs:{label:"用途",prop:"desc","min-width":"100px"}}),e._v(" "),o("el-table-column",{attrs:{label:"动作",prop:"action",width:"60px"}})],1)],1):e._e()])},[],!1,null,null,null);t.default=l.exports},mfXo:function(e,t,o){},uIIr:function(e,t,o){"use strict";var n=o("mfXo");o.n(n).a}}]);