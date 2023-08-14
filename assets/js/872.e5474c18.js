(window.webpackJsonp=window.webpackJsonp||[]).push([[872],{1456:function(s,a,t){"use strict";t.r(a);var r=t(2),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("根据官方人员的说明，在目前最新的 2.2.2 版本中，还没有在 UI 界面当中支持 hpa 的功能（可能在下个版本中支持），所以做实验需要通过命令行来手动操作一下。")]),s._v(" "),t("p",[s._v("要知道，想要在 k8s 当中完成 hpa 的实验，需要"),t("code",[s._v("metrics")]),s._v("的支持，不过 rancher 部署完成之后，就已经集成了。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ kubectl get pod "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" kube-system "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" metrics\nmetrics-server-58bd5dd8d7-pr6nh             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          6h50m\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("于是可以直接部署进行实验。")]),s._v(" "),t("h2",{attrs:{id:"_1-部署。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-部署。"}},[s._v("#")]),s._v(" 1，部署。")]),s._v(" "),t("p",[s._v("首先部署一个可供试验的服务。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("kubectl run nginxtest "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--image")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx:latest "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--requests")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("200m "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--expose")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后对如上服务添加 hpa 规则。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("kubectl autoscale deployment nginxtest --cpu-percent"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--min")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--max")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("--cpu-percent")]),s._v("：表示使用率达到上边设定的（200m）的百分之十。")]),s._v(" "),t("li",[t("code",[s._v("--min")]),s._v("：表示一分钟之内。")]),s._v(" "),t("li",[t("code",[s._v("--max")]),s._v("：表示最多增加到 10 个副本。")])]),s._v(" "),t("p",[s._v("如上两条命令可以直接在 web 界面，找到"),t("code",[s._v("集群")]),s._v("，选择"),t("code",[s._v("执行kubectl命令")]),s._v("：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e139b749a9552d34.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("部署完成之后，可以看一看应用部署的情况。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/0e1773e39a06f184.jpg",alt:"image"}})]),s._v(" "),t("h2",{attrs:{id:"_2-暴露服务。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-暴露服务。"}},[s._v("#")]),s._v(" 2，暴露服务。")]),s._v(" "),t("p",[s._v("因为上边是手动创建的一个 deployment，外部无法访问，所以现在手动在集群的"),t("code",[s._v("服务发现")]),s._v("当中添加一下映射。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8a606ef38d093abd.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("保存之后，就可以直接通过随机分配的端口进行访问了。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".111.3:30392\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("DOCTYPE html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Welcome to nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    body "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        width: 35em"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        margin: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" auto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        font-family: Tahoma, Verdana, Arial, sans-serif"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("Welcome to nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/h"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("If you see this page, the nginx web server is successfully installed and\nworking. Further configuration is required."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("For online documentation and support please refer to\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://nginx.org/"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("nginx.org"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("br/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nCommercial support is available at\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://nginx.com/"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("nginx.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("em"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Thank you "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" using nginx."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/em"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("h2",{attrs:{id:"_3-验证效果。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-验证效果。"}},[s._v("#")]),s._v(" 3，验证效果。")]),s._v(" "),t("p",[s._v("在服务器上执行如下命令创造一些访问：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" http://192.168.111.3:30392"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个时候可以到 web 界面看看使用占比情况：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/66270f137e2d5aff.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("那么不用动，等待一会儿，k8s 就会自动给应用增加副本，从而让负载使用占比降下来，而后我在增加两台机器进行访问增压，那么负载再次增高，应该就会再一次增加副本，从而让负载保持在一个之前预期的一个范围当中。")]),s._v(" "),t("p",[s._v("过了一会儿看看果然如此：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/93e2cd668e6165a2.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("可以清晰看到整个负载的动向，也可以看到副本从 1 个增加到了 2 个，再到 4 个，再到 7 个。")]),s._v(" "),t("p",[s._v("然后再去看看应用是否启动了多个副本以应对这种突然增高的负载：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/5656c868e3597de4.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("可以看到，副本已经增加到了 7 个，那么这个功能的试验，到这里也就结束了，真的是非常犀利，非常方便，与此同时，也非常期待 rancher 的下一个版本能够快点到来，争取早点完美支持这种自动的动态调整副本功能。")])])}),[],!1,null,null,null);a.default=e.exports}}]);