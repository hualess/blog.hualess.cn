(window.webpackJsonp=window.webpackJsonp||[]).push([[798],{1381:function(s,t,a){"use strict";a.r(t);var n=a(2),p=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("一个前端同学说自己的项目希望开通 gzip 压缩的功能，于是我马上去看了 NGINX 配置文件：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v("        on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    gzip_comp_level     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    gzip_static on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    gzip_min_length  1k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    gzip_buffers "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 16k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    gzip_proxied  any"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    gzip_types text/plain application/xml  application/x-javascript text/css application/json image/jpeg image/gif image/png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    gzip_disable     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MSIE [1-5]\\."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("如上配置文件内容在 http 区块设置，配置完毕之后，可以在浏览器访问对应域名，查看资源是否有压缩，但是我在配置如上内容之后，浏览器访问看下来却没有压缩，原来是请求的资源类型 "),a("code",[s._v("Content-Type: application/javascript")]),s._v(" 不在上边压缩的类型当中。")]),s._v(" "),a("p",[s._v("然后把这个类型加进去：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v("        on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    gzip_comp_level     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    gzip_static on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    gzip_min_length  1k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    gzip_buffers "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 16k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    gzip_proxied  any"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    gzip_types text/plain application/xml application/javascript application/x-javascript text/css application/json image/jpeg image/gif image/png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    gzip_disable     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MSIE [1-5]\\."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("然后再进入浏览器看效果，发现 gzip 就正常开启了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/a4592466f4cbd1fb.jpg",alt:"img"}})])])}),[],!1,null,null,null);t.default=p.exports}}]);