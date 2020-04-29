<template>
  <div class="poge-category">
    <NavBar class="nav-bar" title="商品分类"></NavBar>

    <TabControl :titleList="['综合', '新品', '销量']" class="TabControlTop1" @tabIndex="currentIndex" v-show="tabContro1Show" ref="tabContro1"></TabControl>

    <div class="content">
      <TabMenu :categoryList="categoryList" @categoryIndex="categoryIndex"></TabMenu>

      <Scroll ref="Scroll" :probeType="3" :pullUpLoad="true" @scroll="ScrollBackTopShow">
        <TabGridView :categoryGoods="categoryGoods" @SwiperImg="SwiperImg"></TabGridView>

        <TabControl :titleList="['综合', '新品', '销量']" class="TabControlTop" @tabIndex="currentIndex" ref="tabContro2"></TabControl>

        <GoodsList :goodsItemList="goodsItemList" @loadImg="refreshHeight" @Detail="DetailPage"></GoodsList>
      </Scroll>
    </div>

    <Backtop class="Backtop" @BackTop="HomeBackTop" v-show="BackTopShow"></Backtop>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar'
import TabMenu from './components/TabMenu'
import TabGridView from './components/TabGridView'
import TabControl from '@/components/tabControl/tabControl'
import Scroll from '@/components/Scroll/Scroll'
import GoodsList from './components/GoodsList'
import Backtop from '@/components/BackTop/BackTop'

import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from '@/api/category'

import { Detailbanner } from '@/api/Detail'

export default {
  name: 'Category',

  components: {
    NavBar,
    TabMenu,
    TabGridView,
    TabControl,
    Scroll,
    GoodsList,
    Backtop
  },

  data () {
    return {
      categoryList: {},
      categoryListIndex: 0,
      categoryGoods: {},
      currentType: 'pop',
      goodsItemList: [],
      tabContro1Show: false,
      taboffsetTop: 0,
      isLoad: false,
      BackTopShow: true
    }
  },

  methods: {
    getCategory () {
      getCategory().then(res => {
        console.log(res)
        this.categoryList = res.data.category

        this.getSubcategory(
          this.categoryList.list[this.categoryListIndex].maitKey
        )

        this.getCategoryDetail(this.categoryList.list[this.categoryListIndex].miniWallkey, this.currentType)
      })
    },

    Detailbanner () {
      Detailbanner().then(res => {

      })
    },

    getSubcategory (maitKey) {
      getSubcategory(maitKey).then(res => {
        this.categoryGoods = res
      })
    },

    categoryIndex (index) {
      this.categoryListIndex = index
      this.getSubcategory(
        this.categoryList.list[this.categoryListIndex].maitKey
      )
    },

    // 请求选项卡数据
    currentIndex (index = 0, miniWallkey, type) {
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

      this.getCategoryDetail(
        this.categoryList.list[this.categoryListIndex].miniWallkey,
        this.currentType
      )
    },

    getCategoryDetail (miniWallkey, type) {
      getCategoryDetail(miniWallkey, type).then(res => {
        this.goodsItemList = res
      })
    },

    // 监听图片加载完成后刷新滚动条获取高度
    refreshHeight () {
      this.$refs.Scroll.refresh()
    },

    // 监听回到顶部的按钮显示和隐藏
    ScrollBackTopShow (position) {
      // console.log(position)
      (-position.y) > 900 ? this.BackTopShow = true : this.BackTopShow = false
      // 监听吸顶效果
      this.tabContro1Show = (-position.y) > this.taboffsetTop
    },

    // 监听图片加载完再获取高度
    SwiperImg () {
      if (!this.isLoad) {
        this.taboffsetTop = this.$refs.tabContro2.$el.offsetTop
        this.isLoad = true
      }
    },

    // 点击按钮回到顶部
    HomeBackTop () {
      this.$refs.Scroll.scrollTo(0, 0)
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
    this.getCategory()
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  background: #ff8198;
  color: #fff;
  font-weight: bold;
}

.poge-category {
  height: 100%;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;

  display: flex;
}

.TabControlTop1 {
  position: sticky;
  top: 44px;
  width: 275px;
  float: right;
}

.Backtop {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
</style>
