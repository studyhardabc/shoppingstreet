<template>
  <div class="poge-home">
    <!-- 顶部内容 -->
    <NavBar class="nav-bar" title="购物街">
      <template #left>
        <div @click="getCity">{{ curCityName || '城市' }}</div>
      </template>
      <template #center></template>
      <template #right>
        <i class="iconfont icon--search1" @click="getSearch"></i>
      </template>
    </NavBar>

    <TabControl :titleList="['流行', '新款', '精选']" class="TabControlTop" @tabIndex="currentIndex" ref="tabContro1" v-show="tabContro1Show"></TabControl>

    <Scroll class="Scroll-main" ref="Scroll" :pullUpLoad="true" @pullingUp="pullingUpupdate" @scroll="ScrollBackTopShow">
      <!-- 轮播图 -->
      <Swiper class="my-swiper" :loop="true" :autoplay="1000" v-if="bannerList.length > 0">
        <SwiperItem v-for="(item,index) in bannerList" :key="index">
          <img :src="item.image" alt @load="SwiperImg" />
        </SwiperItem>
      </Swiper>

      <!-- 轮播图下面的内容 -->
      <Feature :featureList="featureList"></Feature>

      <Recommend></Recommend>

      <TabControl :titleList="['流行', '新款', '精选']" class="TabControlTop" @tabIndex="currentIndex" ref="tabContro2"></TabControl>

      <Goods :goodsItemList="showGoodsList" @loadImg="refreshHeight" @Detail="DetailPage" ref="goodTop"></Goods>
    </Scroll>

    <Backtop class="Backtop" @BackTop="HomeBackTop" v-show="BackTopShow"></Backtop>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar'
import { Swiper, SwiperItem } from '@/components/Swiper'
import Feature from './components/feature'
import Recommend from './components/Recommend'
import Scroll from '@/components/Scroll/Scroll'
import TabControl from '@/components/tabControl/tabControl'
import Goods from './components/GoodsList'
import Backtop from '@/components/BackTop/BackTop'

import { banner, goodList } from '@/api/Home'

import { mapGetters } from 'vuex'

export default {
  name: 'Home',

  components: {
    NavBar,
    Swiper,
    SwiperItem,
    Feature,
    Recommend,
    Scroll,
    TabControl,
    Goods,
    Backtop
  },

  data () {
    return {
      // 轮播图数据
      bannerList: [],
      // 轮播图下面那个数据
      featureList: [],
      goodsList1: [
        { pop: { page: 1, list: [], top: 0 } },
        { new: { page: 1, list: [], top: 0 } },
        { sell: { page: 1, list: [], top: 0 } }
      ],
      currentType: 'pop',
      goodIndex: 0,
      goodslength: 0,
      isShow: false,
      BackTopShow: false,
      tabContro1Show: false,
      isLoad: false,
      taboffsetTop: 0
    }
  },

  computed: {
    ...mapGetters('city', ['curCityName']),

    showGoodsList () {
      return this.goodsList1[this.goodIndex][this.currentType].list
    }
  },

  methods: {
    // 请求多个数据
    getBanner () {
      banner().then(res => {
        // console.log(res)
        // 轮播图的数据
        this.bannerList = res.data.banner.list
        // 轮播图下面那个数据
        this.featureList = res.data.recommend.list
      })
    },

    getCity () {
      this.$router.push('/city')
    },

    getSearch () {
      this.$router.push('/search')
    },

    // 请求选项卡数据
    currentIndex (index = 0) {
      this.goodIndex = index
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }

      if (this.$refs.tabContro1) {
        this.$refs.tabContro1.currentIndex = index
        this.$refs.tabContro2.currentIndex = index
      }

      this.$refs.Scroll && this.$refs.Scroll.scrollTo(0, this.goodsList1[this.goodIndex].top || 0)

      this.ProductData(this.currentType)
    },

    // 获取选项卡数据封装方法
    ProductData (type, num) {
      goodList(type, this.goodsList1[this.goodIndex][type].page).then(res => {
        // console.log(res)
        if (this.goodslength === this.goodsList1[this.goodIndex][type].list.length && this.goodslength !== 0 && this.isShow === false) return
        this.goodsList1[this.goodIndex][type].list.push(...res.data.list)
        this.$refs.Scroll.finishPullUp()
        this.goodslength = this.goodsList1[this.goodIndex][type].list.length
      })
    },

    // 监听上拉加载更多改变page页数，然后发送获取选项卡数据
    pullingUpupdate () {
      this.isShow = true
      this.goodsList1[this.goodIndex][this.currentType].page += 1
      this.ProductData(
        this.currentType,
        this.goodsList1[this.goodIndex][this.currentType].page
      )
    },

    // 监听图片加载完成后刷新滚动条获取高度
    refreshHeight () {
      this.$refs.Scroll.refresh()
    },

    // 点击按钮回到顶部
    HomeBackTop () {
      this.$refs.Scroll.scrollTo(0, 0)
    },

    // 监听回到顶部的按钮显示和隐藏
    ScrollBackTopShow (position) {
      // console.log(position)
      (-position.y) > 900 ? this.BackTopShow = true : this.BackTopShow = false
      // 监听吸顶效果
      this.tabContro1Show = (-position.y) > this.taboffsetTop

      this.goodsList1[this.goodIndex].top = position.y
    },

    // 监听图片加载完再获取高度
    SwiperImg () {
      if (!this.isLoad) {
        this.taboffsetTop = this.$refs.tabContro2.$el.offsetTop
        this.isLoad = true
      }
    },

    // 点击图片去到详情页面
    DetailPage (iid) {
      console.log(iid)
      this.$router.push({
        path: '/detail',
        query: {
          iid
        }
      })
    }
  },

  created () {
    // 调用获取轮播图数据的函数
    this.getBanner()
    this.currentIndex()
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  background: #ff8198;
  color: #fff;
  font-weight: bold;
}

.my-swiper img {
  width: 100%;
}
.Scroll-main {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}

.TabControlTop {
  position: sticky;
  top: 44px;
}

.Backtop {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
</style>
