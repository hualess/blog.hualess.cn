(window.webpackJsonp=window.webpackJsonp||[]).push([[731],{1323:function(e,v,t){"use strict";t.r(v);var _=t(2),a=Object(_.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"分布式服务治理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式服务治理"}},[e._v("#")]),e._v(" 分布式服务治理")]),e._v(" "),t("h3",{attrs:{id:"服务协调"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务协调"}},[e._v("#")]),e._v(" 服务协调")]),e._v(" "),t("p",[e._v("分布式协调主要用来解决分布式环境中多个进程之间的同步，让他们有序的去访问临界资源，防止造成脏数据的后果。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://img1.terwer.space/image-20220411233413739.png",alt:"image-20220411233413739"}})]),e._v(" "),t("p",[e._v("分布式锁是分布式协调技术的核心内容。")]),e._v(" "),t("h4",{attrs:{id:"分布式锁的实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁的实现方式"}},[e._v("#")]),e._v(" 分布式锁的实现方式")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("基于缓存（redis）实现分布式锁")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("获取锁的时候，使用 "),t("code",[e._v("setnx")]),e._v(" 加锁，并使用 "),t("code",[e._v("expire")]),e._v(" 命令为锁添加一个超时时间，超过该时间自动释放锁，锁的 "),t("code",[e._v("value")]),e._v(" 值为一个随机生成的UUID，释放锁的时候进行判断。")])]),e._v(" "),t("li",[t("p",[e._v("获取锁的时候，还设置一个获取的超时时间，若超过这个时间放弃获取锁。")])]),e._v(" "),t("li",[t("p",[e._v("释放锁的时候，通过UUID判断是不是改锁，若是改锁，则执行 "),t("code",[e._v("delete")]),e._v(" 进行锁释放。")]),e._v(" "),t("p",[e._v("setnx：set一个key为value的字符串，返回1。若key存在，则什么都不做，返回0。")]),e._v(" "),t("p",[e._v("expire：为key设置一个超时时间，单位为second，超过这个时间锁自动释放，避免死锁。")]),e._v(" "),t("p",[e._v("delete：删除key")])])])]),e._v(" "),t("li",[t("p",[e._v("Zookeeper是一个为分布式应用提供一致性服务的开源组件，它的内部是一个分层的文件系统目录树结构，规定同一个目录下只能有一个唯一的文件名，基于Zookeeper实现分布式锁的步骤如下：")]),e._v(" "),t("ul",[t("li",[e._v("创建一个目录mylock")]),e._v(" "),t("li",[e._v("线程A想获取锁就在目录mylock下创建临时顺序节点")]),e._v(" "),t("li",[e._v("获取mylock目录下的所有子节点，然后获取比自己小的兄弟节点，如果不存在说明当前顺序号最小，获得锁")]),e._v(" "),t("li",[e._v("线程B获取多有节点，然后判断自己是不是最小节点，设置监听比自己小的节点")]),e._v(" "),t("li",[e._v("线程A处理完，删除自己的节点，线程B监听到变更事件，判断自己是不是最小节点，如果是获得锁")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);