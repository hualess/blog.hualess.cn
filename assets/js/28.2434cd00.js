(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{414:function(s,t,a){},567:function(s,t,a){"use strict";a(414)},623:function(s,t,a){"use strict";a.r(t);var i={name:"kittyCat",data:()=>({isLoaded:!0}),mounted(){this.initCat(),this.$router.afterEach((s,t)=>{s.path!==t.path&&this.initCat()})},methods:{initCat(){if(!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return this.isLoaded=!1,console.log("mobile do not load model")},handleKittyCat(s){this.$dialog.confirm({title:"养猫赞助",message:"您赠与的猫粮,无论多少,都是我前进的动力,感谢支持",theme:"round-button",showCancelButton:!0,cancelButtonColor:"#ccc"}).then(()=>{window.open(s,"_blank")}).catch(()=>{})}}},e=(a(567),a(2)),c=Object(e.a)(i,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:s.isLoaded,expression:"isLoaded"}],staticClass:"kitty-container",on:{click:function(t){return s.handleKittyCat("https://pay.aikelaidev.cn/paypage/?merchant=35bdYxSx7dCUrVUBqFQjdqqlzhWryCA7lqOn9VhakWHC")}}},[s._m(0)])])}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"cat"},[a("div",{staticClass:"body"},[a("div",{staticClass:"cola"}),s._v(" "),a("div",{staticClass:"leg3"}),s._v(" "),a("div",{staticClass:"leg9"}),s._v(" "),a("div",{staticClass:"body3"}),s._v(" "),a("div",{staticClass:"body5"}),s._v(" "),a("div",{staticClass:"body7"}),s._v(" "),a("div",{staticClass:"cin"}),s._v(" "),a("div",{staticClass:"tela"}),s._v(" "),a("div",{staticClass:"legs"}),s._v(" "),a("div",{staticClass:"legs3"}),s._v(" "),a("div",{staticClass:"legs9"}),s._v(" "),a("div",{staticClass:"legs12"}),s._v(" "),a("div",{staticClass:"cola3"}),s._v(" "),a("div",{staticClass:"cola9"})]),s._v(" "),a("div",{staticClass:"head"},[a("div",{staticClass:"orejas"}),s._v(" "),a("div",{staticClass:"orejas3"}),s._v(" "),a("div",{staticClass:"face"},[a("div",{staticClass:"cejas"}),s._v(" "),a("div",{staticClass:"cejas3"}),s._v(" "),a("div",{staticClass:"cejas7"}),s._v(" "),a("div",{staticClass:"ojos"},[a("div",{staticClass:"iris"},[a("div",{staticClass:"iris3"})])]),s._v(" "),a("div",{staticClass:"ojos3"},[a("div",{staticClass:"iris7"},[a("div",{staticClass:"iris3"})])]),s._v(" "),a("div",{staticClass:"boca"}),s._v(" "),a("div",{staticClass:"bigotes"}),s._v(" "),a("div",{staticClass:"bigotes3"})])])])])}],!1,null,"68a16e1a",null);t.default=c.exports}}]);