(window.webpackJsonp=window.webpackJsonp||[]).push([[1025],{1606:function(t,s,n){"use strict";n.r(s);var a=n(2),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("此插件能够方便的动态获取远程仓库的分支以及tag，从而便于开发者通过搜索快速构建自己想要部署的分支。")]),t._v(" "),n("p",[t._v("这里仅以如下内容作为参考，用最详细的参数，一次讲解分支与tag同时可用的方案如下：")]),t._v(" "),n("div",{staticClass:"language-groovy line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[t._v("pipeline "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    agent any\n    environment "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义项目git地址")]),t._v("\n        GIT_URL"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token interpolation-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/klimas7/exampleA.git"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    parameters "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        gitParameter "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" branchFilter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin/(.*)'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaultValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'master'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'选择将要构建的分支'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BRANCH'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" quickFilterEnabled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" selectedValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TOP'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sortMode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DESCENDING_SMART'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tagFilter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PT_BRANCH_TAG'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useRepository"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GIT_URL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    stages "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Example'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GitSCM'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doGenerateSubmoduleConfigurations"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" submoduleCfg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" extensions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CloneOption'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" depth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" noTags"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reference"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shallow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    branches"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token interpolation-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("$")]),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("BRANCH")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("userRemoteConfigs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token interpolation-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GIT_URL")]),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" credentialsId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token interpolation-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cicd-pass"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br")])]),n("p",[t._v("如上参数基本上已经涵盖了所有的可用选项，接下来对各个参数进行一一详细解读。")]),t._v(" "),n("h2",{attrs:{id:"重要参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重要参数"}},[t._v("#")]),t._v(" 重要参数")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("name")]),t._v("：定义最终选择之后赋值的变量名称，注意与checkout中要对应上。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("type")]),t._v("：指定过滤的类型，除去另外两个不常用的，基本上直接选择第三个就好。")]),t._v(" "),n("p",[t._v("可选参数有如下几项：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("PT_TAG")]),t._v("：标签")]),t._v(" "),n("li",[n("code",[t._v("PT_BRANCH")]),t._v("：分支")]),t._v(" "),n("li",[n("code",[t._v("PT_BRANCH_TAG")]),t._v("：分支或标签")]),t._v(" "),n("li",[n("code",[t._v("PT_REVISION")]),t._v("：修订版本，不常用")]),t._v(" "),n("li",[n("code",[t._v("PT_PULL_REQUEST")]),t._v("：pull请求，不常用")])])]),t._v(" "),n("li",[n("p",[n("code",[t._v("branchFilter")]),t._v("：一般这里必须设置为 "),n("code",[t._v("'origin/(.*)’")]),t._v("，否则将无法正常获取分支或标签。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("defaultValue")]),t._v("：在共享库场景中，包含多个仓库，需要构建两次配置才能落位，所以这里最好全部写成master。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("quickFilterEnabled")]),t._v("：是否开启搜索功能，非常好用，当然设为true。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("useRepository")]),t._v("：非常关键，如果一个流水线中有多个git仓库的定义，则指定git仓库才能让插件正常发挥作用。")])])]),t._v(" "),n("h2",{attrs:{id:"辅助参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#辅助参数"}},[t._v("#")]),t._v(" 辅助参数")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("description")]),t._v("：定义该参数的说明信息。")]),t._v(" "),n("li",[n("code",[t._v("branch")]),t._v("：定义要查找的分支名称，不过此参数一般不设置任何内容。")]),t._v(" "),n("li",[n("code",[t._v("selectedValue")]),t._v("：定义选择的排序方式，可选参数有如下几项："),n("code",[t._v("NONE")]),t._v("，"),n("code",[t._v("TOP")]),t._v(" ，"),n("code",[t._v("DEFAULT")]),t._v("，一般用"),n("code",[t._v("TOP")]),t._v("就好。")]),t._v(" "),n("li",[n("code",[t._v("sortMode")]),t._v("：定义数据的排序方式，有："),n("code",[t._v("NONE")]),t._v("，"),n("code",[t._v("ASCENDING_SMART")]),t._v("，"),n("code",[t._v("DESCENDING_SMART")]),t._v("，"),n("code",[t._v("ASCENDING")]),t._v("，"),n("code",[t._v("DESCENDING")]),t._v("，一般使用 "),n("code",[t._v("DESCENDING_SMART")]),t._v("倒序即可。")]),t._v(" "),n("li",[n("code",[t._v("tagFilter")]),t._v("：标签的过滤，一般不需要过滤，直接用 "),n("code",[t._v("*")]),t._v("。")])]),t._v(" "),n("p",[t._v("以上基本上就是该插件的所有参数的详解了，一般情况下，知道了pipeline中的配置方式，那么只需要一跑，在自由风格中配置也都是易如反掌的事情了。")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/55c37bd85e27c4cb.jpg",alt:"img"}})]),t._v(" "),n("p",[t._v("我在共享库当中应用的时候，发现首次构建之后，总是无法正常使用该插件，那么基于默认项，点两次构建之后，插件就能够正常使用了，当然，这里需要排除掉Jenkins主机无法正常拉取对应代码的情况。")]),t._v(" "),n("blockquote",[n("p",[t._v("后来我明白了，构建两次的原因，第一次是pipeline脚本的语法检查，以及参数项落位的过程，并不会做任何实质性操作，第二次会进入真正的构建，构建就会拉代码，而此插件，正是需要工作空间有了代码之后才可以正常工作的！")])])])}),[],!1,null,null,null);s.default=e.exports}}]);