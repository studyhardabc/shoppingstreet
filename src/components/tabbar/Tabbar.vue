<template>
  <div id="tab-bar">
    <router-link to="home" id="tab-bar-item">
      <div @click="num = 1">
        <div class="item-icon" v-if="num == 1">
          <img src="~@/assets/img/tabbar/tabar-home.jpg" alt />
        </div>
        <div class="item-active-icon" v-if="num !== 1">
          <img src="~@/assets/img/tabbar/tabar-home1.jpg" alt />
        </div>
        <div class="item-text">
          <div :class="{'active':num == 1}">首页</div>
        </div>
      </div>
    </router-link>
    <router-link to="category" id="tab-bar-item">
      <div @click="num = 2">
        <div class="item-icon" v-if="num == 2">
          <img src="~@/assets/img/tabbar/tabar-category.jpg" alt />
        </div>
        <div class="item-active-icon" v-if="num !== 2">
          <img src="~@/assets/img/tabbar/tabar-category1.jpg" alt />
        </div>
        <div class="item-text">
          <div :class="{'active':num == 2}">分类</div>
        </div>
      </div>
    </router-link>
    <router-link to="cart" id="tab-bar-item">
      <div @click="num = 3">
        <div class="item-icon" v-if="num == 3">
          <img src="~@/assets/img/tabbar/tabar-cart.jpg" alt />
        </div>
        <div class="item-active-icon" v-if="num !== 3">
          <img src="~@/assets/img/tabbar/tabar-cart1.jpg" alt />
        </div>
        <div class="item-text">
          <div :class="{'active':num == 3}">购物车</div>
        </div>
      </div>
    </router-link>
    <router-link to="profile" id="tab-bar-item">
      <div @click="num = 4">
        <div class="item-icon" v-if="num == 4">
          <img src="~@/assets/img/tabbar/tabar-profile.jpg" alt />
        </div>
        <div class="item-active-icon" v-if="num !== 4">
          <img src="~@/assets/img/tabbar/tabar-profile1.jpg" alt />
        </div>
        <div class="item-text">
          <div :class="{'active':num == 4}">我的</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',

  data () {
    return {
      num: 1
    }
  }
}
</script>

<style lang="scss" scoped>
#tab-bar {
  /* 本身的样式 */
  background-color: #f6f6f6;
  height: 49px;
  border-top: 1px solid #eee;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);

  /* 定位相关 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* 利用flex进行布局 */
  display: flex;
  text-align: center;
}
#tab-bar-item {
  flex: 1;
}

.item-icon img,
.item-active-icon img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}

.item-text {
  font-size: 12px;
  margin-top: 3px;
  color: #333;
}

.active{
  color: red;
}
</style>
