(window.webpackJsonp=window.webpackJsonp||[]).push([[722],{1304:function(s,v,_){"use strict";_.r(v);var t=_(2),e=Object(t.a)({},(function(){var s=this,v=s.$createElement,_=s._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[_("h3",{attrs:{id:"gossip协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gossip协议"}},[s._v("#")]),s._v(" Gossip协议")]),s._v(" "),_("h4",{attrs:{id:"什么是gossip协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是gossip协议"}},[s._v("#")]),s._v(" 什么是Gossip协议")]),s._v(" "),_("p",[s._v("Gossip协议，也叫 Epidemic协议（流行病协议）。原本用于分布式数据库中节点同步数据使用，后来被广泛应用于数据库复制、信息扩散、集群成员身份确认、故障探测等。")]),s._v(" "),_("p",[s._v("Gossip协议利用随机方式将信息传播到整个网络，并在一定时间内，使系统内所有节点的数据一致。")]),s._v(" "),_("p",[s._v("Gossip协议是一种去中心化的分布式协议，解决状态在集群中的传播和状态一致性保证两个问题。")]),s._v(" "),_("p",[_("img",{attrs:{src:"https://img1.terwer.space/image-20220329233850817.png",alt:"image-20220329233850817"}})]),s._v(" "),_("p",[s._v("Gossip协议的传播方式有两种：反熵传播和谣言传播")]),s._v(" "),_("p",[s._v("1、反熵传播")]),s._v(" "),_("p",[s._v("以固定概率传播随机数据。")]),s._v(" "),_("p",[s._v("所有参与节点只有两种状态：Suspective（病原）和Infective（感染）。过程是种子节点会把所有数据，都跟其他节点共享，以便消除节点之间的数据不一致，他可以保证节点的最终、完全一致性。")]),s._v(" "),_("p",[s._v("缺点是消息数量非常庞大，且无限制，通常用于新加入节点的数据初始化。")]),s._v(" "),_("p",[s._v("2、谣言传播")]),s._v(" "),_("p",[s._v("以固定概率只传播新到达的数据。所有参与节点有三种状态：Suspective（病原）、Infective（感染）、Removed（愈除）。")]),s._v(" "),_("p",[s._v("消息只包含最新update，谣言节点在某个消息之后被标记为removed，并且不再被传播。")]),s._v(" "),_("p",[s._v("缺点是系统有一定的概率会不一致，通常用于节点之间的增量同步。")]),s._v(" "),_("h4",{attrs:{id:"通信方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通信方式"}},[s._v("#")]),s._v(" 通信方式")]),s._v(" "),_("ol",[_("li",[_("p",[s._v("push")]),s._v(" "),_("p",[s._v("节点A将数据以及对应的版本（key,value,version）推送到B节点，B节点更新A节点中比自己新的数据。")]),s._v(" "),_("p",[_("img",{attrs:{src:"https://img1.terwer.space/image-20220401214621955.png",alt:"image-20220401214621955"}})])]),s._v(" "),_("li",[_("p",[s._v("pull")]),s._v(" "),_("p",[s._v("A仅将key,version推送给B，B将本地比A新的数据（key，value，version）推送给A，A更新本地数据。")]),s._v(" "),_("p",[_("img",{attrs:{src:"https://img1.terwer.space/image-20220401215002274.png",alt:"image-20220401215002274"}})])]),s._v(" "),_("li",[_("p",[s._v("push/pull")]),s._v(" "),_("p",[s._v("与pull类似，多了一步，A再将本地比B新的数据推送给B，B更新本地数据")])])]),s._v(" "),_("h4",{attrs:{id:"优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[s._v("#")]),s._v(" 优缺点")]),s._v(" "),_("ol",[_("li",[_("p",[s._v("优点")]),s._v(" "),_("ul",[_("li",[s._v("扩展性：允许节点的任意增加或者减少，新增节点的状态最终会与其他节点一致")]),s._v(" "),_("li",[s._v("容错：任意节点的宕机和重启都不会影响Gossip消息的传播，具有天然的分布式系统容错性")]),s._v(" "),_("li",[s._v("去中心化：无需中心节点，所有节点都是对等的，任意节点无需知道整个网络状况，只要网络联通，任意节点可把消息散播到全网")]),s._v(" "),_("li",[s._v("最终一致性：Gossip协议实现消息的指数级传播，因此，在有新消息传播时，消息可以快速发送到全局节点，在有限时间内能够做到所有节点拥有最新数据")])])]),s._v(" "),_("li",[_("p",[s._v("缺点")]),s._v(" "),_("ul",[_("li",[_("p",[s._v("消息延迟：节点随机向少数几个节点发送消息，消息最终通过多个轮次的散播而到达全网，不可避免造成消息延迟")])]),s._v(" "),_("li",[_("p",[s._v("消息冗余：节点定期随机选择周围节点发送消息，而收到消息的节点也会重复该步骤，不可避免引起同一节点消息被多次接收，增加消息处理压力")])])])])]),s._v(" "),_("p",[_("strong",[s._v("Gossip是一种去中心化的分布式协议，数据通过节点像病毒一样传播。")])]),s._v(" "),_("p",[_("strong",[s._v("因为是指数级传播，所以传播速度非常快。")])]),s._v(" "),_("p",[_("strong",[s._v("Gossip协议适用于 AP 场景的数据一致性处理，常见的应用有：P2P网络通信、Redis Cluster、Consul")])])])}),[],!1,null,null,null);v.default=e.exports}}]);