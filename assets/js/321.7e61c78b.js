(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{298:function(t,e,r){"use strict";r.r(e);var a=r(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("你可以通过以下方式, 为 SkyWalking 社区做出贡献.")]),t._v(" "),r("ul",[r("li",[t._v("通览 SkyWalking 的文档, 指出或修复文档不准确的地方, 也可以将 SkyWalking 文档翻译成其他语言.")]),t._v(" "),r("li",[t._v("下载我们的"),r("a",{attrs:{href:"http://skywalking.apache.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("发行版本"),r("OutboundLink")],1),t._v(", 尝试用其监控你的应用程序, 并向我们反馈您的想法, 疑问或使用案例.")]),t._v(" "),r("li",[t._v("阅读我们的源码, 如果对于细节有疑问, 向我们提问.")]),t._v(" "),r("li",[t._v("寻找代码中的 bug, 可在"),r("a",{attrs:{href:"https://github.com/apache/skywalking/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),r("OutboundLink")],1),t._v("提交问题, 并且您也可以尝试修复它.")]),t._v(" "),r("li",[t._v("从标记为"),r("a",{attrs:{href:"https://github.com/apache/skywalking/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22",target:"_blank",rel:"noopener noreferrer"}},[t._v("需要帮助的问题列表"),r("OutboundLink")],1),t._v("中入手开始你的贡献.")]),t._v(" "),r("li",[t._v("在 "),r("a",{attrs:{href:"https://github.com/apache/skywalking/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 的问题列表"),r("OutboundLink")],1),t._v("提交问题或开启一个讨论.")]),t._v(" "),r("li",[t._v("通过"),r("a",{attrs:{href:"https://lists.apache.org/list.html?dev@skywalking.apache.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("网页邮件列表"),r("OutboundLink")],1),t._v("查看所有邮件的讨论, 如果您是 SkyWalking 项目的 committer, 可在浏览器模式下登录并使用邮件列表. 否则, 按照下面指南进行订阅.")]),t._v(" "),t._m(1)]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("下所有渠道均向社区开放, 您可以选择自己喜欢的方式.")]),t._v(" "),r("ul",[r("li",[t._v("提交"),r("a",{attrs:{href:"https://github.com/apache/skywalking/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("问题"),r("OutboundLink")],1)]),t._v(" "),t._m(3),t._v(" "),r("li",[r("a",{attrs:{href:"https://gitter.im/openskywalking/Lobby",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitter"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("QQ 群: 392443393")])]),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("PMC将评估每个贡献者的贡献，包括但不限于:\n代码贡献，并遵循Apache指南来促进、投票和邀请新的提交者和PMC成员。\n参考 "),r("router-link",{attrs:{to:"./asf/committer.html"}},[t._v("成为正式的Apache SkyWalking提交者")]),t._v(" 更详细内容.")],1),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("对于代码开发者, 首先阅读"),r("router-link",{attrs:{to:"./How-to-build.html"}},[t._v("编译指南")]),t._v(". 它会告诉你如何在本地构建 SkyWalking.")],1),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("在搭建好本地开发环境并且写完代码之后, 为了能够让你的代码更快更容易被 SkyWalking 合并, 你需要在本地先运行单元测试 (UT), 确保你修改/新加的代码\n没有破坏现有的功能, 还需要新增一些单元测试代码来验证你修改/新增的代码正常工作, 同时也可以避免以后的贡献者修改你代码的时候遭到破坏.\n如果新增的代码涉及到第三方组件/库, 你还需要编写一些集成测试 (IT).")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),r("p",[t._v("从6.3.0版本开始, 我们已经引入了更多的自动测试来执行软件质量保证，E2E是最重要的部分之一.")]),t._v(" "),t._m(11),t._v(" "),r("p",[t._v("e2e测试涉及部分/全部的OAP服务器、存储、协调器、webapp和仪表化服务，所有这些都是由“docker-compose”编排的，\n此外，有一个测试控制器(JUnit测试)运行在容器的外部，它将流量发送到服务，\n然后通过SkyWalking Web应用程序的GraphQL API验证请求完成后的相应结果。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),r("p",[t._v("e2e测试是skywalk根目录下的一个独立项目，默认情况下，IDEA无法识别它\n在文件' test/e2e/pom。然后点击“Add as Maven Project”，现在一切都准备好了。但我们建议打开目录' skywalking/test/e2e '\n在独立的IDE窗口中获得更好的体验，因为可能会有阴影类问题。")]),t._v(" "),t._m(14),t._v(" "),r("p",[t._v("我们E2E测试的目标是测试整个skywalk项目，包括OAP服务器、存储、协调器、webapp，甚至前端UI(不是现在)，")]),t._v(" "),r("p",[t._v("因此，在单节点模式和集群模式中，第一步是确定我们要验证和编排什么组件。")]),t._v(" "),r("p",[t._v("为了使它更容易编排，我们使用了一个"),r("a",{attrs:{href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker-compose"),r("OutboundLink")],1),t._v("，它提供了一个方便的文件格式(' docker-compose.yml ')\n编排所需的容器，并为我们提供了定义组件依赖关系的可能性。")]),t._v(" "),r("p",[t._v("测试前需要考虑内容:")]),t._v(" "),t._m(15),t._v(" "),r("p",[t._v("至于最后一步，我们有一个友好的框架来帮助您更快地开始，它提供了注释' @DockerCompose(\"docker-compose.yml\") '来加载/解析并以适当的顺序启动所有容器，\n' @ContainerHost ' / ' @ContainerPort '获取容器的实际主机/端口，' @ContainerHostAndPort '获取两者，' @DockerContainer '获取运行的容器。")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),r("p",[t._v("在测试框架中，我们提供了一个' TrafficController '定期发送流量数据到工具服务，您可以简单地通过提供一个url和流量数据启用它，参考[../../测试/src/测试/java/org/apache/skywalking/e2e/base/TrafficController.java]。")]),t._v(" "),t._m(18),t._v(" "),r("p",[t._v("我们以非ci(本地)模式将所有容器中的所有日志暴露给标准输出，但是将它们全部保存/上传到GitHub服务器，您可以在“Artifacts/ download Artifacts/ logs”按钮中下载它们(仅在测试失败时)以便调试。")]),t._v(" "),r("p",[t._v("**注意:**请先在本地验证新添加的E2E测试用例，但是，如果您发现它在本地通过但PR检查状态失败，请确保所有更新/新添加的文件(特别是子模块中的文件)\n或将git头重置到远程并在本地再次验证。")]),t._v(" "),t._m(19),t._v(" "),r("p",[t._v("SkyWalking 提供了许多方法来对现有功能进行扩展. 如果你对这些方式感兴趣, 阅读以下指南.")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"./Java-Plugin-Development-Guide.html"}},[t._v("Java agent 插件开发指南")]),t._v(". 本文将帮助您开发 SkyWalking Java agent 插件以支持更多框架或组件. 无论是进行开源插件或私有插件的开发都需要阅读这个指南.")],1),t._v(" "),r("li",[t._v("如果您想开发其他语言的探针或组件, 请阅读"),r("router-link",{attrs:{to:"./Component-library-settings.html"}},[t._v("组件库定义和扩展")]),t._v("文档.")],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"./storage-extention.html"}},[t._v("数据存储扩展开发指南")]),t._v(". 除了官方已经支持的存储实现外, 可帮助潜在的贡献者实现新的数据存储的实现.")],1),t._v(" "),r("li",[t._v("定制分析的oal脚本。OAL脚本位于' config/ OAL /*. OAL '。您可以更改它并重新启动OAP服务器，阅读")]),t._v(" "),r("li",[r("router-link",{attrs:{to:"./write-oal.html"}},[t._v("通过 oal 脚本自定义分析")]),t._v(". 指导您使用 oal 脚本来提供自己所需的指标.")],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"./source-extension.html"}},[t._v("为新指标提供源和域扩展")]),t._v(". 如果你想分析一个目前 SkyWalking 尚未提供的新的指标, 你就无法使用"),r("router-link",{attrs:{to:"./../setup/backend/backend-receivers.html"}},[t._v("既有的接收器")]),t._v(",\n而要添加一个新的接收器. 此时你很可能需要添加新的源和域. 本文将引导你如何做到.")],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"./inventory-extension.html"}},[t._v("后端存储实体扩展")]),t._v(". 如果你想扩展 SkyWalking 存储实体, 并且想将上游修改贡献回 Apache 开源软件仓库(本仓库), 请阅读此文中的原则.")],1)]),t._v(" "),t._m(20),t._v(" "),r("p",[t._v("SkyWalking UI 由静态页面和 Web 容器构成.")]),t._v(" "),r("ul",[r("li",[t._v("自 6.1 版本开始, "),r("a",{attrs:{href:"https://github.com/apache/skywalking-rocketbot-ui",target:"_blank",rel:"noopener noreferrer"}},[t._v("RocketBot UI"),r("OutboundLink")],1),t._v(" 已经成为 SkyWalking 的原生 UI. 其采用 VueJS + TypeScript 构建. 你可以在 RocketBot 代码仓库了解更多.")]),t._v(" "),t._m(21),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/apache/skywalking-ui",target:"_blank",rel:"noopener noreferrer"}},[t._v("旧的 UI 代码仓库"),r("OutboundLink")],1),t._v(" 依旧保留, 但从 6.0.0-GA 以后不会再被包含在 SkyWalking 发行版中.")])]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),r("p",[t._v("作为Apache软件基金会(ASF)的顶级项目之一,\nSkyWalking应该遵循 "),r("a",{attrs:{href:"https://apache.org/legal/resolved.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ASF第三方许可策略"),r("OutboundLink")],1),t._v(",\n因此，如果要向项目中添加新的依赖项，则需要检查新添加的依赖项\n不会破坏策略，并将他们的许可和通知添加到项目中。")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),r("p",[t._v("性能概要文件是APM系统中的一个增强特性. 我们使用线程转储来估计方法执行时间, 而不是添加许多本地跨越。这种方法的资源消耗比采用分布式跟踪的慢速定位方法要少得多。\n该特性适用于生产环境。以下文档对于开发人员理解此特性的关键部分非常重要")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/apache/skywalking-data-collect-protocol/tree/master/profile",target:"_blank",rel:"noopener noreferrer"}},[t._v("Profile data report procotol"),r("OutboundLink")],1),t._v(" 像其他跟踪、JVM数据一样通过gRPC提供.")]),t._v(" "),r("li",[r("router-link",{attrs:{to:"./backend-profile.html"}},[t._v("Thread dump merging mechanism")]),t._v(" 引入了合并机制，帮助最终用户理解配置报告.")],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"./backend-profile-export.html"}},[t._v("Exporter tool of profile raw data")]),t._v(" 介绍了当界面有异常问题时，如何打包原始的profile数据发送给社区排查。")],1)]),t._v(" "),t._m(26),t._v(" "),r("p",[r("router-link",{attrs:{to:"./How-to-release.html"}},[t._v("Apache发布指南")]),t._v(" 向提交者团队介绍了做正式的Apache版本发布，以避免\n违反任何Apache规则。Apache许可证允许每个人重新发布，如果你保留我们的许可证和通知\n在你的再分配。")],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"贡献指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#贡献指南"}},[this._v("#")]),this._v(" 贡献指南")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("问题的报告和讨论也可在 "),e("code",[this._v("dev@skywalking.apache.org")]),this._v(" 邮件列表中进行.\n发送任意内容邮件到 "),e("code",[this._v("dev-subscribe@skywalking.apache.org")]),this._v(", 按照回复订阅邮件列表.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"与我们联系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#与我们联系"}},[this._v("#")]),this._v(" 与我们联系")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("邮件列表: "),e("strong",[this._v("dev@skywalking.apache.org")]),this._v(". 发送邮件到 "),e("code",[this._v("dev-subscribe@skywalking.apache.org")]),this._v(", 按照回复订阅邮件列表.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"成为正式的apache-skywalking提交者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#成为正式的apache-skywalking提交者"}},[this._v("#")]),this._v(" 成为正式的Apache SkyWalking提交者")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"对于代码开发者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对于代码开发者"}},[this._v("#")]),this._v(" 对于代码开发者")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"集成测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集成测试"}},[this._v("#")]),this._v(" 集成测试")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("SkyWalking 利用插件 "),r("code",[t._v("maven-surefire-plugin")]),t._v(" 来运行单元测试, 而使用插件 "),r("code",[t._v("maven-failsafe-plugin")]),t._v(" 来运行集成测试,\n插件 "),r("code",[t._v("maven-surefire-plugin")]),t._v(" 运行时将会把集成测试 (类名以 "),r("code",[t._v("IT")]),t._v(" 开头的类) 排除, 留给插件 "),r("code",[t._v("maven-failsafe-plugin")]),t._v(" 去运行,\n"),r("code",[t._v("maven-failsafe-plugin")]),t._v(" 被绑定到 maven 的 "),r("code",[t._v("CI-with-IT")]),t._v(" profile, "),r("code",[t._v("verify")]),t._v(" 执行目标上. 因此, 如果你要运行单元测试,\n使用 "),r("code",[t._v("./mvnw clean test")]),t._v(", 这只会运行单元测试, 不会运行集成测试.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("如果你想运行集成测试, 请确保激活 "),r("code",[t._v("CI-with-IT")]),t._v(" profile 以及你要运行集成测试的模块的 profile.\n举个例子, 如果你想运行 "),r("code",[t._v("oap-server")]),t._v(" 模块的集成测试, 使用 "),r("code",[t._v("./mvnw -Pbackend,CI-with-IT clean verify")]),t._v(",\n如果你想运行所有集成测试, 只需要运行 "),r("code",[t._v("./mvnw -Pall,CI-with-IT clean verify")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("请注意, 如果你要编写集成测试, 命名时请使用 "),e("code",[this._v("IT*")]),this._v(" 开头, 使得只在 "),e("code",[this._v("CI-with-IT")]),this._v(" profile 下才会运行.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"端到端测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#端到端测试"}},[this._v("#")]),this._v(" 端到端测试")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("端到端测试是一种用于测试应用程序流程从头到尾是否按设计执行的方法.\n执行端到端测试的目的是识别系统依赖关系，并确保在各种系统组件和系统之间传递正确的信息.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"编写端到端测试用例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写端到端测试用例"}},[this._v("#")]),this._v(" 编写端到端测试用例")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("IntelliJ IDEA 设置环境")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("编排组件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("决定需要什么(和多少)容器，例如对于集群测试，你需要> 2个OAP节点，协调器像zookeeper，存储ElasticSearch，和工具化的服务;")]),this._v(" "),e("li",[this._v("在“docker-compose”中定义容器。，并仔细指定依赖关系、启动订单，最重要的是将它们链接在一起，例如在代理端设置正确的OAP地址，在OAP中设置正确的协调器地址等。")]),this._v(" "),e("li",[this._v("编写(或希望重用)测试代码，以验证结果是正确的。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("编写collector测试")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("简单地说，测试collector基本上是可以绑定到Maven“集成-测试/验证”阶段的测试。\n它们向仪表化的服务发送"),e("strong",[this._v("设计的")]),this._v("请求，并期望从SkyWalking webapp GraphQL API获得相应的跟踪/度量/元数据。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("故障排除")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"项目扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目扩展"}},[this._v("#")]),this._v(" 项目扩展")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"ui-开发者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ui-开发者"}},[this._v("#")]),this._v(" UI 开发者")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("Web容器")]),this._v(" 源代码在 "),e("code",[this._v("apm-webapp")]),this._v(" 模块中. 这是一个简单的 zuul 代理, 用于托管静态资源并使用 GraphQL 向后端发送查询请求.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"oap后端依赖管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oap后端依赖管理"}},[this._v("#")]),this._v(" OAP后端依赖管理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("本节仅适用于后端模块的依赖关系")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们有一个"),e("a",{attrs:{href:"../../../tools/dependencies/check-LICENSE.sh"}},[this._v("简单的脚本")]),this._v("来帮助你在没有这样做错过任何新添加的依赖:\n-建立一个分发包和解压缩/解压它到文件夹“dist”。\n-在根目录下运行脚本，它将打印出所有新添加的依赖项。\n-检查这些依赖关系的许可证和通知，如果它们可以包含在ASF项目中，将它们添加到“apm-dist/release-docs/{LICENSE,NOTICE}”文件中。\n-将这些依赖项的名称添加到tools/dependencies/known-oap-backend-dependencies中。txt '文件("),e("strong",[this._v("字母顺序")]),this._v(")，下运行' check-LICENSE '。sh”应通过。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"概要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[this._v("#")]),this._v(" 概要")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[this._v("#")]),this._v(" 发布")])}],!1,null,null,null);e.default=n.exports}}]);