(window.webpackJsonp=window.webpackJsonp||[]).push([[926],{1511:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("MongoDB 官网：https://www.mongodb.com/")]),t._v(" "),a("p",[t._v("各版本软件下载地址：https://www.mongodb.com/download-center/community?jmp=nav")]),t._v(" "),a("h2",{attrs:{id:"_1-安装前准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装前准备"}},[t._v("#")]),t._v(" 1，安装前准备")]),t._v(" "),a("p",[t._v("在安装之前首先确认该版本软件是否支持你的操作系统。")]),t._v(" "),a("p",[t._v("更多详情查看：https://docs.mongodb.com/manual/installation/")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("Platform")])]),t._v(" "),a("th",[a("strong",[t._v("4.0 Community & Enterprise")])]),t._v(" "),a("th",[a("strong",[t._v("3.6 Community & Enterprise")])]),t._v(" "),a("th",[a("strong",[t._v("3.4 Community & Enterprise")])]),t._v(" "),a("th",[a("strong",[t._v("3.2 Community & Enterprise")])]),t._v(" "),a("th",[a("strong",[t._v("3.0 Community & Enterprise")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("RHEL/CentOS 6.2 and later")])]),t._v(" "),a("td",[t._v("✓")]),t._v(" "),a("td",[t._v("✓")]),t._v(" "),a("td",[t._v("✓")]),t._v(" "),a("td",[t._v("✓")]),t._v(" "),a("td",[t._v("✓")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("RHEL/CentOS 7.0 and later")])]),t._v(" "),a("td",[t._v("✓")]),t._v(" "),a("td",[t._v("✓")]),t._v(" "),a("td",[t._v("✓")]),t._v(" "),a("td",[t._v("✓")]),t._v(" "),a("td",[t._v("✓")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-环境说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-环境说明"}},[t._v("#")]),t._v(" 2，环境说明")]),t._v(" "),a("p",[a("strong",[t._v("系统环境说明：")])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cat")]),t._v(" /etc/redhat-release\nCentOS Linux release "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.5")]),t._v(".1804 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("软件版本说明")])]),t._v(" "),a("p",[a("code",[t._v("本次使用的mongodb版本为：mongodb-linux-s390x-rhel72-4.0.10.tgz")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/7fb6bb6ca2cbc6a4.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_3-部署-mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-部署-mongodb"}},[t._v("#")]),t._v(" 3，部署 MongoDB")]),t._v(" "),a("h3",{attrs:{id:"_1-安装所需依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装所需依赖"}},[t._v("#")]),t._v(" 1，安装所需依赖")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libcurl openssl\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-下载所需包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载所需包"}},[t._v("#")]),t._v(" 2，下载所需包")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-4.0.10.tgz\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-解压包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-解压包"}},[t._v("#")]),t._v(" 3，解压包")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xf mongodb-linux-x86_64-rhel70-4.0.10.tgz\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" mongodb-linux-x86_64-rhel70-4.0.10 /usr/local/mongodb\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"_4-创建数据存储目录和日志文件目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建数据存储目录和日志文件目录"}},[t._v("#")]),t._v(" 4，创建数据存储目录和日志文件目录")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /usr/local/mongodb/data/db\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /usr/local/mongodb/logs\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"_5-编辑-mongodb-启动配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-编辑-mongodb-启动配置文件"}},[t._v("#")]),t._v(" 5，编辑 MongoDB 启动配置文件")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/mongodb/bin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" mongodb.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#数据存储目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("dbpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/mongodb/data/db\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#日志文件目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("logpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/mongodb/logs/mongodb.log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#后台运行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("fork")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("auth")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("bind_ip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[a("strong",[t._v("参数说明:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("参数")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("参数说明")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("–dbpath")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("数据存放路径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("–logpath")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("日志文件路径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("–logappend")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("日志输出方式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("–port")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("启用端口号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("–fork")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在后台运行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("–auth")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否需要验证权限登录 (用户名和密码)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("–bind_ip")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("限制访问的 ip")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("–shutdown")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("关闭数据库")])])])]),t._v(" "),a("h3",{attrs:{id:"_6-mongodb-的可执行文件位于-bin-目录下-需要将其添加到-path-路径中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-mongodb-的可执行文件位于-bin-目录下-需要将其添加到-path-路径中"}},[t._v("#")]),t._v(" 6，MongoDB 的可执行文件位于 bin 目录下，需要将其添加到 PATH 路径中")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MONGODB_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/mongodb\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$MONGODB_HOME")]),t._v("/bin   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#末尾处添加")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /etc/profile    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重新加载环境变量")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"_7-启动-mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-启动-mongodb"}},[t._v("#")]),t._v(" 7，启动 MongoDB")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/mongodb/bin\nmongod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" mongodb.conf\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"_8-访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-访问"}},[t._v("#")]),t._v(" 8，访问")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$mongo")]),t._v("\nMongoDB shell version v4.0.10\nconnecting to: mongodb://127.0.0.1:27017/?gssapiServiceName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mongodb\nImplicit session: session "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" UUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cdd40824-7611-41cb-a3ab-ef737a82068d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nMongoDB server version: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.0")]),t._v(".10\nWelcome to the MongoDB shell.\nFor interactive help, "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"help"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\nFor "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" comprehensive documentation, see\n    http://docs.mongodb.org/\nQuestions? Try the support group\n    http://groups.google.com/group/mongodb-user\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$mongod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" mongodb.conf "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--shutdown")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#关闭服务")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h3",{attrs:{id:"_9-使用脚本加入开机自启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-使用脚本加入开机自启"}},[t._v("#")]),t._v(" 9，使用脚本加入开机自启")]),t._v(" "),a("p",[t._v("给系统添加 MongoDB 管理脚本。")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /usr/lib/systemd/system/mongod.service "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF\n[Unit]\nDescription=MongoDB database server\nAfter=network.target\n[Service]\nType=forking\n#PIDFile=/home/dp/data/mongodb/pid\nExecStart=/usr/local/mongodb/bin/mongod -f /usr/local/mongodb/bin/mongodb.conf\nPrivateTmp=true\n[Install]\nWantedBy=multi-user.target\nEOF")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("然后加载启动。")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$systemctl")]),t._v(" daemon-reload\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$systemctl")]),t._v(" start  mongod\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$systemctl")]),t._v(" status  mongod\n● mongod.service - MongoDB database server\n   Loaded: loaded "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/usr/lib/systemd/system/mongod.service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" vendor preset: disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   Active: active "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("running"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" since Wed "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-07-03 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":41:13 CST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 1min 29s ago\n Main PID: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18489")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mongod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   CGroup: /system.slice/mongod.service\n           └─18489 /usr/local/mongodb/bin/mongod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" /usr/local/mongodb/bin/mongodb.conf\nJul 03 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":41:12 localhost.localdomain systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Starting MongoDB database server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nJul 03 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":41:12 localhost.localdomain mongod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18487")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": about to fork child process, waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("until")]),t._v(" server is ready "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" connections.\nJul 03 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":41:12 localhost.localdomain mongod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18487")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": forked process: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18489")]),t._v("\nJul 03 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":41:13 localhost.localdomain mongod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18487")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": child process started successfully, parent exiting\nJul 03 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":41:13 localhost.localdomain systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Started MongoDB database server.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$systemctl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v("  mongod\nCreated symlink from /etc/systemd/system/multi-user.target.wants/mongod.service to /usr/lib/systemd/system/mongod.service.\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[t._v("这样就能够实现比较简单的管理了。")]),t._v(" "),a("h2",{attrs:{id:"_1-数据库的启动与关闭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据库的启动与关闭"}},[t._v("#")]),t._v(" 1，数据库的启动与关闭")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("启动：mongod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--dbpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/mongodb/data "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--logpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/mongodb/log/mongodb.log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--logappend")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--fork")]),t._v("\n关闭：mongod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--shutdown")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--dbpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/mongodb/data "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--logpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/mongodb/log/mongodb.log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--logappend")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--fork")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2-参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-参数说明"}},[t._v("#")]),t._v(" 2， 参数说明:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("参数")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("参数说明")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("–dbpath")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("数据存放路径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("–logpath")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("日志文件路径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("–logappend")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("日志输出方式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("–port")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("启用端口号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("–fork")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在后台运行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("–auth")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否需要验证权限登录 (用户名和密码)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("–bind_ip")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("限制访问的 ip")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("–shutdown")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("关闭数据库")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-使用配置文件的方式管理数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用配置文件的方式管理数据库"}},[t._v("#")]),t._v(" 3，使用配置文件的方式管理数据库")]),t._v(" "),a("h3",{attrs:{id:"_1-普通格式配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-普通格式配置文件"}},[t._v("#")]),t._v(" 1，普通格式配置文件")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mongod@MongoDB conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" mongod1.conf \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("dbpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/mongodb/data\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("logpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/mongodb/log/mongodb.log\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("logappend")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("fork")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("使用配置文件时的启动与关闭：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("启动：mongod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" mongod1.conf \n关闭：mongod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" mongod1.conf  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--shutdown")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-yaml-格式配置文件-官方推荐使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-yaml-格式配置文件-官方推荐使用"}},[t._v("#")]),t._v(" 2，YAML 格式配置文件（官方推荐使用）")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mongod@MongoDB conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v("  mongod.conf \nsystemLog:\n   destination: "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n   path: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/mongodb/log/mongod.log"')]),t._v("\n   logAppend: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nstorage:\n   journal:\n      enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   dbPath: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/mongodb/data"')]),t._v("\nprocessManagement:\n   fork: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nnet:\n   port: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("注：mongod 进程收到 SIGINT 信号或者 SIGTERM 信号，会做一些处理")]),t._v(" "),a("ul",[a("li",[t._v("关闭所有打开的连接")]),t._v(" "),a("li",[t._v("将内存数据强制刷新到磁盘")]),t._v(" "),a("li",[t._v("当前的操作执行完毕")]),t._v(" "),a("li",[t._v("安全停止")])]),t._v(" "),a("h3",{attrs:{id:"_3-切忌-kill-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-切忌-kill-9"}},[t._v("#")]),t._v(" 3，切忌 kill -9")]),t._v(" "),a("p",[t._v("如果使用 "),a("code",[t._v("kill -9")]),t._v(" 直接关闭数据库，可能会造成数据丢失，数据文件损失等风险。")]),t._v(" "),a("p",[t._v("可通过如下安全的方式进行关闭。")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-2")]),t._v(" PID\n　　原理：-2表示向mongod进程发送SIGINT信号。\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-4")]),t._v(" PID\n　　原理：-4表示向mognod进程发送SIGTERM信号。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("当然也可以通过使用"),a("code",[t._v("systemctl stop mongod")]),t._v("来关闭数据库。")]),t._v(" "),a("h2",{attrs:{id:"_4-客户端连接工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-客户端连接工具"}},[t._v("#")]),t._v(" 4，客户端连接工具")]),t._v(" "),a("p",[t._v("MongoDB 有一个相当友好的客户端管理工具，这里我推荐使用 "),a("code",[t._v("robo")]),t._v("，可以通过如下地址下载使用。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://c.eryajf.net/%E5%B7%A5%E5%85%B7/29%EF%BC%8CMongoDB%E5%AE%A2%E6%88%B7%E7%AB%AF/robo.3t.windows-x86_64.7z",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://c.eryajf.net/%E5%B7%A5%E5%85%B7/29%EF%BC%8CMongoDB%E5%AE%A2%E6%88%B7%E7%AB%AF/robo.3t.windows-x86_64.7z"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("参考：http://t.cn/AiOcP9Cy")])])}),[],!1,null,null,null);s.default=e.exports}}]);