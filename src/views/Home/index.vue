<template>
  <div class="poge-home">

    <!-- 顶部内容 -->
    <NavBar class="nav-bar" title="购物街">
      <template #left><div @click="getCity">{{ curCityName || '城市' }}</div></template>
      <template #center></template>
      <template #right><i class="iconfont icon--search1" @click="getSearch"></i></template>
    </NavBar>

    <!-- 轮播图 -->
    <Swiper class="my-swiper" :loop="true" :autoplay="1000" v-if="bannerList.length > 0">
      <SwiperItem v-for="(item,index) in bannerList" :key="index">
        <img :src="item.image" alt="">
      </SwiperItem>
    </Swiper>

    <!-- 轮播图下面的内容 -->
    <Feature :featureList="featureList"></Feature>

    <Recommend></Recommend>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar'
import { Swiper, SwiperItem } from '@/components/Swiper'
import Feature from './components/feature'
import Recommend from './components/Recommend'

import { banner } from '@/api/Home'

import { mapGetters } from 'vuex'

export default {
  name: 'Home',

  components: {
    NavBar,
    Swiper,
    SwiperItem,
    Feature,
    Recommend
  },

  data () {
    return {
      // 轮播图数据
      bannerList: [],
      // 轮播图下面那个数据
      featureList: []
    }
  },

  computed: {
    ...mapGetters('city', ['curCityName'])
  },

  methods: {
    // 请求多个数据
    getBanner () {
      banner().then(res => {
        console.log(res)
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
    }
  },

  created () {
    // 调用获取轮播图数据的函数
    this.getBanner()
  }
}
</script>

<style lang="scss" scoped>
.nav-bar{
  background: #ff8198;
  color: #fff;
  font-weight: bold;
}

.my-swiper img{
  width: 100%;
}
</style>
