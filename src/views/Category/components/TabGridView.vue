<template>
  <div class="box" v-if="Object.keys(categoryGoods).length !== 0">
    <div class="item" v-for="(item, index) in categoryGoods.data.list" :key="index">
      <a :href="item.link">
        <img v-lazy="item.image" alt class="item-img" @load="SwiperImg" />
        <div class="item-text">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TabGridView',

  props: {
    categoryGoods: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  methods: {
    SwiperImg () {
      this.$emit('SwiperImg')
    }
  }
}
</script>

<style lang="scss" scoped>
.panel img {
  width: 100%;
}

.item {
  text-align: center;
  font-size: 12px;
  margin: 8px 0;
  width: 81px;
  height: 95px;

  a {
    color: #666;
  }
}

.item-img {
  width: 80%;
}

.item-text {
  margin-top: 15px;
}
.box {
  width: 270px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
