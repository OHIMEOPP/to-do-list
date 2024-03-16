<template>
    <div>
    </div>
    <button @click="clickDelet1">delet menu</button>
</template>
<script>

export default {
  data () {
    return {}
  },
  methods: {
    clickDelet1 () {
      this.$store.commit('delet')
    }
  }
}
</script>
