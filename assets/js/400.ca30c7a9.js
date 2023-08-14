(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{987:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#简介"}},[t._v("简介")])]),s("li",[s("a",{attrs:{href:"#支持的传输协议"}},[t._v("支持的传输协议")]),s("ul",[s("li",[s("a",{attrs:{href:"#tcp-协议"}},[t._v("TCP 协议")])]),s("li",[s("a",{attrs:{href:"#nio-协议"}},[t._v("NIO 协议")])]),s("li",[s("a",{attrs:{href:"#amqp-协议"}},[t._v("AMQP 协议")])]),s("li",[s("a",{attrs:{href:"#stomp-协议"}},[t._v("STOMP 协议")])]),s("li",[s("a",{attrs:{href:"#mqtt-协议"}},[t._v("MQTT 协议")])])])]),s("li",[s("a",{attrs:{href:"#nio-案例"}},[t._v("NIO 案例")])]),s("li",[s("a",{attrs:{href:"#nio-协议案例增强"}},[t._v("NIO 协议案例增强")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("ActiveMQ 支持的 client-broker 通讯协议有：TVP、NIO、UDP、SSL、Http(s)、VM。其中配置 Transport Connector 的文件在 ActiveMQ 安装目录的 "),s("code",[t._v("conf/activemq.xml")]),t._v(" 中的标签之内。")]),t._v(" "),s("p",[t._v("ActiveMQ 传输协议的官方文档："),s("code",[t._v("http://activemq.apache.org/configuring-version-5-transports.html")]),t._v("。")]),t._v(" "),s("p",[t._v("这些协议参见文件：%activeMQ 安装目录 "),s("code",[t._v("%/conf/activemq.xml")]),t._v("，下面是文件的重要的内容")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transportConnectors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transportConnector")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("openwire"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tcp://0.0.0.0:61616?maximumConnections=1000"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("wireFormat.maxFrameSize=104857600"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transportConnector")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("amqp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("amqp://0.0.0.0:5672?maximumConnections=1000"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("wireFormat.maxFrameSize=104857600"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transportConnector")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stomp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stomp://0.0.0.0:61613?maximumConnections=1000"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("wireFormat.maxFrameSize=104857600"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transportConnector")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mqtt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mqtt://0.0.0.0:1884?maximumConnections=1000"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("wireFormat.maxFrameSize=104857600"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transportConnector")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ws://0.0.0.0:61614?maximumConnections=1000"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("wireFormat.maxFrameSize=104857600"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transportConnectors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("在上文给出的配置信息中，URI 描述信息的头部都是采用协议名称：例如")]),t._v(" "),s("ul",[s("li",[t._v("描述 amqp 协议的监听端口时，采用的 URI 描述格式为 "),s("code",[t._v("amqp://······")])]),t._v(" "),s("li",[t._v("描述 stomp 协议的监听端口时，采用 URI 描述格式为 "),s("code",[t._v("stomp://······")])]),t._v(" "),s("li",[t._v("唯独在进行 openwire 协议描述时，URI 头却采用的 "),s("code",[t._v("tcp://······")]),t._v("。这是因为 ActiveMQ 中默认的消息协议就是 openwire")])]),t._v(" "),s("h2",{attrs:{id:"支持的传输协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持的传输协议"}},[t._v("#")]),t._v(" 支持的传输协议")]),t._v(" "),s("p",[t._v("个人说明：除了 TCP 和 NIO 协议，其他的了解就行。各种协议有各自擅长该协议的中间件，工作中一般不会使用 ActiveMQ 去实现这些协议。如：mqtt 是物联网专用协议，采用的中间件一般是 mosquito。ws 是 websocket 的协议，是和前端对接常用的，一般在 Java 代码中内嵌一个基站（中间件）。stomp 是邮箱使用的协议的，各大邮箱公司都有基站（中间件）。")]),t._v(" "),s("p",[t._v("注意：协议不同，我们的代码都会不同。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("协议")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("TCP")]),t._v(" "),s("td",[t._v("默认的协议，性能相对可以")])]),t._v(" "),s("tr",[s("td",[t._v("NIO")]),t._v(" "),s("td",[t._v("基于 TCP 协议之上的，进行了扩展和优化，具有更好的扩展性")])]),t._v(" "),s("tr",[s("td",[t._v("UDP")]),t._v(" "),s("td",[t._v("性能比 TCP 更好，但是不具有可靠性")])]),t._v(" "),s("tr",[s("td",[t._v("SSL")]),t._v(" "),s("td",[t._v("安全链接")])]),t._v(" "),s("tr",[s("td",[t._v("HTTP(S)")]),t._v(" "),s("td",[t._v("基于 HTTP 或者 HTTPS")])]),t._v(" "),s("tr",[s("td",[t._v("VM")]),t._v(" "),s("td",[t._v("VM 本身不是协议，当客户端和代理在同一个 Java 虚拟机(VM)中运行时，他们之间需要通信，但不想占用网络通道，而是直接通信，可以使用该方式")])])])]),t._v(" "),s("h3",{attrs:{id:"tcp-协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议"}},[t._v("#")]),t._v(" TCP 协议")]),t._v(" "),s("ul",[s("li",[t._v("Transmission Control Protocol(TCP) 是默认的。TCP 的 Client 监听端口 61616")]),t._v(" "),s("li",[t._v("在网络传输数据前，必须要先序列化数据，消息是通过一个叫 wire protocol 的来序列化成字节流")]),t._v(" "),s("li",[t._v("TCP 连接的 URI 形式如："),s("code",[t._v("tcp://HostName:port?key=value&key=value")]),t._v("，后面的参数是可选的")]),t._v(" "),s("li",[t._v("TCP 传输的的优点：\n"),s("ul",[s("li",[t._v("TCP 协议传输可靠性高，稳定性强")]),t._v(" "),s("li",[t._v("高效率：字节流方式传递，效率很高")]),t._v(" "),s("li",[t._v("有效性、可用性：应用广泛，支持任何平台")])])]),t._v(" "),s("li",[t._v("关于 Transport 协议的可选配置参数可以参考官网："),s("code",[t._v("http://activemq.apache.org/tcp-transport-reference")])])]),t._v(" "),s("h3",{attrs:{id:"nio-协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nio-协议"}},[t._v("#")]),t._v(" NIO 协议")]),t._v(" "),s("ul",[s("li",[t._v("New I/O API Protocol(NIO)")]),t._v(" "),s("li",[t._v("NIO 协议和 TCP 协议类似，但 NIO 更侧重于底层的访问操作。它允许开发人员对同一资源可有更多的 Client 调用和服务器端有更多的负载")]),t._v(" "),s("li",[t._v("适合使用 NIO 协议的场景：\n"),s("ul",[s("li",[t._v("可能有大量的 Client 去连接到 Broker 上，一般情况下，大量的 Client 去连接 Broker 是被操作系统的线程所限制的。因此，NIO 的实现比 TCP 需要更少的线程去运行，所以建议使用 NIO 协议")]),t._v(" "),s("li",[t._v("可能对于 Broker 有一个很迟钝的网络传输，NIO 比 TCP 提供更好的性能")])])]),t._v(" "),s("li",[t._v("NIO 连接的 URI 形式："),s("code",[t._v("nio://hostname:port?key=value&key=value")])]),t._v(" "),s("li",[t._v("关于 Transport 协议的可选配置参数可以参考官网："),s("code",[t._v("http://activemq.apache.org/configuring-version-5-transports.html")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/ActiveMQ/20220730155702.png",alt:"image-20220730155701712"}})]),t._v(" "),s("h3",{attrs:{id:"amqp-协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amqp-协议"}},[t._v("#")]),t._v(" AMQP 协议")]),t._v(" "),s("p",[t._v("AMQP 协议即 Advanced Message Queuing Protocol，一个提供统一消息服务的应用层标准高级消息队列协议，是应用层协议的一个开放标准，为面向消息的中间件设计。基于此协议的客户端与消息中间件可传递消息，并不受客户端中间件不同产品，不同开发语言等条件的限制。")]),t._v(" "),s("h3",{attrs:{id:"stomp-协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stomp-协议"}},[t._v("#")]),t._v(" STOMP 协议")]),t._v(" "),s("p",[t._v("STOMP 即 Streaming Text Orientated Message Protocol，是流文本定向消息协议，是一种为 MOM（Message Oriented Middleware，面向消息的中必件）设计的简单文本协议。")]),t._v(" "),s("h3",{attrs:{id:"mqtt-协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-协议"}},[t._v("#")]),t._v(" MQTT 协议")]),t._v(" "),s("p",[t._v("MQTT (Message Queuing Telemetry Transport，消息队列巡测传输）是 IBM 开发的一个即时通讯协议，有可能成为物联网的重要组成部分。该协议支持所有平台，几乎可以把所有联网物品和外部连接起来，被用来当做传感器和致动器（比如通过 Twitter 让房屋联网〉的通信协议。")]),t._v(" "),s("h2",{attrs:{id:"nio-案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nio-案例"}},[t._v("#")]),t._v(" NIO 案例")]),t._v(" "),s("p",[t._v("ActiveMQ 这些协议传输的底层默认都是使用 BIO 网络的 IO 模型。只有当我们指定使用 NIO 才使用 NIO 的 IO 模型。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/ActiveMQ/20220730160107.png",alt:"image-20220730160106762"}})]),t._v(" "),s("p",[t._v("修改 ActiveMQ 的配置文件 activemq.xml，在 transportConnectors 节点下添加如下内容：")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transportConnector")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nio://0.0.0.0:61618?trace=true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("修改完成后重启 ActiveMQ：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" activemq restart\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("查看管理后台，可以看到页面多了 NIO")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/ActiveMQ/20220730160135.png",alt:"image-20220730160134493"}})]),t._v(" "),s("p",[t._v("代码如何编写呢？只需要在前面文章演示的代码中把 URL 从 TCP 改为 NIO 即可。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ACTIVE_URL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nio://192.168.199.27:61618"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"nio-协议案例增强"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nio-协议案例增强"}},[t._v("#")]),t._v(" NIO 协议案例增强")]),t._v(" "),s("p",[t._v("目的：上面是 Openwire 协议传输底层使用 NIO 网络 IO 模型。如何让其他协议传输底层也使用 NIO 网络 IO 模型呢？")]),t._v(" "),s("p",[t._v("如上方代码，NIO 的端口是 61618，而 TCP 的端口是 61616，如何让一个端口即支持 TCP 又支持 NIO 呢？")]),t._v(" "),s("p",[t._v("修改 ActiveMQ 的配置文件 activemq.xml：具体第 8 行代码：")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transportConnectors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transportConnector")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("openwire"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tcp://0.0.0.0:61626?maximumConnections=1000"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("wireFormat.maxFrameSize=104857600"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transportConnector")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("amqp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("amqp://0.0.0.0:5682?maximumConnections=1000"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("wireFormat.maxFrameSize=104857600"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transportConnector")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stomp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stomp://0.0.0.0:61623?maximumConnections=1000"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("wireFormat.maxFrameSize=104857600"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transportConnector")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mqtt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mqtt://0.0.0.0:1893?maximumConnections=1000"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("wireFormat.maxFrameSize=104857600"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transportConnector")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ws://0.0.0.0:61624?maximumConnections=1000"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("wireFormat.maxFrameSize=104857600"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transportConnector")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nio://0.0.0.0:61618?trace=true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transportConnector")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("auto+nio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("auto+nio://0.0.0.0:61616?maximumConnections=1000"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("wireFormat.maxFrameSize=104857600"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("org.apache.activemq.transport.nio.SelectorManager.corePoolSize=20"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("org.apache.activemq.transport.nio.Se1ectorManager.maximumPoo1Size=50"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transportConnectors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("ul",[s("li",[t._v("auto: 针对所有的协议，他会识别我们是什么协议")]),t._v(" "),s("li",[t._v("nio：使用 NIO 网络 IO 模型")])]),t._v(" "),s("p",[t._v("修改配置文件后重启 ActiveMQ，代码即可实现一个端口，多个协议切换")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ACTIVE_URL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp://192.168.199.27:61616"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ACTIVE_URL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nio://192.168.199.27:61616"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);