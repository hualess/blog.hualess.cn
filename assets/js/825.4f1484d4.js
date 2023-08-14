(window.webpackJsonp=window.webpackJsonp||[]).push([[825],{1410:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1、expect是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、expect是什么"}},[s._v("#")]),s._v(" 1、expect是什么")]),s._v(" "),a("p",[s._v("使用Linux的程序员对输入密码都不会陌生，在Linux下对用户有严格的权限限制，干很多事情越过了权限就得输入密码，比如使用超级用户执行命令，又比如scp、ssh连接远程主机等等。\n比如我们要是 到10.20.24.103这台机器上去，就需要输入密码：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.20")]),s._v(".24.103\nroot@10.20.24.103's password: \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("那么问题来了，如果我们脚本里面有scp的操作，总不可能执行一次scp就输入密码一次，这样就需要一个人盯着脚本运行了。 为了解决这个问题，我们需要一个自动输入密码的功能。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/aa1a4ad70c536188.jpg",alt:"0d7df865c65639bc00243e9e6b303388"}})]),s._v(" "),a("h2",{attrs:{id:"_2、expect的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、expect的原理"}},[s._v("#")]),s._v(" 2、expect的原理")]),s._v(" "),a("p",[s._v("针对这种scp或者ssh命令的功能，可能很多人想到的就是勉密钥登录。这种其实可以但是这种在生产环境不建议这么做，不安全。")]),s._v(" "),a("p",[s._v("至于ssh勉密钥登录的操作可以自行去百度。目前大数据上的分布式处理就是用这种方式来建立主机的互信关系的。")]),s._v(" "),a("p",[s._v("今天我们主要是讲没有建立信任关系下自动输入密码的功能，这个引入今天的主角 expect，使用如下命令进行安装：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3、入门脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、入门脚本"}},[s._v("#")]),s._v(" 3、入门脚本")]),s._v(" "),a("p",[s._v("简单示例如下：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" expect.sh \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/expect")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\nspawn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@10.20.24.103\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v("\nsend "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"paic1234'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\ninteract\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("code",[s._v("说明 :")])]),s._v(" "),a("ul",[a("li",[s._v("第一行是指定执行的模式，我们平时写shell 是用 #!/bin/bash 等等，这个我们执行我们用 "),a("code",[s._v("#!/usr/bin/expect")])]),s._v(" "),a("li",[s._v("set timeout 20 这个是用来设置相应的时间，如果里面的脚本执行或者网络问题超过了这个时间将不执行，这个timeout模式是10")]),s._v(" "),a("li",[s._v("spawn 表示在expect下面需要执行的shell脚本")]),s._v(" "),a("li",[s._v("expect 是捕获执行shell以后系统返回的提示框内容。"),a("code",[s._v('""')]),s._v("这个表示提示框里面是否包括这个内容")]),s._v(" "),a("li",[s._v("send 如果expect监测到内容了，那么就将send后的内容发送出去 \\n表示回车")]),s._v(" "),a("li",[s._v("interact 表示结束expect回话，可以继续输入，但是不会返回终端")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("\nSZB-L0032014\n$ ./expect.sh \nspawn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@10.20.24.103\nroot@10.20.24.103's password: \nLast login: Wed Mar  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 08:24:22 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v(" from szb-l0032014\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("\nSZB-L0032013\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_4、expect的案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、expect的案例"}},[s._v("#")]),s._v(" 4、expect的案例")]),s._v(" "),a("p",[s._v("登录一台机器，将本机的一个文件传到远程机器上")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" expect1.sh \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/expect")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("llength "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Extra")]),s._v(" close brace or missing "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" braceargv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Usage:"')]),s._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$argv0")]),s._v(' local_file remote_path"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" local_file "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("lindex "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$argv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" remote_path "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("lindex "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$argv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" paic1234\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" passwderror "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nspawn "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${local_file}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${remote_path}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$passwderror")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                put "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"passwd is error"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" passwderror "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n           send "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"paic1234'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n           exp_continue\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*es/no)?*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       send "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yes'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n      exp_continue\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      put "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"connect is timeout"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("h2",{attrs:{id:"_5、注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、注意事项"}},[s._v("#")]),s._v(" 5、注意事项")]),s._v(" "),a("ul",[a("li",[s._v("1、llength argv表示参数的个数2、argv表示参数的个数")]),s._v(" "),a("li",[s._v("2、argv0 表示脚本的名称")]),s._v(" "),a("li",[s._v("3、lindex $argv 0 表示第一个参数，依次类推到n，参数下标是从0开始的")]),s._v(" "),a("li",[s._v("4、if 判断需要用{}括起来")]),s._v(" "),a("li",[s._v("5、if 与后面的{}直接需要有空格")]),s._v(" "),a("li",[s._v("6、expect {}，多行期望，匹配到哪条执行哪条，有时执行shell后预期结果是不固定的，有可能是询问是yes/no，有可能是去输入密码，所以可以用expect{}")]),s._v(" "),a("li",[s._v("7、else不能单独放一行，所以else要跟在}后面")]),s._v(" "),a("li",[s._v("8、两个花括号之间必须有空格隔开，比如if {} {}，否则会报错 expect:extra characters after close-brace")]),s._v(" "),a("li",[s._v("9、使用{来衔接下一行，所以if的条件后需要加左花括号{")])]),s._v(" "),a("p",[s._v("通过各种脚本发现expect对脚本的格式要求特别高，比如{}直接要空格、else以后需要增加{等等，如果发现不能正常运行，优先检查格式是否有问题")])])}),[],!1,null,null,null);t.default=e.exports}}]);