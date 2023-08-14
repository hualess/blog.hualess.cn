(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{733:function(t,s,e){"use strict";e.r(s);var a=e(2),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"面试题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试题"}},[t._v("#")]),t._v(" 面试题")]),t._v(" "),e("p",[t._v("生产环境中的 Redis 是怎么部署的？")]),t._v(" "),e("h2",{attrs:{id:"面试官心理分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试官心理分析"}},[t._v("#")]),t._v(" 面试官心理分析")]),t._v(" "),e("p",[t._v("看看你了解不了解你们公司的 Redis 生产集群的部署架构，如果你不了解，那么确实你就很失职了，你的 Redis 是主从架构？集群架构？用了哪种集群方案？有没有做高可用保证？有没有开启持久化机制确保可以进行数据恢复？线上 Redis 给几个 G 的内存？设置了哪些参数？压测后你们 Redis 集群承载多少 QPS？")]),t._v(" "),e("p",[t._v("兄弟，这些你必须是门儿清的，否则你确实是没好好思考过。")]),t._v(" "),e("h2",{attrs:{id:"面试题剖析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试题剖析"}},[t._v("#")]),t._v(" 面试题剖析")]),t._v(" "),e("p",[t._v("Redis cluster，10 台机器，5 台机器部署了 Redis 主实例，另外 5 台机器部署了 Redis 的从实例，每个主实例挂了一个从实例，5 个节点对外提供读写服务，每个节点的读写高峰 QPS 可能可以达到每秒 5 万，5 台机器最多是 25 万读写请求每秒。")]),t._v(" "),e("p",[t._v("机器是什么配置？32G 内存+ 8 核 CPU + 1T 磁盘，但是分配给 Redis 进程的是 10g 内存，一般线上生产环境，Redis 的内存尽量不要超过 10g，超过 10g 可能会有问题。")]),t._v(" "),e("p",[t._v("5 台机器对外提供读写，一共有 50g 内存。")]),t._v(" "),e("p",[t._v("因为每个主实例都挂了一个从实例，所以是高可用的，任何一个主实例宕机，都会自动故障迁移，Redis 从实例会自动变成主实例继续提供读写服务。")]),t._v(" "),e("p",[t._v("你往内存里写的是什么数据？每条数据的大小是多少？商品数据，每条数据是 10kb。100 条数据是 1mb，10 万条数据是 1g。常驻内存的是 200 万条商品数据，占用内存是 20g，仅仅不到总内存的 50%。目前高峰期每秒就是 3500 左右的请求量。")]),t._v(" "),e("p",[t._v("其实大型的公司，会有基础架构的 team 负责缓存集群的运维。")])])}),[],!1,null,null,null);s.default=r.exports}}]);