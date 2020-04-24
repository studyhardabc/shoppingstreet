<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',

  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      scroll: null
    }
  },

  mounted () {
    // 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType
    })

    // 监听滚动的位置,想要监听要传props，属性值是3
    this.scroll.on('scroll', position => {
      // console.log(position)
      // 监听滚动条发生改变就触发这个自定义事件
      this.$emit('scroll', position)
    })
  },

  methods: {
    // 滚动条回到顶部的方法
    scrollTo (x, y, time = 500) {
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
