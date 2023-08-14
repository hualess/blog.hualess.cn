(window.webpackJsonp=window.webpackJsonp||[]).push([[1074],{1657:function(s,a,n){"use strict";n.r(a);var e=n(2),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("本文档讲解使用 keepalived 和 haproxy 实现 kube-apiserver 高可用的步骤：")]),s._v(" "),n("ul",[n("li",[s._v("keepalived 提供 kube-apiserver 对外服务的 VIP；")]),s._v(" "),n("li",[s._v("haproxy 监听 VIP，后端连接所有 kube-apiserver 实例，提供健康检查和负载均衡功能；")])]),s._v(" "),n("p",[s._v("运行 keepalived 和 haproxy 的节点称为 LB 节点。由于 keepalived 是一主多备运行模式，故至少两个 LB 节点。")]),s._v(" "),n("p",[s._v("本文档复用 master 节点的三台机器，haproxy 监听的端口 (8443) 需要与 kube-apiserver 的端口 6443 不同，避免冲突。")]),s._v(" "),n("p",[s._v("keepalived 在运行过程中周期检查本机的 haproxy 进程状态，如果检测到 haproxy 进程异常，则触发重新选主的过程，VIP 将飘移到新选出来的主节点，从而实现 VIP 的高可用。")]),s._v(" "),n("p",[s._v("所有组件（如 kubeclt、apiserver、controller-manager、scheduler 等）都通过 VIP 和 haproxy 监听的 8443 端口访问 kube-apiserver 服务。")]),s._v(" "),n("h2",{attrs:{id:"_1-安装软件包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装软件包"}},[s._v("#")]),s._v(" 1，安装软件包")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh root@${node_ip} "yum install -y keepalived haproxy"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_2-配置和下发-haproxy-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置和下发-haproxy-配置文件"}},[s._v("#")]),s._v(" 2，配置和下发 haproxy 配置文件")]),s._v(" "),n("p",[s._v("haproxy 配置文件：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" haproxy.cfg "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nglobal\n    log /dev/log local0\n    log /dev/log local1 notice\n    chroot /var/lib/haproxy\n    stats socket /var/run/haproxy-admin.sock mode 660 level admin\n    stats timeout 30s\n    user haproxy\n    group haproxy\n    daemon\n    nbproc 1\ndefaults\n    log global\n    timeout connect 5000\n    timeout client 10m\n    timeout server 10m\nlisten admin_stats\n    bind 0.0.0.0:10080\n    mode http\n    log 127.0.0.1 local0 err\n    stats refresh 30s\n    stats uri /status\n    stats realm welcome login\\ Haproxy\n    stats auth admin:123456\n    stats hide-version\n    stats admin if TRUE\nlisten kube-master\n    bind 0.0.0.0:8443\n    mode tcp\n    option tcplog\n    balance source\n    server 192.168.106.3 192.168.106.3:6443 check inter 2000 fall 2 rise 2 weight 1\n    server 192.168.106.4 192.168.106.4:6443 check inter 2000 fall 2 rise 2 weight 1\n    server 192.168.106.5 192.168.106.5:6443 check inter 2000 fall 2 rise 2 weight 1\nEOF")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("p",[s._v("注意更改其中的 ip 与自己的一致。")]),s._v(" "),n("ul",[n("li",[s._v("haproxy 在 10080 端口输出 status 信息；")]),s._v(" "),n("li",[s._v("haproxy 监听所有接口的 8443 端口，该端口与环境变量 ${KUBE_APISERVER} 指定的端口必须一致；")]),s._v(" "),n("li",[s._v("server 字段列出所有 kube-apiserver 监听的 IP 和端口；")])]),s._v(" "),n("p",[s._v("下发 haproxy.cfg 到所有 master 节点：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    scp haproxy.cfg root@${node_ip}:/etc/haproxy\ndone\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_3-起-haproxy-服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-起-haproxy-服务"}},[s._v("#")]),s._v(" 3，起 haproxy 服务")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh root@${node_ip} "systemctl restart haproxy"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_4-检查-haproxy-服务状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-检查-haproxy-服务状态"}},[s._v("#")]),s._v(" 4，检查 haproxy 服务状态")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh root@${node_ip} "systemctl status haproxy|grep Active"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("如果看到如下输出：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bash")]),s._v(" magic.sh\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3\n   Active: active "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":45:33 CST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 6h ago\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.4\n   Active: active "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":45:33 CST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 6h ago\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5\n   Active: active "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":45:34 CST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 6h ago\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("则说明正常，如果失败，用如下命令检查：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("journalctl "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xu")]),s._v(" haproxy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("检查 haproxy 是否监听 8443 端口：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh root@${node_ip} "netstat -lnpt|grep haproxy"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("输出：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bash")]),s._v(" magic.sh\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3\ntcp        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8443            "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12672")]),s._v("/haproxy\ntcp        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:10080           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12672")]),s._v("/haproxy\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.4\ntcp        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8443            "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10172")]),s._v("/haproxy\ntcp        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:10080           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10172")]),s._v("/haproxy\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5\ntcp        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8443            "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10333")]),s._v("/haproxy\ntcp        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:10080           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10333")]),s._v("/haproxy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"_5-配置和下发-keepalived-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置和下发-keepalived-配置文件"}},[s._v("#")]),s._v(" 5，配置和下发 keepalived 配置文件")]),s._v(" "),n("p",[s._v("keepalived 是一主（master）多备（backup）运行模式，故有两种类型的配置文件。master 配置文件只有一份，backup 配置文件视节点数目而定，对于本文档而言，规划如下：")]),s._v(" "),n("ul",[n("li",[s._v("master: 192.168.106.3")]),s._v(" "),n("li",[s._v("backup：192.168.106.4，192.168.106.5")])]),s._v(" "),n("p",[n("code",[s._v("master 配置文件：")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$source")]),s._v(" /opt/k8s/bin/environment.sh\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" keepalived-master.conf "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\nglobal_defs {\n    router_id lb-master-105\n}\nvrrp_script check-haproxy {\n    script "killall -0 haproxy"\n    interval 5\n    weight -30\n}\nvrrp_instance VI-kube-master {\n    state MASTER\n    priority 120\n    dont_track_primary\n    interface '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${VIP_IF}")]),s._v("\n    virtual_router_id 68\n    advert_int 3\n    track_script {\n        check-haproxy\n    }\n    virtual_ipaddress {\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MASTER_VIP}")]),s._v("\n    }\n}\nEOF")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("ul",[n("li",[s._v("VIP 所在的接口（interface ${VIP_IF}）为 eth0；")]),s._v(" "),n("li",[s._v("使用 killall -0 haproxy 命令检查所在节点的 haproxy 进程是否正常。如果异常则将权重减少（-30）, 从而触发重新选主过程；")]),s._v(" "),n("li",[s._v("router_id、virtual_router_id 用于标识属于该 HA 的 keepalived 实例，如果有多套 keepalived HA，则必须各不相同；")])]),s._v(" "),n("p",[n("code",[s._v("backup 配置文件：")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$source")]),s._v(" /opt/k8s/bin/environment.sh\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" keepalived-backup.conf "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\nglobal_defs {\n    router_id lb-backup-105\n}\nvrrp_script check-haproxy {\n    script "killall -0 haproxy"\n    interval 5\n    weight -30\n}\nvrrp_instance VI-kube-master {\n    state BACKUP\n    priority 110\n    dont_track_primary\n    interface '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${VIP_IF}")]),s._v("\n    virtual_router_id 68\n    advert_int 3\n    track_script {\n        check-haproxy\n    }\n    virtual_ipaddress {\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MASTER_VIP}")]),s._v("\n    }\n}\nEOF")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("ul",[n("li",[s._v("VIP 所在的接口（interface ${VIP_IF}）为 eth0；")]),s._v(" "),n("li",[s._v("使用 killall -0 haproxy 命令检查所在节点的 haproxy 进程是否正常。如果异常则将权重减少（-30）, 从而触发重新选主过程；")]),s._v(" "),n("li",[s._v("router_id、virtual_router_id 用于标识属于该 HA 的 keepalived 实例，如果有多套 keepalived HA，则必须各不相同；")]),s._v(" "),n("li",[s._v("priority 的值必须小于 master 的值；")])]),s._v(" "),n("h2",{attrs:{id:"_6-下发-keepalived-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-下发-keepalived-配置文件"}},[s._v("#")]),s._v(" 6，下发 keepalived 配置文件")]),s._v(" "),n("p",[s._v("下发 master 配置文件：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" keepalived-master.conf root@kube-node1:/etc/keepalived/keepalived.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("下发 backup 配置文件：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" keepalived-backup.conf root@kube-node2:/etc/keepalived/keepalived.conf\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" keepalived-backup.conf root@kube-node3:/etc/keepalived/keepalived.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"_7-起-keepalived-服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-起-keepalived-服务"}},[s._v("#")]),s._v(" 7，起 keepalived 服务")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh root@${node_ip} "systemctl restart keepalived"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_8-检查-keepalived-服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-检查-keepalived-服务"}},[s._v("#")]),s._v(" 8，检查 keepalived 服务")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh root@${node_ip} "systemctl status keepalived|grep Active"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("输出如下：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bash")]),s._v(" magic.sh\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3\n   Active: active "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":51:56 CST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 6h ago\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.4\n   Active: active "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":51:57 CST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 6h ago\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5\n   Active: active "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":51:57 CST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 6h ago\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("则正常，如果失败，则检查日志：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("journalctl "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xu")]),s._v(" keepalived\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("查看 VIP 所在的节点，确保可以 ping 通 VIP：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh ${node_ip} "/usr/sbin/ip addr show ${VIP_IF}"\n    ssh ${node_ip} "ping -c 1 ${MASTER_VIP}"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("可以看到 VIP 目前在 kube-node1 节点上，而且各个节点也都是通的。")]),s._v(" "),n("h2",{attrs:{id:"_9-查看-haproxy-状态页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-查看-haproxy-状态页面"}},[s._v("#")]),s._v(" 9，查看 haproxy 状态页面")]),s._v(" "),n("p",[s._v("浏览器访问 ${MASTER_VIP}:10080/status 地址，查看 haproxy 状态页面：")]),s._v(" "),n("p",[s._v("用户名密码就在刚刚定义的 haproxy 的配置当中。")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ae5da57877ee582d.jpg",alt:"image"}})])])}),[],!1,null,null,null);a.default=t.exports}}]);