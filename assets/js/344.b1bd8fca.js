(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{935:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("序言")]),s._v(" "),t("p",[s._v("本内容是 MySQL-8.0.25 版本在云服务器的 Linux 系统下的安装步骤，Linux 系统为 CentOS 7，所以也会涉及到 systemctl 关于 MySQL 服务的管理。")])]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#前言"}},[s._v("前言")])]),t("li",[t("a",{attrs:{href:"#安装"}},[s._v("安装")]),t("ul",[t("li",[t("a",{attrs:{href:"#安装条件"}},[s._v("安装条件")])]),t("li",[t("a",{attrs:{href:"#下载压缩包"}},[s._v("下载压缩包")])]),t("li",[t("a",{attrs:{href:"#解压压缩包"}},[s._v("解压压缩包")])]),t("li",[t("a",{attrs:{href:"#创建-mysql-组和用户"}},[s._v("创建 MySQL 组和用户")])]),t("li",[t("a",{attrs:{href:"#data目录和权限"}},[s._v("data目录和权限")])]),t("li",[t("a",{attrs:{href:"#初始化"}},[s._v("初始化")])]),t("li",[t("a",{attrs:{href:"#systemctl-管理服务"}},[s._v("systemctl 管理服务")])]),t("li",[t("a",{attrs:{href:"#设置环境变量"}},[s._v("设置环境变量")])]),t("li",[t("a",{attrs:{href:"#登录并修改密码"}},[s._v("登录并修改密码")])]),t("li",[t("a",{attrs:{href:"#远程连接配置"}},[s._v("远程连接配置")])])])]),t("li",[t("a",{attrs:{href:"#问题"}},[s._v("问题")])]),t("li",[t("a",{attrs:{href:"#导入文件"}},[s._v("导入文件")])]),t("li",[t("a",{attrs:{href:"#导出文件"}},[s._v("导出文件")])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("MySQL 是一款安全、跨平台、高效的，并与 PHP、Java 等主流编程语言紧密结合的数据库系统。该数据库系统是由瑞典的 MySQL AB 公司开发、发布并支持，由 MySQL 的初始开发人员 David Axmark 和 Michael Monty Widenius 于 1995 年建立的。")]),s._v(" "),t("p",[s._v("本内容是 MySQL-8.0.25 版本在 Linux 系统下的安装步骤，Linux 系统为 CentOS 7，所以也会涉及到 systemctl 关于 MySQL 服务的管理。")]),s._v(" "),t("p",[s._v("如果在 Windows 下载安装包："),t("a",{attrs:{href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL新版下载地址"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("连接云服务器的 Linux 软件："),t("a",{attrs:{href:"https://www.netsarang.com/zh/xshell/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Xshell 官网"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("上传文件到云服务器的 Linux 软件："),t("a",{attrs:{href:"https://www.netsarang.com/zh/xftp/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Xftp官网"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("h3",{attrs:{id:"安装条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装条件"}},[s._v("#")]),s._v(" 安装条件")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("CentOs 7 会有默认的 "),t("code",[s._v("mariadb")]),s._v(" 数据库，和 "),t("code",[s._v("MySQL")]),s._v(" 有冲突，所以需要进行卸载")]),s._v(" "),t("p",[s._v("先查询 "),t("code",[s._v("mariadb")]),s._v(" 版本，再卸载：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qa")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mariadb \nyum remove mariadb-libs.x86_64  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你的版本不一定是 mariadb-libs.x86_64")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("安装 MySQL 需要的依赖包 "),t("code",[s._v("libaio")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" libaio\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"下载压缩包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载压缩包"}},[s._v("#")]),s._v(" 下载压缩包")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("如果需要在 Linux 里直接下载，先进入自定义安装目录(我的是 "),t("code",[s._v("/opt/mysql")]),s._v(")，然后执行安装命令:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/mysql\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.25-linux-glibc2.12-x86_64.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这里需要修的是版本号，即 "),t("code",[s._v("mysql-8.0.25")]),s._v("，根据需求决定")])]),s._v(" "),t("li",[t("p",[s._v("Windows 上传安装包到 Linux，我就是这一步")]),s._v(" "),t("p",[s._v("首先需要连接 Linux 的文件上传工具，我的是 "),t("code",[s._v("Xftp")]),s._v("。")]),s._v(" "),t("p",[s._v("在右侧 Linux 选择一个目录，在左侧 Windows 选择压缩包，右键弹出选择列表后，选择传输，即可传输压缩包到 Linux。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/MySQL/20211105154925.png",alt:"image-20211105154727114"}})])])]),s._v(" "),t("h3",{attrs:{id:"解压压缩包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压压缩包"}},[s._v("#")]),s._v(" 解压压缩包")]),s._v(" "),t("p",[s._v("进入 MySQL 传输目录，然后解压压缩包到 "),t("code",[s._v("/usr/local")]),s._v("，解压目录根据需求决定")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/mysql\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xvf mysql-8.0.25-linux-glibc2.12-x86_64.tar.xz "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /usr/local\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("不用 "),t("code",[s._v("zxvf")]),s._v(" 是因为我的 MySQL 压缩包是 "),t("code",[s._v(".xz")]),s._v(" 而不是 "),t("code",[s._v(".gz")]),s._v("。")]),s._v(" "),t("p",[s._v("前往 "),t("code",[s._v("/usr/local")]),s._v(" 目录，我解压后的文件夹名为 "),t("code",[s._v("mysql-8.0.25-linux-glibc2.12-x86_64")]),s._v("，太长，需要修改名字为 "),t("code",[s._v("mysql-8.0.25")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" mysql-8.0.25-linux-glibc2.12-x86_64 mysql-8.0.25\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/MySQL/20211105160008.png",alt:"image-20211105155933746"}})]),s._v(" "),t("h3",{attrs:{id:"创建-mysql-组和用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-mysql-组和用户"}},[s._v("#")]),s._v(" 创建 MySQL 组和用户")]),s._v(" "),t("p",[s._v("如果已经创建 MySQL 组和用户，无需这一步，没有则创建")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/group "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建用户组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" mysql  \n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建用户，并添加该用户到组中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" mysql mysql\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" mysql\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入自定义密码")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("我试过不创建 MySQL 组和用户，结果无法启动 MySQL。")]),s._v(" "),t("h3",{attrs:{id:"data目录和权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data目录和权限"}},[s._v("#")]),s._v(" data目录和权限")]),s._v(" "),t("p",[s._v("进入 MySQL 目录并创建 "),t("code",[s._v("data")]),s._v(" 目录，其中 "),t("code",[s._v("data")]),s._v(" 目录存放数据相关的数据，可自定义名字")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/mysql-8.0.25\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" data\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("赋 MySQL 目录权限给 MySQL 组和用户")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" mysql.mysql /usr/local/mysql-8.0.25\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果想给所有用户和组拥有 MySQL 的目录可读、可写、执行权限，则赋予权限")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" /usr/local/mysql-8.0.25\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("第一个 7 表示该文件夹的所有者获得所有权限，这里是 mysql 用户；")]),s._v(" "),t("p",[s._v("第二个 7 表示该文件夹的所有组获得所有权限，这里是 mysql 组；")]),s._v(" "),t("p",[s._v("第三个 7 表示其他用户获得所有权限，这里是非 mysql 组的用户。")]),s._v(" "),t("p",[s._v("我没有执行 777 命令，如果后期出现 权限问题，可以执行该命令。")]),s._v(" "),t("h3",{attrs:{id:"初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[s._v("#")]),s._v(" 初始化")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("配置 my.cnf，这是核心配置文件，默认放在 "),t("code",[s._v("/etc")]),s._v(" 下")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/my.cnf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("并添加如下配置")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 3306 端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 mysql 的安装目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("basedir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql-8.0.25\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql数据库的数据的存放目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("datadir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql/data\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许最大连接数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_connections")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_connect_errors")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端使用的字符集默认为 UTF8")]),s._v("\ncharacter-set-server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新表时将使用的默认存储引擎")]),s._v("\ndefault-storage-engine"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INNODB\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认使用“mysql_native_password”插件认证")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("default_authentication_plugin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql_native_password\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 mysql 客户端默认字符集")]),s._v("\ndefault-character-set"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 mysql 客户端连接服务端时默认使用的端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\ndefault-character-set"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("需要修改的内容是第 5 行和第 7 行："),t("code",[s._v("basedir")]),s._v(" 请填写自己的 MySQL 根目录，"),t("code",[s._v("datadir")]),s._v("请填写数据 data 目录路径，其他不变。")])]),s._v(" "),t("li",[t("p",[s._v("进行 "),t("strong",[s._v("初始化")]),s._v(" 操作，并记住初始化密码，登录需要")]),s._v(" "),t("p",[s._v("首先进入 MySQL 根目录下的 bin 目录，里面有个 "),t("code",[s._v("mysqld")]),s._v(" 命令，拿来初始化")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/mysql-8.0.25/bin\n./mysqld "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--initialize")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("记住初始化密码")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/MySQL/20211105162958.png",alt:"image-20211105162919004"}})])])]),s._v(" "),t("h3",{attrs:{id:"systemctl-管理服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#systemctl-管理服务"}},[s._v("#")]),s._v(" systemctl 管理服务")]),s._v(" "),t("p",[s._v("创建 "),t("code",[s._v("systemctl")]),s._v(" 管理 MySQL 的配置文件：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("创建配置文件：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/lib/systemd/system/mysqld.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("systemctl")]),s._v(" 对配置文件的后缀名有所要求、这个文件的后缀名要是以 "),t("code",[s._v(".service")]),s._v(" 结尾的；当然由于它默认可以省略后缀，所以你也可以不指定后缀名。")])]),s._v(" "),t("li",[t("p",[s._v("配置文件填入如下内容：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MySQL Server\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Documentation")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("man:mysqld"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Documentation")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://dev.mysql.com/doc/refman/en/using-systemd.html\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("syslog.target\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Group")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql-8.0.25/bin/mysqld --defaults-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/my.cnf\nLimitNOFILE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Restart=on-failure")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#RestartPreventExitStatus=1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#PrivateTmp=false")]),s._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("这里面需要修改的是第 14 行："),t("code",[s._v("ExecStart")]),s._v(" 请改为自己的 MySQL 目录")])]),s._v(" "),t("li",[t("p",[s._v("重新加载配置文件，让 "),t("code",[s._v("systemctl")]),s._v(" 识别更新的内容")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("systemctl daemon-reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("启动 MySQL 服务")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("systemctl start mysqld\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("开机自启 MySQL 服务")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl enable mysqld\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("p",[s._v("自此 MySQL 的服务由 "),t("code",[s._v("systemctl")]),s._v(" 管理。")]),s._v(" "),t("h3",{attrs:{id:"设置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置环境变量"}},[s._v("#")]),s._v(" 设置环境变量")]),s._v(" "),t("p",[s._v("每次登录 MySQL 都需要 bin 目录下的 "),t("code",[s._v("mysql")]),s._v(" 命令。配置好环境变量，无论在哪里，都可以直接输入 "),t("code",[s._v("mysql")]),s._v(" 进行登录。")]),s._v(" "),t("p",[s._v("进入环境变量文件，其他命令如果也要全局使用，也是如此配置")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/profile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("去到最后一行，添加如下内容：MySQL 根目录下的 bin 目录")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/usr/local/mysql-8.0.25/bin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("重新载入文件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"登录并修改密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录并修改密码"}},[s._v("#")]),s._v(" 登录并修改密码")]),s._v(" "),t("p",[s._v("配置好环境变量后，登录 MySQL")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysql "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入你的密码")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("修改密码")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("ALTER "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" IDENTIFIED WITH mysql_native_password BY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'新密码'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"远程连接配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程连接配置"}},[s._v("#")]),s._v(" 远程连接配置")]),s._v(" "),t("p",[s._v("让其他地方能连接到你的 MySQL 服务器。")]),s._v(" "),t("p",[s._v("确保成功登录到 MySQL。")]),s._v(" "),t("p",[s._v("切换到 MySQL 数据库，并配置远程连接，并刷新重启：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" mysql\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" host "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nFLUSH "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("启动 MySQL 服务时，报错：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("/usr/local/mysql-8.0.25/bin/mysqld start\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ERROR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Fatal error: Please "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Security"')]),s._v(" section of the manual to "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" out how to run mysqld as root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("分析：此处 MySQL 是出于安全考虑，默认拒绝用 root 账号启动 MySQL 服务")]),s._v(" "),t("p",[s._v("解决：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("通过在命令后面加上 --user=root 进行强制使用root账号启动。这样是最快的")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("/usr/local/mysql-8.0.25/bin/mysqld start "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("登录到 mysql 用户，启动 MySQL 服务，需要在 "),t("code",[s._v("my.cnf")]),s._v(" 文件的底部，添加 "),t("code",[s._v("user=mysql")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/my.cnf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/MySQL/20211105172232.png",alt:"image-20211105172231086"}})])])])])]),s._v(" "),t("h2",{attrs:{id:"导入文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入文件"}},[s._v("#")]),s._v(" 导入文件")]),s._v(" "),t("p",[t("strong",[s._v("不登录 MySQL")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysql "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" userName "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" dabaseName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" /opt/mysql/fileName.sql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("userName")]),s._v(" 为用户名")]),s._v(" "),t("p",[t("code",[s._v("dabaseName")]),s._v(" 为数据库名")]),s._v(" "),t("p",[s._v("在 < 后填入 sql 文件所在的路径。")]),s._v(" "),t("p",[t("strong",[s._v("登录 MySQL")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("登录到 MySQL")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysql "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" userName "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你的密码")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("选择或者创建数据库")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v(" glrepair"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" glrepair"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("导入sql文件")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("source "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("fileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("source")]),s._v(" 后填入 sql 文件所在的路径")])])]),s._v(" "),t("h2",{attrs:{id:"导出文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出文件"}},[s._v("#")]),s._v(" 导出文件")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("导出整个数据库中的所有数据")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysqldump "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" userName "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" dabaseName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" fileName.sql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("导出数据库中的某个表的数据")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysqldump "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" userName "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" dabaseName tableName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" fileName.sql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("导出整个数据库中的所有的表结构")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysqldump "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" userName "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" dabaseName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" fileName.sql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("导出整个数据库中某个表的表结构")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysqldump "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" userName "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" dabaseName tableName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" fileName.sql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("p",[t("code",[s._v("userName")]),s._v("：用户名")]),s._v(" "),t("p",[t("code",[s._v("dabaseName")]),s._v("：数据库名")]),s._v(" "),t("p",[t("code",[s._v("tableName")]),s._v("：表名")]),s._v(" "),t("p",[t("code",[s._v("fileName.sql")]),s._v(" 最好加上路径名")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),t("p",[s._v("记得放行 MySQL 端口，即 3306 端口")])])])}),[],!1,null,null,null);a.default=r.exports}}]);