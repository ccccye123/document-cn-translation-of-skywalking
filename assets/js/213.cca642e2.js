(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{519:function(t,_,n){"use strict";n.r(_);var v=n(0),s=Object(v.a)({},(function(){var t=this,_=t.$createElement,n=t._self._c||_;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("在 SkyWalking 中, 探针表示集成到目标系统中的代理或 SDK 库, 它负责收集遥测数据, 包括链路追踪和性能指标.\n根据目标系统的技术栈, 探针可能有差异巨大的方式来达到以上功能. 但从根本上来说都是一样的, 即收集并格式化数据,\n并发送到后端.")]),t._v(" "),n("p",[t._v("从高层次上来讲, SkyWalking 探针可分为以下三组.")]),t._v(" "),n("ul",[t._m(1),t._v(" "),t._m(2),t._v(" "),n("li",[n("p",[n("strong",[t._v("第三方打点类库")]),t._v(". SkyWalking 也能够接收其他流行的打点库产生的数据格式, SkyWalking 通过分析数据,\n将数据格式化成自身的数据格式. 该功能最初只能接收 Zipkin 的跨度数据,\n参考"),n("router-link",{attrs:{to:"./../setup/backend/backend-receivers.html"}},[t._v("其他追踪系统的接收器")]),t._v("了解更多.")],1)])]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("有如下几种推荐的方式来使用探针:")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),n("ul",[n("li",[t._v("在"),n("router-link",{attrs:{to:"./service-agent.html"}},[t._v("服务自动打点代理")]),t._v(", "),n("router-link",{attrs:{to:"./service-mesh-probe.html"}},[t._v("服务网格探针")]),t._v("\n以及"),n("router-link",{attrs:{to:"./trace-receiver.html"}},[t._v("Zipkin 接收器")]),t._v("中学习 SkyWalking 支持的探针.")],1),t._v(" "),n("li",[t._v("理解了探针之后, 阅读"),n("router-link",{attrs:{to:"./backend-overview.html"}},[t._v("后端概览")]),t._v("理解如何分析及持久化数据.")],1)])])}),[function(){var t=this.$createElement,_=this._self._c||t;return _("h1",{attrs:{id:"探针简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#探针简介"}},[this._v("#")]),this._v(" 探针简介")])},function(){var t=this.$createElement,_=this._self._c||t;return _("li",[_("p",[_("strong",[this._v("基于语言的原生代理")]),this._v(". 这种类型的代理运行在目标服务的用户空间中, 就像用户代码的一部分一样,\n如 SkyWalking Java 代理, 使用 "),_("code",[this._v("-javaagent")]),this._v(" 命令行参数在运行期间对代码进行操作, "),_("strong",[this._v("操作")]),this._v("一词表示修改并\n注入用户代码. 另一种代理是使用目标库提供的钩子函数或拦截机制. 如你所见, 这些探针是基于特定的语言和库的.")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("li",[_("p",[_("strong",[this._v("服务网格探针")]),this._v(". 服务网格探针从服务网格的 Sidecar 和控制面板收集数据. 在以前, 代理只用作整个集群的入口,\n但是有了服务网格和 Sidecar 之后, 我们可以基于此进行观测了.")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("因为"),_("strong",[this._v("基于语言的原生代理")]),this._v("和"),_("strong",[this._v("服务网格探针")]),this._v("的功能都是收集指标数据, 你不必同时使用两者, 否则你的系统就要承受\n双倍负载, 且分析数据结构会翻倍.")])},function(){var t=this,_=t.$createElement,n=t._self._c||_;return n("ol",[n("li",[t._v("只使用"),n("strong",[t._v("基于语言的原生代理")]),t._v(".")]),t._v(" "),n("li",[t._v("只使用"),n("strong",[t._v("第三方打点库")]),t._v(", 如 Zipkin 打点系统.")]),t._v(" "),n("li",[t._v("只使用"),n("strong",[t._v("服务网格探针")]),t._v(".")]),t._v(" "),n("li",[t._v("使用"),n("strong",[t._v("服务网格探针")]),t._v(", 配合"),n("strong",[t._v("语言原生代理")]),t._v("或"),n("strong",[t._v("第三方打点库")]),t._v(", 来"),n("strong",[t._v("追踪状态")]),t._v(". (高级用法)\n让我们举例说明什么是"),n("strong",[t._v("追踪状态")])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("默认情况下, "),_("strong",[this._v("基于语言的原生代理")]),this._v("和"),_("strong",[this._v("第三方打点库")]),this._v("都会发送分布式追踪数据到后台, 后者分析/聚合这些追踪数据.\n"),_("strong",[this._v("追踪状态")]),this._v('意味着, 后端把这些追踪数据看作是日志, 仅仅将他们保存下来, 并且在追踪和指标之间建立联系,\n比如"这个追踪数据属于哪个入口哪个服务?".')])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"下一步"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[this._v("#")]),this._v(" 下一步")])}],!1,null,null,null);_.default=s.exports}}]);