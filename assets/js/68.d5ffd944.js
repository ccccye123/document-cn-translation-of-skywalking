(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{302:function(_,t,e){"use strict";e.r(t);var i=e(0),v=Object(i.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("div",{staticClass:"content"},[_._m(0),_._v(" "),e("p",[_._v("有以下两种类型的协议.")]),_._v(" "),_._m(1),_._v(" "),_._m(2),_._v(" "),e("p",[_._v("它们也是与探针的组相关的, 为了理解这一点, 请参考"),e("router-link",{attrs:{to:"./../concepts-and-designs/"}},[_._v("概念和设计")]),_._v("一文.\n这些探针组是"),e("strong",[_._v("基于原生语言代理协议")]),_._v(", "),e("strong",[_._v("服务网格协议")]),_._v("以及其他第三方打点协议.")],1),_._v(" "),_._m(3),_._v(" "),e("p",[_._v("包含服务, 服务实例, 网络地址以及端点元数据注册.\n注册的目的是:")]),_._v(" "),_._m(4),_._v(" "),_._m(5),_._v(" "),e("p",[_._v("有以下两种协议可以让基于语言的代理在分布式环境下工作.")]),_._v(" "),_._m(6),_._v(" "),e("p",[_._v("为了兼容性, 请求头有两种格式. 默认是使用 v2.")]),_._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"./Skywalking-Cross-Process-Propagation-Headers-Protocol-v2.html"}},[_._v("跨进程传播的请求头 v2")]),_._v(" 是自 6.0.0-beta 版本开始, 针对在线上下文传播的一种新的协议.\n它将在以后替代老的 "),e("strong",[_._v("SW3")]),_._v(" 协议, 目前来说它们二者都是支持的.")],1),_._v(" "),e("li",[e("router-link",{attrs:{to:"./Skywalking-Cross-Process-Propagation-Headers-Protocol-v1.html"}},[_._v("跨进程传播的请求头 v1")]),_._v(" 是针对在线传播的协议.\n遵循此协议的不同进程的追踪数据段可以被连接起来.")],1)]),_._v(" "),e("p",[_._v("自 SkyWalking v6.0.0-beta 开始, SkyWalking 代理和后端都使用第二版的追踪数据协议(Trace Data Protocol v2), 后端仍然支持 v1 版本的协议.")]),_._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"./Trace-Data-Protocol-v2.html"}},[_._v("SkyWalking 追踪数据协议 v2")]),_._v(" 定义了代理和后端之间通讯的方式和格式.")],1),_._v(" "),e("li",[e("router-link",{attrs:{to:"./Trace-Data-Protocol.html"}},[_._v("SkyWalking 追踪数据协议 v1")]),_._v(". 该协议用于旧的版本中. 目前仍然支持.")],1)]),_._v(" "),_._m(7),_._v(" "),e("p",[_._v("Sidecar 中的探针或代理可以使用该协议发送数据到后端. 该服务通过 gRPC 实现, 需要一下关键信息:")]),_._v(" "),_._m(8),_._v(" "),_._m(9),_._v(" "),e("p",[_._v("SkyWalking 并不定义第三方打点协议. 它们只是协议和数据格式, SkyWalking 兼容这些协议和数据格式, 且可以接收它们. SkyWalking 一开始就支持 Zipkin v1, v2 数据格式.\n后端遵循模块化原则, 所以要扩展新的接收器以支持新的协议和格式是非常容易的.")]),_._v(" "),_._m(10),_._v(" "),e("p",[_._v("查询协议遵循 GraphQL 语法, 提供了数据查询能力, 这都取决于你要分析的指标.")]),_._v(" "),e("p",[_._v("提供了以下 5 个纬度的数据:")]),_._v(" "),e("ol",[e("li",[_._v("元数据. 元数据包括了底层监控的所有服务及其实例, 端点等的简要信息. 可以使用多种方式来查询这些元数据.")]),_._v(" "),e("li",[_._v("拓扑图. 展示服务或端点的拓扑图和依赖图. 包括了直接关系或全局图.")]),_._v(" "),e("li",[_._v("指标. 指标查询针对所有在 "),e("router-link",{attrs:{to:"./../concepts-and-designs/oal.html"}},[_._v("OAL 脚本")]),_._v(" 中定义的对象. 你可以在脚本中基于聚合函数获得指标数据的线性矩阵或热力学矩阵格式.")],1),_._v(" "),_._m(11),_._v(" "),e("li",[_._v("追踪. 查询分布式追踪")]),_._v(" "),e("li",[_._v("报警. 通过报警查询, 你可以得到报警趋势和细节.")])]),_._v(" "),_._m(12),_._v(" "),_._m(13),_._v(" "),_._m(14),_._v(" "),_._m(15),_._v(" "),_._m(16),_._v(" "),_._m(17),_._v(" "),_._m(18),_._v(" "),_._m(19),_._v(" "),_._m(20),_._v(" "),_._m(21),_._v(" "),_._m(22),_._v(" "),_._m(23),_._v(" "),_._m(24),_._v(" "),_._m(25),_._v(" "),_._m(26),_._v(" "),_._m(27)])}),[function(){var _=this.$createElement,t=this._self._c||_;return t("h1",{attrs:{id:"协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协议"}},[this._v("#")]),this._v(" 协议")])},function(){var _=this.$createElement,t=this._self._c||_;return t("ul",[t("li",[t("p",[t("a",{attrs:{href:"#probe-protocols"}},[t("strong",[this._v("探针协议")])]),this._v(". 包括了对打点代理如何发送所收集的指标数据和追踪的描述和定义, 以及各自实体的格式.")])]),this._v(" "),t("li",[t("p",[t("a",{attrs:{href:"#query-protocol"}},[t("strong",[this._v("查询协议")])]),this._v(". 服务后端给 SkyWalking 自有的 UI 和任何第三方 UI 提供了查询的能力. 这些查询都是基于 GraphQL 的.")])])])},function(){var _=this.$createElement,t=this._self._c||_;return t("h2",{attrs:{id:"探针协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#探针协议"}},[this._v("#")]),this._v(" 探针协议")])},function(){var _=this.$createElement,t=this._self._c||_;return t("h2",{attrs:{id:"注册协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注册协议"}},[this._v("#")]),this._v(" 注册协议")])},function(){var _=this.$createElement,t=this._self._c||_;return t("ol",[t("li",[this._v("对于服务, 网络地址和端点, 注册之后将会返回注册对象的一个唯一 ID, 通常是一个整数. 探针可以使用这个 ID 来替代字符串文本. 达到数据压缩的功能. 进一步讲, 有些协议只接收 ID.")]),this._v(" "),t("li",[this._v("对于服务实例, 注册之后将会为每个新的实例返回一个新的唯一 ID. 每个服务实例必须包含服务 ID.")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("h3",{attrs:{id:"基于语言的原生代理协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于语言的原生代理协议"}},[this._v("#")]),this._v(" 基于语言的原生代理协议")])},function(){var _=this.$createElement,t=this._self._c||_;return t("ol",[t("li",[t("strong",[this._v("跨进程传播的头部协议")]),this._v("是一种有线数据格式, 代理和 SDK 通常使用 RPC 请求以及 HTTP/MQ/HTTP2 请求头来运载数据.\n远程代理将在请求处理器中接收这些数据, 并将上下文绑定到该请求中.")]),this._v(" "),t("li",[t("strong",[this._v("追踪数据协议")]),this._v("是一种离线数据格式, 代理和 SDK 使用这种数据格式来发送追踪数据和指标数据到 SkyWalking 或其他兼容的后端。")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("h3",{attrs:{id:"服务网格探针协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务网格探针协议"}},[this._v("#")]),this._v(" 服务网格探针协议")])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ol",[e("li",[_._v("在服务两侧都需要服务名或 ID")]),_._v(" "),e("li",[_._v("在服务两侧都需要服务实例名称或 ID")]),_._v(" "),e("li",[_._v("端点. HTTP 中的 URI, gRPC 中的方法完整签名.")]),_._v(" "),e("li",[_._v("时延. 以毫秒为单位")]),_._v(" "),e("li",[_._v("HTTP 中的响应吗")]),_._v(" "),e("li",[_._v("状态. 成功或失败")]),_._v(" "),e("li",[_._v("协议. HTTP, gRPC 等")]),_._v(" "),e("li",[_._v("监测点. 在服务网格 sidecar 中, "),e("code",[_._v("client")]),_._v(" 或 "),e("code",[_._v("server")]),_._v("。 在普通的 L7 代理中, 值是 "),e("code",[_._v("proxy")]),_._v(".")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("h3",{attrs:{id:"第三方打点协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三方打点协议"}},[this._v("#")]),this._v(" 第三方打点协议")])},function(){var _=this.$createElement,t=this._self._c||_;return t("h2",{attrs:{id:"查询协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询协议"}},[this._v("#")]),this._v(" 查询协议")])},function(){var _=this.$createElement,t=this._self._c||_;return t("li",[this._v("聚合. 聚合查询意味着在查询阶段需要对指标数据进行再次聚合, 这将使得查询接口需要一些不一样的参数. 例如 "),t("code",[this._v("TopN")]),this._v(" 个服务就是一个非常典型的聚合查询,\n指标流聚合仅仅计算每个服务的度量值, 但是期望的列表需要将指标数据进行排序.")])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[this._v("实际的查询 GraphQL 脚本可以在 "),t("code",[this._v("query-protocol")]),this._v(" "),t("a",{attrs:{href:"../../../oap-server/server-query-plugin/query-graphql-plugin/src/main/resources"}},[this._v("文件夹")]),this._v("内找到.")])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[this._v("以下是目前已有的指标名称, 基于"),t("a",{attrs:{href:"../../../oap-server/generated-analysis/src/main/resources/official_analysis.oal"}},[this._v("official_analysis.oal")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[t("strong",[this._v("全局指标")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ul",[e("li",[_._v("all_p99, 所有服务响应时间的 p99 值")]),_._v(" "),e("li",[_._v("all_p95")]),_._v(" "),e("li",[_._v("all_p90")]),_._v(" "),e("li",[_._v("all_p75")]),_._v(" "),e("li",[_._v("all_p70")]),_._v(" "),e("li",[_._v("all_heatmap, 所有服务响应时间的热点图")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[t("strong",[this._v("服务指标")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ul",[e("li",[_._v("service_resp_time, 服务的平均响应时间")]),_._v(" "),e("li",[_._v("service_sla, 服务的成功率")]),_._v(" "),e("li",[_._v("service_cpm, 服务每分钟调用次数")]),_._v(" "),e("li",[_._v("service_p99, 服务响应时间的 p99 值")]),_._v(" "),e("li",[_._v("service_p95")]),_._v(" "),e("li",[_._v("service_p90")]),_._v(" "),e("li",[_._v("service_p75")]),_._v(" "),e("li",[_._v("service_p50")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[t("strong",[this._v("服务实例指标")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("ul",[t("li",[this._v("service_instance_sla, 服务实例的成功率")]),this._v(" "),t("li",[this._v("service_instance_resp_time, 服务实例的平均响应时间")]),this._v(" "),t("li",[this._v("service_instance_cpm, 服务实例每分钟调用次数")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[t("strong",[this._v("端点指标")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ul",[e("li",[_._v("endpoint_cpm, 端点每分钟调用次数")]),_._v(" "),e("li",[_._v("endpoint_avg, 端点平均响应时间")]),_._v(" "),e("li",[_._v("endpoint_sla, 端点成功率")]),_._v(" "),e("li",[_._v("endpoint_p99, 端点响应时间的 p99 值")]),_._v(" "),e("li",[_._v("endpoint_p95")]),_._v(" "),e("li",[_._v("endpoint_p90")]),_._v(" "),e("li",[_._v("endpoint_p75")]),_._v(" "),e("li",[_._v("endpoint_p50")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[t("strong",[this._v("JVM 指标")]),this._v(", JVM 相关的指标, 只有当 javaagent 启用时才有效")])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ul",[e("li",[_._v("instance_jvm_cpu")]),_._v(" "),e("li",[_._v("instance_jvm_memory_heap")]),_._v(" "),e("li",[_._v("instance_jvm_memory_noheap")]),_._v(" "),e("li",[_._v("instance_jvm_memory_heap_max")]),_._v(" "),e("li",[_._v("instance_jvm_memory_noheap_max")]),_._v(" "),e("li",[_._v("instance_jvm_young_gc_time")]),_._v(" "),e("li",[_._v("instance_jvm_old_gc_time")]),_._v(" "),e("li",[_._v("instance_jvm_young_gc_count")]),_._v(" "),e("li",[_._v("instance_jvm_old_gc_count")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[t("strong",[this._v("服务关系指标")]),this._v(", 代表服务之间调用的指标\n指标的 ID 只能在拓扑图查询中获取")])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ul",[e("li",[_._v("service_relation_client_cpm, 在客户端每分钟检测到的调用次数")]),_._v(" "),e("li",[_._v("service_relation_server_cpm, 在服务端每分钟检测到的调用次数")]),_._v(" "),e("li",[_._v("service_relation_client_call_sla, 在客户端检测到的成功率")]),_._v(" "),e("li",[_._v("service_relation_server_call_sla, 在服务端检测到的成功率")]),_._v(" "),e("li",[_._v("service_relation_client_resp_time, 在客户端检测到的平均响应时间")]),_._v(" "),e("li",[_._v("service_relation_server_resp_time, 在服务端检测到的平均响应时间")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[t("strong",[this._v("端点关系指标")]),this._v(", 代表相互依赖的端点之间的指标. 只有在追踪代理启用时有效.\n指标 ID 只能在拓扑查询中获得.")])},function(){var _=this.$createElement,t=this._self._c||_;return t("ul",[t("li",[this._v("endpoint_relation_cpm")]),this._v(" "),t("li",[this._v("endpoint_relation_resp_time")])])}],!1,null,null,null);t.default=v.exports}}]);