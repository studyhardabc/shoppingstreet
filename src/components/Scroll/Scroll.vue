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
    },

    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      scroll: null
    }
  },

  mounted () {
    // 创建BScroll对象
    /* eslint-disable */
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 设置这个点击事件才生效
      click: true,
      // 设置这个就可以监听滚动
      probeType: this.probeType,
      // 上拉加载更多
      pullUpLoad: this.pullUpLoad
    })

    // 监听滚动的位置,想要监听要传props，属性值是3
    this.scroll.on('scroll', position => {
      // console.log(position)
      // 监听滚动条发生改变就触发这个自定义事件
      this.$emit('scroll', position)
    }),

    // 监听上拉加载事件
    this.scroll.on('pullingUp', () => {
      // 上拉加载更多
      // console.log(123)
      this.$emit('pullingUp')
    })
  },
  /* eslint-enable */

  methods: {
    // 滚动条回到顶部的方法
    scrollTo (x, y, time = 500) {
      this.scroll.scrollTo(x, y, time)
    },

    // 上拉加载完成之后调用这个方法可以再次上拉加载
    finishPullUp () {
      this.scroll.finishPullUp()
    },

    // 刷新可滚动高度
    refresh () {
      this.scroll.refresh()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
