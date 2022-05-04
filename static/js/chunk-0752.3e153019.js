(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0752"],{CwKx:function(e,a,t){"use strict";t.r(a);t("dzmM");var i=t("j1YS");a.default={data:function(){return{source:"1",addCluster:!1,addDatacenter:!1,treeTab:"first",isDeleteWarn:!1,dialogVisible:!1,treeT:[{label:"数据中心(10)",icon:"static/images/resource/db/16x16.png",id:0},{label:"集群(10)",icon:"static/images/resource/host/host-list.png",id:1},{label:"主机(10)",icon:"static/images/resource/host/16x16.png",id:2},{label:"虚拟机(10)",icon:"static/images/resource/host/host-cloud.png",id:3},{label:"虚拟机模板(10)",icon:"static/images/resource/default/default.png",id:4},{label:"存储(10)",icon:"static/images/resource/storage/16x16.png",id:5},{label:"网络(10)",icon:"static/images/resource/netservice/16x16.png",id:6}],link:0,treeConfig:{showCheckbox:!1,checkStrictly:!1,expandedKeys:[1]},queryList:{},pageModel:{},pageModelTemplate:{},rules:{name:[{required:!0,message:"请输入内容",trigger:"blur"}]}}},mounted:function(){this.pageModel.page=i.VMware,this.pageModelHost.page=i.VMware,this.pageModelTemplate.page=[i.VMware[3],i.VMware[4],i.VMware[5],i.VMware[6]]},created:function(){this.pageModel={config:{readonly:!1,columns:[{name:"name",label:"虚机标识",width:"100"},{name:"label",label:"虚机名称",minwidth:"200",type:"link",router:{url:"",params:["id"]}},{name:"osType",label:"虚机模板",minwidth:"150"},{name:"dataCenterName",label:"来源",minwidth:"100"},{name:"overallStatus",label:"电源状态",width:"100",type:"template",align:"center"},{name:"updateTime",label:"更新日期",minwidth:"160"},{name:"operation",label:"操作",fixed:"right",width:"90",type:"template"}]},page:[]},this.pageModelHost={config:{readonly:!1,columns:[{name:"name",label:"主机标识",width:"100"},{name:"label",label:"主机名称",minwidth:"200",type:"link",router:{url:"",params:["id"]}},{name:"address",label:"IP地址",minwidth:"120"},{name:"dataCenterName",label:"来源",minwidth:"100"},{name:"overallStatus",label:"电源状态",width:"100",type:"template",align:"center"},{name:"updateTime",label:"更新日期",minwidth:"160"},{name:"operation",label:"操作",fixed:"right",width:"90",type:"template"}]},page:[]},this.pageModelTemplate={config:{readonly:!1,columns:[{name:"name",label:"模板标识",minwidth:"100"},{name:"label",label:"模板名称",minwidth:"220",type:"link",router:{url:"",params:["id"]}},{name:"osName",label:"操作系统",minwidth:"280"},{name:"totalCpu",label:"CPU",minwidth:"80"},{name:"totalMem",label:"内存(MB)",minwidth:"100"},{name:"diskCapacity",label:"硬盘(MB)",minwidth:"100"},{name:"dataCenterName",label:"来源",minwidth:"100"},{name:"desc",label:"描述",minwidth:"200"},{name:"updateTime",label:"更新日期",minwidth:"160"},{name:"operation",label:"操作",fixed:"right",width:"70",type:"template"}]},page:[]},this.pageModelData={config:{readonly:!1,columns:[{name:"name",label:"标识",minwidth:"100"},{name:"label",label:"名称",minwidth:"200",type:"link",router:{url:"",params:["id"]}},{name:"host",label:"主机",minwidth:"100"},{name:"vm",label:"虚拟机",minwidth:"100"},{name:"dataCenterName",label:"来源",minwidth:"100"},{name:"desc",label:"描述",minwidth:"200"},{name:"updateTime",label:"更新日期",minwidth:"160"},{name:"operation",label:"操作",fixed:"right",width:"70",type:"template"}]},page:[{name:"Datacenter1",label:"Datacenter1",host:"1",vm:"2",updateTime:"2020-04-26 03:06:55",dataCenterName:"VMware"},{name:"Datacenter2",label:"Datacenter2",host:"3",vm:"3",updateTime:"2020-04-26 03:06:55",dataCenterName:"VMware"}]},this.pageModelCluster={config:{readonly:!1,columns:[{name:"name",label:"标识",minwidth:"100"},{name:"label",label:"名称",minwidth:"200",type:"link",router:{url:"",params:["id"]}},{name:"dataCenterName",label:"来源",minwidth:"100"},{name:"desc",label:"描述",minwidth:"200"},{name:"updateTime",label:"更新日期",minwidth:"160"},{name:"operation",label:"操作",fixed:"right",width:"70",type:"template"}]},page:[{name:"Cluster01",label:"Cluster01",freeCPU:"0 GHz",freeMemory:"0 GB",freeStorage:"10 GB",dataCenterName:"VMware",updateTime:"2020-04-26 03:06:55"},{name:"Cluster02",label:"Cluster02",freeCPU:"3 GHz",freeMemory:"1 GB",freeStorage:"22 GB",dataCenterName:"VMware",updateTime:"2020-04-26 03:06:55"}]},this.pageModelStorage={config:{readonly:!1,columns:[{name:"name",label:"标识",minwidth:"100"},{name:"label",label:"名称",minwidth:"200",type:"link",router:{url:"",params:["id"]}},{name:"status",label:"状态",minwidth:"100",type:"template",align:"center"},{name:"type",label:"类型",minwidth:"100"},{name:"volume",label:"容量",minwidth:"100"},{name:"dataCenterName",label:"来源",minwidth:"100"},{name:"desc",label:"描述",minwidth:"200"},{name:"updateTime",label:"更新日期",minwidth:"160"},{name:"operation",label:"操作",fixed:"right",width:"70",type:"template"}]},page:[{name:"Datastorage1",label:"Datastorage1",status:"正常",type:"VMFS 5",volume:"1.82 TB",updateTime:"2020-04-26 03:06:55",dataCenterName:"VMware"},{name:"Datastorage2",label:"Datastorage2",status:"异常",type:"VMFS 5",volume:"1.82 TB",updateTime:"2020-04-26 03:06:55",dataCenterName:"VMware"}]},this.pageModelNetwork={config:{readonly:!1,columns:[{name:"name",label:"标识",minwidth:"100"},{name:"label",label:"名称",minwidth:"200",type:"link",router:{url:"",params:["id"]}},{name:"status",label:"可访问",minwidth:"100",type:"template",align:"center"},{name:"host",label:"主机",minwidth:"100"},{name:"vm",label:"虚拟机",minwidth:"100"},{name:"dataCenterName",label:"来源",minwidth:"100"},{name:"desc",label:"描述",minwidth:"200"},{name:"updateTime",label:"更新日期",minwidth:"160"},{name:"operation",label:"操作",fixed:"right",width:"70",type:"template"}]},page:[{name:"Datastorage1",label:"Datastorage1",status:"正常",host:"3",vm:"3",updateTime:"2020-04-26 03:06:55",dataCenterName:"VMware"},{name:"Datastorage2",label:"Datastorage2",status:"异常",host:"3",vm:"3",updateTime:"2020-04-26 03:06:55",dataCenterName:"VMware"}]}},watch:{},methods:{loadPage:function(e,a){var t=this;getList(ciType,ciLabel,{pageIndex:e,pageSize:a}).then(function(i){if(t.pageModel.config.pageSize=a,t.pageModel.config.pageIndex=e,200===i.status&&null===i.data||null===i.data.rows)t.pageModel.config.total=0,t.pageModel.page=null;else if(200===i.status&&null!==i.data&&null!==i.data.rows)for(var s=0,n=i.data.rows.length;s<n;s++)!0===i.data.rows[s].isCustom||"true"===i.data.rows[s].isCustom?i.data.rows[s].isCustom="自定义":!1===i.data.rows[s].isCustom||"false"===i.data.rows[s].isCustom?i.data.rows[s].isCustom="系统":i.data.rows[s].isCustom="未知",null!==i.data.rows[s].updated&&""!==i.data.rows[s].updated||(i.data.rows[s].updated=i.data.rows[s].created)},function(e){console.log(e)})},rowAction:function(e){this.$router.push({name:"virtualHostAdd",params:{data:e,id:e.serialNumber}})},viewAction:function(e){this.$router.push({name:"virtualHostView",params:{data:e,id:e.serialNumber}})},rowEdit:function(e){this.$router.push({name:"virtualHostEdit",params:{data:e,id:e.serialNumber}})},deleteIndicator:function(e,a,t){var i=this;deleteIndicatorById(e).then(function(e){i.$message.success("删除成功!"),i.pageModel.page.splice(t,1)},function(e){console.log(e)})},hasSelected:function(e){this.selected=e},handleNodeClick:function(e){this.link=e.id}}}},j1YS:function(e){e.exports={VMware:[{_instance_changes:{},dataCenterName:"VMware",assignCapacity:59503,createPassportId:"3",templateFlag:!1,uuid:"423d7114-af31-ac18-7b53-c5aa38f0291d",vHostName:"host-38",totalCpu:2,relation:"1",powerState:"POWERED_ON",osType:"centos7_64Guest",_instance_change_associations:{},id:538,createVersion:15607,address:"172.16.180.241",serialNumber:"3",updatePassportId:"3",totalMem:8192,updateUser:"acc",updateTime:"2020-04-26 03:06:55",label:"GL-zcglpt",osName:"CentOS 7 (64-bit)",sync:!1,diskCapacity:59503,revision:9799,createTime:1587106567e3,name:"vm-292",tenantId:"acc",createUser:"acc",classType:"VirtualMachine",overallStatus:"GREEN",centerName:"172.016.180.160"},{_instance_changes:{},dataCenterName:"openstack",assignCapacity:118895,createPassportId:"3",templateFlag:!1,uuid:"423dfc9f-31cf-9a15-a2d3-dff5ab8d5b75",vHostName:"host-38",totalCpu:4,powerState:"POWERED_ON",osType:"windows8Server64Guest",_instance_change_associations:{},id:536,createVersion:15607,address:"172.16.180.108",serialNumber:"3",updatePassportId:"3",totalMem:16384,updateUser:"acc",updateTime:"2020-04-26 03:06:55",label:"TEST-virul-win",osName:"Microsoft Windows Server 2012 (64-bit)",sync:!1,diskCapacity:118895,revision:9809,createTime:1587105959e3,name:"vm-293",tenantId:"acc",createUser:"acc",classType:"VirtualMachine",overallStatus:"RED",relation:"1",centerName:"172.016.180.160"},{_instance_changes:{},dataCenterName:"VMware",assignCapacity:17313,createPassportId:"3",relation:"1",templateFlag:!1,uuid:"423d3682-b623-322e-d8ed-d4fa042b8e48",vHostName:"host-38",totalCpu:1,powerState:"POWERED_ON",osType:"other26xLinux64Guest",_instance_change_associations:{},id:535,createVersion:15607,address:"172.16.180.109",serialNumber:"3",updatePassportId:"3",totalMem:8192,updateUser:"acc",updateTime:"2020-04-26 03:06:55",label:"Test-virtual",osName:"Other 2.6.x Linux (64-bit)",sync:!1,diskCapacity:59503,revision:12844,createTime:1586877957e3,name:"vm-291",tenantId:"acc",createUser:"acc",classType:"VirtualMachine",overallStatus:"GREEN",centerName:"172.016.180.160"},{_instance_changes:{},dataCenterName:"VMware",relation:"1",assignCapacity:323695,createPassportId:"3",templateFlag:!1,uuid:"423d0695-935c-667c-5e41-8871c2f6417e",vHostName:"host-38",totalCpu:4,powerState:"POWERED_ON",osType:"windows8Server64Guest",_instance_change_associations:{},id:533,createVersion:15607,address:"172.16.180.99",serialNumber:"3",updatePassportId:"3",totalMem:16384,updateUser:"acc",updateTime:"2020-04-26 03:06:55",label:"GL-Security-console_180.99",osName:"Microsoft Windows Server 2012 (64-bit)",sync:!1,diskCapacity:323695,revision:12855,createTime:1586877353e3,name:"vm-290",tenantId:"acc",createUser:"acc",classType:"VirtualMachine",overallStatus:"GREEN",centerName:"172.016.180.160"},{_instance_changes:{},dataCenterName:"VMware",assignCapacity:323695,relation:"1",createPassportId:"3",templateFlag:!1,uuid:"423d9c5c-0147-9212-81c7-4d42a2c98064",vHostName:"host-38",totalCpu:4,powerState:"POWERED_ON",osType:"windows8Server64Guest",_instance_change_associations:{},id:532,createVersion:15607,address:"172.16.208.111",serialNumber:"3",updatePassportId:"3",totalMem:16384,updateUser:"acc",updateTime:"2020-04-26 03:06:55",label:"C3-ACC-rptftp_208.111",osName:"Microsoft Windows Server 2012 (64-bit)",sync:!1,diskCapacity:323695,revision:19230,createTime:1586399561e3,name:"vm-289",tenantId:"acc",createUser:"acc",classType:"VirtualMachine",overallStatus:"GREEN",centerName:"172.016.180.160"},{_instance_changes:{},dataCenterName:"VMware",assignCapacity:263279,createPassportId:"3",templateFlag:!1,relation:"1",uuid:"423d80ac-4d14-82b0-c430-43cdba409e0c",vHostName:"host-38",totalCpu:1,powerState:"POWERED_ON",osType:"rhel6Guest",_instance_change_associations:{},id:530,createVersion:15607,address:"172.16.180.164",serialNumber:"3",updatePassportId:"3",totalMem:1024,updateUser:"acc",updateTime:"2020-04-26 03:06:55",label:"GL-3par-vsp4.4_180.164",osName:"Red Hat Enterprise Linux 6 (32-bit)",sync:!1,diskCapacity:263279,revision:52399,createTime:1583909306e3,name:"vm-213",tenantId:"acc",createUser:"acc",classType:"VirtualMachine",overallStatus:"GREEN",centerName:"172.016.180.160"}],vmTemplate:[{UUID:"template",_instance_changes:{},dataCenterName:"VMware",assignCapacity:59503,createPassportId:"3",templateFlag:!1,uuid:"423d7114-af31-ac18-7b53-c5aa38f0291d",vHostName:"host-38",totalCpu:2,relation:"1",powerState:"POWERED_ON",osType:"centos7_64Guest",_instance_change_associations:{},id:538,createVersion:15607,address:"172.16.180.241",serialNumber:"5",updatePassportId:"3",totalMem:8192,updateUser:"acc",updateTime:"2020-04-26 03:06:55",label:"GL-zcglpt",osName:"CentOS 7 (64-bit)",sync:!1,diskCapacity:59503,revision:9799,createTime:1587106567e3,name:"vm-292",tenantId:"acc",createUser:"acc",classType:"VirtualMachine",overallStatus:"GREEN",centerName:"172.016.180.160"},{UUID:"template",_instance_changes:{},dataCenterName:"openstack",assignCapacity:118895,createPassportId:"3",templateFlag:!1,uuid:"423dfc9f-31cf-9a15-a2d3-dff5ab8d5b75",vHostName:"host-38",totalCpu:4,powerState:"POWERED_ON",osType:"windows8Server64Guest",_instance_change_associations:{},id:536,createVersion:15607,address:"172.16.180.108",serialNumber:"5",updatePassportId:"3",totalMem:16384,updateUser:"acc",updateTime:"2020-04-26 03:06:55",label:"TEST-virul-win",osName:"Microsoft Windows Server 2012 (64-bit)",sync:!1,diskCapacity:118895,revision:9809,createTime:1587105959e3,name:"vm-293",tenantId:"acc",createUser:"acc",classType:"VirtualMachine",overallStatus:"RED",relation:"1",centerName:"172.016.180.160"},{UUID:"template",_instance_changes:{},dataCenterName:"VMware",assignCapacity:17313,createPassportId:"3",relation:"1",templateFlag:!1,uuid:"423d3682-b623-322e-d8ed-d4fa042b8e48",vHostName:"host-38",totalCpu:1,powerState:"POWERED_ON",osType:"other26xLinux64Guest",_instance_change_associations:{},id:535,createVersion:15607,address:"172.16.180.109",serialNumber:"5",updatePassportId:"3",totalMem:8192,updateUser:"acc",updateTime:"2020-04-26 03:06:55",label:"Test-virtual",osName:"Other 2.6.x Linux (64-bit)",sync:!1,diskCapacity:59503,revision:12844,createTime:1586877957e3,name:"vm-291",tenantId:"acc",createUser:"acc",classType:"VirtualMachine",overallStatus:"GREEN",centerName:"172.016.180.160"}]}}}]);