(window.webpackJsonp=window.webpackJsonp||[]).push([[729],{1314:function(t,r,_){"use strict";_.r(r);var e=_(2),v=Object(e.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h3",{attrs:{id:"负载均衡"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),_("p",[t._v("使用多台服务器共同分担计算任务，将网络请求与计算分配到集群可用的不同服务器节点上，从而达到高可用性以及良好的操作体验。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.terwer.space/image-20220411213300347.png",alt:"image-20220411213300347"}})]),t._v(" "),_("p",[t._v("Client1、Client2、Client3通过负载均衡分配到不同的节点上。")]),t._v(" "),_("p",[t._v("负载均衡有硬件解决方案，也有软件解决方案。硬件解决方案有著名的F5，软件有LVS、HAProxy、Nginx等。")]),t._v(" "),_("p",[t._v("LVS："),_("a",{attrs:{href:"https://www.cnblogs.com/liwei0526vip/p/6370103.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/liwei0526vip/p/6370103.html"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("HAProxy："),_("a",{attrs:{href:"http://www.haproxy.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.haproxy.org/"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("以Nginx为例，负载均衡一般有以下6中策略：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("方式")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("轮询")]),t._v(" "),_("td",[t._v("默认方式，每个请求按照时间顺序逐一分配到后端服务器")])]),t._v(" "),_("tr",[_("td",[t._v("weight")]),t._v(" "),_("td",[t._v("权重方式，在轮询基础上，指定轮询的几率，权重越大，接收的请求越多")])]),t._v(" "),_("tr",[_("td",[t._v("ip_hash")]),t._v(" "),_("td",[t._v("根据ip分配方式，相同的客户端一直发送到相同的服务器，可以保证Session")])]),t._v(" "),_("tr",[_("td",[t._v("least_conn")]),t._v(" "),_("td",[t._v("最少连接方式，把请求转发到请求书较少的后端服务器")])]),t._v(" "),_("tr",[_("td",[t._v("fail（第三方）")]),t._v(" "),_("td",[t._v("响应时间方式，根据服务端响应时间分配请求，响应时间短的优先分配")])]),t._v(" "),_("tr",[_("td",[t._v("url_hash（第三方）")]),t._v(" "),_("td",[t._v("根据URL分配方式，按照URL的hash结果分配请求，使得同一个url定向到同一个后端服务器")])])])])])}),[],!1,null,null,null);r.default=v.exports}}]);