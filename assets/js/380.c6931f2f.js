(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{974:function(a,t,v){"use strict";v.r(t);var _=v(2),s=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#索引-index"}},[a._v("索引（Index）")])]),v("li",[v("a",{attrs:{href:"#类型-type"}},[a._v("类型（Type）")])]),v("li",[v("a",{attrs:{href:"#文档-document"}},[a._v("文档（Document）")])]),v("li",[v("a",{attrs:{href:"#字段-field"}},[a._v("字段（Field）")])]),v("li",[v("a",{attrs:{href:"#映射-mapping"}},[a._v("映射（Mapping）")])]),v("li",[v("a",{attrs:{href:"#分片-shards"}},[a._v("分片（Shards）")])]),v("li",[v("a",{attrs:{href:"#副本-replicas"}},[a._v("副本（Replicas）")])]),v("li",[v("a",{attrs:{href:"#分配-allocation"}},[a._v("分配（Allocation）")])]),v("li",[v("a",{attrs:{href:"#系统架构"}},[a._v("系统架构")])])])]),v("p"),a._v(" "),v("h2",{attrs:{id:"索引-index"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引-index"}},[a._v("#")]),a._v(" 索引（Index）")]),a._v(" "),v("p",[a._v("一个索引就是一个拥有几分相似特征的文档的集合。比如说，你可以有一个客户数据的索引，另一个产品目录的索引，还有一个订单数据的索引。一个索引由一个名字来标识（必须全部是小写字母），并且当我们要对这个索引中的文档进行检索、搜索、更新和删除的时候，都要使用到这个名字。在一个集群中，可以定义任意多的索引。")]),a._v(" "),v("p",[a._v("能搜索的数据必须有索引，这样的好处是可以提高查询速度，比如：新华字典前面的目录就是索引的意思，目录可以提高查询速度。")]),a._v(" "),v("p",[v("mark",[a._v("Elasticsearch 索引的精髓：一切设计都是为了提高搜索的性能。")])]),a._v(" "),v("h2",{attrs:{id:"类型-type"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#类型-type"}},[a._v("#")]),a._v(" 类型（Type）")]),a._v(" "),v("p",[a._v("在一个索引中，你可以定义一种或多种类型。")]),a._v(" "),v("p",[a._v("一个类型是你的索引的一个逻辑上的分类/分区，其语义完全由你来定。通常，会为具有一组共同字段的文档定义一个类型。不同的版本，类型发生了不同的变化")]),a._v(" "),v("table",[v("thead",[v("tr",[v("th",[a._v("版本")]),a._v(" "),v("th",[a._v("Type")])])]),a._v(" "),v("tbody",[v("tr",[v("td",[a._v("5.x")]),a._v(" "),v("td",[a._v("支持多种 type")])]),a._v(" "),v("tr",[v("td",[a._v("6.x")]),a._v(" "),v("td",[a._v("支持多种 type")])]),a._v(" "),v("tr",[v("td",[a._v("7.x")]),a._v(" "),v("td",[a._v("默认不再支持自定义索引类型（默认类型为：_doc）")])])])]),a._v(" "),v("h2",{attrs:{id:"文档-document"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文档-document"}},[a._v("#")]),a._v(" 文档（Document）")]),a._v(" "),v("p",[a._v("一个文档是一个可被检索的基础信息单元，也就是一条数据。")]),a._v(" "),v("p",[a._v("比如：你可以拥有某一个客户的文档，某一个产品的一个文档，当然，也可以拥有某个订单的一个文档。文档以 JSON（Javascript Object Notation）格式来表示，而 JSON 是一个到处存在的互联网数据交互格式。")]),a._v(" "),v("p",[a._v("在一个 index/type 里面，你可以存储任意多的文档。")]),a._v(" "),v("h2",{attrs:{id:"字段-field"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#字段-field"}},[a._v("#")]),a._v(" 字段（Field）")]),a._v(" "),v("p",[a._v("相当于是数据表的字段，对文档数据根据不同属性进行的分类标识。")]),a._v(" "),v("h2",{attrs:{id:"映射-mapping"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#映射-mapping"}},[a._v("#")]),a._v(" 映射（Mapping）")]),a._v(" "),v("p",[a._v("mapping 是处理数据的方式和规则方面做一些限制，如：某个字段的数据类型、默认值、分析器、是否被检索等等。这些都是映射里面可以设置的，其它就是处理 ES 里面数据的一些使用规则设置也叫做映射，按着最优规则处理数据对性能提高很大，因此才需要建立映射，并且需要思考如何建立映射才能对性能更好。")]),a._v(" "),v("h2",{attrs:{id:"分片-shards"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分片-shards"}},[a._v("#")]),a._v(" 分片（Shards）")]),a._v(" "),v("p",[a._v("一个索引可以存储超出单个节点硬件限制的大量数据。比如，一个具有 10 亿文档数据的索引占据 1TB 的磁盘空间，而任一节点都可能没有这样大的磁盘空间。或者单个节点处理搜索请求，响应太慢。为了解决这个问题，Elasticsearch 提供了将索引划分成多份的能力，每一份就称之为分片。当你创建一个索引的时候，你可以指定你想要的分片的数量。每个分片本身也是一个功能完善并且独立的「索引」，这个「索引」可以被放置到集群中的任何节点上。")]),a._v(" "),v("p",[a._v("分片很重要，主要有两方面的原因：")]),a._v(" "),v("ul",[v("li",[a._v("允许你水平分割/扩展你的内容容量")]),a._v(" "),v("li",[a._v("允许你在分片之上进行分布式的、并行的操作，进而提高性能/吞吐量")])]),a._v(" "),v("p",[a._v("至于一个分片怎样分布，它的文档怎样聚合和搜索请求，是完全由 Elasticsearch 管理的，对于作为用户的你来说，这些都是透明的，无需过分关心。")]),a._v(" "),v("p",[v("mark",[a._v("如同完整的大数据，分割成多个小数据，分布到不同的地方，小数据就是分片，所有的分片合起来就是完整的数据")])]),a._v(" "),v("p",[a._v("被混淆的概念是：一个 Lucene 索引，我们在 Elasticsearch 称作分片。一个 Elasticsearch 索引是分片的集合。当 Elasticsearch 在索引中搜索的时候，他发送查询到每一个属于索引的分片(Lucene 索引)，然后合并每个分片的结果到一个全局的结果集")]),a._v(" "),v("h2",{attrs:{id:"副本-replicas"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#副本-replicas"}},[a._v("#")]),a._v(" 副本（Replicas）")]),a._v(" "),v("p",[a._v("在一个网络/云的环境里，失败随时都可能发生，在某个分片/节点不知怎么的就处于离线状态，或者由于任何原因消失了，这种情况下，有一个故障转移机制是非常有用并且是 强烈推荐的。为此目的，Elasticsearch 允许你创建分片的一份或多份拷贝，这些拷贝叫做"),v("mark",[a._v("复制分片(副本)")]),a._v("。")]),a._v(" "),v("p",[a._v("复制分片之所以重要，有两个主要原因：")]),a._v(" "),v("ul",[v("li",[a._v("在分片/节点失败的情况下，提供了高可用性。因为这个原因，注意到复制分片从不与 原/主要（original/primary）分片置于同一节点上是非常重要的")]),a._v(" "),v("li",[a._v("扩展你的搜索量/吞吐量，因为搜索可以在所有的副本上并行运行")])]),a._v(" "),v("p",[a._v("总之，每个索引可以被分成多个分片。一个索引也可以被复制 0 次（意思是没有复制）或多次。一旦复制了，每个索引就有了主分片（作为复制源的原来的分片）和复制分片（主分片的拷贝）之别。分片和复制的数量可以在索引创建的时候指定。在索引创建之后，你可以在"),v("mark",[a._v("任何时候动态地改变复制的数量")]),a._v("，但是你事后"),v("mark",[a._v("不能改变分片的数量")]),a._v("。默认情况下，Elasticsearch 中的每个索引被分片 1 个主分片和 1 个复制，这意味着，如果你的集群中至少有两个节点，你的索引将会有 1 个主分片和另外 1 个复制分片（1 个完全拷贝），这样的话每个索引总共就有 2 个分片，我们需要根据索引需要确定分片个数.")]),a._v(" "),v("p",[v("mark",[a._v("副本就是分片的备份(分身)，和数据库的主从复制类似")])]),a._v(" "),v("h2",{attrs:{id:"分配-allocation"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分配-allocation"}},[a._v("#")]),a._v(" 分配（Allocation）")]),a._v(" "),v("p",[a._v("将分片分配给某个节点的过程，包括分配主分片或者副本。如果是副本，还包含从主分片复制数据的过程。这个过程是由 master 节点完成的。")]),a._v(" "),v("h2",{attrs:{id:"系统架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#系统架构"}},[a._v("#")]),a._v(" 系统架构")]),a._v(" "),v("p",[a._v("一个运行中的 Elasticsearch 实例称为一个节点，而集群是由一个或者多个拥有相同 cluster.name 配置的节点组成，它们共同承担数据和负载的压力。当有节点加入集群中或者从集群中移除节点时，集群将会重新平均分布所有的数据。")]),a._v(" "),v("p",[a._v("当一个节点被选举成为主节点时， 它将负责管理集群范围内的所有变更，例如增加、删除索引，或者增加、删除节点等。而主节点并不需要涉及到文档级别的变更和搜索等操作，所以当集群只拥有一个主节点的情况下，即使流量的增加它也不会成为瓶颈。任何节点都可以成为主节点。我们的示例集群就只有一个节点，所以它同时也成为了主节点。")]),a._v(" "),v("p",[a._v("作为用户，我们可以将请求发送到集群中的任何节点，包括主节点。每个节点都知道任意文档所处的位置，并且能够将我们的请求直接转发到存储我们所需文档的节点。无论我们将请求发送到哪个节点，它都能负责从各个包含我们所需文档的节点收集回数据，并将最终结果返回給客户端。Elasticsearch 对这一切的管理都是透明的。")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/ElasticSearch/20211116183654.png",alt:"image-20211116183651724"}})]),a._v(" "),v("p",[a._v("如图，有三个分片：P0、P1、P2，每个分片都有自己的副本，P0 副本是 R0、P1 副本是 R1、P2 副本是 R2，并且每个副本都不能和自己的分片在用一个节点里，防止因为节点出现意外，导致分片和其副本都无法使用。")])])}),[],!1,null,null,null);t.default=s.exports}}]);