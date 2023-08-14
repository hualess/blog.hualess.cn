(window.webpackJsonp=window.webpackJsonp||[]).push([[1043],{1629:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("有同学反馈说api的日志可能漏采了，部分日志查不到，我于是立马进行一波查验，发现的确是有部分日志没有写到es，一开始还以为是这部分日志有问题，然后开发同学是同目录下的日志用的是同一个框架，于是又想是不是es写入有问题，看了看也没问题，后来来到主机上看filebeat的日志，发现了如下报错。")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-12-03T15:46:22+08:00 ERR Failed to create tempfile "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/var/lib/filebeat/registry.new"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" writing: "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" /var/lib/filebeat/registry.new: too many "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" files\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-12-03T15:46:22+08:00 ERR Writing of registry returned error: "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" /var/lib/filebeat/registry.new: too many "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" files. Continuing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-12-03T15:46:23+08:00 ERR Harvester could not be started on existing file: /var/log/secure, Err: Error setting up harvester: Harvester setup failed. Unexpected "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" opening error: Failed opening /var/log/secure: "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" /var/log/secure: too many "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" files\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("如上报错是采集的日志文件超过了filebeat进程的最大文件打开数了，而超出的部分，也将无法落入到es中。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e2220bd19861e421.jpg",alt:"img"}})]),t._v(" "),s("p",[t._v("解决可以"),s("a",{attrs:{href:"https://wiki.eryajf.net/pages/5008.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考动态修改"),s("OutboundLink")],1),t._v("，但只是临时生效，一旦服务或者系统重启，就又失效了，因此在启动文件中添加配置来解决：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /usr/lib/systemd/system/filebeat.service\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Description")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("filebeat\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Documentation")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://www.elastic.co/guide/en/beats/filebeat/current/index.html\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Wants")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("network-online.target\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("After")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("network-online.target\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/share/filebeat/bin/filebeat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" /etc/filebeat/filebeat.yml "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-path.home")]),t._v(" /usr/share/filebeat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-path.config")]),t._v(" /etc/filebeat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-path.data")]),t._v(" /var/lib/filebeat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-path.logs")]),t._v(" /var/log/filebeat\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("always\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LimitNOFILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10240")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WantedBy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("multi-user.target\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[t._v("然后重启服务即可。")])])}),[],!1,null,null,null);a.default=n.exports}}]);