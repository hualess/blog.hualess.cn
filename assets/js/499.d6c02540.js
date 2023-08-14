(window.webpackJsonp=window.webpackJsonp||[]).push([[499],{1087:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#发现问题"}},[t._v("发现问题")])]),a("li",[a("a",{attrs:{href:"#静态类型检查"}},[t._v("静态类型检查")])]),a("li",[a("a",{attrs:{href:"#非异常故障"}},[t._v("非异常故障")])]),a("li",[a("a",{attrs:{href:"#使用工具"}},[t._v("使用工具")])]),a("li",[a("a",{attrs:{href:"#tsc-编译器"}},[t._v("tsc 编译器")])]),a("li",[a("a",{attrs:{href:"#发出错误"}},[t._v("发出错误")])]),a("li",[a("a",{attrs:{href:"#显式类型"}},[t._v("显式类型")])]),a("li",[a("a",{attrs:{href:"#擦除类型"}},[t._v("擦除类型")])]),a("li",[a("a",{attrs:{href:"#降级编译"}},[t._v("降级编译")])]),a("li",[a("a",{attrs:{href:"#严格模式"}},[t._v("严格模式")]),a("ul",[a("li",[a("a",{attrs:{href:"#noimplicitany"}},[t._v("noImplicitAny")])]),a("li",[a("a",{attrs:{href:"#strictnullchecks"}},[t._v("strictNullChecks")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"发现问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发现问题"}},[t._v("#")]),t._v(" 发现问题")]),t._v(" "),a("p",[t._v("JavaScript 中的每个值都有一组行为，您可以通过运行不同的操作来观察。这听起来很抽象，我们来举一个简单的例子，考虑我们可能对名为 message 的变量运行的一些操作：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 'message' 上访问属性 'toLowerCase'，并调用它")]),t._v("\nmessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("如果我们分解它，第一行可运行的代码访问一个属性 toLowerCase，然后调用它。第二个尝试 message 直接调用。")]),t._v(" "),a("p",[t._v("但是假设我们不知道 message。这很常见，我们无法可靠地说出尝试运行任何这些代码会得到什么结果。每个操作的行为完全取决于我们最初给 message 的赋值。")]),t._v(" "),a("ul",[a("li",[t._v("可以调用 message 吗？")]),t._v(" "),a("li",[t._v("它有 toLowerCase 这个属性吗？")]),t._v(" "),a("li",[t._v("如果能，toLowerCase 可以调用吗？")]),t._v(" "),a("li",[t._v("如果这两个值都是可调用的，它们返回什么？")])]),t._v(" "),a("p",[t._v("这些问题的答案通常是我们在编写 JavaScript 时牢记在心的东西，我们必须希望所有细节都正确。")]),t._v(" "),a("p",[t._v("假设 message 按以下方式定义：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("正如您可能猜到的，如果我们尝试运行 "),a("code",[t._v("message.toLowerCase()")]),t._v("，我们只会得到相同的小写字符串。")]),t._v(" "),a("p",[t._v("那第二行代码呢？如果您熟悉 JavaScript，您就会知道这会失败并出现异常：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("TypeError"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" message "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" not a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果我们能避免这样的错误，那就太好了。")]),t._v(" "),a("p",[t._v("当我们运行我们的代码时，我们的 JavaScript 运行时选择做什么的方式是通过确定值的类型，它具有什么样的行为和功能。这 TypeError 就是暗指的一部分- 它说字符串 "),a("code",[t._v("Hello World!")]),t._v(" 不能作为函数调用。")]),t._v(" "),a("p",[t._v("对于某些值，例如基本类型 string 和 number ，我们可以在运行时使用 typeof 运算符识别它们的类型。但是对于函数之类的其他东西，没有相应的运行时机制来识别它们的类型。例如，考虑这个函数：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("flip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("我们可以通过阅读代码观察到这个函数只有在给定一个具有可调用 flip 属性的对象时才能工作，但是 JavaScript 并没有以我们可以在代码运行时检查的方式来显示这些信息。在纯 JavaScript 中，告诉 fn 特定值做什么的唯一方法是调用它并查看会发生什么。这种行为使得在运行之前很难预测代码会做什么，这意味着在编写代码时更难知道代码会做什么。")]),t._v(" "),a("p",[t._v("这样看来，类型是描述可以传递给 fn 哪些值会崩溃的概念。JavaScript 只真正提供动态类型：运行代码看看会发生什么。")]),t._v(" "),a("p",[t._v("另一种方法是使用静态类型系统在运行之前预测预期的代码。")]),t._v(" "),a("h2",{attrs:{id:"静态类型检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态类型检查"}},[t._v("#")]),t._v(" 静态类型检查")]),t._v(" "),a("p",[t._v("回想一下 TypeError 我们之前尝试将 string 作为函数调用的情况。大多数人不喜欢在运行他们的代码时出现任何类型的错误：这些被认为是错误！当我们编写新代码时，我们会尽量避免引入新的错误。")]),t._v(" "),a("p",[t._v("理想情况下，我们可以有一个工具来帮助我们在代码运行之前发现这些错误。这就是像 TypeScript 这样的静态类型检查器所做的。静态类型系统描述了当我们运行程序时我们的值的形状和行为。像 TypeScript 这样的类型检查器，告诉我们什么时候事情可能会出轨。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/TypeScript/20220911222044.png",alt:"image-20220911222042844"}})]),t._v(" "),a("p",[t._v("在我们运行代码之前，使用 TypeScript 运行最后一个示例会给我们一条错误消息。")]),t._v(" "),a("h2",{attrs:{id:"非异常故障"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非异常故障"}},[t._v("#")]),t._v(" 非异常故障")]),t._v(" "),a("p",[t._v("到目前为止，我们一直在讨论运行时错误，JavaScript 运行时告诉我们它认为某些东西是无意义的情况。出现这些情况是因为 ECMAScript 规范明确说明了语言在遇到意外情况时应该如何表现。")]),t._v(" "),a("p",[t._v("例如，规范说尝试调用不可调用的东西应该抛出错误。也许这听起来像是「明显的行为」，但您可以想象访问对象上不存在的属性也应该抛出错误。相反，JavaScript 给了我们不同的行为并返回值 undefined：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"小乐"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 undefined")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("最终，静态类型系统要求必须调用哪些代码，应该在其系统中标记，即使它是不会立即抛出错误的“有 效”JavaScript。比如：在 TypeScript 中，以下代码会产生关于 location 未定义的错误：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/TypeScript/20220911222233.png",alt:"image-20220911222231463"}})]),t._v(" "),a("p",[t._v("TypeScript 可以在我们的程序中捕获很多合法的错误。例如：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/TypeScript/20220911222251.png",alt:"image-20220911222250868"}})]),t._v(" "),a("h2",{attrs:{id:"使用工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用工具"}},[t._v("#")]),t._v(" 使用工具")]),t._v(" "),a("p",[t._v("当我们在代码中出错时，TypeScript 可以捕获错误。这很好，但 TypeScript 也可以首先防止我们犯这些错误。")]),t._v(" "),a("p",[t._v("类型检查器有能力帮助我们来检查，诸如是否正在访问变量和其他属性的正确属性。一旦有了这些信息，它还可以开始建议您可能想要使用的属性。")]),t._v(" "),a("p",[t._v("这意味着当利用工具来编辑 TypeScript 代码，核心类型检查器可以在编辑器中键入代码时，提供错误消息和代码完成。这是我们在谈论 TypeScript 中的工具时经常提到的部分内容。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/TypeScript/20220911222324.png",alt:"image-20220911222321599"}})]),t._v(" "),a("p",[t._v("TypeScript 非常重视工具。支持 TypeScript 的编辑器可以提供「快速修复」以自动修复错误、重构以轻松重新组织代码的能力，以及用于跳转到变量定义或查找给定变量的所有引用的有用导航功能。所有这些都建立在类型检查器之上，并且是完全跨平台的，因此您最喜欢的编辑器可能具有可用的 TypeScript 支 持。")]),t._v(" "),a("h2",{attrs:{id:"tsc-编译器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsc-编译器"}},[t._v("#")]),t._v(" tsc 编译器")]),t._v(" "),a("p",[t._v("我们一直在谈论类型检查，但我们还没有使用我们的类型检查器。让我们认识一下我们的新朋友 tsc TypeScript 编译器。首先，我们需要通过 npm 获取它。")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" typescript\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这将全局安装 TypeScript 编译器。")]),t._v(" "),a("p",[t._v("现在让我们移动到一个空文件夹，并尝试编写我们的第一个 TypeScript 程序 hello.ts：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你好，世界")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("注意这里没有多余的装饰；这个 "),a("code",[t._v("hello world")]),t._v(" 程序看起来与您在 JavaScript 中为 "),a("code",[t._v("hello world")]),t._v(" 程序编写的程序相同。现在让我们通过运行 tsc 由 typescript 包为我们打包编译它：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("felix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 01-ts-basics $ tsc hello.ts\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("我们跑了 tsc ，什么也没发生！嗯，没有类型错误，所以我们没有在控制台中得到任何输出，因为没有什么可报告的。")]),t._v(" "),a("p",[t._v("但是再检查一下，我们得到了一些文件输出。如果我们查看当前目录，我们会发现有两个文件 hello.js 在 hello.ts。这是我们的 hello.ts 文件在 tsc 编译或转换为纯 JavaScript 文件后的输出。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/TypeScript/20220911230645.png",alt:"image-20220911230644950"}})]),t._v(" "),a("p",[t._v("如果我们检查 hello.js ，我们将看到 TypeScript 在处理 .ts 文件后吐出的内容：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你好，世界")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("在这种情况下，TypeScript 几乎没有要转换的内容，因此它看起来与我们编写的内容相同。编译器会尝试编译出清晰可读的代码，看起来像一个人写的东西。注释也给我们保留下来。")]),t._v(" "),a("p",[t._v("如果我们确实引入了类型检查错误呢？让我们重写 hello.ts ：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hello ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(", today is ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("date"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"小千"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("如果我们 tsc hello.ts 再次运行，我们在命令行上收到了错误。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/TypeScript/20220911230745.png",alt:"image-20220911230743410"}})]),t._v(" "),a("p",[t._v("TypeScript 告诉我们忘记将参数传递给 greet 函数，这是理所当然的。到目前为止，我们只编写了标准 的 JavaScript，但是类型检查仍然能够发现我们代码的其他问题。感谢TypeScript！")]),t._v(" "),a("h2",{attrs:{id:"发出错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发出错误"}},[t._v("#")]),t._v(" 发出错误")]),t._v(" "),a("p",[t._v("从上一个示例中，你可能没有注意到的一件事，就是是我们的 hello.js 文件再次更改。如果我们打开该文件，那么我们会看到内容仍然与我们的输入文件基本相同。")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你好，世界")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('", today is "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" date "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"小乐"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("鉴于 tsc 报告了有关我们代码的错误这一事实，这可能有点令人惊讶，但这是基于 TypeScript 的核心价值观之一：大多数情况下，你会比 TypeScript 更了解发生了什么。")]),t._v(" "),a("p",[t._v("再回顾一下前面的内容，类型检查代码限制了我们可以运行的程序种类，因此需要权衡类型检查器认为可接受的类型。大多数情况下这没问题，但在某些情况下，这些检查会妨碍到我们。例如，想象自己将 JavaScript 代码迁移到 TypeScript 并引入类型检查错误。最终，你将开始为类型检查器进行代码清理，但原始 JavaScript 代码已经可以运行了。为什么非要将我们的 JS 代码转换为 TypeScript 代码，来去阻止运行它呢？")]),t._v(" "),a("p",[t._v("所以 TypeScript 默认不会妨碍我们代码的运行，因为这些 JS 在宿主环境里运行时没有问题的。当然，随着时间的推移，我们可能希望对错误更加防御，并使 TypeScript 的行为更加严格。在这种情况下，我们可以使用 "),a("code",[t._v("noEmitOnError")]),t._v(" 编译器选项。尝试更改我们的 hello.ts 文件，并 tsc 使用该选项重新编译：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("tsc "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--noEmitOnError")]),t._v(" hello.ts\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("你会注意到 hello.js 永远不会更新。")]),t._v(" "),a("h2",{attrs:{id:"显式类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显式类型"}},[t._v("#")]),t._v(" 显式类型")]),t._v(" "),a("p",[t._v("到现在为止，我们还没有告诉 typescript person 或者 date 是什么类型。当我们编辑代码时会告诉 TypeScript person 是一个 string ，那 date 应该是一个 Date 对象。")]),t._v(" "),a("p",[t._v("有了这个，TypeScript 可以告诉我们其他 greet 可能被错误调用的情况。例如修改一下 hello.ts 代码：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" date"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hello ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(", today is ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDateString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("嗯？TypeScript 在我们的第二个参数上报告了一个错误，这是为什么呢？")]),t._v(" "),a("p",[t._v("也许令人惊讶的是，Date() 在 JavaScript 中调用会返回一个 string 。可以使用 "),a("code",[t._v("new Date()")]),t._v(" 满足我们的期望，快速修复错误：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" date"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hello ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(", today is ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDateString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"小乐"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("成功的编译输出了 hello.js 。")]),t._v(" "),a("p",[t._v("请记住，我们并不总是必须给变量编写明确的类型注释。在许多情况下，TypeScript 可以为我们自动推断（或「找出」）类型，即使我们忽略定义这些类型。比如：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/TypeScript/20220911231047.png",alt:"image-20220911231044077"}})]),t._v(" "),a("p",[t._v("这里没有给 msg 指定具体的类型，typescript 会根据函数的实参来自动推断类型。这是一个特性，当类型系统最终会推断出相同的类型时，最好不要添加类型注释。")]),t._v(" "),a("h2",{attrs:{id:"擦除类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#擦除类型"}},[t._v("#")]),t._v(" 擦除类型")]),t._v(" "),a("p",[t._v("让我们来仔细看看，当我们 tsc 编译上面的代码会输出的什么样的 JavaScript，观察 hello.js")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('", today is "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDateString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"小乐"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("这里要注意两点：")]),t._v(" "),a("ol",[a("li",[t._v("我们的 person 和 date 参数不再有类型注释")]),t._v(" "),a("li",[t._v("我们的「模板字符串」：使用反引号（` 字符）的字符串，它被转换为带有连接 ( + ) 的纯字符串。")])]),t._v(" "),a("p",[t._v("稍后会详细介绍第二点，现在让我们专注于第一点。类型注释不是 JavaScript 的一部分（或者说 ECMAScript 是落后的），因此实际上没有任何浏览器，或其他运行时可以不加修改地运行 TypeScript。这就是 TypeScript 首先需要编译器的原因，它需要某种方式来剥离或转换任何特定于 TypeScript 的代码，以便我们可以运行它。大多数 TypeScript 特定的代码都被删除了。")]),t._v(" "),a("blockquote",[a("p",[t._v("请记住：类型注释永远不会改变程序的运行时行为。")])]),t._v(" "),a("h2",{attrs:{id:"降级编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#降级编译"}},[t._v("#")]),t._v(" 降级编译")]),t._v(" "),a("p",[t._v("与上面的另一个区别是我们的模板字符串是从：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hello ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(", today is ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDateString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("到：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('", today is "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDateString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("为什么会这样？")]),t._v(" "),a("p",[t._v("模板字符串是 ECMAScript 版本的一个特性，称为 ECMAScript 2015（又名 ECMAScript 6、ES2015、 ES6 等）。TypeScript 能够将代码从较新版本的 ECMAScript 重写为旧版本，例如 ECMAScript 3 或 ECMAScript 5（又名 ES3 和 ES5）。这种从更新或「更高」版本的 ECMAScript ，向下移动到旧版本或「更低」版本的过程有时称为降级。")]),t._v(" "),a("p",[t._v("默认情况下，TypeScript 以 ES3 为目标，这是一个非常旧的 ECMAScript 版本。通过使用 target 选项，我们可以选择更新一些的内容。运行 "),a("code",[t._v("--target es2015 TypeScript")]),t._v(" 以针对 ECMAScript 2015 进行更改，这意味着代码应该能够在支持 ECMAScript 2015 的任何地方运行。所以运行 "),a("code",[t._v("tsc --target es2015 hello.ts")]),t._v(" 会给我们以下输出：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/TypeScript/20220911231516.png",alt:"image-20220911231515409"}})]),t._v(" "),a("p",[t._v("虽然默认目标是 ES3，但当前绝大多数浏览器都支持 ES2015。因此，大多数开发人员可以安全地将 ES2015 或更高版本指定为目标，除非考虑与某些旧浏览器的兼容性。")]),t._v(" "),a("h2",{attrs:{id:"严格模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#严格模式"}},[t._v("#")]),t._v(" 严格模式")]),t._v(" "),a("p",[t._v("不同的用户使用 TypeScript 在类型检查器中，希望检查的严格程度不同。有些人正在寻找更宽松的验证体验，它可以帮助仅验证其程序的某些部分，并且仍然拥有不错的工具。这是 TypeScript 的默认体验，其中类型是可选的，推理采用最宽松的类型，并且不检查潜在的 null / undefined 值，就像 tsc 面对错 误时如何编译生成 JS 文件一样。如果你要迁移现有的 JavaScript，这可能是理想的第一步。")]),t._v(" "),a("p",[t._v("相比之下，许多用户更喜欢让 TypeScript 尽可能多地立即验证，这就是该语言也提供严格性设置的原因。这些严格性设置将静态类型检查，从开关（无论您的代码是否被检查）转变为更接近于拨号的东西。你把这个拨盘调得越远，TypeScript 就会为你检查越多。这可能需要一些额外的工作，但总的来说，从长远来看，它是物有所值的，并且可以实现更彻底的检查和更准确的工具。如果可能，新的代码库应该始终打开这些严格性检查。")]),t._v(" "),a("p",[t._v("TypeScript 有几个可以打开或关闭的类型检查严格标志，除非另有说明，否则我们所有的示例都将在启用所有这些标志的情况下编写。在命令行里设置 strict，或在 tsconfig.json 中配置 "),a("code",[t._v('"strict": true')]),t._v(" 将它打开。")]),t._v(" "),a("p",[a("code",[t._v('"strict": true')]),t._v(" 代表开启严格模式，包含了 "),a("code",[t._v("noImplicitAny")]),t._v("、"),a("code",[t._v("strictNullChecks")]),t._v(" 等检查模式，我们也可以把严格模式关闭，然后单独开启这些检查模式。")]),t._v(" "),a("h3",{attrs:{id:"noimplicitany"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noimplicitany"}},[t._v("#")]),t._v(" noImplicitAny")]),t._v(" "),a("p",[t._v("回想一下，在某些地方，TypeScript 不会尝试为我们推断类型，而是退回到最宽松的类型：any 。这并不是可能发生的最糟糕的事情——毕竟，any 无论如何，都能退回到普通的 JavaScript 体验。")]),t._v(" "),a("p",[t._v("但是，使用 any 通常首先会破坏使用 TypeScript 的目的。你的程序类型越多，你获得的验证和工具就越多，这意味着你在编写代码时会遇到更少的错误。打开该 noImplicitAny 标志将对类型隐式推断为，当任何变量发出错误时都应用 any 类型。")]),t._v(" "),a("h3",{attrs:{id:"strictnullchecks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strictnullchecks"}},[t._v("#")]),t._v(" strictNullChecks")]),t._v(" "),a("p",[t._v("默认情况下，值为 null 和 undefined 可分配给任何其他类型。这可以使编写一些代码更容易，但忘记处理 null 并且 undefined 是你代码无数错误的元凶 ：有些人认为这是一个十亿美元的错误。该 strictNullChecks 标志，使得操作 null 和 undefined 更加明确，它使我们不用担心是否忘记处理 null 和 undefined。")])])}),[],!1,null,null,null);s.default=e.exports}}]);