(window.webpackJsonp=window.webpackJsonp||[]).push([[891],{1475:function(a,s,t){"use strict";t.r(s);var e=t(2),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("有时候要批量迁移一批项目到新的分组内，这个时候就会用到批量创建项目，可以使用如下方式进行创建。")]),a._v(" "),t("p",[a._v("首先将要创建的项目放到一个文件里：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" a\napi\nadmin\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("然后在gitlab自己的账号下创建一个token用于认证。接着使用如下命令进行创建：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[a._v("i")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--request")]),a._v(" POST "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"PRIVATE-TOKEN: WWvjMtvBNRmfZMZzGd-a"')]),a._v("  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--data")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"name='),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$i")]),a._v('&namespace_id=3"')]),a._v(" https://192.168.0.1/api/v4/projects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("其中的"),t("code",[a._v("namespace_id")]),a._v("可以在浏览器看到对应分组的ID。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8e2377d7d4f74b47.jpg",alt:"img"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);