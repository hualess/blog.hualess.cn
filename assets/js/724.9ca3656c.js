(window.webpackJsonp=window.webpackJsonp||[]).push([[724],{1311:function(t,a,e){"use strict";e.r(a);var r=e(2),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"raft协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raft协议"}},[t._v("#")]),t._v(" Raft协议")]),t._v(" "),e("h4",{attrs:{id:"什么是raft协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是raft协议"}},[t._v("#")]),t._v(" 什么是Raft协议")]),t._v(" "),e("p",[t._v("Paxos论证了一致性协议的可行性，但是不好懂，缺少必要的细节，工程实现难度高。广为人知的实现目前只zk的zab协议。")]),t._v(" "),e("p",[t._v("Paxos的出现为分布式的强一致性提供了很好的理论基础，但是paxos协议本身理解起来困难，实现复杂。")]),t._v(" "),e("p",[t._v("斯坦福大学的RamCloud项目中提出了易理解、易实现的分布式一致性复制协议Raft。C++、Java和Go都有对应的实现，Raft相对简洁。")]),t._v(" "),e("p",[t._v("引入主节点、通过竞选确认主节点。节点；类型：follower、candidate和leader。")]),t._v(" "),e("p",[t._v("leader会周期性的发送心跳包给follower。每个follower设置一个随机的竞选超时时间，一般为150~300ms，如果在这个时间内没有收到心跳包，就会变成candidate。进入竞选阶段，通过竞选阶段投票人多的成为leader。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220406235432501.png",alt:"image-20220406235432501"}})]),t._v(" "),e("h4",{attrs:{id:"raft相关概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raft相关概念"}},[t._v("#")]),t._v(" Raft相关概念")]),t._v(" "),e("ol",[e("li",[t._v("节点状态\n"),e("ul",[e("li",[t._v("Leader（主节点）：接收client请求，写入本地后，同步到其他副本中")]),t._v(" "),e("li",[t._v("Follower（从节点）：从Leader中接收更新请求，然后写入本地日志文件。对客户端提供读请求")]),t._v(" "),e("li",[t._v("Candidate（候选节点）：如果Follower在一段时间内，没有接收到心跳，则判断Leader可能发生故障，发起主提议。节点状态从Follower变成Candidate状态，直到选主结束")])])]),t._v(" "),e("li",[t._v("termId：任期号，时间被划分为一个个任期，每次选举后产生一个新的termId，一个任期内只能有一个leader。")]),t._v(" "),e("li",[t._v("requestVote：请求投票，Candidate在选举过程中发起，收到多数派响应后成为leader。")])]),t._v(" "),e("h4",{attrs:{id:"竞选阶段流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#竞选阶段流程"}},[t._v("#")]),t._v(" 竞选阶段流程")]),t._v(" "),e("p",[t._v("http://thesecretlivesofdata.com/raft/")]),t._v(" "),e("p",[t._v("https://raft.github.io/")]),t._v(" "),e("p",[t._v("单节点不存在数据一致性问题，一个节点容易达成一致性。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/20220407-230906.png",alt:""}})]),t._v(" "),e("p",[t._v("多个节点达成一致性")]),t._v(" "),e("p",[t._v("不同的状态")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220407231520954.png",alt:"image-20220407231520954"}})]),t._v(" "),e("p",[t._v("竞选流程")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/20220407-231357.png",alt:"20220407-231357"}})]),t._v(" "),e("ol",[e("li",[e("p",[t._v("最初阶段，只有Folllower，没有leader")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220407231758641.png",alt:"image-20220407231758641"}})]),t._v(" "),e("p",[t._v("FollowerA等待随机竞选超时之后，没收到leader发来的心跳包，进入竞选阶段。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220407232139502.png",alt:"image-20220407232139502"}})])]),t._v(" "),e("li",[e("p",[t._v("此时A发送投票请求给其他节点")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220407232653872.png",alt:"image-20220407232653872"}})])]),t._v(" "),e("li",[e("p",[t._v("其他节点会对请求进行回复，如果超过一般节点进行了回复，那么该节点就会由candidate变成leader")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220407232903317.png",alt:"image-20220407232903317"}})])]),t._v(" "),e("li",[e("p",[t._v("之后leader会周期性的给follower发送心跳包，follower接收到心跳包，会重新开始计时")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220407233135008.png",alt:"image-20220407233135008"}})])])]),t._v(" "),e("h4",{attrs:{id:"leader节点宕机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#leader节点宕机"}},[t._v("#")]),t._v(" leader节点宕机")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220407233525012.png",alt:"image-20220407233525012"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220407233608165.png",alt:"image-20220407233608165"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220407233724576.png",alt:"image-20220407233724576"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220407233814755.png",alt:"image-20220407233814755"}})]),t._v(" "),e("h4",{attrs:{id:"多个candidate竞选"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多个candidate竞选"}},[t._v("#")]),t._v(" 多个Candidate竞选")]),t._v(" "),e("ol",[e("li",[t._v("如果有多个follower成为candidate，并且获得的票数相同，那么就需要重新进行投票。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220407233952703.png",alt:"image-20220407233952703"}})]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("当重新开始投票时，由于每个节点设置的随机竞选超时时间不同，因此再次出现多个candidate进行竞选并且获得相同票数的概率很低。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220407234630560.png",alt:"image-20220407234630560"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220407234745473.png",alt:"image-20220407234745473"}})])])]),t._v(" "),e("h4",{attrs:{id:"日志复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志复制"}},[t._v("#")]),t._v(" 日志复制")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("来自客户端的修改都会传到leader。该修改还未提交，只是存在日志中")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220407235012230.png",alt:"image-20220407235012230"}})])]),t._v(" "),e("li",[e("p",[t._v("leader把修改复制到所有follower")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220407235217320.png",alt:"image-20220407235217320"}})])]),t._v(" "),e("li",[e("p",[t._v("leader会等待大多数follower都进行了修改，然后才将修改提交。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220408195907817.png",alt:"image-20220408195907817"}})])]),t._v(" "),e("li",[e("p",[t._v("leader通知所有follower，让他们进行修改，此时所有节点达成一致。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220408200024511.png",alt:"image-20220408200024511"}})])]),t._v(" "),e("li",[e("p",[t._v("多次日志复制的情况")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220408200143060.png",alt:"image-20220408200143060"}})])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220408200359398.png",alt:"image-20220408200359398"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220408200441706.png",alt:"image-20220408200441706"}})]),t._v(" "),e("h4",{attrs:{id:"网络分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络分区"}},[t._v("#")]),t._v(" 网络分区")]),t._v(" "),e("p",[t._v("面对网络分区，Raft也可以保持一致。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("初始状态下，B节点对其他节点发送心跳")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220408231418452.png",alt:"image-20220408231418452"}})])]),t._v(" "),e("li",[e("p",[t._v("当网络分区，出现网络分区的请求后，只能对A发送心跳，同时其他节点会再选出一个leader")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220408231720682.png",alt:"image-20220408231720682"}})])])]),t._v(" "),e("h4",{attrs:{id:"网络分区情况的日志复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络分区情况的日志复制"}},[t._v("#")]),t._v(" 网络分区情况的日志复制")]),t._v(" "),e("p",[t._v("网络分区数据复制也可以完成数据一致性")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("不同分区写入数据不同")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220409010415632.png",alt:"image-20220409010415632"}})])]),t._v(" "),e("li",[e("p",[t._v("最终E节点termid最大，成为leader节点，同步节点数据，达成数据一致性")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img1.terwer.space/image-20220409143241157.png",alt:"image-20220409143241157"}})])])])])}),[],!1,null,null,null);a.default=s.exports}}]);