// import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    menu: 'dd',
    money: 0,
    items: []
  },
  mutations: {
    add (state) {
      // 運用mutations的add增加狀態變數
      state.count++
      if (state.items[1] === '') {
        // state.items.splice(1)
        state.items[1] = 0
        state.items.shift()
      }
    },
    delet (state) {
      if (state.count !== 0) {
        state.count--
        // 菜單的第一項
        if (state.items[1] === '') {
          // state.items.splice(1)
          state.items[1] = 0
          state.items.shift()
        }
        if (state.count === state.items.length - 2) {
          state.items.pop()
        }
      }
    }
  },
  actions: {}
})
