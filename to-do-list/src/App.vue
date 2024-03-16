<template>
  <div>
    <div>
      <h2>您現在有{{$store.state.count}}筆菜單</h2>
      <!-- <h2>剛剛增加的是:{{ $store.state.money }}</h2> -->
    </div>
    <my-addition></my-addition>
    <my-subtraction></my-subtraction>
    <my-table></my-table>
  </div>
</template>

<script>
// import { mapState, mapMutations, mapActions } from 'vuex'
import Addition from './components/AdditionCom.vue'
import Subtraction from './components/SubtractionCom.vue'
import Table from './components/TableCom.vue'
// 用mapState取值
import { mapState } from 'vuex'

export default {
  methods: {
  },
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction,
    'my-table': Table
  },
  computed: {
    // 前置 import { mapstate } from 'vuex'
    // 從mapState獲取store.js的state變數
    ...mapState(['count']),
    ...mapState(['menu']),
    ...mapState(['money'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-block-style: dotted;
  /* display:contents; */
}
.completed {
  text-decoration: line-through;
}
.AllTable{
  /* position:fixed; */
}
table{
  /* 合併表格方塊 */
  /* border-collapse: collapse; */
  /* border: 2px solid rgb(140 140 140); */
  font-family: sans-serif;
  /* font-size: 0.8rem; */
  /* letter-spacing: 1px; */
  margin: 0 auto;
}
/* input-container{
  overflow:  visible;
} */
th,td{
  border-radius: 5px;
  border: 2px solid rgb(212, 48, 86);
  padding: 5px 10px;
}
tfoot{
  /* position: absolute; */
  color:blueviolet;
  font-size: x-large;
  max-width: 40px;
}
tbody input{
  border-radius: 5px;
  margin: 2px 5px;
  border:none ;
  color:blue;
  font-family: "標楷體","Times New Roman";
  font-size: 20px;
}
button{
  /* display: flex;
  position: relative; */
  margin-top: 10px;
  border-radius: 5px;
  size: 20px;
}
</style>
