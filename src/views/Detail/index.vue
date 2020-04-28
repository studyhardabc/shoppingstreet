<template>
  <div class="poge-detail">
    <NavBar class="NavBar" ref="NavBarTop">
      <template #left>
        <i class="iconfont icon-fanhui" @click="LeftBack"></i>
      </template>
      <template #center>
        <van-row class="row" type="flex" justify="center">
          <van-col
            span="5"
            v-for="(item, index) in col"
            :key="item"
            @click="NavBarScroll(index)"
            :class="{active: ColIndex == index}"
          >{{ item }}</van-col>
        </van-row>
      </template>
    </NavBar>

    <Scroll
      class="Scroll"
      ref="Scroll"
      :pullUpLoad="true"
      @scroll="ScrollBackTopShow"
      :probeType="3"
    >
      <Swiper :autoplay="1000" :loop="true" class="SwiperImg" v-if="itemInfo.length > 0">
        <SwiperItem v-for="(item, index) in itemInfo" :key="index">
          <img :src="item" alt />
        </SwiperItem>
      </Swiper>

      <BaseInfo :GoodsnewsList="GoodsnewsList"></BaseInfo>

      <ShopInfo :ShopInfoList="ShopInfoList"></ShopInfo>

      <GoodsInfo :GoodsInfoList="GoodsInfoList" @LoadImg="LoadImg"></GoodsInfo>

      <ParamInfo :GoodsParamList="GoodsParamList" ref="ParamInfoTop"></ParamInfo>

      <CommentInfo :CommentInfoList="CommentInfoList" ref="CommentInfoTop"></CommentInfo>

      <RecommendInfo :RecommendList="RecommendList" @loadImg="refreshHeight" ref="RecommendInfoTop"></RecommendInfo>
    </Scroll>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ff5000" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="CartShow" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>

    <van-sku v-model="show" :sku="sku" :goods="goods" @sku-selected="addToCart" @stepper-change="GoodsNum" @add-cart="AddGoods">
      <template #extra-sku-group>
        <div class="GoodsSize">尺码</div>
        <ul class="GoodsSize1">
          <li v-for="(item, index) in GoodSize" :key="item" @click="SizeItem(item, index)" :class="{'active1': SizeItemIndex === index}">{{ item }}</li>
        </ul>
      </template>
    </van-sku>

    <BackTop class="Backtop" @BackTop="HomeBackTop" v-show="BackTopShow"></BackTop>
  </div>
</template>

<script>
import Vue from 'vue'

import NavBar from '@/components/NavBar/NavBar'
import { Swiper, SwiperItem } from '../../components/Swiper/index'
import Scroll from '../../components/Scroll/Scroll'
import BaseInfo from './components/BaseInfo'
import ShopInfo from './components/ShopInfo'
import GoodsInfo from './components/GoodsInfo'
import ParamInfo from './components/ParamInfo'
import CommentInfo from './components/CommentInfo'
import RecommendInfo from './components/RecommendInfo'
import BackTop from '@/components/BackTop/BackTop'

import { mapMutations } from 'vuex'

import {
  Detailbanner,
  Goodsnews,
  ShopList,
  GoodsParam,
  getRecommend
} from '@/api/Detail'

import {
  Col,
  Row,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Sku,
  Toast
} from 'vant'

Vue.use(GoodsAction)
Vue.use(GoodsActionButton)
Vue.use(GoodsActionIcon)
Vue.use(Sku)
Vue.use(Col)
Vue.use(Row)
Vue.use(Toast)

export default {
  name: 'Detail',

  components: {
    NavBar,
    Scroll,
    Swiper,
    SwiperItem,
    BaseInfo,
    ShopInfo,
    GoodsInfo,
    ParamInfo,
    CommentInfo,
    RecommendInfo,
    BackTop
  },

  data () {
    return {
      col: ['商品', '参数', '评论', '推荐'],
      ColIndex: 0,
      itemInfo: [],
      GoodsnewsList: {},
      ShopInfoList: {},
      GoodsInfoList: {},
      GoodsParamList: {},
      CommentInfoList: {},
      RecommendList: [],
      themeTops: [],
      GoodSize: ['S', 'M', 'L', 'XL'],
      GoodNum: 1,
      SizeItemIndex: null,
      BackTopShow: false,
      show: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: '颜色', // skuKeyName：规格类目名称
            v: [
              {
                id: '30349', // skuValueId：规格值 id
                name: '红色', // skuValueName：规格值名称
                imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
                // previewImgUrl: 'https://img.yzcdn.cn/1p.jpg' // 用于预览显示的规格类目图片
              },
              {
                id: '1215',
                name: '蓝色',
                imgUrl: 'https://img.yzcdn.cn/2.jpg'
                // previewImgUrl: 'https://img.yzcdn.cn/2p.jpg'
              },
              {
                id: '12321',
                name: '黑色',
                imgUrl: 'https://img.yzcdn.cn/2.jpg'
                // previewImgUrl: 'https://img.yzcdn.cn/2p.jpg'
              },
              {
                id: '123',
                name: '白色',
                imgUrl: 'https://img.yzcdn.cn/2.jpg'
                // previewImgUrl: 'https://img.yzcdn.cn/2p.jpg'
              }
            ],
            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 100 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '12321', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 200 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '123', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 300 // 当前 sku 组合对应的库存
          }
        ],
        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: '留言', // 留言名称
            type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: '1', // 是否必填 '1' 表示必填
            placeholder: '' // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: ''
      }
    }
  },

  methods: {
    ...mapMutations('city', ['GET_AddGOODS']),
    // 返回按钮
    LeftBack () {
      this.$router.go(-1)
    },

    // 获取数据传id
    Detailbanner () {
      Detailbanner(this.$route.query).then(res => {
        console.log(res)
        this.itemInfo = res.result.itemInfo.topImages
        this.goods.picture = res.result.itemInfo.topImages[0]
        this.sku.price = res.result.itemInfo.highNowPrice
        this.sku.list[0].price = res.result.itemInfo.highNowPrice * 100
        this.sku.list[1].price = res.result.itemInfo.highNowPrice * 100
        this.sku.list[2].price = res.result.itemInfo.highNowPrice * 100
        this.sku.list[3].price = res.result.itemInfo.highNowPrice * 100
        this.sku.stock_num = res.result.shopInfo.cFans
        this.sku.list[0].stock_num = res.result.shopInfo.cGoods
        this.sku.tree[0].v[0].imgUrl = res.result.detailInfo.detailImage[0].list[0]
        this.sku.tree[0].v[1].imgUrl = res.result.detailInfo.detailImage[0].list[1]
        this.sku.tree[0].v[2].imgUrl = res.result.detailInfo.detailImage[0].list[2]
        this.sku.tree[0].v[3].imgUrl = res.result.detailInfo.detailImage[0].list[3]
        this.GoodsnewsList = new Goodsnews(
          res.result.itemInfo,
          res.result.columns,
          res.result.shopInfo.services
        )
        this.ShopInfoList = new ShopList(res.result.shopInfo)
        this.GoodsInfoList = res.result.detailInfo
        this.GoodsParamList = new GoodsParam(res.result.itemParams)
        // 2.7.保存评论信息
        if (res.result.rate.list) {
          this.CommentInfoList = res.result.rate
        }
      })
    },

    // 监听图片加载完刷新滚动条获取可滚动高度
    LoadImg () {
      this.$refs.Scroll.refresh()
    },

    // 点击让购物车信息栏显示
    CartShow () {
      this.show = true
    },

    getRecommend () {
      getRecommend().then(res => {
        // console.log(res)
        this.RecommendList = res.data.list
      })
    },

    // 点击按钮回到顶部
    HomeBackTop () {
      this.$refs.Scroll.scrollTo(0, 0)
    },

    // 监听回到顶部的按钮显示和隐藏
    ScrollBackTopShow (position) {
      // console.log(position)
      -position.y > 900
        ? (this.BackTopShow = true)
        : (this.BackTopShow = false)

      if (
        -position.y >= -this.themeTops[0] &&
        -position.y < -this.themeTops[1]
      ) {
        this.ColIndex = 0
      } else if (
        -position.y >= -this.themeTops[1] &&
        -position.y < -this.themeTops[2]
      ) {
        this.ColIndex = 1
      } else if (
        -position.y >= -this.themeTops[2] &&
        -position.y < -this.themeTops[3]
      ) {
        this.ColIndex = 2
      } else if (-position.y >= this.themeTops[3]) {
        this.ColIndex = 3
      }
    },

    // 监听图片加载完成后刷新滚动条获取高度
    refreshHeight () {
      this.$refs.Scroll.refresh()
      this.themeTops = []
      this.themeTops.push(0)
      this.themeTops.push(-this.$refs.ParamInfoTop.$el.offsetTop)
      this.themeTops.push(-this.$refs.CommentInfoTop.$el.offsetTop)
      this.themeTops.push(-this.$refs.RecommendInfoTop.$el.offsetTop)
    },

    NavBarScroll (index) {
      this.ColIndex = index
      this.$refs.Scroll.scrollTo(0, this.themeTops[index])
    },

    // 保存购物车需要的商品信息
    addToCart (data) {
      this.obj = {}
      this.obj.iid = this.$route.query.iid
      this.obj.name = data.skuValue.name
      this.obj.imgUrl = data.skuValue.imgUrl
      this.obj.price = this.GoodsnewsList.highNowPrice
    },

    GoodsNum (data) {
      this.GoodNum = data
    },

    // 保存商品尺码
    SizeItem (item, index) {
      this.obj.size = item
      this.SizeItemIndex = index
    },

    AddGoods () {
      if (!this.obj.size) {
        Toast('请选择尺码')
        return
      }
      this.obj.title = this.GoodsnewsList.title
      this.obj.num = this.GoodNum
      this.obj.timer = new Date().getTime()
      this.obj.shop = this.ShopInfoList.name
      this.obj.shoplogo = this.ShopInfoList.shopLogo
      this.GET_AddGOODS(this.obj)
      Toast.success('加入购物车')
    }
  },

  created () {
    this.Detailbanner()
    this.getRecommend()
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.poge-detail {
  height: 100%;
}

.row {
  font-size: 14px;
  color: #666;
  text-align: center;
}

.active {
  color: #ff8198;
}

.SwiperImg {
  height: 300px;

  img {
    width: 100%;
  }
}

.Scroll {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 58px;
}

.NavBar {
  background: #fff;
}

.Backtop {
  position: fixed;
  right: 10px;
  bottom: 60px;
}

.GoodsSize {
  margin-top: 10px;
  margin-left: 15px;
}

.GoodsSize1 {
  @include border-bottom;
  @include border-top;
  display: flex;
}

.GoodsSize1 li {
  width: 60px;
  height: 30px;
  line-height: 30px;
  margin-left: 15px;
  background: #f7f8fa;
  text-align: center;
  border-radius: 5px;
  margin-top: 8px;
  margin-bottom: 8px;
}

.active1 {
  color: #ee0a24;
  background: rgba($color: #ee0a24, $alpha: 0.1);
}
</style>
