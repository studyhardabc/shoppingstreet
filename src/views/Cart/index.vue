<template>
  <div class="poge-cart">
    <NavBar class="nav-bar">
      <template #center>
        <div>购物车({{ getAddGoodsLength }})</div>
      </template>
    </NavBar>

    <Scroll class="Scroll">
      <div v-for="(item, i) in AddGoods" :key="item.iid">
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
          v-for="(ItemList, index) in item.list"
          :key="ItemList.timer"
        >
          <template #tags>
            <van-tag plain type="danger">{{ ItemList.name }}</van-tag>
            <van-tag plain type="danger">{{ ItemList.size + '码' }}</van-tag>
          </template>
          <template #tag>
            <van-checkbox v-model="ItemList.data" @click.native="checkbox(index, i)"></van-checkbox>
          </template>
          <template #footer>
            <van-swipe-cell class="van-swipe-cell">
              <van-button size="mini" @click="AddGoodplus1(index, i)">+</van-button>
              <van-button size="mini" @click="AddGoodsub1(index, i)">-</van-button>
              <template #right>
                <van-button square text="删除" type="danger" class="delete-button" @click="DeleteGoods(index, i)" />
              </template>
            </van-swipe-cell>
          </template>
        </van-card>
        <p class="box"></p>
      </div>
    </Scroll>
    <van-submit-bar
      :price="getAddGoodsAllprice || 0.00"
      :button-text="`提交订单(${getAddGoodsLength})`"
      class="box2"
    >
      <van-checkbox v-model="isSelectAll" @click.native="checkClick">全选</van-checkbox>
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
import {
  Card,
  Tag,
  Button,
  Checkbox,
  CheckboxGroup,
  SubmitBar,
  SwipeCell
} from 'vant'

import { mapState, mapGetters, mapMutations } from 'vuex'

Vue.use(Card)
Vue.use(Tag)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(SubmitBar)
Vue.use(SwipeCell)

export default {
  name: 'Cart',

  components: {
    NavBar,
    Scroll
  },

  computed: {
    ...mapState('city', ['AddGoods']),
    ...mapGetters('city', ['getAddGoodsLength', 'getAddGoodsAllprice']),

    isSelectAll: {
      get () {
        var All = null
        this.AddGoods.forEach(item => {
          // All = item.list.filter(item => item.data).length // 这种方法也可以，filter是返回一个数组，所有用长度来判断
          All = !item.list.find(item => !item.data)
        })
        return All
      },
      set () {}
    }
  },

  methods: {
    ...mapMutations('city', ['AddGoodsAlldata', 'AddGoodplus', 'AddGoodsub']),

    AddGoodplus1 (index, i) {
      this.AddGoodplus({ index, i })
    },

    AddGoodsub1 (index, i) {
      this.AddGoodsub({ index, i })
    },

    checkbox (index, i) {
      this.AddGoods[i].list[index].data = !this.AddGoods[i].list[index].data
    },

    checkClick () {
      if (this.isSelectAll) {
        this.AddGoods.forEach(item => {
          item.list.forEach(item => {
            item.data = false
          })
        })
      } else {
        this.AddGoods.forEach(item => {
          item.list.forEach(item => {
            item.data = true
          })
        })
      }
    },

    DeleteGoods (index, i) {
      if (this.AddGoods[i].list.length === 1) {
        this.AddGoods.splice(i, 1)
        return
      }
      this.AddGoods[i].list.splice(index, 1)
    }
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

.van-swipe-cell {
  line-height: 40px;
}
</style>
