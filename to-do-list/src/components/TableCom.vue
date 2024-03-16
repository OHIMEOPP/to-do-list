<template>
        <div class="AllTable">
      <table>
        <thead>
          <tr>
            <th scope="col">編號</th>
            <th scope="col">項目</th>
            <th scope="col">價錢</th>
            <th scope="col">備註</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="index in count" :key="index">
            <td>{{ index }}</td>
            <td><input type="text" placeholder="輸入菜單"></td>
            <td><input type="number" placeholder="輸入金額"  v-model="items[index]"></td>
            <td><input placeholder="備註"></td>
        </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>{{ sum }}</th>
            </tr>
        </tfoot>
      </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      food: '',
      money: ''
    }
  },
  methods: {
    pathMune () {
      // 通過commit觸發store裡的mutations的add
      // this.$store.commit('add')
      // if (this.food && this.money) {
      //   this.$store.commit('addmenu', this.food, this.money)
      // } else {
      //   console.log('輸入!')
      // }
    }
  },
  computed: {
    // 前置 import { mapstate } from 'vuex'
    // 從mapState獲取store.js的state變數
    ...mapState(['count']),
    ...mapState(['menu']),
    ...mapState(['items']),
    sum () {
      // 使用 reduce 方法计算数组中所有数字的总和
      return this.items.reduce((sum, currentItem) => {
        // 将当前元素转换为数字并累加到总和中
        return sum + currentItem
      }, 0)
    }
  }
}
</script>
