(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{413:function(e,i,t){},566:function(e,i,t){"use strict";t(413)},622:function(e,i,t){"use strict";t.r(i);var a={name:"ArticleAdvertiSpace",props:["width","height"],data:()=>({carouses:[{imgUrl:"https://s1.ax1x.com/2022/06/24/jiTfOO.png",text:"测算",id:"2",href:"https://cesuan.itclan.cn/"}],centerDialogVisible:!1,isDiaLog:!0}),methods:{linkFun(){if(!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return this.isDiaLog=!1,this.$message({message:"如需合作,请您联系站长,期待我们合作愉快",type:"error",center:!0,duration:5e3}),console.log("移动端下不显示dialog");this.carouses.forEach(e=>{"javascript:;"!=e.href?e.href=e.href:this.centerDialogVisible=!0})}}},s=(t(566),t(2)),r=Object(s.a)(a,(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("div",{staticClass:"carousel"},[t("el-carousel",{attrs:{trigger:"click",height:"150px"}},e._l(e.carouses,(function(i){return t("el-carousel-item",{key:i.id},[t("a",{attrs:{href:i.href,target:"_blank"},on:{click:e.linkFun}},[t("img",{attrs:{src:i.imgUrl,width:e.width,height:e.height,alt:""}})])])})),1)],1),e._v(" "),e.isDiaLog?t("el-dialog",{attrs:{title:"提示",visible:e.centerDialogVisible,closeOnClickModal:!1,width:"30%",center:""},on:{"update:visible":function(i){e.centerDialogVisible=i}}},[t("span",[e._v("如需合作:请您联系站长,添加微信:suibichuanji,期待我们合作愉快")]),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(i){e.centerDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(i){e.centerDialogVisible=!1}}},[e._v("确 定")])],1)]):e._e()],1)}),[],!1,null,"5aa9a9ba",null);i.default=r.exports}}]);