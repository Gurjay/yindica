(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5621","chunk-8ec6","chunk-8ed6","K4X6"],{K4X6:function(t,e,i){"use strict";i.r(e);var a=i("7Qib");e.default={data:function(){return{sidebarElm:null}},mounted:function(){var t=this;this.__resizeHandler=Object(a.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler),this.sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.sidebarElm&&this.sidebarElm.addEventListener("transitionend",this.sidebarResizeHandler)},beforeDestroy:function(){window.removeEventListener("resize",this.__resizeHandler),this.sidebarElm&&this.sidebarElm.removeEventListener("transitionend",this.sidebarResizeHandler)},methods:{sidebarResizeHandler:function(t){"width"===t.propertyName&&this.__resizeHandler()}}}},XWcW:function(t,e,i){"use strict";var a=i("nHOP");i.n(a).a},"aad+":function(t,e,i){"use strict";i.r(e);var a=i("MT78"),l=i.n(a),n={mixins:[i("K4X6").default],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"250px"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=l.a.init(document.getElementById(this.id));var t=[["2020-07",6,92,87],["2020-08",19,234,89],["2020-09",11,192,123],["2020-10",3,126,133],["2020-11",18,173,231],["2020-12",12,85,178],["2021-01",15,193,167],["2021-02",11,68,143],["2021-03",19,192,120],["2021-04",15,93,167],["2021-05",11,68,143],["2021-06",19,92,120]],e=t.map(function(t){return t[0]}),i=(t.map(function(t){return t[1]}),t.map(function(t){return t[2]}));t.map(function(t){return t[1]+3*t[1]/9}),t.map(function(t){return t[2]/6.7}),t.map(function(t){return t[2]/3.31});this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:5,left:10,right:10,bottom:35,containLabel:!0},xAxis:[{type:"category",data:e,axisLabel:{interval:0,formatter:function(t){var e="",i=t.length,a=Math.ceil(i/10);if(a>1){for(var l=0;l<a;l++){var n=10*l,s=n+10;e+=t.substring(n,s)+"\n"}return e}return t}},boundaryGap:!1,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",axisTick:{show:!0,length:0},splitLine:{show:!0,lineStyle:{color:"#eee"}},axisLine:{show:!1}}],series:[{name:"资源目录新增",type:"line",data:i,smooth:!0,showSymbol:!1,lineStyle:{width:1,color:"rgba(186,211,255,1)"},areaStyle:{normal:{color:new l.a.graphic.LinearGradient(0,0,0,1,[{offset:.4,color:"rgba(0,202,149,0.07)"},{offset:.8,color:"rgba(0,202,149,0.01)"}],!1)}}}]}),this.chart.dispatchAction({type:"takeGlobalCursor",key:"dataZoomSelect",dataZoomSelectActive:!0})}}},s=i("KHd+"),r=Object(s.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width},attrs:{id:this.id}})},[],!1,null,null,null);e.default=r.exports},"d+ep":function(t,e,i){},nHOP:function(t,e,i){},"st+2":function(t,e,i){"use strict";i.r(e);var a=i("MT78"),l=i.n(a),n={mixins:[i("K4X6").default],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"250px"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=l.a.init(document.getElementById(this.id));var t=[["2020-07",6,22,87],["2020-08",19,234,89],["2020-09",11,92,123],["2020-10",3,166,133],["2020-11",18,73,231],["2020-12",12,85,178],["2021-01",15,93,167],["2021-02",11,68,143],["2021-03",19,92,120],["2021-04",15,93,167],["2021-05",11,68,143],["2021-06",19,92,120]],e=t.map(function(t){return t[0]}),i=t.map(function(t){return t[1]});t.map(function(t){return t[1]/13.5*4}),t.map(function(t){return t[1]+3*t[1]/9}),t.map(function(t){return t[2]/6.7}),t.map(function(t){return t[2]/3.31});this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:5,left:10,right:10,bottom:35,containLabel:!0},xAxis:[{type:"category",data:e,axisLabel:{interval:0,formatter:function(t){var e="",i=t.length,a=Math.ceil(i/10);if(a>1){for(var l=0;l<a;l++){var n=10*l,s=n+10;e+=t.substring(n,s)+"\n"}return e}return t}},boundaryGap:!1,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",axisTick:{show:!0,length:0},splitLine:{show:!0,lineStyle:{color:"#eee"}},axisLine:{show:!1}}],series:[{name:"业务系统新增",type:"line",data:i,smooth:!0,showSymbol:!1,lineStyle:{width:1,color:"rgba(186,211,255,1)"},areaStyle:{normal:{color:new l.a.graphic.LinearGradient(0,0,0,1,[{offset:.4,color:"rgba(0,202,149,0.07)"},{offset:.8,color:"rgba(0,202,149,0.01)"}],!1)}}}]}),this.chart.dispatchAction({type:"takeGlobalCursor",key:"dataZoomSelect",dataZoomSelectActive:!0})}}},s=i("KHd+"),r=Object(s.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width},attrs:{id:this.id}})},[],!1,null,null,null);e.default=r.exports},t9q5:function(t,e,i){"use strict";var a=i("d+ep");i.n(a).a},yljZ:function(t,e,i){"use strict";i.r(e);var a=i("st+2"),l=i("aad+"),n={components:{mixChart:a.default,mixChart2:l.default},data:function(){return{row1:[{id:1,name:"业务系统",cun:2319,unit:"个"},{id:2,name:"国家级业务系统",cun:1e3,unit:"个"},{id:3,name:"省级业务系统",cun:319,unit:"个"},{id:4,name:"市级业务系统",cun:500,unit:"个"},{id:4,name:"区县业务系统",cun:500,unit:"个"}],row2:[{id:1,name:"资源目录",cun:14119,unit:"个"},{id:2,name:"无条件共享",cun:7910,unit:"个"},{id:3,name:"有条件共享",cun:3319,unit:"个"},{id:4,name:"禁止共享",cun:4254,unit:"个"}],row3:[{id:1,name:"资源数据项",cun:2349,unit:"个"},{id:2,name:"无条件共享",cun:1031,unit:"个"},{id:3,name:"有条件共享",cun:667,unit:"个"},{id:4,name:"禁止共享",cun:652,unit:"个"}],top5:[{unit:"市经信局",system:"宁波市基层社会服务管理综合信息系统",label2:"管理系统数据库集群",label3:"政务协同办公平台缓存服务器",ip:"10.68.166.201",cpu:"96",high:"5",middle:"1",number:"10"},{unit:"团市委",system:"共青团宁波市委OA系统",label2:"平台异机备份服务器",label3:"应用系统OA应用服务器4",ip:"10.68.176.60",cpu:"92",high:"4",number:"8",middle:"1"},{unit:"市自然资源规划局",system:"规划局地理信息系统",label2:"系统数据库服务器1市本级",label3:"政务办公平台WEB服务器1",ip:"10.68.167.4",cpu:"89",number:"7",high:"3",middle:"1"},{unit:"市大数据局",system:"政务服务网宁波平台",label2:"管理系统数据库集群",label3:"政务协同办公平台公文交换服务器",ip:"10.68.166.72",cpu:"82",high:"2",number:"6",middle:"1"},{unit:"市交通局（市港口管理局)",system:"宁波市交通局宁波交通前期项目信息管理系统",label2:"政务办公平台文件服务器",label3:"OA系统Emobile应用服务器1",ip:"10.74.37.11",cpu:"77",high:"1",number:"5",middle:"1"}]}},mounted:function(){}},s=(i("t9q5"),i("XWcW"),i("KHd+")),r=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",{staticClass:"its_resource_static nb_leader_dataShare"},[i("el-col",{staticStyle:{"border-right":"1px solid #fff",display:"flex","border-bottom":"1px solid #eee"},attrs:{span:24}},t._l(t.row1,function(e,a){return i("el-col",{key:a,staticClass:"blockBox"},[i("el-col",{staticClass:"bigt"},[t._v(t._s(e.name))]),t._v(" "),i("el-col",{staticClass:"numb",staticStyle:{"font-weight":"bold"}},[i("a",[t._v(t._s(e.cun))]),t._v(" "),i("span",[t._v(t._s(e.unit))])])],1)}),1),t._v(" "),i("el-col",{staticStyle:{"border-right":"1px solid #fff",display:"flex","border-bottom":"1px solid #eee"},attrs:{span:24}},t._l(t.row2,function(e,a){return i("el-col",{key:a,staticClass:"blockBox"},[i("el-col",{staticClass:"bigt"},[t._v(t._s(e.name))]),t._v(" "),i("el-col",{staticClass:"numb",staticStyle:{"font-weight":"bold"}},[i("a",[t._v(t._s(e.cun))]),t._v(" "),i("span",[t._v(t._s(e.unit))])])],1)}),1),t._v(" "),i("el-col",{staticStyle:{"border-right":"1px solid #fff",display:"flex","border-bottom":"1px solid #eee"},attrs:{span:24}},t._l(t.row3,function(e,a){return i("el-col",{key:a,staticClass:"blockBox"},[i("el-col",{staticClass:"bigt"},[t._v(t._s(e.name))]),t._v(" "),i("el-col",{staticClass:"numb",staticStyle:{"font-weight":"bold"}},[i("a",[t._v(t._s(e.cun))]),t._v(" "),i("span",[t._v(t._s(e.unit))])])],1)}),1),t._v(" "),i("div",[i("el-col",{attrs:{span:12}},[i("el-col",{staticClass:"title"},[t._v("最近一年业务系统新增趋势")]),t._v(" "),i("mixChart",{attrs:{id:"1"}})],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("el-col",{staticClass:"title"},[t._v("最近一年资源目录新增趋势")]),t._v(" "),i("mixChart2",{attrs:{id:"2"}})],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("el-col",{staticClass:"holeStatisc"},[i("el-col",{staticClass:" block high",attrs:{span:12}},[t._v("归集目录数：3121")]),t._v(" "),i("el-col",{staticClass:"block middle",attrs:{span:12}},[t._v("归集数据项：1231")])],1),t._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.top5,size:"medium"}},[i("el-table-column",{attrs:{type:"index",label:"序号",width:"60",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{label:"部门数据归集TOP5",align:"center"}},[i("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"unit",label:"单位","min-width":"150"}}),t._v(" "),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"cpu",label:"数量(个)","min-width":"80"}})],1)],1)],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("el-col",{staticClass:"holeStatisc"},[i("el-col",{staticClass:" block high",attrs:{span:12}},[t._v("开放目录数：3121")]),t._v(" "),i("el-col",{staticClass:"block middle",attrs:{span:12}},[t._v("开放数据项：1231")])],1),t._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.top5,size:"medium"}},[i("el-table-column",{attrs:{type:"index",label:"序号",width:"60",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{label:"部门数据开放TOP5",align:"center"}},[i("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"unit",label:"单位","min-width":"150"}}),t._v(" "),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"cpu",label:"数量(个)","min-width":"80"}})],1)],1)],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.top5,size:"medium"}},[i("el-table-column",{attrs:{type:"index",label:"序号",width:"60",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{label:"本月需求提出TOP5",align:"center"}},[i("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"unit",label:"单位","min-width":"150"}}),t._v(" "),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"cpu",label:"数量(个)","min-width":"80"}})],1)],1)],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.top5,size:"medium"}},[i("el-table-column",{attrs:{type:"index",label:"序号",width:"60",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{label:"本月需求满足TOP5",align:"center"}},[i("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"unit",label:"单位","min-width":"150"}}),t._v(" "),i("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"cpu",label:"数量(个)","min-width":"80"}})],1)],1)],1)],1)],1)},[],!1,null,"4b8ebc80",null);e.default=r.exports}}]);