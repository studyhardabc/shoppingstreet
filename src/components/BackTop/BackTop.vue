<template>
  <div class="back-top" @click="BackTop">
    <img src="../../assets/img/common/top.png" alt />
  </div>
</template>

<script>
export default {
  name: 'Backtop',

  methods: {
    BackTop () {
      this.$emit('BackTop')
    }
  }
}
</script>

<style lang="scss" scoped>
.back-top img {
  width: 43px;
  height: 43px;
}
</style>
