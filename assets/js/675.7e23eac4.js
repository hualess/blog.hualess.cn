(window.webpackJsonp=window.webpackJsonp||[]).push([[675],{1265:function(t,a,i){"use strict";i.r(a);var s=i(2),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),i("p",[t._v("简单了解 Git 的基本原理和哈希算法。")]),t._v(" "),i("div",{staticClass:"custom-block right"},[i("p",[t._v("2022-02-08 @hualess")])])]),t._v(" "),i("p"),i("div",{staticClass:"table-of-contents"},[i("ul",[i("li",[i("a",{attrs:{href:"#哈希法"}},[t._v("哈希法")])]),i("li",[i("a",{attrs:{href:"#git保存版本的机制"}},[t._v("Git保存版本的机制")]),i("ul",[i("li",[i("a",{attrs:{href:"#集中式版本控制工具的文件管理机制"}},[t._v("集中式版本控制工具的文件管理机制")])]),i("li",[i("a",{attrs:{href:"#git文件管理机制"}},[t._v("Git文件管理机制")])]),i("li",[i("a",{attrs:{href:"#git文件管理机制细节"}},[t._v("Git文件管理机制细节")])])])]),i("li",[i("a",{attrs:{href:"#git分支管理机制"}},[t._v("Git分支管理机制")]),i("ul",[i("li",[i("a",{attrs:{href:"#分支的创建"}},[t._v("分支的创建")])]),i("li",[i("a",{attrs:{href:"#分支的切换"}},[t._v("分支的切换")])])])])])]),i("p"),t._v(" "),i("h2",{attrs:{id:"哈希法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#哈希法"}},[t._v("#")]),t._v(" 哈希法")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208210346.png",alt:"image-20220208210345146"}})]),t._v(" "),i("p",[t._v("哈希是一个系列的加密算法，各个不同的哈希算法虽然加密强度不同，但是有以下几个共同点：")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("不管输入数据的数据量有多大，输入同一个哈希算法，得到的加密结果长度固定。")])]),t._v(" "),i("li",[i("p",[t._v("哈希算法确定，输入数据确定，输出数据能够保证不变")])]),t._v(" "),i("li",[i("p",[t._v("哈希算法确定，输入数据有变化，输出数据一定有变化，而且通常变化很大")])]),t._v(" "),i("li",[i("p",[t._v("哈希算法不可逆")])])]),t._v(" "),i("p",[t._v("Git 底层采用的是 SHA-1 算法。")]),t._v(" "),i("p",[t._v("哈希算法可以被用来验证文件。原理如下图所示：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208210442.png",alt:"image-20220208210440600"}})]),t._v(" "),i("p",[t._v("Git 就是靠这种机制来从根本上保证数据完整性的。")]),t._v(" "),i("h2",{attrs:{id:"git保存版本的机制"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git保存版本的机制"}},[t._v("#")]),t._v(" Git保存版本的机制")]),t._v(" "),i("h3",{attrs:{id:"集中式版本控制工具的文件管理机制"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#集中式版本控制工具的文件管理机制"}},[t._v("#")]),t._v(" 集中式版本控制工具的文件管理机制")]),t._v(" "),i("p",[t._v("以文件变更列表的方式存储信息。这类系统将它们保存的信息看作是一组基本 文件和每个文件随时间逐步累积的差异。")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208210532.png",alt:"image-20220208210531433"}})]),t._v(" "),i("h3",{attrs:{id:"git文件管理机制"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git文件管理机制"}},[t._v("#")]),t._v(" Git文件管理机制")]),t._v(" "),i("p",[t._v("Git 把数据看作是小型文件系统的一组快照。每次提交更新时 Git 都会对当前的全部文件制作一个快照并保存这个快照的索引。为了高效，如果文件没有修改，Git 不再重新存储该文件，而是只保留一个链接指向之前存储的文件。所以 Git 的工作方式可以称之为快照流。")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208210627.png",alt:"image-20220208210627089"}})]),t._v(" "),i("h3",{attrs:{id:"git文件管理机制细节"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git文件管理机制细节"}},[t._v("#")]),t._v(" Git文件管理机制细节")]),t._v(" "),i("p",[t._v("Git 的「提交对象」（每个文件对应的 hash 值）")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208210706.png",alt:"image-20220208210705167"}})]),t._v(" "),i("p",[t._v("提交对象及其父对象形成的链条")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208210728.png",alt:"image-20220208210727373"}})]),t._v(" "),i("h2",{attrs:{id:"git分支管理机制"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git分支管理机制"}},[t._v("#")]),t._v(" Git分支管理机制")]),t._v(" "),i("h3",{attrs:{id:"分支的创建"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#分支的创建"}},[t._v("#")]),t._v(" 分支的创建")]),t._v(" "),i("p",[t._v("新建一个指针")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208210803.png",alt:"image-20220208210803173"}})]),t._v(" "),i("h3",{attrs:{id:"分支的切换"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#分支的切换"}},[t._v("#")]),t._v(" 分支的切换")]),t._v(" "),i("p",[t._v("HEAD 指向")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208210814.png",alt:"image-20220208210813810"}})]),t._v(" "),i("p",[t._v("HEAD 指向 testing 时提交了内容")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208210907.png",alt:"image-20220208210906444"}})]),t._v(" "),i("p",[t._v("切换回 master")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208210916.png",alt:"image-20220208210915284"}})]),t._v(" "),i("p",[t._v("HEAD 指向 master 时 提交了数据")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208210926.png",alt:"image-20220208210925287"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);