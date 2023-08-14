(window.webpackJsonp=window.webpackJsonp||[]).push([[1010],{1594:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-准备工作。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备工作。"}},[s._v("#")]),s._v(" 1，准备工作。")]),s._v(" "),t("p",[s._v("所有的准备工作完成之后，就可以通过这个优秀的Jenkins进行项目构建了。")]),s._v(" "),t("p",[s._v("这里使用一个开源的java语言博客系统halo做测试。")]),s._v(" "),t("p",[s._v("项目地址：https://github.com/ruibaby/halo")]),s._v(" "),t("p",[s._v("同样，为了测试，可以先将项目fork到自己的github空间里，然后就能通过Jenkins来进行构建了。")]),s._v(" "),t("p",[s._v("这里所使用的Jenkins，是上一篇文章当中自己构建成熟的镜像所跑起来的容器，本实验也是基于这个容器所做的。")]),s._v(" "),t("p",[s._v("这里所说的上一篇文章，如果您还没有看，那么建议先看一下，否则有可能会导致跟随本文构建而最终失败。那篇文章如下：")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://wiki.eryajf.net/pages/2030.html",target:"_blank",rel:"noopener noreferrer"}},[s._v(" docker学习笔记–利用Dockerfile创建一些基础镜像 |坐而言不如起而行！ 二丫讲梵"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"_2-进入配置。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-进入配置。"}},[s._v("#")]),s._v(" 2，进入配置。")]),s._v(" "),t("p",[s._v("其他比较简单的步骤就不细说了，直奔主题。")]),s._v(" "),t("p",[s._v("创建一个项目，如图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/90c217b1613492b0.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("就是这么简单，这里直接贴出其中所用到的shell内容：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BUILD_ID")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("B")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" $BUILD_ID - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n \n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("project")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"halo"')]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKSPACE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" mvn clean package "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Pprod")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$B")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKSPACE")]),s._v("/target/dist/halo\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" halo.ini "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[program:halo]\ncommand=/usr/local/jdk1.8.0_144/bin/java -jar  /opt/halo/halo-latest.jar\nnumprocs=1\nautostart=true\nautorestart=true\nstartsecs=60\nEOF")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Dockerfile "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nFROM       idocker.io/eryajf/jdk:1.8\nMAINTAINER hualess\n \nADD     .  /opt/halo\n \nADD   halo.ini /etc/supervisor/conf.d\n \nEXPOSE 8090\nEOF")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$A")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8090")]),s._v(":8090 "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$project")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$A")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br")])]),t("p",[s._v("简单说明，因为这个是直接在本机进行的试验部署，因此所有的命令也都全部写在这里来了，执行完成之后，应用也会部署在本机当中。")]),s._v(" "),t("p",[s._v("首先对项目进行打包，接着先停掉服务，然后通过Dockerfile生成新的镜像，然后启动服务。")]),s._v(" "),t("p",[s._v("如果是异地部署，那么只需将镜像推往私服，然后调用一个远程脚本，进行应用的部署即可。")]),s._v(" "),t("h2",{attrs:{id:"_3-结果验证。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-结果验证。"}},[s._v("#")]),s._v(" 3，结果验证。")]),s._v(" "),t("p",[s._v("我们构建一下，看看效果如何：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3ff0e90b31ed1959.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("这里看到构建已经成功了，那么去服务器上看看情况如何：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost halo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$docker")]),s._v(" images\nREPOSITORY                                              TAG                 IMAGE ID            CREATED             SIZE\nhalo                                                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("                  0ddee68e88db        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" minutes ago      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("955")]),s._v(" MB\n \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost halo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\nCONTAINER ID        IMAGE                             COMMAND                  CREATED             STATUS              PORTS                              NAMES\n2be8bf8a32e4        halo:21                           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/bin/supervis..."')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" minutes ago      Up "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" minutes       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("/tcp, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8090-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8090")]),s._v("/tcp     halo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("看上去貌似已经没有问题了，那么访问一下这个应用：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9aa2b88b54c2f2d0.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("填入一些基本信息，install安装一下，然后进入后台界面：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3381ff9985da0713.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("接着也可以去看一下前台界面：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/395e1f6039315b7f.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("到这里，基本上Jenkins与docker结合的示例就完成了，有些东西我们还没做之前，会想象中觉得很难，但是当你真的对其一一了解之后，会发现其实并没有那么复杂。")])])}),[],!1,null,null,null);a.default=e.exports}}]);