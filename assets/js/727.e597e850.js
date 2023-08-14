(window.webpackJsonp=window.webpackJsonp||[]).push([[727],{1312:function(v,_,t){"use strict";t.r(_);var a=t(2),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h3",{attrs:{id:"高可用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高可用"}},[v._v("#")]),v._v(" 高可用")]),v._v(" "),t("h4",{attrs:{id:"高可用ha设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高可用ha设计"}},[v._v("#")]),v._v(" 高可用HA设计")]),v._v(" "),t("p",[v._v("高可用（Hign Availability）是系统架构中必须考虑的因素之一，指的是，经过设计来减少系统不能提供服务的时间。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://img1.terwer.space/image-20220410230934957.png",alt:"image-20220410230934957"}})]),v._v(" "),t("p",[v._v("系统高可用性的设计模式通常有三种：主备（master-slave）、互备（active-active）和集群（cluster）。")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("主备模式")]),v._v(" "),t("p",[v._v("主备模式是Active-Standby模式，当主机宕机时，备机接管主机的一切工作。")]),v._v(" "),t("p",[v._v("待主机回复正常之后，按照使用者的设定以自动（热备）或者手动（冷备）方式将服务器切换到主机上运行。")]),v._v(" "),t("p",[v._v("在数据库部分，习惯成为M-S模式。MS模式就是Master-Slave模式，这在数据库高可用方案中比较常用，例如MySQL、Redis等就是采用MS模式实现主从复制，保证包可用。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://img1.terwer.space/image-20220411195614832.png",alt:"image-20220411195614832"}})])]),v._v(" "),t("li",[t("p",[v._v("互备模式")]),v._v(" "),t("p",[v._v("互备模式指的是两台主机同时运行各自的服务，且相互监测的情况。")]),v._v(" "),t("p",[v._v("在数据库高可用部分，常见的互备是MM模式。")]),v._v(" "),t("p",[v._v("MM模式是Multi-Master模式，指一个系统中存在多个master，每个master都有read-write的能力，会根据时间戳或者业务逻辑合并版本。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://img1.terwer.space/image-20220411202659518.png",alt:"image-20220411202659518"}})])]),v._v(" "),t("li",[t("p",[v._v("集群模式")]),v._v(" "),t("p",[v._v("集群模式指的是多个节点运行，同时可以通过主控节点分担服务请求。")]),v._v(" "),t("p",[v._v("集群模式需要解决主控节点本身的高可用问题，一般采用主备模式。")])])]),v._v(" "),t("h4",{attrs:{id:"高可用ha模式下的-脑裂问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高可用ha模式下的-脑裂问题"}},[v._v("#")]),v._v(" 高可用HA模式下的“脑裂问题”")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("什么是脑裂")]),v._v(" "),t("p",[v._v("在高可用（HA）系统中，当联系两个节点的心跳线断裂的时候（两个节点失去联系），本来为一个整体、动作协同的HA系统，就分裂成两个独立的节点（两个独立的个体）。")]),v._v(" "),t("p",[v._v("由于相互之间失去了联系，都以为对方出现了故障，两个节点上的HA软件就像“裂脑人”一样，“本能”的争抢共享资源，以及“应用服务”，就会引起问题：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("共享资源被瓜分，两边的“服务“都起不起来了")])]),v._v(" "),t("li",[t("p",[v._v("两边服务都起来了，但是同时读取”共享存储“，导致数据损坏（常见的数据库轮询联机日志出错）。")]),v._v(" "),t("p",[v._v("两个节点相互争抢共享资源，导致系统混乱，数据损坏。")]),v._v(" "),t("p",[v._v("对应无状态服务的HA，没有脑裂不脑裂的问题，但是对于有状态服务的HA（如MySQL），必须严格现在脑裂。")])])])]),v._v(" "),t("li",[t("p",[v._v("脑裂出现的原因")]),v._v(" "),t("p",[v._v("发生脑裂，一般有以下几种原因：")]),v._v(" "),t("ul",[t("li",[v._v("高可用服务器节点之间心跳链路发生故障，导致无法正常通信。")]),v._v(" "),t("li",[v._v("网卡以及相关驱动坏了，ip配置及冲突问题（网卡直连）。")]),v._v(" "),t("li",[v._v("因心跳线间连接的设备故障（网卡及交换机）。")]),v._v(" "),t("li",[v._v("因仲裁的机器出问题（采用仲裁的方案）。")]),v._v(" "),t("li",[v._v("高可用服务器上开启了iptables防火墙阻挡了心跳消息传输。")]),v._v(" "),t("li",[v._v("高可用服务器上心跳网卡地址信息配置不正确，导致发送心跳失败。")]),v._v(" "),t("li",[v._v("其他服务配置不当导致，如心跳方式不同、心跳广插冲突、软件bug等。")])])]),v._v(" "),t("li",[t("p",[v._v("脑裂预防方案")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("添加冗余的心跳线（冗余通信方法）")]),v._v(" "),t("p",[v._v("同时用两条心跳线路（心跳线也HA），这样一条心跳线坏了，另外一条还是好的，依然能够传递心跳消息，尽量减少”脑裂“产生的几率。")])]),v._v(" "),t("li",[t("p",[v._v("仲裁机制")]),v._v(" "),t("p",[v._v("当两个节点出现分歧时候，由第三方仲裁者决定听谁的。仲裁者，可以是一个锁服务，一个共享盘或者其他的什么东西。")])]),v._v(" "),t("li",[t("p",[v._v("Lease机制")])]),v._v(" "),t("li",[t("p",[v._v("隔离（Fencing）机制")]),v._v(" "),t("ul",[t("li",[v._v("共享Fencing：确保只有一个Master往共享存储中写数据。")]),v._v(" "),t("li",[v._v("客户端Fencing：确保只有一个Master可以响应客户端请求。")]),v._v(" "),t("li",[v._v("Slave Fencing：确保只有一个Master可以向Slave下发命令")])])])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);