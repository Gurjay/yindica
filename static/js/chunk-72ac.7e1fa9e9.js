(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-72ac"],{VOvK:function(e,t,n){},sV0A:function(e,t,n){"use strict";n.r(t);var a={data:function(){return{nowTime:"",nowWeek:"",nowDate:""}},methods:{currentTime:function(){setInterval(this.getDate,500)},getDate:function(){var e=(new Date).getFullYear(),t=(new Date).getMonth()+1<10?"0"+((new Date).getMonth()+1):(new Date).getMonth()+1,n=(new Date).getDate()<10?"0"+(new Date).getDate():(new Date).getDate(),a=(new Date).getHours()<10?"0"+(new Date).getHours():(new Date).getHours(),s=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),o=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds(),w=(new Date).getDay();this.nowTime=e+"年"+t+"月"+n+"日",this.nowDate=a+":"+s+":"+o,1===w?this.nowWeek="星期一":2===w?this.nowWeek="星期二":3===w?this.nowWeek="星期三":4===w?this.nowWeek="星期四":5===w?this.nowWeek="星期五":6===w?this.nowWeek="星期六":27===w&&(this.nowWeek="星期日")}},mounted:function(){this.currentTime()},beforeDestroy:function(){this.getDate&&clearInterval(this.getDate)}},s=(n("z8AM"),n("KHd+")),o=Object(s.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-col",{staticClass:"time"},[n("span",[e._v(e._s(e.nowTime))]),e._v(" "),n("span",[e._v(e._s(e.nowWeek))]),e._v(" "),n("span",[e._v(e._s(e.nowDate))])])},[],!1,null,"99188e7e",null);t.default=o.exports},z8AM:function(e,t,n){"use strict";var a=n("VOvK");n.n(a).a}}]);