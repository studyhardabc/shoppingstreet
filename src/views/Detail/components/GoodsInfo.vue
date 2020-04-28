<template>
  <div v-if="Object.keys(GoodsInfoList).length !== 0" class="goods-info">
    <div data-v-1bfd5400 class="info-desc clear-fix">
      <div data-v-1bfd5400 class="start"></div>
      <div data-v-1bfd5400 class="desc">{{ GoodsInfoList && GoodsInfoList.desc }}</div>
      <div data-v-1bfd5400 class="end"></div>
    </div>
    <div data-v-1bfd5400 class="info-key">{{ GoodsInfoList && GoodsInfoList.detailImage[0].key }}</div>
    <div data-v-1bfd5400 class="info-list">
      <img
        v-for="(item, index) in GoodsInfoList.detailImage[0].list"
        :key="index"
        :src="item"
        @load="LoadImg"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsInfo',

  props: {
    GoodsInfoList: {
      type: Object
    }
  },

  methods: {
    LoadImg () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setTimeout(() => {
        this.$emit('LoadImg')
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img {
  width: 100%;
}
</style>
