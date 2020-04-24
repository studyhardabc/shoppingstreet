<template>
  <!-- 轮播图 -->
  <div class="swiper-container" ref="my-swiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Swiper',

  props: {
    autoplay: {
      type: Number,
      default: 0
    },

    loop: {
      type: Boolean,
      default: false
    }
  },

  mounted () {
    const _this = this
    /* eslint-disable */
    new Swiper(this.$refs['my-swiper'], { // this.$el 也可以取到当前根元素的实例
      pagination: {
        el: ".swiper-pagination"
      },

      loop: this.loop,

      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      } : false,

      on: {
        // 这里不要使用箭头函数，负责里面的this指向的是当前的组件实例，而不是想要的swiper实例
        slideChangeTransitionEnd: function(){
          _this.$emit('change', this.realIndex) // 切换结束时，告诉我现在是第几个slide
        },
      },
    })
    /* eslint-enable */
  }
}
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 180px;

  .swiper-pagination-bullet {
    opacity: 1;
    background-color: #fff;
  }
  .swiper-pagination-bullet-active {
    background: #ff5777;
  }
}
</style>
