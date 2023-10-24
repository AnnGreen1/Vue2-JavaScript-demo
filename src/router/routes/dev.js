const dev = [
  {
    path: "/dev/ObjectAttr",
    name: "dev-ObjectAttr",
    component: () => import("@/views/Dev/ObjectAttr.vue"),
  },
  /**
   * @description:用nextTick解决vue异步更新获取dom问题
   */
  {
    path: "/dev/nextTick",
    name: "dev-nextTick",
    component: () => import("@/views/Dev/nextTick.vue"),
  },
  /**
  * @description:等待一个请求，如何解决请求结果先后顺序不一致问题
  */
  {
    path: "/dev/awaitaxios",
    name: "dev-awaitaxios",
    component: () => import("@/views/Dev/AwaitAxios.vue"),
  },
  {
    path: "/dev/thisthat",
    name: "dev-thisthat",
    component: () => import("@/views/Dev/ThisThat.vue"),
  },
  {
    path: "/dev/lifecycle",
    name: "dev-lifecycle",
    component: () => import("@/views/Dev/LifeCycle.vue"),
  },
  {
    path: "/dev/cookiedemo",
    name: "dev-cookiedemo",
    component: () => import("@/views/Dev/CookieDemo.vue"),
  },
  {
    path: "/dev/ParentSonLifeCycle",
    name: "dev-ParentSonLifeCycle",
    component: () => import("@/views/Dev/ParentSonLifeCycle.vue"),
  },
  {
    path: "/dev/DataComputed",
    name: "dev-DataComputed",
    component: () => import("@/views/Dev/DataComputed.vue"),
  },
  {
    path: "/dev/ResponsiveObject",
    name: "dev-ResponsiveObject",
    component: () => import("@/views/Dev/ResponsiveObject.vue"),
  },
  /**
   * @description:如何利用伪元素添加icon
   */
  {
    path: "/dev/PreIcon",
    name: "dev-PreIcon",
    component: () => import("@/views/Dev/PreIcon.vue"),
  },
  /**
   * @description:过滤器使用
   */
  {
    path: "/dev/FiltersDemo",
    name: "dev-FiltersDemo",
    component: () => import("@/views/Dev/FiltersDemo.vue"),
  },
  /**
   * @description:重复路由报错的问题
   */
  {
    path: "/dev/RepeatRoute",
    name: "dev-RepeatRoute",
    component: () => import("@/views/Dev/RepeatRoute.vue"),
  },
  /**
   * @description:预览pdf文件
   */
  {
    path: "/dev/PreviewPDF",
    name: "dev-PreviewPDF",
    component: () => import("@/views/Dev/PreviewPDF.vue"),
  },
  /**
   * @description:预览docs文件
   */
  {
    path: "/dev/PreviewDocs",
    name: "dev-PreviewDocs",
    component: () => import("@/views/Dev/PreviewDocs.vue"),
  },
  /**
  * @description:插槽简单使用
  */
  {
    path: "/dev/SlotDemo",
    name: "dev-SlotDemo",
    component: () => import("@/views/Dev/SlotDemo.vue"),
  },
  /**
  * @description:vue2对数组的响应式；注意点，vue2对数组的响应式只是通过重写方法实现，如果直接赋值是达不到响应式的效果的，需要使用 set
  */
  {
    path: "/dev/thisset",
    name: "dev-thisset",
    component: () => import("@/views/Dev/ThisSet.vue"),
  },
  /**
   * @description:使用本地json文件进行mock
   */
  {
    path: "/dev/JsonMock",
    name: "dev-JsonMock",
    component: () => import("@/views/Dev/JsonMock.vue"),
  },
  /**
  * @description:前端下载本地文件
  */
  {
    path: "/dev/DownloadFile",
    name: "dev-DownloadFile",
    component: () => import("@/views/Dev/DownloadFile.vue"),
  },
  /**
   * @description:侦听props
   */
  {
    path: "/dev/WatchProps",
    name: "dev-WatchProps",
    component: () => import("@/views/Dev/WatchProps.vue"),
  },
  /**
  * @description:获取路由参数 this.$route.query
  */
  {
    path: "/dev/RouterQuery/LeaveRoute",
    name: "dev-RouterQuery-LeaveRoute",
    component: () => import("@/views/Dev/RouterQuery/LeaveRoute.vue"),
  },
  {
    path: "/dev/RouterQuery/EntryRoute",
    name: "dev-RouterQuery-EntryRoute",
    component: () => import("@/views/Dev/RouterQuery/EntryRoute.vue"),
  },
  /**
   * @description:为了让路由跳转之后再跳转回来还有之前的数据怎么办？直接把 this._data 保存到浏览器本地存储
   */
  {
    path: "/dev/KeepData/LeaveView",
    name: "dev-KeepData-LeaveView",
    component: () => import("@/views/Dev/KeepData/LeaveView.vue"),
  },
  {
    path: "/dev/KeepData/EntryView",
    name: "dev-KeepData-EntryView",
    component: () => import("@/views/Dev/KeepData/EntryView.vue"),
  },
  /**
   * @description:布尔类型的props
   */
  {
    path: "/dev/BooleanProps",
    name: "dev-BooleanProps",
    component: () => import("@/views/Dev/BooleanProps.vue"),
  },
  /**
   * @description:如何在一个div的边框上加一个图标
   */
  {
    path: "/dev/CornerIcon",
    name: "dev-CornerIcon",
    component: () => import("@/views/Dev/CornerIcon.vue"),
  },
  /**
   * @description:如何让普通div里可以编辑
   */
  {
    path: "/dev/EditableDiv",
    name: "dev-EditableDiv",
    component: () => import("@/views/Dev/EditableDiv.vue"),
  },
  /**
   * @description:如何通过直接对比dom来判断内容是否内修改？
   */
  {
    path: "/dev/CheckDom",
    name: "dev-CheckDom",
    component: () => import("@/views/Dev/CheckDom.vue"),
  },
  /**
   * @description:ref怎么用？
   */
  {
    path: "/dev/RefDemo",
    name: "dev-RefDemo",
    component: () => import("@/views/Dev/RefDemo.vue"),
  },
  /**
   * @description:mockjs怎么用？
   */
  {
    path: "/dev/MockjsDemo",
    name: "dev-MockjsDemo",
    component: () => import("@/views/Dev/MockjsDemo.vue"),
  },
  /**
   * @description:返回值与将要赋值的不是非常的一一对应怎么解决？一个个赋值？看起来太愚蠢了?
   */
  {
    path: "/dev/SolveRequestResponse",
    name: "dev-SolveRequestResponse",
    component: () => import("@/views/Dev/SolveRequestResponse.vue"),
  },
  /**
  * @description:vuex常用的几种方式及如何持久化vuex
  */
  {
    path: "/Dev/PersistedVuex",
    name: "Dev-PersistedVuex",
    component: () => import('@/views/Dev/PersistedVuex.vue')
  },
  /**
  * @description:如何改placeholder样式
  */
  {
    path: "/Dev/PlaceholderStyle",
    name: "Dev-PlaceholderStyle",
    component: () => import('@/views/Dev/PlaceholderStyle.vue')
  },
  /**
  * @description:路由参数解耦，通过props拿到路由参数
  */
  {
    path: "/Dev/PropsParams/:id",
    name: "Dev-PropsParams",
    props: true,
    component: () => import('@/views/Dev/PropsParams.vue')
  },
  /**
  * @description:功能组件使用
  */
  {
    path: "/Dev/FunctionalComponet",
    name: "Dev-FunctionalComponet",
    component: () => import('@/views/Dev/FunctionalComponetView.vue')
  },
  /**
  * @description:样式穿透
  */
  {
    path: "/Dev/StylePenetration",
    name: "Dev-StylePenetration",
    component: () => import('@/views/Dev/StylePenetration/IndexView.vue')
  },
  {
    path: "/Dev/StylePenetration/OneView",
    name: "Dev-StylePenetration-OneView",
    component: () => import('@/views/Dev/StylePenetration/OneView.vue')
  },
  {
    path: "/Dev/StylePenetration/OtherView",
    name: "Dev-StylePenetration-OtherView",
    component: () => import('@/views/Dev/StylePenetration/OtherView.vue')
  },
  {
    path: "/Dev/StylePenetration/Less",
    name: "Dev-StylePenetration-Less",
    component: () => import('@/views/Dev/StylePenetration/LessView.vue')
  },
  /**
 * @description:CSS Modules的使用
 */
  {
    path: "/Dev/CSSModules",
    name: "Dev-CSSModules",
    component: () => import('@/views/Dev/CSSModules.vue')
  },
  /**
 * @description:KeepAlive的使用
 */
  {
    path: "/Dev/KeepAlive",
    name: "Dev-KeepAlive",
    component: () => import('@/views/Dev/KeepAlive/KeepAlive.vue')
  },
  {
    path: "/Dev/KeepAlive/one",
    name: "Dev-KeepAlive-One",
    component: () => import('@/views/Dev/KeepAlive/OneView.vue')
  },
  {
    path: "/Dev/KeepAlive/other",
    name: "Dev-KeepAlive-Other",
    component: () => import('@/views/Dev/KeepAlive/OtherView.vue')
  },
  /**
   * @description:防止按钮重复点击
   */
  {
    path: "/Dev/PreventReclick",
    name: "Dev-PreventReclick",
    component: () => import('@/views/Dev/PreventReclick.vue')
  },
  /**
   * @description:把 base64 值直接赋值给图片的 src 就可以直接展示图片了吗？
   */
  {
    path: "/Dev/Base64Img",
    name: "Dev-Base64Img",
    component: () => import('@/views/Dev/Base64Img.vue')
  },
  /**
   * @description:动态组件的使用：如果想在同一个地方渲染不同的组件可以使用动态组件的方法
   */
  {
    path: "/Dev/component",
    name: "Dev-component",
    component: () => import('@/views/Dev/Component/Index.vue')
  },
  /**
   * @description:如何在新标签页打开一个路由？
   */
  {
    path: "/Dev/RouterResolve",
    name: "Dev-RouterResolve",
    component: () => import('@/views/Dev/RouterResolve.vue')
  },
  /**
   * @description:如何在新标签页打开一个路由？
   */
  {
    path: "/Dev/BindBackground",
    name: "Dev-BindBackground",
    component: () => import('@/views/Dev/BindBackground.vue')
  },
  /**
   * @description:Prop 的大小写 (camelCase vs kebab-case)
   */
  {
    path: "/Dev/PropsNamingRules",
    name: "Dev-PropsNamingRules",
    component: () => import('@/views/Dev/PropsNamingRules.vue')
  },
   /**
   * @description:Vue2.7 从 Vue3 移植的特性（不过肯定没有 Vue3 好用，详见 https://v2.cn.vuejs.org/v2/guide/migration-vue-2-7.html#与-Vue-3-的行为差异）
   * 1. 组合式 api
   * 2. setup 语法糖
   * 3. 单文件组件 CSS v-bind（没实现，回来要看一下如如何实现的）
   */
   {
    path: "/Dev/BackportedFeatures/SetUp",
    name: "Dev-BackportedFeatures-SetUp",
    component: () => import('@/views/Dev/BackportedFeatures/Setup.vue')
  },
  {
    path: "/Dev/BackportedFeatures/CompositionAPI",
    name: "Dev-BackportedFeatures-CompositionAPI",
    component: () => import('@/views/Dev/BackportedFeatures/CompositionAPI.vue')
  },
  {
    path: "/Dev/BackportedFeatures/CSSbind",
    name: "Dev-BackportedFeatures-CSSbind",
    component: () => import('@/views/Dev/BackportedFeatures/CSSbind.vue')
  },
];
export default dev;
