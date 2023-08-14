(window.webpackJsonp=window.webpackJsonp||[]).push([[674],{1264:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),s("p",[t._v("下面我们学习 Git 在本地常用的命令，也是开发经常用到的命令。")]),t._v(" "),s("div",{staticClass:"custom-block right"},[s("p",[t._v("2022-02-08 @hualess")])])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#git常用命令"}},[t._v("Git常用命令")]),s("ul",[s("li",[s("a",{attrs:{href:"#本地命令"}},[t._v("本地命令")])]),s("li",[s("a",{attrs:{href:"#远程命令"}},[t._v("远程命令")])])])]),s("li",[s("a",{attrs:{href:"#设置用户签名"}},[t._v("设置用户签名")]),s("ul",[s("li",[s("a",{attrs:{href:"#项目级别-仓库级别"}},[t._v("项目级别/仓库级别")])]),s("li",[s("a",{attrs:{href:"#系统用户级别"}},[t._v("系统用户级别")])]),s("li",[s("a",{attrs:{href:"#级别优先级"}},[t._v("级别优先级")])]),s("li",[s("a",{attrs:{href:"#说明"}},[t._v("说明")])])])]),s("li",[s("a",{attrs:{href:"#初始化本地库"}},[t._v("初始化本地库")])]),s("li",[s("a",{attrs:{href:"#查看本地库状态"}},[t._v("查看本地库状态")])]),s("li",[s("a",{attrs:{href:"#文件增删改操作"}},[t._v("文件增删改操作")]),s("ul",[s("li",[s("a",{attrs:{href:"#删除暂存区的文件"}},[t._v("删除暂存区的文件")])]),s("li",[s("a",{attrs:{href:"#添加文件到暂存区"}},[t._v("添加文件到暂存区")])]),s("li",[s("a",{attrs:{href:"#提交文件到本地库"}},[t._v("提交文件到本地库")])])])]),s("li",[s("a",{attrs:{href:"#历史版本操作"}},[t._v("历史版本操作")]),s("ul",[s("li",[s("a",{attrs:{href:"#查看历史版本"}},[t._v("查看历史版本")])]),s("li",[s("a",{attrs:{href:"#切换历史版本"}},[t._v("切换历史版本")])])])]),s("li",[s("a",{attrs:{href:"#比较文件操作"}},[t._v("比较文件操作")])]),s("li",[s("a",{attrs:{href:"#分支操作"}},[t._v("分支操作")]),s("ul",[s("li",[s("a",{attrs:{href:"#什么是分支"}},[t._v("什么是分支？")])]),s("li",[s("a",{attrs:{href:"#分支的好处"}},[t._v("分支的好处？")])]),s("li",[s("a",{attrs:{href:"#分支操作"}},[t._v("分支操作")])]),s("li",[s("a",{attrs:{href:"#分支冲突"}},[t._v("分支冲突")])]),s("li",[s("a",{attrs:{href:"#创建分支和切换分支图解"}},[t._v("创建分支和切换分支图解")])])])]),s("li",[s("a",{attrs:{href:"#分支进阶操作"}},[t._v("分支进阶操作")]),s("ul",[s("li",[s("a",{attrs:{href:"#删除所有记录"}},[t._v("删除所有记录")])]),s("li",[s("a",{attrs:{href:"#删除上次记录"}},[t._v("删除上次记录")])]),s("li",[s("a",{attrs:{href:"#同时修改本地分支名和对应的远程分支名"}},[t._v("同时修改本地分支名和对应的远程分支名")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"git常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git常用命令"}},[t._v("#")]),t._v(" Git常用命令")]),t._v(" "),s("h3",{attrs:{id:"本地命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地命令"}},[t._v("#")]),t._v(" 本地命令")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令名称")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("git config --global user.name 用户名")]),t._v(" "),s("td",[t._v("设置用户签名")])]),t._v(" "),s("tr",[s("td",[t._v("git config --global user.email 邮箱")]),t._v(" "),s("td",[t._v("设置用户签名")])]),t._v(" "),s("tr",[s("td",[t._v("git init")]),t._v(" "),s("td",[t._v("初始化本地库")])]),t._v(" "),s("tr",[s("td",[t._v("git status")]),t._v(" "),s("td",[t._v("查看本地库状态")])]),t._v(" "),s("tr",[s("td",[t._v("git add 文件名（-A 代表目录及子目录下所有文件名）")]),t._v(" "),s("td",[t._v("添加到暂存区")])]),t._v(" "),s("tr",[s("td",[t._v('git commit -m "日志信息" [文件名]（不加文件名，默认所有文件都添加该日志信息）')]),t._v(" "),s("td",[t._v("添加到本地库")])]),t._v(" "),s("tr",[s("td",[t._v("git reflog")]),t._v(" "),s("td",[t._v("查看历史记录（简要）")])]),t._v(" "),s("tr",[s("td",[t._v("git log")]),t._v(" "),s("td",[t._v("查看历史记录（详细）")])]),t._v(" "),s("tr",[s("td",[t._v("git log --pretty=oneline")]),t._v(" "),s("td",[t._v("一行显示一个版本信息（版本号完整）")])]),t._v(" "),s("tr",[s("td",[t._v("git log --oneline")]),t._v(" "),s("td",[t._v("一行显示一个版本信息（版本号简写）")])]),t._v(" "),s("tr",[s("td",[t._v("git reset --hard 版本号")]),t._v(" "),s("td",[t._v("版本穿梭、跳转")])]),t._v(" "),s("tr",[s("td",[t._v("git diff [文件名]")]),t._v(" "),s("td",[t._v("比较工作区中和暂存区的文件")])]),t._v(" "),s("tr",[s("td",[t._v("git diff [本地库中历史版本] [文件名]")]),t._v(" "),s("td",[t._v("比较工作区中的文件和本地库历史记录")])]),t._v(" "),s("tr",[s("td",[t._v("git branch 分支名")]),t._v(" "),s("td",[t._v("创建分支")])]),t._v(" "),s("tr",[s("td",[t._v("git branch -D 分支名")]),t._v(" "),s("td",[t._v("删除分支")])]),t._v(" "),s("tr",[s("td",[t._v("git branch -m 新的分支名")]),t._v(" "),s("td",[t._v("将当前分支名改为新的分支名")])]),t._v(" "),s("tr",[s("td",[t._v("git branch -v")]),t._v(" "),s("td",[t._v("查看分支")])]),t._v(" "),s("tr",[s("td",[t._v("git checkout 分支名")]),t._v(" "),s("td",[t._v("切换分支")])]),t._v(" "),s("tr",[s("td",[t._v("git merge 分支名")]),t._v(" "),s("td",[t._v("合并分支")])])])]),t._v(" "),s("h3",{attrs:{id:"远程命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程命令"}},[t._v("#")]),t._v(" 远程命令")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令名称")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("git remote -v")]),t._v(" "),s("td",[t._v("查看当前所有远程地址别名")])]),t._v(" "),s("tr",[s("td",[t._v("git remote add 别名 远程地址")]),t._v(" "),s("td",[t._v("起别名")])]),t._v(" "),s("tr",[s("td",[t._v("git push 别名 分支")]),t._v(" "),s("td",[t._v("推送本地分支上的内容到远程仓库")])]),t._v(" "),s("tr",[s("td",[t._v("git clone 远程地址")]),t._v(" "),s("td",[t._v("将远程仓库的内容克隆到本地")])]),t._v(" "),s("tr",[s("td",[t._v("git pull 远程库地址别名 远程分支名")]),t._v(" "),s("td",[t._v("将远程仓库对于分支最新内容拉下来后与 当前本地分支直接合并")])])])]),t._v(" "),s("p",[t._v("如果 "),s("code",[t._v("git push")]),t._v(" 不加别名和分支，默认别名是 origin，分支是 master。")]),t._v(" "),s("p",[t._v("我们 clone 项目会自动做如下操作：")]),t._v(" "),s("ul",[s("li",[t._v("拉取代码")]),t._v(" "),s("li",[t._v("初始化本地仓库")]),t._v(" "),s("li",[t._v("创建别名，默认是 "),s("code",[t._v("origin")])])]),t._v(" "),s("p",[t._v("具体看 "),s("RouterLink",{attrs:{to:"/git/ssh-login/"}},[t._v("Git - SSH免密登录")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"设置用户签名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置用户签名"}},[t._v("#")]),t._v(" 设置用户签名")]),t._v(" "),s("h3",{attrs:{id:"项目级别-仓库级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目级别-仓库级别"}},[t._v("#")]),t._v(" 项目级别/仓库级别")]),t._v(" "),s("p",[t._v("仅在当前本地库范围内有效。")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.name 用户名\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.email 邮箱\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("信息保存位置："),s("code",[t._v("./.git/config")]),t._v(" 文件里。")]),t._v(" "),s("h3",{attrs:{id:"系统用户级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统用户级别"}},[t._v("#")]),t._v(" 系统用户级别")]),t._v(" "),s("p",[t._v("登录当前操作系统的用户范围。")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.name 用户名\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.email 邮箱\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208133346.png",alt:"image-20220208133344605"}})]),t._v(" "),s("p",[t._v("信息保存位置：设置了用户签名，会在用户盘下生成 "),s("code",[t._v(".gitconfig")]),t._v(" 文件，里面也可以直接修改自己的信息。")]),t._v(" "),s("h3",{attrs:{id:"级别优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#级别优先级"}},[t._v("#")]),t._v(" 级别优先级")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("就近原则：项目级别优先于系统用户级别，二者都有时采用项目级别的签名")])]),t._v(" "),s("li",[s("p",[t._v("如果只有系统用户级别的签名，就以系统用户级别的签名为准")])]),t._v(" "),s("li",[s("p",[t._v("二者都没有不允许")])])]),t._v(" "),s("h3",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("签名的作用是区分不同操作者身份。用户的签名信息在每一个版本的提交信息中能够看到，以此确认本次提交是谁做的。"),s("strong",[t._v("Git 首次安装必须设置一下用户签名，否则无法提交代码")]),t._v("。")]),t._v(" "),s("p",[t._v("邮箱可以是虚拟邮箱，Git 不会去识别。")]),t._v(" "),s("p",[t._v("注意：这里设置用户签名和将来登录 GitHub（或其他代码托管中心）的账号没有任何关系。")]),t._v(" "),s("h2",{attrs:{id:"初始化本地库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化本地库"}},[t._v("#")]),t._v(" 初始化本地库")]),t._v(" "),s("p",[t._v("基本语法：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("该指令会将目录下的所有子目录以及文件交给 Git 管理，也是我们使用 Git 最重要的一步。")]),t._v(" "),s("p",[t._v("执行该指令后，会在当前目录下生成 "),s("code",[t._v(".git")]),t._v(" 目录，该目录默认是隐藏的。")]),t._v(" "),s("p",[t._v("注意：.git 目录中存放的是本地库相关的子目录和文件，不要删除，也不要胡乱修改。")]),t._v(" "),s("h2",{attrs:{id:"查看本地库状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看本地库状态"}},[t._v("#")]),t._v(" 查看本地库状态")]),t._v(" "),s("p",[t._v("查看工作区、暂存区状态。")]),t._v(" "),s("p",[t._v("基本语法：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208134442.png",alt:"image-20220208134440861"}})]),t._v(" "),s("p",[t._v("可以看到，我删除了 3 个文件，还没有放到暂存区（红色），存到了暂存区（绿色），存到了本地库（消失）。")]),t._v(" "),s("h2",{attrs:{id:"文件增删改操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件增删改操作"}},[t._v("#")]),t._v(" 文件增删改操作")]),t._v(" "),s("h3",{attrs:{id:"删除暂存区的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除暂存区的文件"}},[t._v("#")]),t._v(" 删除暂存区的文件")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--cached")]),t._v(" 文件名\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"添加文件到暂存区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加文件到暂存区"}},[t._v("#")]),t._v(" 添加文件到暂存区")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" 文件名\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -A 代表全名文件")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"提交文件到本地库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交文件到本地库"}},[t._v("#")]),t._v(" 提交文件到本地库")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"日志信息"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件名可不写")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"历史版本操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#历史版本操作"}},[t._v("#")]),t._v(" 历史版本操作")]),t._v(" "),s("h3",{attrs:{id:"查看历史版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看历史版本"}},[t._v("#")]),t._v(" 查看历史版本")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看详细版本信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看简要版本信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--pretty")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一行显示一个版本信息（版本号完整）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--oneline")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一行显示一个版本信息（版本号简写）")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("多屏显示控制方式：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("空格向下翻页")])]),t._v(" "),s("li",[s("p",[t._v("b 向上翻页")])]),t._v(" "),s("li",[s("p",[t._v("q 退出")])])]),t._v(" "),s("h3",{attrs:{id:"切换历史版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换历史版本"}},[t._v("#")]),t._v(" 切换历史版本")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("基于索引值操作[推荐]")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--hard")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("局部索引值"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--hard")]),t._v(" a6ace91   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例子")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("使用 ^ 符号：只能后退")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--hard")]),t._v(" HEAD^\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("注：一个 ^ 表示后退一步，n 个表示后退。")])]),t._v(" "),s("li",[s("p",[t._v("使用 ~ 符号：只能后退")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--hard")]),t._v(" HEAD~n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("注：表示后退 n 步。")])]),t._v(" "),s("li",[s("p",[t._v("使用 HEAD 符号，恢复当前提交本地库的版本")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git reset --hard HEAD\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("注：在当前版本中删除了某个文件，可以恢复到当前最初的版本。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("reset 命令的三个参数对比")])]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("--soft")]),t._v(" 参数")]),t._v(" "),s("ul",[s("li",[t._v("仅仅在本地库移动 HEAD 指针")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("--mixed")]),t._v(" 参数")]),t._v(" "),s("ul",[s("li",[t._v("在本地库移动 HEAD 指针")]),t._v(" "),s("li",[t._v("重置暂存区")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("--hard")]),t._v(" 参数")]),t._v(" "),s("ul",[s("li",[t._v("在本地库移动 HEAD 指针")]),t._v(" "),s("li",[t._v("重置暂存区")]),t._v(" "),s("li",[t._v("重置工作区")])])])]),t._v(" "),s("h2",{attrs:{id:"比较文件操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比较文件操作"}},[t._v("#")]),t._v(" 比较文件操作")]),t._v(" "),s("blockquote",[s("p",[t._v("将工作区中的文件和暂存区进行比较")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("将工作区中的文件和本地库历史记录比较")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("本地库中历史版本"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("不带文件名则比较多个文件。")]),t._v(" "),s("p",[t._v("如果 [本地库中历史版本] 是 "),s("code",[t._v("HEAD")]),t._v("，则比较当前版本。")]),t._v(" "),s("h2",{attrs:{id:"分支操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支操作"}},[t._v("#")]),t._v(" 分支操作")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208142255.png",alt:"image-20220208142253151"}})]),t._v(" "),s("h3",{attrs:{id:"什么是分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是分支"}},[t._v("#")]),t._v(" 什么是分支？")]),t._v(" "),s("p",[t._v("在版本控制过程中，同时推进多个任务，为每个任务，我们就可以创建每个任务的单独分支。使用分支意味着程序员可以把自己的工作从开发主线上分离开来，开发自己分支的时候，不会影响主线分支的运行。对于初学者而言，分支可以简单理解为副本，一个分支就是一个单独的副本。（分支底层其实也是指针的引用）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208142309.png",alt:"image-20220208142308410"}})]),t._v(" "),s("h3",{attrs:{id:"分支的好处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支的好处"}},[t._v("#")]),t._v(" 分支的好处？")]),t._v(" "),s("p",[t._v("同时并行推进多个功能开发，提高开发效率。")]),t._v(" "),s("p",[t._v("各个分支在开发过程中，如果某一个分支开发失败，不会对其他分支有任何影响。失败的分支删除重新开始即可。")]),t._v(" "),s("h3",{attrs:{id:"分支操作-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支操作-2"}},[t._v("#")]),t._v(" 分支操作")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令名称")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("git branch 分支名")]),t._v(" "),s("td",[t._v("创建分支")])]),t._v(" "),s("tr",[s("td",[t._v("git branch -D 分支名")]),t._v(" "),s("td",[t._v("删除分支")])]),t._v(" "),s("tr",[s("td",[t._v("git branch -m 新的分支名")]),t._v(" "),s("td",[t._v("将当前分支名改为新的分支名")])]),t._v(" "),s("tr",[s("td",[t._v("git branch -v")]),t._v(" "),s("td",[t._v("查看分支")])]),t._v(" "),s("tr",[s("td",[t._v("git checkout 分支名")]),t._v(" "),s("td",[t._v("切换分支")])]),t._v(" "),s("tr",[s("td",[t._v("git merge 分支名")]),t._v(" "),s("td",[t._v("合并分支")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("创建分支")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("删除分支")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" 分支名\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("将当前分支名改为新的分支名")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git branch -m 新的分支名\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("查看分支")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("切换分支")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("合并分支")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("第一步：切换到接受修改的分支（被合并，增加新内容）上")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("被合并的分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("第二步：执行 merge 命令")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("有新内容的分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"分支冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支冲突"}},[t._v("#")]),t._v(" 分支冲突")]),t._v(" "),s("blockquote",[s("p",[t._v("产生冲突")])]),t._v(" "),s("p",[t._v("冲突的表现：后面状态为 "),s("code",[t._v("MERGING")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208140824.png",alt:"image-20220208140823758"}})]),t._v(" "),s("p",[t._v("冲突产生的原因：合并分支时，两个分支在 "),s("strong",[t._v("同一个文件的同一个位置")]),t._v(" 有两套完全不同的修改。Git 无法替 我们决定使用哪一个。必须 "),s("strong",[t._v("人为决定")]),t._v(" 新代码内容。")]),t._v(" "),s("p",[t._v("冲突如图（修改的是同一个位置）：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208152144.png",alt:"image-20220208152143419"}})]),t._v(" "),s("blockquote",[s("p",[t._v("解决冲突")])]),t._v(" "),s("p",[t._v("冲突的解决：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("第一步：编辑文件，删除特殊符号")])]),t._v(" "),s("li",[s("p",[t._v("第二步：把文件修改到满意的程度，保存退出")])]),t._v(" "),s("li",[s("p",[t._v("第三步：添加到暂存区，"),s("code",[t._v("git add [文件名]")])])]),t._v(" "),s("li",[s("p",[t._v("第四步：执行提交，"),s("code",[t._v('git commit -m "日志信息"')]),t._v("（注意：此时 commit 一定不能带具体文件名）")])])]),t._v(" "),s("h3",{attrs:{id:"创建分支和切换分支图解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建分支和切换分支图解"}},[t._v("#")]),t._v(" 创建分支和切换分支图解")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/git/20220208142935.png",alt:"image-20220208142934045"}})]),t._v(" "),s("p",[t._v("master、hot-fix 其实都是指向具体版本记录的指针。当前所在的分支，其实是由 HEAD 决定的。所以创建分支的本质就是多创建一个指针。")]),t._v(" "),s("p",[t._v("HEAD 如果指向 master，那么我们现在就在 master 分支上。")]),t._v(" "),s("p",[t._v("HEAD 如果执行 hotfix，那么我们现在就在 hotfix 分支上。")]),t._v(" "),s("h2",{attrs:{id:"分支进阶操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支进阶操作"}},[t._v("#")]),t._v(" 分支进阶操作")]),t._v(" "),s("h3",{attrs:{id:"删除所有记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除所有记录"}},[t._v("#")]),t._v(" 删除所有记录")]),t._v(" "),s("p",[t._v("想清空所有 commit 的信息记录，就像形成一个全新的仓库，且代码不变。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("先切换到新的分支")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch kele\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout kele\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("添加所有文件到暂存区（除了 .gitignore 中排除的）")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("提交跟踪过的文件到本地库")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-am")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit message"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("删除 master 分支")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" master\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("重命名当前分支为 master")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" master\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("提交到远程 master 分支")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" origin master\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"删除上次记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除上次记录"}},[t._v("#")]),t._v(" 删除上次记录")]),t._v(" "),s("p",[t._v("如果只是想修改上次提交的代码，做一次更完美的 commit，可以这样：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("回到到上个版本(注：不要带 "),s("code",[t._v("--hard")]),t._v(")")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset commitId\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("暂存修改")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("强制 push，这样远程的最新的一次 commit 被删除")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git push --force\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("释放暂存的修改，开始修改代码")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("添加、推送")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"massage"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])]),t._v(" "),s("h3",{attrs:{id:"同时修改本地分支名和对应的远程分支名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同时修改本地分支名和对应的远程分支名"}},[t._v("#")]),t._v(" 同时修改本地分支名和对应的远程分支名")]),t._v(" "),s("p",[t._v("修改前要确保本地分支的代码是最新的，并且修改后不会影响到同事的代码。")]),t._v(" "),s("ol",[s("li",[t._v("修改本地分支名")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" oldBranchName newBranchName\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("删除远程分支")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin :oldBranchName\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("改名后的本地分支推送到远程")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --set-upstream origin newBranchName\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);