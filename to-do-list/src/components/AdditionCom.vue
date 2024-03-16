<template>
    <div>

    </div>
    <button @click="clickPlus1">plus menu</button>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    clickPlus1 () {
      // 通過commit觸發store裡的mutations的add
      this.$store.commit('add')
    }
  }
}
</script>
