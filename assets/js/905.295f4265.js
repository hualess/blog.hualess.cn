(window.webpackJsonp=window.webpackJsonp||[]).push([[905],{1496:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("我维护的 "),a("a",{attrs:{href:"https://github.com/eryajf/awesome-github-profile-readme-chinese",target:"_blank",rel:"noopener noreferrer"}},[s._v("awesome-github-profile-readme-chinese"),a("OutboundLink")],1),s._v(" 项目旨在收集汇总中文区优秀的个人主页，每个人的主页将会通过截图的方式存放在 exampls 目录下，有时候有的朋友主页内容很多，这样整体截图下来就非常大。")]),s._v(" "),a("p",[s._v("本文就介绍一个有意思的小动作，它的主要功能是可以自动扫描仓库内的图片，然后对其进行几乎无损的压缩，让整个仓库的体积保持在一个相对低的水平。")]),s._v(" "),a("p",[s._v("所用Actions："),a("a",{attrs:{href:"https://github.com/calibreapp/image-actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("image-actions"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。")]),s._v(" "),a("p",[s._v("首先添加Actions配置文件，e.g. "),a("code",[s._v(".github/workflows/images.yml")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 压缩图片\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" main\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'**.jpg'")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'**.jpeg'")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'**.png'")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'**.webp'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("workflow_dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" calibreapp/image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("actions\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout Repo\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v2\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Compress Images\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" calibre\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" calibreapp/image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("actions@main\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("githubToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.GITHUB_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("compressOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jpegQuality")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'60'")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jpegProgressive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pngQuality")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'60'")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("webpQuality")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'60'")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Create New Pull Request If Needed\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" steps.calibre.outputs.markdown "),a("span",{pre:!0,attrs:{class:"token tag"}},[s._v("!=")]),s._v(" ''\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" peter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("evans/create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pull"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("request@v3\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'🛠 压缩图片'")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branch-suffix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" timestamp\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("commit-message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'🛠 压缩图片'")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" steps.calibre.outputs.markdown "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("p",[s._v("需要注意，压缩图片的动作，在运行之后，会自动将图片二次commit上来，这就要求该动作具有对应commit的权限才行，通常我们配置的token没有其他开发者fork之后的仓库的权限，于是这里并不能直接处理其他人PR过来的内容中的图片。")]),s._v(" "),a("p",[s._v("官方给出的建议是：")]),s._v(" "),a("ul",[a("li",[s._v("要么其他开发者通过在主仓库check一个分支，然后在主仓库进行分支的PR。但这种方式其实并非是GitHub中协作的主流场景，多用在开发者个人维护的流程。")]),s._v(" "),a("li",[s._v("要么就是先处理其他人通过fork的方式提交上来的PR，当PR被同意之后，会自动进行扫描检查，然后该动作完成图片压缩之后，再自动创建一个新的PR，来完成图片的压缩。")])]),s._v(" "),a("p",[s._v("还需要注意的一点是：其中的 "),a("code",[s._v("secrets.GITHUB_TOKEN")]),s._v("是操作当前仓库使用的，不需要进行更改，如果改了，反而会报错。")]),s._v(" "),a("p",[s._v("效果如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/08/1fa538021f1f5631.png",alt:""}})]),s._v(" "),a("p",[s._v("这个动作会自动将图片处理好，然后提交到当次PR上，我们可以点开 View diff查看前后的区别：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/08/92fefdc809ad227d.png",alt:""}})]),s._v(" "),a("p",[s._v("目前这个效果据我个人放大前后两张照片来看，在体积缩小了80%的情况下，清晰度几乎是一致的，还是非常给力的一个动作，适合那些存放图片比较多的仓库。")])])}),[],!1,null,null,null);t.default=e.exports}}]);