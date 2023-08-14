(window.webpackJsonp=window.webpackJsonp||[]).push([[792],{1375:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("有时候 NGINX 面对一些特殊的场景时，需要进行一定的限速限流的配置，比如一个官网，可能前端静态文件是非常小的，但是同时配置的还有一些 apk 包，这些包如果不做任何限制，可能会形成比较大的负载或者带宽的压力，我这边碰到了，今天就来针对这个问题处理一下。")]),s._v(" "),a("p",[s._v("没有限制之前，对应的包下载速度如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d060cd11b5c88123.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("添加如下配置，进行一定的限制：")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ...#省略\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_conn_zone")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$binary_remote_addr")]),s._v(" zone=addr:10m")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ...#省略\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" ~ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^/test/app/"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_conn")]),s._v(" addr "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_rate_after")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10m")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_rate")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1200k")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_conn_status")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("499")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_conn_log_level")]),s._v(" warn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("  /app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("说明：")]),s._v(" "),a("ul",[a("li",[s._v("http 区域，我这里使用的是 1.15 版本的，默认已经安装了对应的模块"),a("code",[s._v("ngx_http_limit_conn_module")]),s._v("。\n"),a("ul",[a("li",[a("code",[s._v("limit_conn_zone")]),s._v("：是一个固定的名称，下边调用的时候与之对应。")]),s._v(" "),a("li",[a("code",[s._v("$binary_remote_addr")]),s._v("：表示通过 remote_addr 这个标识来做限制，“binary_” 的目的是缩写内存占用量，是限制同一客户端 ip 地址。")]),s._v(" "),a("li",[a("code",[s._v("zone=addr:10m")]),s._v("：示生成一个大小为 10M，名字为 addr 的内存区域，用来存储访问的频次信息。")])])]),s._v(" "),a("li",[s._v("server 区域，可以直接写在 server 区域内，表示限制所有，也可以写到对应的 location 当中，以表示单独区域限制。\n"),a("ul",[a("li",[a("code",[s._v("limit_conn")]),s._v("：表示单个 IP 限制最大连接数为 6。")]),s._v(" "),a("li",[a("code",[s._v("limit_rate_after")]),s._v("：表示请求前 10m 大小时不限速。")]),s._v(" "),a("li",[a("code",[s._v("limit_rate")]),s._v("：表示单个连接最大连接带宽限制为 1200k。")]),s._v(" "),a("li",[a("code",[s._v("limit_conn_status")]),s._v("：设置拒绝请求的返回值。值只能设置 400 到 599 之间（默认是 503）。")]),s._v(" "),a("li",[a("code",[s._v("limit_conn_log_level")]),s._v("：定义日志级别，默认 error。")])])])]),s._v(" "),a("p",[s._v("现在简单的做一下测试看看下载速度：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f911e2a4628f1191.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("可以看到对应的速度已经收到限制，而且是在 10M 之后速度开始慢慢下降，直至达到限制的位置。现在可以简单压测看下情况：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ ab "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" http://www.test.com/res/app/app-xiaomi-release.apk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这条命令表示请求 10 次对应资源，并发为 10。监控对应日志，看到如下结果，因为我们定义的最大并发是 6，所以将会有 4 个失败，并返回 499 状态码，然后有 6 个成功。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tailf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print  $6}'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"499"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"499"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"499"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"499"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"200"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"200"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"200"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"200"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"200"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"200"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("另外在压测命令之后，还有一些输出可以参考：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Total transferred:      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("403483116")]),s._v(" bytes\nHTML transferred:       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("403481400")]),s._v(" bytes\nRequests per second:    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#/sec] (mean)")]),s._v("\nTime per request:       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56865.501")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTime per request:       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5686.550")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mean, across all concurrent requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTransfer rate:          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6929.10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Kbytes/sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" received\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("其他的不说了，只看最后一条，可以看到总的对外输出是大约"),a("code",[s._v("7M/s")]),s._v("，正好符合单条限制 1.2M/s 乘以 6 的数值。")]),s._v(" "),a("p",[s._v("另外还有其他一些相关限制配置，有需要另行研究："),a("a",{attrs:{href:"http://t.cn/AiH218nT",target:"_blank",rel:"noopener noreferrer"}},[s._v("研究地址。"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);