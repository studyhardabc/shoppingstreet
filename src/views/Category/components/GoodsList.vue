<template>
<div class="box">
  <div class="goods">
    <GoodsItem
      v-for="(item, index) in goodsItemList"
      :key="index"
      :goodItemList="item"
      @loadImg="loadImg"
      @Detail="Detail"
    ></GoodsItem>
  </div>
  </div>
</template>

<script>
import GoodsItem from './GoodsListItem'

export default {
  name: 'Goods',

  props: {
    goodsItemList: {
      type: Array,
      default () {
        return []
      }
    }
  },

  components: {
    GoodsItem
  },

  methods: {
    loadImg () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setTimeout(() => {
        this.$emit('loadImg')
      }, 500)
    },

    Detail (iid) {
      this.$emit('Detail', iid)
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 275px;
}

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

}
</style>
