(window.webpackJsonp=window.webpackJsonp||[]).push([[810],{1393:function(s,a,e){"use strict";e.r(a);var t=e(2),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-安装部署。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装部署。"}},[s._v("#")]),s._v(" 1，安装部署。")]),s._v(" "),e("h3",{attrs:{id:"_1-环境准备。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境准备。"}},[s._v("#")]),s._v(" 1，环境准备。")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[s._v("IP 地址")]),s._v(" "),e("th",{staticStyle:{"text-align":"center"}},[s._v("角色")])])]),s._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.111.3")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("Prometheus Server")])]),s._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[s._v("192.168.111.4")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("node_exporter")])])])]),s._v(" "),e("p",[s._v("版本：")]),s._v(" "),e("ul",[e("li",[s._v("测试通过系统：CentOS Linux release 7.4.1708 (Core)")]),s._v(" "),e("li",[s._v("Prometheus：2.4.2.linux-amd64")]),s._v(" "),e("li",[s._v("Alertmanager：0.15.2.linux-amd64")]),s._v(" "),e("li",[s._v("node_exporter：0.16.0.linux-amd64")])]),s._v(" "),e("p",[s._v("软件包下载地址：https://prometheus.io/download/")]),s._v(" "),e("h3",{attrs:{id:"_2-部署-prometheus-server。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-部署-prometheus-server。"}},[s._v("#")]),s._v(" 2，部署 Prometheus Server。")]),s._v(" "),e("h4",{attrs:{id:"_1-下载安装包。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载安装包。"}},[s._v("#")]),s._v(" 1，下载安装包。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src/\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/prometheus/prometheus/releases/download/v2.4.2/prometheus-2.4.2.linux-amd64.tar.gz\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/prometheus/alertmanager/releases/download/v0.15.2/alertmanager-0.15.2.linux-amd64.tar.gz\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/prometheus/node_exporter/releases/download/v0.16.0/node_exporter-0.16.0.linux-amd64.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h4",{attrs:{id:"_2-安装-prometheus。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-prometheus。"}},[s._v("#")]),s._v(" 2，安装 Prometheus。")]),s._v(" "),e("p",[s._v("创建 prometheus 用户。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" prometheus\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" prometheus "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" /var/lib/prometheus "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /sbin/nologin prometheus\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("解压安装包。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf prometheus-2.4.2.linux-amd64.tar.gz "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /usr/local/\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" prometheus-2.4.2.linux-amd64/ prometheus\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("创建启动脚本：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/lib/systemd/system/prometheus.service\n \n添加如下内容：\n \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("prometheus\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("prometheus\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/prometheus/prometheus "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config.file")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/prometheus/prometheus.yml "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--storage.tsdb.path")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/prometheus "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--storage.tsdb.retention")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("15d "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--log.level")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("info\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h3",{attrs:{id:"_3-安装-node-exporter。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-node-exporter。"}},[s._v("#")]),s._v(" 3，安装 node_exporter。")]),s._v(" "),e("p",[s._v("在 "),e("code",[s._v("Prometheus 节点")]),s._v("和"),e("code",[s._v("另一台节点")]),s._v("上分别安装 node_exporter。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf node_exporter-0.16.0.linux-amd64.tar.gz "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /usr/local/\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" node_exporter-0.16.0.linux-amd64/ node_exporter\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" prometheus.prometheus node_exporter/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("创建 node_exporter 启动脚本:")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/lib/systemd/system/node_exporter.service \n \n添加如下内容：\n \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("node_export\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Documentation")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://github.com/prometheus/node_exporter\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("prometheus\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/node_exporter/node_exporter\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[e("code",[s._v("注意：node_exporter 的运行用户也是 prometheus 用户需要在每台节点上都创建该用户。")])]),s._v(" "),e("p",[s._v("启动 node_exporter 服务:")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" node_exporter.service\n$ systemctl start node_exporter.service\n$ systemctl status node_exporter.service\n$ ss "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-tnl")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9100")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"_2-配置-prometheus-添加监控目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-prometheus-添加监控目标"}},[s._v("#")]),s._v(" 2，配置 Prometheus 添加监控目标")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/prometheus\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" prometheus.yml \nscrape_configs:\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.")]),s._v("\n  - job_name: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prometheus'")]),s._v("\n \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# metrics_path defaults to '/metrics'")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scheme defaults to 'http'.")]),s._v("\n \n    static_configs:\n    - targets: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost:9090'")]),s._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost:9100'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对本机node_exporter 监控")]),s._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新添加的对其它node节点抓取数据")]),s._v("\n  - job_name: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'111.4'")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重写了全局抓取间隔时间，由15秒重写成5秒。")]),s._v("\n    scrape_interval: 5s\n    static_configs:\n    - targets: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.111.4:9100'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("p",[s._v("启动 Prometheus 服务：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" prometheus.prometheus prometheus/\n$ systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" prometheus.service\n$ systemctl start prometheus.service\n$ systemctl status prometheus.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("code",[s._v("注意")]),s._v("：要留意启动之前的目录权限更改，否则可能会在启动的时候报错"),e("code",[s._v('Feb 11 16:08:41 localhost alertmanager: level=error ts=2019-02-11T08:08:41.419390133Z caller=main.go:179 msg="Unable to create data directory" err="mkdir data/: permission denied"')]),s._v("。")]),s._v(" "),e("p",[s._v("访问 Prometheus WEB 查看我们定义的目标主机：http://192.168.111.3:9090/targets")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/152f85d044c3c5c8.jpg",alt:"image"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);