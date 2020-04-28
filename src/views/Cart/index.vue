<template>
  <div class="poge-cart">
    <NavBar class="nav-bar">
      <template #center>
        <div>购物车</div>
      </template>
    </NavBar>

    <Scroll class="Scroll">
      <div v-for="item in AddGoods" :key="item.iid">
        <div class="box1">
          <i>
            <img :src="item.list[0].shoplogo" alt />
          </i>
          <p>{{ item.list[0].shop }}</p>
        </div>
        <van-card
          :num="ItemList.num"
          :price="ItemList.price"
          :desc="ItemList.shop"
          :title="ItemList.title"
          :thumb="ItemList.imgUrl"
          v-for="ItemList in item.list"
          :key="ItemList.timer"
        >
          <template #tags>
            <van-tag plain type="danger">{{ ItemList.name }}</van-tag>
            <van-tag plain type="danger">{{ ItemList.size + '码' }}</van-tag>
          </template>
          <template #tag>
            <van-checkbox v-model="checked"></van-checkbox>
          </template>
          <template #footer>
            <van-button size="mini">+</van-button>
            <van-button size="mini">-</van-button>
          </template>
        </van-card>
        <p class="box"></p>
      </div>
    </Scroll>
    <van-submit-bar :price="3050" button-text="提交订单" class="box2">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar'
import Scroll from '../../components/Scroll/Scroll'

import Vue from 'vue'
import { Card, Tag, Button, Checkbox, CheckboxGroup, SubmitBar } from 'vant'

import { mapState } from 'vuex'

Vue.use(Card)
Vue.use(Tag)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(SubmitBar)

export default {
  name: 'Cart',

  components: {
    NavBar,
    Scroll
  },

  data () {
    return {
      checked: false,
      timer: 0
    }
  },

  computed: {
    ...mapState('city', ['AddGoods'])
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  background: #ff8198;
  color: #fff;
  font-weight: bold;
}

.box {
  height: 8px;
  background: #fff;
}

.box1 {
  display: flex;
  height: 20px;

  p {
    margin-top: 8px;
    margin-left: 5px;
  }

  i {
    width: 50px;
    height: 30px;
    margin-left: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.box2 {
  position: absolute;
  bottom: 49px;
}

.Scroll {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 99px;
}
</style>
