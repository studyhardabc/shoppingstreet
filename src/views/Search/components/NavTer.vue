<template>
  <div class="navter">
    <input type="text" :value="title" @input="InputValue($event.target.value)" @click="fn1($event.target.value)" />
    <span @click="navter">取消</span>
    <p>
      <img src="~@/assets/img/search/navterimg.jpg" alt />
    </p>
  </div>
</template>

<script>
export default {
  name: 'NavTer',

  props: {
    title: {
      type: String,
      default: ''
    }
  },

  methods: {
    navter () {
      this.$router.push('/')
    },

    InputValue (value) {
      this.$emit('InputValue', value)
    },

    fn1 (value) {
      this.$emit('clickfn1', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.navter {
  width: 100%;
  height: 44px;
  background: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  input {
    width: 275px;
    height: 30px;
    border-radius: 5px;
  }
  span {
    color: #fff;
  }
}
</style>
