(window.webpackJsonp=window.webpackJsonp||[]).push([[805],{1388:function(a,s,t){"use strict";t.r(s);var e=t(2),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("zabbix是什么，想必已经无需多言了，如果真的还不知道zabbix是什么的，那么烦请出门百度一波，然后再来这里。")]),a._v(" "),t("p",[a._v("这是zabbix系列分享的第一篇，就先来介绍一下怎么安装一台zabbix服务器。")]),a._v(" "),t("h2",{attrs:{id:"一-服务器初始化准备。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-服务器初始化准备。"}},[a._v("#")]),a._v(" 一，服务器初始化准备。")]),a._v(" "),t("p",[a._v("一般我的站点不特别强调的话，都是默认使用的系统都是CentOS 7。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("systemctl stop firewalld\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#关闭防火墙")]),a._v("\nsystemctl disable firewalld\t        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#设置开机不自启")]),a._v("\nsetenforce "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#临时关闭SELinux")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"s/SELINUX=enforcing/SELINUX=disabled/g"')]),a._v(" /etc/selinux/config\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#永久关闭SELinux")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h2",{attrs:{id:"二-安装lamp。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-安装lamp。"}},[a._v("#")]),a._v(" 二，安装LAMP。")]),a._v(" "),t("p",[a._v("此处使用rpm方式进行安装，一般情况下企业安装一些软件工具都是使用源码进行安装，但是安装zabbix的话，还是比较建议使用rpm的方式来进行安装的。")]),a._v(" "),t("h3",{attrs:{id:"_1-配置yum源并安装。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置yum源并安装。"}},[a._v("#")]),a._v(" 1，配置yum源并安装。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://mirrors.163.com/.help/CentOS7-Base-163.repo\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#下载网络yum源")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" CentOS7-Base-163.repo /etc/yum.repos.d/\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#移动到yum源下")]),a._v("\nyum clean all\t\t\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#清空缓存")]),a._v("\nyum makecache\t\t\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#建立其库")]),a._v("\nyum "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mariadb mariadb-server httpd php php-mysql\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"_2-启动相关服务并设置开机自启。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动相关服务并设置开机自启。"}},[a._v("#")]),a._v(" 2，启动相关服务并设置开机自启。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" httpd\nsystemctl restart httpd\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" mariadb\nsystemctl restart mariadb\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"_3-初始化数据库。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-初始化数据库。"}},[a._v("#")]),a._v(" 3，初始化数据库。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mysql_secure_installation\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("初始化的时候会让设置数据库的密码，这个地方可以设置一下，然后要记住密码是什么。")]),a._v(" "),t("h2",{attrs:{id:"三、安装-zabbix-程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、安装-zabbix-程序"}},[a._v("#")]),a._v(" 三、安装 Zabbix 程序")]),a._v(" "),t("h3",{attrs:{id:"_1-安装zabbix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装zabbix"}},[a._v("#")]),a._v(" 1，安装zabbix")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ivh")]),a._v(" http://repo.zabbix.com/zabbix/3.2/rhel/7/x86_64/zabbix-release-3.2-1.el7.noarch.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--import")]),a._v(" /etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX\nyum "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" zabbix-server-mysql zabbix-web-mysql  zabbix-agent\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h3",{attrs:{id:"_2-配置数据库。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置数据库。"}},[a._v("#")]),a._v(" 2，配置数据库。")]),a._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("mysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("u root "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" zabbix "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DEFAULT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CHARACTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" utf8 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COLLATE")]),a._v(" utf8_bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("grant")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("all")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("privileges")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("on")]),a._v(" zabbix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("to")]),a._v(" zabbix"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@localhost")]),a._v(" identified "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("by")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zabbix'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("此处的密码可以自定义，我这里就直接用zabbix了。")]),a._v(" "),t("h3",{attrs:{id:"_3-读入数据库。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-读入数据库。"}},[a._v("#")]),a._v(" 3，读入数据库。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd /usr/share/doc/zabbix-server-mysql-3.2.7/\nzcat create.sql.gz | mysql -uroot -p  zabbix\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("将数据写入数据库之后，记得别忘了登陆数据库 show tables; 看一下。")]),a._v(" "),t("h3",{attrs:{id:"_4-配置zabbix。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置zabbix。"}},[a._v("#")]),a._v(" 4，配置zabbix。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/zabbix/zabbix_server.conf\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DBHost")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("localhost\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DBName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("zabbix\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DBUser")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("zabbix\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DBPassword")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("zabbix  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#添加密码（115行）")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h3",{attrs:{id:"_5-启动-zabbix-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动-zabbix-服务"}},[a._v("#")]),a._v(" 5，启动 Zabbix 服务")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("systemctl start zabbix-server\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" zabbix-server\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("如果有报错，可能是iptables或者selinux没有搞定的问题，或者其他原因，请自查解决。")]),a._v(" "),t("h3",{attrs:{id:"_6-编辑-zabbix-前端-php-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-编辑-zabbix-前端-php-配置"}},[a._v("#")]),a._v(" 6，编辑 zabbix 前端 php 配置")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/httpd/conf.d/zabbix.conf\n\nphp_value max_execution_time "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("300")]),a._v("\nphp_value memory_limit 128M\nphp_value post_max_size 16M\nphp_value upload_max_filesize 2M\nphp_value max_input_time "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("300")]),a._v("\nphp_value always_populate_raw_post_data "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-1")]),a._v("\nphp_value date.timezone Asia/Shanghai           "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#只改这一个地方，将时区改成上海")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("h3",{attrs:{id:"_7-调整时间同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-调整时间同步"}},[a._v("#")]),a._v(" 7，调整时间同步")]),a._v(" "),t("p",[a._v("为了保证监控数据的准确性以及时效性，配置zabbix服务器与被监控主机的时间同步非常必要。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ntp\nntpdate "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" cn.pool.ntp.org\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("必要的话也可以将时间同步的命令写入到系统定时任务当中，这里不再赘述。")]),a._v(" "),t("h3",{attrs:{id:"_8-重启-apache-服务生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-重启-apache-服务生效"}},[a._v("#")]),a._v(" 8，重启 Apache 服务生效")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("systemctl restart httpd\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_9-安装登陆。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-安装登陆。"}},[a._v("#")]),a._v(" 9，安装登陆。")]),a._v(" "),t("p",[a._v("在浏览器当中输入192.168.66.100/zabbix登陆安装")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e642a0ce06f759fd.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("1，修改一下"),t("code",[a._v("mysql的端口")]),a._v("—-》"),t("code",[a._v("用户密码zabbix")]),a._v(" —-》安装成功")]),a._v(" "),t("p",[a._v("2，登陆时默认用户"),t("code",[a._v("Admin")]),a._v("—》密码"),t("code",[a._v("zabbix")])]),a._v(" "),t("p",[a._v("3，登陆上去之后，先点击右上角小人头像，有一个language，选择Chinese—–》update更新，就是"),t("code",[a._v("中文")]),a._v("了")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/7deecacbfd54ff6e.jpg",alt:"image"}})]),a._v(" "),t("p",[a._v("好了，一个zabbix服务就这么轻松装好啦，不要放松警惕，接下来会进入到其更详细的配置与介绍，请锁定本站，精彩继续。")])])}),[],!1,null,null,null);s.default=r.exports}}]);