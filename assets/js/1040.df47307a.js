(window.webpackJsonp=window.webpackJsonp||[]).push([[1040],{1622:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[s._v("#")]),s._v(" 1，前言")]),s._v(" "),a("p",[s._v("将要放假前夕，一个同事过来说，某某日志在kafka里边不消费了，我一开始没在意，去kafka的监控一看，果然是堆积了不少。")]),s._v(" "),a("p",[s._v("这个时候首先检查了一波logstash的情况，因为日常变更也就它了，其他组件一般都是没人调整的，但是看了一圈，好像这个时间点也没人做变更，只是在日志里看到一些索引在与某处建联的时候有拒绝的情况。")]),s._v(" "),a("p",[s._v("此时想着去看看kafka集群，是不是有什么问题呢，可是从kafka自身日志当中看了一圈，并没有发现任何异常信息，况且同时段情况下，另一个日志集群共用这套kafka，还在正常消费，说明这条线应该没问题。")]),s._v(" "),a("h2",{attrs:{id:"_2-寻因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-寻因"}},[s._v("#")]),s._v(" 2，寻因")]),s._v(" "),a("p",[s._v("当我在监控中排除刚刚那个索引的消费情况，可以看到其他日志也有上扬堆积的情况，如此看来，应该是es那块儿有问题了，于是开始从查es运行日志开始入手，很快，在master节点看到了如下日志：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-06-24T17:17:19,548"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("WARN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("o.e.x.m.e.l.LocalExporter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("log-center-c2-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" unexpected error "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" indexing monitoring document\norg.elasticsearch.xpack.monitoring.exporter.ExportException: ClusterBlockException"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("blocked by: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("FORBIDDEN/12/index read-only / allow delete "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        at org.elasticsearch.xpack.monitoring.exporter.local.LocalBulk.lambda"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$throwExportException")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LocalBulk.java:128"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("?:?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        at java.util.stream.ReferencePipeline"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(".accept"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ReferencePipeline.java:193"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("?:1.8.0_121"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        at java.util.stream.ReferencePipeline"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(".accept"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ReferencePipeline.java:175"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("?:1.8.0_121"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        at java.util.Spliterators"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ArraySpliterator")]),s._v(".forEachRemaining"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Spliterators.java:948"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("?:1.8.0_121"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-06-24T17:17:19,550"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("WARN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("o.e.x.m.MonitoringService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("log-center-c2-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" monitoring execution failed\norg.elasticsearch.xpack.monitoring.exporter.ExportException: Exception when closing "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" bulk\n        at org.elasticsearch.xpack.monitoring.exporter.ExportBulk"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("init"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ExportBulk.java:95"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("?:?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        at org.elasticsearch.xpack.monitoring.exporter.ExportBulk"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(".onFailure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ExportBulk.java:93"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("?:?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        at org.elasticsearch.xpack.monitoring.exporter.ExportBulk"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Compound")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(".onResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ExportBulk.java:206"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("?:?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("之前并没有遇到过这个问题，不过看到了关键字read-only，查了一下说是有主机磁盘到达水位线了，从而触发es自身保护机制，使索引只读，以防被爆掉。")]),s._v(" "),a("p",[s._v("通过在kibana控制台Dev工具可以看到：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("GET _settings\n......\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"set_099"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"settings"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"number_of_shards"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"blocks"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"read_only_allow_delete"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"provided_name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"set_099"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"creation_date"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1573130020809"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"number_of_replicas"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"uuid"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"L_gtQfu0SWq6oAcV35_pOQ"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"created"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6050499"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n.......\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("此处也可以看到好多索引的 "),a("code",[s._v("read_only_allow_delete")]),s._v("值变成了true，表示对应索引已经无法写入。")]),s._v(" "),a("h2",{attrs:{id:"_3-解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-解决"}},[s._v("#")]),s._v(" 3，解决")]),s._v(" "),a("p",[s._v("解决方法可通过如下命令将所有的索引置为可写：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("PUT _settings\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"blocks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"read_only_allow_delete"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("如果此时kibana无法进入，也可以将如上命令转为curl方式进行配置：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("curl -XPUT "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:9200/_settings"')]),s._v(" -H 'Content-Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" application/json' -d'\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"blocks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"read_only_allow_delete"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("当然这种解决只是临时解除限制，真正导致这个情况的根因还是要解决的。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/11153a1a02d9dd86.jpg",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"_4-再探"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-再探"}},[s._v("#")]),s._v(" 4，再探")]),s._v(" "),a("p",[s._v("通过执行如下命令，我们可以获得如下信息：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("GET _cluster/settings\n.......\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cluster"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"routing"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"allocation"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"disk"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"watermark"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"low"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"90%"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"high"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"95%"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n.......\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("此处的 "),a("code",[s._v("watermark")]),s._v("就表示磁盘的水位线，我们看到有一个low和high，当磁盘空间达到high的界线，就会触发es集群将该节点上存在的分片对应的索引置为只读，从而保护整个集群。这一点在我回看集群磁盘监控时，也的确被证实了，某一个节点磁盘达到了95%。")]),s._v(" "),a("p",[s._v("因此更改了刚刚那个参数之后，还应该针对性地进行一些清理，从而使负载降下来。")])])}),[],!1,null,null,null);t.default=e.exports}}]);