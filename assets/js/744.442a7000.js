(window.webpackJsonp=window.webpackJsonp||[]).push([[744],{1387:function(e,s,t){"use strict";t.r(s);var a=t(2),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("有一些经验，非真切经历而不能真切体会，而当真切体会之后，就应当真切凝练汇总，这里汇总整理记录一些工作中的心得经验。")]),e._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/11/9e5a098c0095e5d2.jpg",alt:""}})]),e._v(" "),t("ol",[t("li",[t("p",[e._v("如果业务日志的kafka某个topic堆积了大量的数据，而业务方又确认可以将这段日志跳过的情况下，不能通过删除topic的方式处理，可以通过kafka-manager将参数"),t("code",[e._v("retention.ms")]),e._v("改小，改成1分钟，保存之后，十分钟左右，消息就会删完。完事儿之后再把参数还原。")])]),e._v(" "),t("li",[t("p",[e._v("Jenkins的主域名应该就解析在master服务器本身，因为在配置slave的时候，通信端口是"),t("code",[e._v("全局安全配置")]),e._v("中"),t("code",[e._v("代理")]),e._v("处指定的端口。此时slave与master通信仍将通过"),t("code",[e._v("系统配置")]),e._v("中"),t("code",[e._v("Jenkins Location")]),e._v("中的"),t("code",[e._v("Jenkins URL")]),e._v("加端口进行，如果域名解析到了其他地方，slave节点将总是无法正常注册。如果实在无法在master上解析，也应该放一份Nginx配置文件，slave通过绑定hosts到master的方式强行引导打通。")])]),e._v(" "),t("li",[t("p",[e._v("在k8s中部署服务，如果服务域名通过ingress配置的，那么此时svc的模式可以设置成ClusterIP，因为流量已经走了ingress的映射，不再需要通过NodePort进行代理转发。")])]),e._v(" "),t("li",[t("p",[e._v("es中主索引的分片无法加大或者缩小，如果该索引是固定的单索引的话，通常索引分片是走mapping来定义分片，这个时候应该建立mapping，新建索引，然后reindex的方式处理。")])]),e._v(" "),t("li",[t("p",[e._v("logstash在6.x版本中使用mutate关键字add_field时，使用方式如下：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('mutate {\n  split           => ["request_uri" , "?"]\n  add_field       => {\n      "uri_path"  => "%{request_uri[0]}"\n      "uri_query" => "%{request_uri[1]}"\n  }\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("这样是正常的，但是同样的配置在7.x版本中，会报如下错误：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[2021-05-06T20:33:53,365][WARN ][logstash.filters.mutate  ][main][cc8d92e453b7aeb97baaede527c74dc6b680b6c68938aa1df68cf82be5edb576] Exception caught while applying mutate filter {:exception=>"Invalid FieldReference: `request_uri[0]`"}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("此时应该使用如下方式进行，即可正常添加：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('add_field       => {"uri_path"  => "%{[request_uri][0]}"}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("参考：https://discuss.elastic.co/t/logstash-7-2-0-mutate-error/193086")])]),e._v(" "),t("li",[t("p",[e._v("使用wget下载文件时，尽量不要用-o参数指定文件下载目录，可以通过-P来指定文件存放目录，实测通过-o之后可能会改变文件md5，导致不可预知的问题出现。")])]),e._v(" "),t("li",[t("p",[e._v("千万不要部署破解版的东西用在公司生产，不但会给公司造成侵权问题，还会给自己后续的维护工作带来无穷尽的烦恼。如果这个产品没有较好的开源替代品，就应该在一开始反馈出来，让公司考虑付费使用，或者选择开源产品使用。")])]),e._v(" "),t("li",[t("p",[e._v("如果你用nginx+upsync+consul管理后端服务，并且通过配置管理平台管理着Nginx的配置文件，那么，每个server对应的upstream中的dump文件以及include文件，在初始同步之后就不应该再进行同步或者更新，当初始配置内容被Nginx加载之后，即与consul对接通过平台管理。之所以不应再更新的原因在于，Nginx先读取本地配置加载成功并启动，然后才会连接consul对接数据。一旦初始数据中的后端服务有变更或者下线，那么下次更新就会出现简短的不可用。")]),e._v(" "),t("p",[e._v("为避免此问题，同步配置时，可借助rsync的"),t("code",[e._v("--ignore-existing")]),e._v("参数实现。")])]),e._v(" "),t("li",[t("p",[e._v("后端接口需要拼接数据的场景中，应该优先安排查询，然后再在内存中对数据进行聚合处理。换言之就是不要把与DB的交互放到for里边，否则很容易造成请求放大。")])]),e._v(" "),t("li",[t("p",[e._v("后端在任何时候都不应该相信前端传过来的数据，而应该有自己的判断，否则就会有很多脏数据生成。")])]),e._v(" "),t("li",[t("p",[e._v("后端不同表之间做关联的时候，一定要以唯一的，不变的ID或者identify来进行关联，而不能将动态的值放到关联列表中，否则被关联数据一旦更改，数据就不准确了。")])]),e._v(" "),t("li",[t("p",[e._v("如何快速在谷歌浏览器截全页：进入检查页面，输入cmd+shift+p进入命令界面，输入full回车就会自动生成了。")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);