(window.webpackJsonp=window.webpackJsonp||[]).push([[780],{1362:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("卸载磁盘：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("umount")]),s._v(" /data\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果报错如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("umount: /data: target is busy.\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("In some cases useful info about processes that use\n         the device is found by lsof"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" or fuser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("则说明磁盘有程序在占用，需要检查占用的程序并关闭，可以直接使用如下命令查看：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fuser")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" /data\n/data:                9265m  9276m "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22762")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22763")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22764")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22765")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22766")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22767")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("下边的都是进程号，再加上 "),t("code",[s._v("-k")]),s._v("参数可以直接杀掉：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fuser")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" /data\n/data:                9265m  9276m "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22762")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22763")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22764")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22765")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22766")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22767")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("杀掉之后就能正常卸载了。")])])}),[],!1,null,null,null);a.default=n.exports}}]);