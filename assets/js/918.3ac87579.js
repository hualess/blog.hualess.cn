(window.webpackJsonp=window.webpackJsonp||[]).push([[918],{1502:function(a,s,e){"use strict";e.r(s);var t=e(2),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"_1-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[a._v("#")]),a._v(" 1，简介")]),a._v(" "),e("p",[a._v("Kafka 是一种高吞吐的分布式发布订阅消息系统，能够替代传统的消息队列用于解耦合数据处理，缓存未处理消息等，同时具有更高的吞吐率，支持分区、多副本、冗余，因此被广泛用于大规模消息数据处理应用。Kafka 支持 Java 及多种其它语言客户端，可与 Hadoop、Storm、Spark 等其它大数据工具结合使用。")]),a._v(" "),e("h2",{attrs:{id:"_2-下载-kafka"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载-kafka"}},[a._v("#")]),a._v(" 2，下载 kafka")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://mirrors.cnnic.cn/apache/kafka/0.11.0.2/kafka_2.11-0.11.0.2.tgz\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"_3-安装-jdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-jdk"}},[a._v("#")]),a._v(" 3，安装 JDK")]),a._v(" "),e("p",[a._v("Kafka 使用 Zookeeper 来保存相关配置信息，Kafka 及 Zookeeper 依赖 Java 运行环境。")]),a._v(" "),e("p",[a._v("通过如下命令安装："),e("code",[a._v("curl 192.168.1.1/a | sh")]),a._v("。")]),a._v(" "),e("p",[a._v("此种安装方式可以"),e("a",{attrs:{href:"https://github.com/eryajf/magic-of-sysuse-scripts",target:"_blank",rel:"noopener noreferrer"}},[a._v("参考这里"),e("OutboundLink")],1),a._v("。")]),a._v(" "),e("h2",{attrs:{id:"_4-安装-kafka"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装-kafka"}},[a._v("#")]),a._v(" 4，安装 Kafka")]),a._v(" "),e("p",[a._v("从官网下载 Kafka 安装包，解压安装：")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xf")]),a._v(" kafka_2.11-0.11.0.2.tgz     \n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" kafka_2.11-0.11.0.2 /usr/local/kafka\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" kafka\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h3",{attrs:{id:"_1-启动-kafka"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-启动-kafka"}},[a._v("#")]),a._v(" 1，启动 kafka")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("1，启动 zookeeper。")]),a._v(" "),e("p",[a._v("使用安装包中的脚本启动单节点 Zookeeper 实例：")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("bin/zookeeper-server-start.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-daemon")]),a._v("  config/zookeeper.properties\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])])]),a._v(" "),e("p",[a._v("看其他教程说这个地方会有一些标准输出，但是我在使用的过程中并没有将见到有什么输出。")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d39b754dd3ede32f.jpg",alt:"image"}})]),a._v(" "),e("p",[a._v("根据是否出现红框内 QuorumPeerMain，验证启动是否成功。")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("2，启动 kafka 服务。")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("bin/kafka-server-start.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-daemon")]),a._v(" config/server.properties\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("务必将进程放入后台执行，否则会一直停在一个界面之中。")])])]),a._v(" "),e("h3",{attrs:{id:"_2-功能验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-功能验证"}},[a._v("#")]),a._v(" 2，功能验证")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("1，创建 topic")]),a._v(" "),e("p",[a._v("使用 kafka-topics.sh 创建单分区单副本的 topic test：")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("bin/kafka-topics.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--create")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zookeeper")]),a._v(" localhost:2181 --replication-factor "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--partitions")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--topic")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("2，查看 topic：")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("bin/kafka-topics.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--list")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zookeeper")]),a._v(" localhost:2181\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("如果输出一个 test 说明正常。")])]),a._v(" "),e("li",[e("p",[a._v("3，产生消息")]),a._v(" "),e("p",[a._v("使用 kafka-console-producer.sh 发送消息：")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("bin/kafka-console-producer.sh --broker-list localhost:9092 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--topic")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" \nHello world！\nHello Kafka！\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("4，消费消息")]),a._v(" "),e("p",[a._v("使用 kafka-console-consumer.sh 接收消息并在终端打印：")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v(" bin/kafka-console-consumer.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zookeeper")]),a._v(" localhost:2181 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--topic")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" --from-beginning\n Hello world"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n Hello Kafka"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);