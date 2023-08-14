(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{815:function(s,a,e){"use strict";e.r(a);var n=e(2),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("ol",[e("li",[e("p",[s._v("类中的属性又叫做成员变量（"),e("code",[s._v("member variable")]),s._v("），属性用英文表示为 "),e("code",[s._v("property")]),s._v(" 或者\n"),e("code",[s._v("attribute")]),s._v("。")])]),s._v(" "),e("li",[e("p",[s._v("对象（"),e("code",[s._v("Object")]),s._v("）又叫做实例（"),e("code",[s._v("Instance")]),s._v("）。生成一个对象的过程又叫做实例化。")])]),s._v(" "),e("li",[e("p",[s._v("命名约定")]),s._v(" "),e("p",[s._v("a) 类：首字母大写，如果一个类名由多个单词构成，那么每个单词的首字母都大写，\n中间不使用任何的连接符。比如 "),e("code",[s._v("Person")]),s._v(" 类，"),e("code",[s._v("MemberTest")]),s._v(" 类。")]),s._v(" "),e("p",[s._v("b) 方法：首字母小写。如果一个方法由多个单词构成，那么第一个单词的所有字母全\n都小写，从第二个单词开始，每个单词的首字母大写。比如 "),e("code",[s._v("add")]),s._v("，"),e("code",[s._v("addThreeInt")]),s._v("。")]),s._v(" "),e("p",[s._v("c) 属性：命名约定与方法相同。比如 "),e("code",[s._v("age")]),s._v("，"),e("code",[s._v("ageOfPerson")]),s._v("。")])]),s._v(" "),e("li",[e("p",[s._v("属性需要定义在类中，又叫做成员变量；而定义在方法中的变量叫做局部变量。")])]),s._v(" "),e("li",[e("p",[s._v("如何定义属性？")]),s._v(" "),e("div",{staticClass:"language-kotlin line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-kotlin"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" 类的名字"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  修饰符 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" 属性名称\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  修饰符 类型 属性名称"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("如何使用属性？与方法一样，使用.运算符。首先需要生成类的实例，然后使用实例 +”.”\n的方式来使用属性。")]),s._v(" "),e("p",[s._v("比如：")]),s._v(" "),e("div",{staticClass:"language-kotlin line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-kotlin"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" person "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("Person")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nperson"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" person "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nperson"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("局部变量使用前必须要声明并赋初值；成员变量使用前必须要声明，但可以不赋初值。")])]),s._v(" "),e("li",[e("p",[s._v("成员变量与局部变量的联系与区别：")]),s._v(" "),e("p",[s._v("a) 无论是成员变量还是局部变量，使用前都需要声明（定义）。")]),s._v(" "),e("p",[s._v("b) 对于局部变量来说，使用前必须要初始化；对于成员变量来说，使用前可以不初\n始化。如果没有初始化成员变量就开始使用，那么每个类型的成员变量都有一个\n默认的初始值")]),s._v(" "),e("p",[s._v("i.     "),e("code",[s._v("byte")]),s._v("、"),e("code",[s._v("short")]),s._v("、"),e("code",[s._v("int")]),s._v("、"),e("code",[s._v("long")]),s._v(" 类型的初始值为 "),e("code",[s._v("0")])]),s._v(" "),e("p",[s._v("ii.   "),e("code",[s._v("float")]),s._v("、"),e("code",[s._v("double")]),s._v(" 类型的初始值为 "),e("code",[s._v("0.0")])]),s._v(" "),e("p",[s._v("iii.   "),e("code",[s._v("char")]),s._v(" 类型的初始值 "),e("code",[s._v("‘\\u0000’")])]),s._v(" "),e("p",[s._v("iv.  "),e("code",[s._v("boolean")]),s._v(" 类型的初始值为 "),e("code",[s._v("false")])])]),s._v(" "),e("li",[e("p",[s._v("引用类型（"),e("code",[s._v("reference type")]),s._v("）：引用类型是用在对象上的。一个对象可以被多个引用所指\n向，但同一时刻，每个引用只能指向唯一的一个对象。如果一个对象被多个引用所指向，\n那么无论哪个引用对对象的属性进行了修改，都会反映到其他的引用当中。")])])]),s._v(" "),e("blockquote",[e("p",[s._v("文章更新历史")]),s._v(" "),e("p",[s._v("2022/05/08 feat:新增 Kotlin 语法支持。")]),s._v(" "),e("p",[s._v("2022/05/08 fix:修改备注。")])])])}),[],!1,null,null,null);a.default=t.exports}}]);