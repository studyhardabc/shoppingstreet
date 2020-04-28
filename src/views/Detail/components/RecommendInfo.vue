<template>
  <div class="recommend-info" data-v-ee08a44a>
    <div class="info-header">热门推荐</div>
    <div class="box">
      <GoodsListItem
        v-for="(item, index) in RecommendList"
        :key="index"
        :goodItemList="item"
        @loadImg="loadImg"
      ></GoodsListItem>
    </div>
  </div>
</template>

<script>
import GoodsListItem from '@/views/Home/components/GoodsListItem'

export default {
  name: 'RecommendInfo',

  components: {
    GoodsListItem
  },

  props: {
    RecommendList: {
      type: Array,
      default () {
        return []
      }
    }
  },

  methods: {
    loadImg () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setTimeout(() => {
        this.$emit('loadImg')
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.info-header {
  line-height: 40px;
  padding-left: 8px;
  font-size: 15px;
  color: #333;
}
</style>
