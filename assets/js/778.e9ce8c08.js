(window.webpackJsonp=window.webpackJsonp||[]).push([[778],{1373:function(s,a,e){"use strict";e.r(a);var r=e(2),t=Object(r.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-问题及解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-问题及解决"}},[s._v("#")]),s._v(" 1，问题及解决")]),s._v(" "),e("p",[s._v("有时候主机的var目录下日志比较多，可能直接就把 "),e("code",[s._v("/var/log/journal/")]),s._v("下的日志删除了，然后使用这个工具查看日志的时候就出问题了。")]),s._v(" "),e("p",[s._v("执行"),e("code",[s._v("journalctl -xe")]),s._v("，报错，提示：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("No journal files were found.\n-- No entries --\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("解决办法：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("systemctl restart systemd-journald\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_2-如何正确清理日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何正确清理日志"}},[s._v("#")]),s._v(" 2，如何正确清理日志")]),s._v(" "),e("p",[s._v("检查当前journal使用磁盘量")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("journalctl --disk-usage\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("清理方法可以采用按照日期清理，或者按照允许保留的容量清理")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("journalctl --vacuum-time"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2d\njournalctl --vacuum-size"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("500M\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("如果要手工删除日志文件，则在删除前需要先轮转一次journal日志")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("systemctl "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" --kill-who"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("main "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--signal")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SIGUSR2 systemd-journald.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("要启用日志限制持久化配置，可以修改 "),e("code",[s._v("/etc/systemd/journald.conf")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SystemMaxUse")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("16M\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ForwardToSyslog")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("然后重启")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("systemctl restart systemd-journald.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("检查journal是否运行正常以及日志文件是否完整无损坏")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("journalctl "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--verify")]),s._v("\n\njournal配置参考\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);