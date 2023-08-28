import Vue from 'vue'
import store from './store'
import App from './App.vue'

// https://juejin.cn/post/6844903946343940104
// Vue.use(plugin) 是用来安装插件的
// 如果插件是一个对象，必须提供 install 方法。
// 如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入
// 法的主要作用是在全局范围内注册插件，以便在所有组件中都能够使用插件提供的功能。因此必须要在 new Vue() 之前调用
Vue.use(store)



new Vue({
  name: 'main',
  store, // 这里相当于是 Vue 的 options，因此在 install 方法中，可以拿到 this.$options.store，也就是在这里将 store的实例挂载在 vue 上的
  render: h => h(App)
}).$mount('#app')
