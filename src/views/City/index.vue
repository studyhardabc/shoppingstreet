<template>
  <div class="poge-city">
    <NavBar :title="`当前城市：${curCityName}`" class="city-navbar">
      <template #left><i class="iconfont icon-fanhui" style="fontSize: 20px" @click="i_return"></i></template>
    </NavBar>

    <div class="city-main">
      <Scroll class="box" ref="boxLocation">
        <div class="left">
          <div class="city-index-section" v-for="item in getcityList" :key="item.py" :ref="`city-${item.py}`">
            <p>{{ item.py }}</p>
            <ul>
              <li v-for="city in item.list" :key="city.cityId" @click="handleItem(city)">{{ city.name }}</li>
            </ul>
          </div>
        </div>
      </Scroll>

      <div class="right">
        <ul>
          <li v-for="item in getcityList" :key="item.py" @click="handleIndex(item.py)">{{ item.py }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar'
import Scroll from '../../components/Scroll/Scroll'

import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'City',

  components: {
    NavBar,
    Scroll
  },

  methods: {
    ...mapMutations('city', ['SET_CURCITY', 'GET_CURCITY']),
    ...mapActions('city', ['GET_CITIES']),

    // 点击右边让左边的元素去到对应的位置
    handleIndex (py) {
      // ref标记时，如果是标记在v-for上，那么得到的是一个数组
      var top = this.$refs[`city-${py}`][0].offsetTop
      this.$refs.boxLocation.scrollTo(0, -top)
    },

    // 后退按钮
    i_return () {
      this.$router.go(-1)
    },

    handleItem (city) {
      this.GET_CURCITY(city)
      const redirect = this.$route.query.redirect || '/'
      this.$router.replace(redirect)
    }
  },

  computed: {
    ...mapGetters('city', ['getcityList', 'curCityName'])
  },

  created () {
    this.GET_CITIES()
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";

.city-navbar {
  background: #ff8198;
  color: #fff;
  font-weight: bold;
}

.poge-city {
  display: flex;
  flex-direction: column;
  height: 100%;

  .city-main {
    flex: 1;
    display: flex;
    overflow: hidden;
  }

  .left {
    flex: 1;
    height: 100%;
    position: relative;

    .city-index-section {
      @include border-bottom;
      padding-left: 15px;
      p {
        @include border-bottom;
        height: 36px;
        line-height: 36px;
        font-size: 16px;
      }
      li {
        @include border-bottom;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 16px;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
    height: 100%;

    li {
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 14px;
    }
  }
}

.box {
  width: 360px;
  height: 100%;
}
</style>
