(window.webpackJsonp=window.webpackJsonp||[]).push([[785],{1371:function(s,t,e){"use strict";e.r(t);var n=e(2),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("公司内部安卓与 iOS 打包是通过内部的一台 Mac mini 主机上部署的 Jenkins 完成的，一切都看起来非常优雅且自如。")]),s._v(" "),e("p",[s._v("我也正在忙自己的事情，突然一个开发小哥找过来，说发布过程有问题了，其中有一个步骤是在 Jenkins 中打完包之后，将包通过 scp 传到一台 centos 服务器上，从而提供给开发者进行下载。现在出现的问题是，scp 的时候让输入密码了。")]),s._v(" "),e("p",[s._v("对于客户端通过秘钥对儿来登陆服务器这事儿，对于我这个运维中年老司机来说，应该不是一个难事儿，无非也就那几种情况，于是我展开了问题排查的行动。")]),s._v(" "),e("p",[s._v("检查权限，重置秘钥对，重启客户端，重启服务端的 ssh，这些都试过了，仍旧于事无补。")]),s._v(" "),e("p",[s._v("我于是又做了对比实验：")]),s._v(" "),e("ul",[e("li",[s._v("将客户端公钥放到另一台 centos7 服务器上，发现能够直接免密登陆。")]),s._v(" "),e("li",[s._v("将另一个客户端的公钥放到 scp 对应的远程 centos7 服务器上，发现也能够正常免密登陆。")])]),s._v(" "),e("p",[s._v("现在问题奇怪了，各自都正常，唯独互相登陆的时候，总是让输密码。")]),s._v(" "),e("p",[s._v("后来我又问了开发者，才了解到这两天有对系统做过升级，看了下新系统中的 ssh 版本为 9.0，而总让输入密码的服务器 ssh 版本为 6.6，比较老，于是立马升级了服务器的 ssh 版本：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yum -y update openssh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("目前 yum 源中的 ssh 最新版本为 7.4，升级之后，再次执行登陆，一下子就成功了。")]),s._v(" "),e("p",[s._v("哎，又是陷在一个不太有价值，但是也耗费了不少时间的问题上，特此记录，特此记录。")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/05/090da587d95bed42.jpg",alt:""}})])])}),[],!1,null,null,null);t.default=a.exports}}]);