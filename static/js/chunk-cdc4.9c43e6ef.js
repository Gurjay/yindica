(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cdc4"],{"20x6":function(e,t,a){"use strict";var s=a("K4SK");a.n(s).a},DoIL:function(e,t,a){"use strict";a.r(t);var s=a("PX+/"),l={data:function(){return{radio:!1,dialogVisibletest:!1,disabled:!1,activeNames:["1","2","3","4","5"],value:"",value2:"内部数据库",value3:"",countNumber2:"内部数据库",countNumber:"内部数据库",dataTemple:[],rules:{name:[{required:!0,trigger:"blur",message:"请输入模板名称"}],type:[{required:!0,trigger:"blur",message:"请输入模板名称"}]},dialogVisible:!1,dataSource:[],gridData:[{id:"id",name:"java.lang.String"},{id:"wfId",name:"java.lang.String"},{id:"createTime",name:"java.lang.String"},{id:"serialNumber",name:"java.lang.String"},{id:"cataLabel",name:"java.lang.String"}]}},mounted:function(){this.dataTemple=s.dataTemple,this.dataSource=s.dataSource},methods:{test2:function(){this.disabled=!0,this.value3=2,console.log(this.disabled,"11111111111111")}}},i=(a("20x6"),a("KHd+")),n=Object(i.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"app-container ilayout-container"},[a("el-container",{staticClass:"sub"},[a("el-header",[a("el-row",[a("router-link",{attrs:{to:"/report/reportSetting/reportTemple"}},[a("el-button",{attrs:{size:"mini",type:"primary"}},[e._v("返回")])],1),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary",disabled:""}},[e._v("上一条")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary",disabled:""}},[e._v("下一条")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"}},[e._v("保存")])],1)],1),e._v(" "),a("el-main",[a("el-collapse",{staticClass:"its_collapse",model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("div",{staticClass:"its_det"},[a("el-form",{attrs:{"label-width":"85px",rules:e.rules}},[a("el-row",{staticClass:"its_form_row"},[a("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"naver"}},[a("el-collapse-item",{attrs:{title:"基本信息",name:"1"}},[a("div",{staticClass:"clearfix its_card_header"}),e._v(" "),a("el-row",{staticClass:"its_card_body"},[a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{label:"模板标识",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"模板名称",prop:"label"}},[a("el-input",{attrs:{placeholder:"请输入"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{label:"标记"}},[a("el-input",{attrs:{value:"自定义",disabled:""}})],1),e._v(" "),a("el-form-item",{attrs:{label:"模板来源",prop:"type"}},[a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])])])],1)],1),e._v(" "),a("el-col",{attrs:{span:21,offset:1}},[a("el-form-item",{attrs:{label:"Field"}},[a("el-col",{staticClass:"form_tool",staticStyle:{margin:"0"}},[a("div",{staticClass:"its_table",staticStyle:{"padding-top":"0"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dataTemple,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"name",label:"名称",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{on:{click:function(t){e.dialogVisible=!0}}},[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"数据类型",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"date",label:"数据源",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return["单值"==t.row.type?a("el-col",[a("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.countNumber2,callback:function(t){e.countNumber2=t},expression:"countNumber2"}},e._l(e.countNumbers,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),e._v(" "),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"12px"}},[e._v(e._s(t.value))])])}),1)],1):e._e(),e._v(" "),"表格"==t.row.type?a("el-col",[a("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.countNumber,callback:function(t){e.countNumber=t},expression:"countNumber"}},e._l(e.countNumbers,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),e._v(" "),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"12px"}},[e._v(e._s(t.value))])])}),1)],1):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"value",label:"值","min-width":"350"},scopedSlots:e._u([{key:"default",fn:function(t){return["单值"==t.row.type?a("el-input",{attrs:{autosize:{minRows:1,maxRows:8},type:"textarea"}}):e._e(),e._v(" "),a("el-popover",{attrs:{placement:"right",width:"400",trigger:"click"}},[a("div",{staticClass:"its_table",staticStyle:{border:"none"}},[a("el-table",{attrs:{data:e.gridData,border:"",stripe:"",fit:""}},[a("el-table-column",{attrs:{"min-width":"150",property:"id",label:"列名"}}),e._v(" "),a("el-table-column",{attrs:{"min-width":"100",property:"name",label:"类名"}})],1)],1),e._v(" "),a("div",{attrs:{slot:"reference"},slot:"reference"},["表格"==t.row.type?a("el-input",{attrs:{autosize:{minRows:1,maxRows:6},type:"textarea",disabled:e.disabled,value:"SELECT\n                                                                    x.*,\n                                                                    IFNULL(y.p_userLabel, '') AS 'oper',\n                                                                    IFNULL(z.p_userLabel, '') AS 'reviewer'\n                                                                FROM\n                                                                    (SELECT\n                                                                        a.id,\n                                                                            a.p_workFlowProcessId as wfId,\n                                                                            a.p_createTime as createTime,\n                                                                            a.p_serialNumber as serialNumber,\n                                                                            b.p_enumLabel as cataLabel,\n                                                                            b.p_temperature0  as temperature,\n                                                                            b.p_humidity0 as humidity,\n                                                                            b.p_dualPowerState0 as dpowerState,\n                                                                            b.p_upsState0 as upsState,\n                                                                            b.p_unixServer0 as unixServer,\n                                                                            b.p_pcServer0 as pcServer ,\n                                                                            b.p_diskArray0 as diskArray,\n                                                                            b.p_tapeArray0 as tapeArray,\n                                                                            b.p_router0 as router ,\n                                                                            b.p_fsUsage0 as fsUsage ,\n                                                                            b.p_sysLog0 as sysLog ,\n                                                                            b.p_sysClockSync0 as selectUOYm,\n                                                                            b.p_sysClock0 as sysClock ,\n                                                                            b.p_databaseLog0 as databaseLog ,\n                                                                            b.p_tbsUsage0 as tbsUsage ,\n                                                                            b.p_backup0 as backup\n                                                                    FROM\n                                                                        (SELECT\n                                                                        id,\n                                                                            p_createTime,\n                                                                            p_serialNumber,\n                                                                            p_serviceCatalogueLabel,\n                                                                            p_workFlowProcessId\n                                                                    FROM\n                                                                        cmdb_obj_ItsmOrder\n                                                                    WHERE\n                                                                        class_type = 'itsm_legacy_inspection'\n                                                                            AND p_serialNumber IS NOT NULL\n                                                                            AND p_createTime BETWEEN '${SYS_BEGIN_TIME}' and '${SYS_END_TIME}'\n                                                                            AND p_label LIKE '%${LINE}%') a\n                                                                    LEFT JOIN\n                                                                    (select h.*,i.p_enumLabel from cmdb_obj_itsm_legacy_inspection h\n                                                                        left join (select p_enumValue,p_enumLabel from cmdb_obj_Enum where\n                                                                        class_type='cust_name_blga87l3_Enum') i on h.p_cust_name=i.p_enumValue ) b\n                                                                        ON a.id = b.super_class_id) x\n                                                                        LEFT JOIN\n                                                                    (SELECT\n                                                                        p_workFlowProcessId, p_userLabel\n                                                                    FROM\n                                                                        cmdb_obj_TaskNodeRuntimeOperationHistory\n                                                                    WHERE\n                                                                        p_operation = '提交修改'\n                                                                            AND p_taskNodeRuntimeName = 'Name_448a5697-ce55-4a07-9fc9-1b2f8ee5a5a0') y ON x.wfId = y.p_workFlowProcessId\n                                                                        LEFT JOIN\n                                                                    (SELECT\n                                                                        p_workFlowProcessId, p_userLabel\n                                                                    FROM\n                                                                        cmdb_obj_TaskNodeRuntimeOperationHistory\n                                                                    WHERE\n                                                                        p_operation = '关闭'\n                                                                            AND p_taskNodeRuntimeName = 'Name_b1f50670-136e-4a23-868b-1dd0ee37cd72') z ON x.wfId = z.p_workFlowProcessId\n                                                                ORDER BY createTime"}}):e._e()],1)])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"describe",label:"描述",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"60"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-edit"}})]}}])})],1)],1)])],1)],1),e._v(" "),a("el-col",{attrs:{span:21,offset:1}},[a("el-form-item",{attrs:{label:"描述",prop:"decs"}},[a("el-input",{attrs:{type:"textarea"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)])],1)],1)],1)},[],!1,null,null,null);t.default=n.exports},K4SK:function(e,t,a){},"PX+/":function(e){e.exports={reportRule:[{name:"ransRule",label:"RAMS规则",task:"its自动巡检*",execute:"定时",fusion:"张三",status:"完成",user:"这里是对作业的描述",update:"2016-05-03 10:12:36",nextUpdate:"2016-05-05 06:11:26",state:"启用",timeline:"2",time:"* * * 12 * ? *",type:"主机类型信息"},{name:"scBreaktimeList",label:"SC故障实时报表",task:"AOE缺省巡检",execute:"定时",fusion:"张三",status:"待处理",user:"这里是对作业的描述",timeline:"2",state:"启用",time:"* * * 12 * ? *",type:"主机类型信息",nextUpdate:"2016-05-05 06:11:26",update:"--"},{name:"scBreakmonthAutoMake",label:"SC故障月报_自动生成",task:"访问巡检",execute:"人工",fusion:"李四",status:"异常",user:"这里是对作业的描述",timeline:"1",time:"* * * 12 * ? *",state:"启用",type:"值班表用户类型",nextUpdate:"--",update:"2016-05-01 13:00:00"},{name:"SCplusALL",label:"SC汇总(停用)",task:"系统状态巡检",execute:"人工",fusion:"李四",status:"运行中",user:"这里是对作业的描述",timeline:"1",time:"* * * 12 * ? *",state:"启用",type:"值班表用户类型",nextUpdate:"--",update:"2016-05-03 12:20:00"},{name:"vmResourceDoingReport",label:"Vm资源使用报表规则",task:"使用率巡检",execute:"--",fusion:"--",status:"--",user:"这里是对作业的描述",timeline:"1",time:"* * * 12 * ? *",state:"停用",update:"--",nextUpdate:"--",type:"主机类型信息"}],reportRule2:[{name:"告警统计分析",task:"7月告警统计分析报表",execute:"人工",fusion:"李四",status:"完成",user:"这里是对作业的描述",timeline:"1",time:"* * * 12 * ? *",update2:"2020-08-01 13:00:01",state:"启用",type:"值班表用户类型",update:"2020-08-01 13:00:00"},{name:"业务健康度分析",task:"7月业务健康度分析报表",execute:"人工",fusion:"李四",status:"完成",user:"这里是对作业的描述",timeline:"1",update2:"2020-08-01 12:20:01",time:"* * * 12 * ? *",state:"启用",type:"清分报表",update:"2020-08-01 12:20:00"},{name:"运维绩效统计",task:"7月运维绩效报表",execute:"定时",fusion:"李四",update2:"--",status:"运行中",user:"这里是对作业的描述",timeline:"--",time:"* * * 12 * ? *",state:"启用",type:"清分报表",update:"2020-08-01 12:20:00"},{name:"工单处理情况",task:"7月工单处理情况分析报表",execute:"定时",fusion:"李四",status:"运行中",update2:"--",user:"这里是对作业的描述",timeline:"--",time:"* * * 12 * ? *",state:"启用",type:"",update:"2020-08-01 12:20:00"},{name:"设备健康度分析",task:"7月安全设备运行分析报表",execute:"定时",fusion:"张三",status:"完成",user:"这里是对作业的描述",update:"2020-08-01 10:12:36",update2:"2020-08-01 10:12:38",state:"启用",timeline:"2",time:"* * * 12 * ? *",type:"主机类型信息"}],jobArrange22:[{identification:"SYS_BEGIN_TIME",name:"统计开始时间",value:"2019-05-26 00:00:00",id:"1"},{identification:"SYS_END_TIME",name:"统计结束时间",value:"2019-06-25 23:59:59",id:"2"},{identification:"SYS_RULE_NAME",name:"报表规则名称",value:"select  concat( date_format(str_to_date('${SYS_END_TIME}','%Y-%m-%d'),'%Y年%m月'),'份全线路SC故障次数汇总' )",id:"3"}],jobArrange11:[{identification:"SYS_BEGIN_TIME",name:"统计开始时间",value:"2019-05-26 00:00:00",id:"1"},{identification:"SYS_END_TIME",name:"统计结束时间",value:"2019-06-25 23:59:59",id:"2"},{identification:"",name:"",value:"",id:"3"}],dataTemple:[{date:"内部数据库",name:"RPT_DATE",type:"表格",describe:"自动导入",value:"select column_0,CONCAT(column_1,'') column_1,CONCAT(column_2,'') col...",tab:"系统"},{date:"内部数据库",name:"GROUP_NAME",type:"单值",describe:"自动导入",value:"",tab:"自定义"},{date:"内部数据库",name:"BEGIN_TIME",type:"单值",describe:"自动导入",value:"",tab:"自定义"},{date:"",name:"END_TIME",type:"单值",describe:"自动导入",value:"",tab:"自定义"}],reportTemple:[{name:"storage_list",date:"2019-02-15 15:56:10",label:"存储设备使用表",jasper:"storage.jasper",describe:"这是对这个模板的描述",tab:"系统"},{name:"breakReport_Template",date:"2019-02-15 15:56:10",label:"故障报表模板",jasper:"scgz.jasper",describe:"这是对这个模板的描述",tab:"自定义"},{name:"tianji_quarter",date:"2019-02-15 15:56:10",label:"天玑季报",jasper:"tianji_quarter.jasper",describe:"这是对这个模板的描述",tab:"自定义"},{name:"taskexec_blank",date:"2019-02-15 15:56:10",label:"工作任务单",jasper:"taskexec_blank.jasper",describe:"这是对这个模板的描述",tab:"自定义"}],dataSource:[{name:"BEGIN_TIME",date:"2016-05-03 10:12:36",label:"内部数据库",agreement:"内部数据库",describe:"",tab:"系统"},{name:"BEGIN_PARAMETER",date:"2019-02-15 15:56:10",label:"参数",agreement:"参数",describe:"",tab:"系统"},{name:"DBdatabase",date:"2019-02-15 15:56:10",label:"DB数据库",agreement:"JDBC",describe:"",tab:"自定义"}]}}}]);