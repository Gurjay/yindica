(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7228"],{"01UK":function(l,e,t){"use strict";var i=t("Hm46");t.n(i).a},"4JEs":function(l,e,t){"use strict";t.r(e);var i={data:function(){return{data:[{id:1,name:"紧急告警",cun:15,unit:"个"},{id:2,name:"CPU平均使用率",cun:63,unit:"%"},{id:3,name:"内存平均使用率",cun:54,unit:"%"},{id:4,name:"公众区出流量",cun:1234,unit:"mbps"},{id:5,name:"公众区入流量",cun:5421,unit:"mbps"},{id:6,name:"资源区出流量",cun:1234,unit:"mbps"},{id:7,name:"资源区入流量",cun:5421,unit:"mbps"}],alarm:[{unit:"市经信局",system:"宁波市基层社会服务管理综合信息系统",label2:"管理系统数据库集群",label3:"政务协同办公平台缓存服务器",ip:"10.68.166.201",cpu:"96",high:"5",name:"IP设备无法访问",time:"20121-05-20 02:55:15",middle:"1"},{unit:"团市委",system:"共青团宁波市委OA系统",label2:"平台异机备份服务器",label3:"应用系统OA应用服务器4",ip:"10.68.176.60",cpu:"92",name:"IP设备无法访问",time:"20121-05-20 02:55:15",high:"4",middle:"1"},{unit:"市自然资源规划局",system:"规划局地理信息系统",label2:"系统数据库服务器1市本级",label3:"政务办公平台WEB服务器1",ip:"10.68.167.4",cpu:"89",name:"IP设备无法访问",time:"20121-05-20 02:55:15",high:"3",middle:"1"},{unit:"市大数据局",system:"政务服务网宁波平台",label2:"管理系统数据库集群",label3:"政务协同办公平台公文交换服务器",ip:"10.68.166.72",cpu:"82",name:"IP设备无法访问",time:"20121-05-20 02:55:15",high:"2",middle:"1"},{unit:"市交通局（市港口管理局)",system:"宁波市交通局宁波交通前期项目信息管理系统",label2:"政务办公平台文件服务器",label3:"OA系统Emobile应用服务器1",ip:"10.74.37.11",name:"IP设备无法访问",time:"20121-05-20 02:55:15",cpu:"77",high:"1",middle:"1"}],dialog:!1,bottom5:[{label:"协同平台全文检索服务器",label2:"管理系统数据库集群",label3:"政务协同办公平台缓存服务器",ip:"10.68.166.201",cpu:"16%",memory:"28%",disk:"92"},{label:"协同办公系统跳板机",label2:"平台异机备份服务器",label3:"应用系统OA应用服务器4",ip:"10.68.176.60",cpu:"15%",memory:"22%",disk:"88"},{label:"系统负载服务器市本级",label2:"系统数据库服务器1市本级",label3:"政务办公平台WEB服务器1",ip:"10.68.167.4",cpu:"14%",memory:"20%",disk:"81"},{label:"应用系统OA应用服务器5",label2:"管理系统数据库集群",label3:"政务协同办公平台公文交换服务器",ip:"10.68.166.72",cpu:"12%",memory:"19%",disk:"78"},{label:"政务办公平台WEB服务器1",label2:"政务办公平台文件服务器",label3:"OA系统Emobile应用服务器1",ip:"10.74.37.11",cpu:"10%",memory:"16%",disk:"68"}],top5:[{unit:"市经信局",system:"宁波市基层社会服务管理综合信息系统",label2:"管理系统数据库集群",label3:"政务协同办公平台缓存服务器",ip:"10.68.166.201",cpu:"96",high:"5",middle:"1"},{unit:"团市委",system:"共青团宁波市委OA系统",label2:"平台异机备份服务器",label3:"应用系统OA应用服务器4",ip:"10.68.176.60",cpu:"92",high:"4",middle:"1"},{unit:"市自然资源规划局",system:"规划局地理信息系统",label2:"系统数据库服务器1市本级",label3:"政务办公平台WEB服务器1",ip:"10.68.167.4",cpu:"89",high:"3",middle:"1"},{unit:"市大数据局",system:"政务服务网宁波平台",label2:"管理系统数据库集群",label3:"政务协同办公平台公文交换服务器",ip:"10.68.166.72",cpu:"82",high:"2",middle:"1"},{unit:"市交通局（市港口管理局)",system:"宁波市交通局宁波交通前期项目信息管理系统",label2:"政务办公平台文件服务器",label3:"OA系统Emobile应用服务器1",ip:"10.74.37.11",cpu:"77",high:"1",middle:"1"}]}},mounted:function(){}},a=(t("a29w"),t("01UK"),t("KHd+")),o=Object(a.a)(i,function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("el-row",{staticClass:"its_resource_static nb_leader_moonHole"},[t("el-col",{staticStyle:{"border-right":"1px solid #fff",display:"flex"},attrs:{span:24}},l._l(l.data,function(e,i){return t("el-col",{key:i,staticClass:"blockBox"},[t("el-col",{staticClass:"bigt"},[l._v(l._s(e.name))]),l._v(" "),t("el-col",{staticClass:"numb",staticStyle:{"font-weight":"bold"}},[t("a",[l._v(l._s(e.cun))]),l._v(" "),t("span",[l._v(l._s(e.unit))])])],1)}),1),l._v(" "),t("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:l.dialog,title:"紧急告警详情",width:"1200px",top:"8vh"},on:{"update:visible":function(e){l.dialog=e}}},[t("div",{staticClass:"its_table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:l.alarm,size:"medium"}},[t("el-table-column",{attrs:{type:"index",label:"序号",width:"60",align:"center"}}),l._v(" "),t("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"unit",label:"单位","min-width":"120"},scopedSlots:l._u([{key:"default",fn:function(e){return[t("a",[l._v(l._s(e.row.unit))])]}}])}),l._v(" "),t("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"system",label:"业务系统","min-width":"170"},scopedSlots:l._u([{key:"default",fn:function(e){return[t("a",[l._v(l._s(e.row.system))])]}}])}),l._v(" "),t("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"label2",label:"资源名称","min-width":"150"},scopedSlots:l._u([{key:"default",fn:function(e){return[t("a",[l._v(l._s(e.row.label2))])]}}])}),l._v(" "),t("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"ip",label:"IP地址","min-width":"100"}}),l._v(" "),t("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"name",label:"告警名称","min-width":"100",align:"center"}}),l._v(" "),t("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"time",label:"告警时间","min-width":"100",align:"center"}})],1)],1),l._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:function(e){l.dialog=!1}}},[l._v("确 定")]),l._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(e){l.dialog=!1}}},[l._v("取 消")])],1)])],1)},[],!1,null,"3de74947",null);e.default=o.exports},Hm46:function(l,e,t){},a29w:function(l,e,t){"use strict";var i=t("voo5");t.n(i).a},voo5:function(l,e,t){}}]);