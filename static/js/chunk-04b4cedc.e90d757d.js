(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04b4cedc"],{"2ea3":function(e,a,t){},"4b2a":function(e,a,t){},"4d8f":function(e,a,t){"use strict";t("2ea3")},"752e":function(e){e.exports=JSON.parse('{"dashboardData":[{"name":"Servethepeople","label":"为人民服务","baseUrl":"https://v4.cdtlas.com/20220318/vJQhVhSW/index.m3u8","type":["ethic","romance"],"info":{"region":"korea","company":"unknow","director":"张哲秀","star":["赵成河"],"update":"2022-05-12"}},{"name":"Pieles","label":"肌肤","baseUrl":"https://ukzy.ukubf4.com/20220402/z7IBZf4e/index.m3u8","type":["feature","dramatic"],"info":{"region":"Spain","company":"unknow","director":"爱德华·卡萨瓦","star":["玛卡蕾娜·戈麦斯 洪·科塔哈雷纳 安娜·波沃罗萨 卡罗琳娜·邦"],"update":"2017-02-11"}},{"name":"LoveandLeashes","label":"解禁男女","baseUrl":"https://new.iskcd.com/20220211/RiwX8UXS/index.m3u8","type":["comedy","romance"],"info":{"region":"korea","company":"Netflix","director":"朴贤真","star":["徐珠贤","李濬荣"],"update":"2022-04-04"}}]}')},"8f4b":function(e,a,t){"use strict";t("4b2a")},d2f6:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container documentation-container"},[t("el-col",e._l(e.cardData,(function(a,n){return t("el-col",{key:a.name,staticStyle:{padding:"5px"},attrs:{span:8}},[t("div",{on:{click:function(t){return e.goToMovie(a)}}},[t("el-card",{staticClass:"showListCard",attrs:{shadow:"hover","body-style":{padding:"0px"}}},[t("div"),t("div",{staticStyle:{padding:"14px"}},[t("span",[e._v(e._s(a.label))])])])],1)])})),1)],1)},o=[],i=(t("b0c0"),t("752e")),r={name:"Monthly",data:function(){return{cardData:[]}},mounted:function(){this.cardData=i.dashboardData},methods:{goToMovie:function(e){this.$router.push({name:"details",params:{id:e.name,url:e.baseUrl,label:e.label}})}}},c=r,s=(t("8f4b"),t("4d8f"),t("2877")),d=Object(s["a"])(c,n,o,!1,null,"438026f4",null);a["default"]=d.exports}}]);