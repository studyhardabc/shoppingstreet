<template>
  <div data-v-3d0d4373 data-v-117d0e76 class="base-info">
    <div data-v-3d0d4373 class="info-title">{{ GoodsnewsList.title }}</div>
    <div data-v-3d0d4373 class="info-price">
      <span data-v-3d0d4373 class="n-price">{{ GoodsnewsList.price }}</span>
      <span data-v-3d0d4373 class="o-price">{{ GoodsnewsList.oldPrice }}</span>
      <span data-v-3d0d4373 class="discount">{{ GoodsnewsList.discountDesc }}</span>
    </div>
    <div data-v-3d0d4373 class="info-other">
      <span data-v-3d0d4373>{{ GoodsnewsList.columns && GoodsnewsList.columns[0] }}</span>
      <span data-v-3d0d4373>{{ GoodsnewsList.columns && GoodsnewsList.columns[1] }}</span>
      <span data-v-3d0d4373>{{ GoodsnewsList.services && GoodsnewsList.services[GoodsnewsList.services.length-1].name }}</span>
    </div>
    <div data-v-3d0d4373 class="info-service">
      <span data-v-3d0d4373 class="info-service-item" v-for="(item, index) in GoodsnewsList.services && GoodsnewsList.services.length-1" :key="index">
        <img :src="GoodsnewsList.services[index].icon" alt="">
        <span data-v-3d0d4373>{{ GoodsnewsList.services[index].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInfo',

  props: {
    GoodsnewsList: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-title {
  color: #222;
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  font-size: 24px;
  color: #ff5777;
}

.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}

.info-price .discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: #ff5777;
  border-radius: 8px;
  margin-left: 5px;

  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}

.info-other {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}

.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>
