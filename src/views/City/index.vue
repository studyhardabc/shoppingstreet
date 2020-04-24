<template>
  <div class="poge-city">
    <NavBar title="当前城市：" class="city-navbar"></NavBar>

    <div class="city-main">
      <Scroll class="box">
        <div class="left">
          <div class="city-index-section" v-for="item in getcityList" :key="item.py">
            <p>{{ item.py }}</p>
            <ul>
              <li v-for="city in item.list" :key="city.cityId">{{ city.name }}</li>
            </ul>
          </div>
        </div>
      </Scroll>

      <div class="right">
        <ul>
          <li v-for="item in getcityList" :key="item.py">{{ item.py }}</li>
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
    ...mapMutations('city', ['SET_CURCITY']),
    ...mapActions('city', ['GET_CITIES'])
  },

  computed: {
    ...mapGetters('city', ['getcityList'])
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
