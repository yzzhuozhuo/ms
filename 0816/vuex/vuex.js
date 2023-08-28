/** 
 * vuex mini demo
 */

let Vue

// install 方法是为了 store 挂载在 Vue 上，可通过 this.$store.state 拿到 state 对象
// install 方法是给 Vue.use() 使用的

function install(_Vue, storeName = '$store') {
  Vue = _Vue
  Vue.mixin({
    beforeCreate () {
      if (this.$options.store) {
        Vue.prototype[storeName] = this.$options.store
      }
    }
  })
}

class Store {
  constructor (options) {
    const {
      state = {}, getters = {}, mutations = {}, actions = {}, modules = {}
    } = options
    // 由于每个 modules 中会有自己的 state、getters、mutations、actions 属性，所以这里需要将 modules 中的 这些属性集成在 store 中
    // 遍历 modules，获取 state getters mutations actions
    for (let key in modules) {
      state = {
        ...state,
        ...modules[key].state
      }
      getters = {
        ...getters,
        ...modules[key].getters
      }
      mutations = Object.assign(mutations, modules[key].mutations)
      actions = Object.assign(actions, modules[key].actions)
    }
    // 当改变数据的时候，需要动态的渲染，所以需要把 data 中的数据做成响应式的
    this.state = new Vue({
      data: state
    })
    this.mutations = mutations // Mutation 必须是同步函数，因为一旦触发，state 的状态就会发生改变，如果是异步的，则无法跟踪状态的变化
    this.actions = actions
    this.allGetters = getters
    // 监听 getters
    this.observerGettersFunc(getters)
  }

  // 触发 mutations 需要实现 commit
  // mutations 的作用就是修改 state 中的值
  commit = (type, args) => {
    const fn = this.mutations[type]
    fn(this.state, args)
  }

  // 触发 actions 需要实现 dispatch
  // action 提交的是 mutation，而不是直接变更状态
  // action 可以包含任意异步操作
  dispatch = (type, args) => {
    const fn = this.actions[type]
    fn({
      state: this.state,
      commit: this.commit
    }, args)
  }

  // 数据劫持 getters
  observerGettersFunc = (getters) => {
    this.getters = {}
    Object.keys(getters).forEach((key) => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state)
        }
      })
    })
  }
}

export default {
  install,
  Store
}