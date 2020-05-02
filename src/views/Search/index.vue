<template>
  <div class="poge-search">
    <NavTer :title="data" @InputValue="InputValue" @clickfn1="clickfn1"></NavTer>

    <Scroll class="Scroll">
      <HotSearch :HotSearchList="HotSearchList" @getSearchTag="getSearchTag" v-show="!isShow"></HotSearch>

      <!-- 搜索 -->
      <SearchResult v-show="SearchResultShow" :titleList="titleList" :title="title" @SuggestItem="SuggestItem"></SearchResult>

      <!-- 搜索结果页面 -->
      <PopularPages :TabList="getSearchList.navs" :SearchList="SearchList" :getSearchList2="getSearchList2" :SearchUserList="upList" @getactiveIndex="getactiveIndex" v-show="isShow"></PopularPages>

    </Scroll>
    <Footer class="box" v-show="!isShow"></Footer>
  </div>
</template>

<script>
import NavTer from './components/NavTer'
import HotSearch from './components/HotSearch'
import Footer from './components/Footer'
import SearchResult from './components/SearchResult'
import PopularPages from './components/PopularPages'
import Scroll from '../../components/Scroll/Scroll'

import { getHotSearch, getSearch, Search, getLivePage, getSuggest } from '@/api/Search.js'

export default {
  name: 'Search',

  components: {
    NavTer,
    HotSearch,
    Footer,
    SearchResult,
    PopularPages,
    Scroll
  },

  data () {
    return {
      isShow: false,
      SearchResultShow: false,
      HotSearchList: [],
      getSearchList: {},
      getSearchList2: {},
      SearchList: {},
      data: '',
      upList: {},
      titleList: [],
      title: ''
    }
  },

  methods: {
    getHotSearch () {
      getHotSearch().then(res => {
        // console.log(res)
        this.HotSearchList = res.info
      })
    },

    getSearchTag (data) {
      this.data = data
      this.isShow = true
      this.getSearch(data)
      this.Search(data)
    },

    getSearch (data, type) {
      getSearch(data, type).then(res => {
        // console.log(res)
        this.getSearchList = res.info
        this.getSearchList2 = res.info
        this.getSearchList.navs && this.getSearchList.navs.unshift({ name: '综合', type: 3 })
        this.getSearchList.navs && this.getSearchList.navs.splice(3, 1)
      })
    },

    Search (data) {
      Search(data).then(res => {
        this.SearchList = res.info
      })
    },

    // 直播数据请求报错，未解决
    getactiveIndex (obj) {
      getLivePage(this.data).then(res => {
        console.log(res) // 报错
      })
      if (obj.TabList === 5 || obj.index === 4) return
      getSearch(this.data, obj.TabList).then(res => {
        // console.log(res)
        this.upList = res.info
      })
    },

    InputValue (value) {
      value.length !== 0 ? this.SearchResultShow = true : this.SearchResultShow = false
      if (value === '') return
      getSuggest(value).then(res => {
        console.log(res)
        this.titleList = res.info
        this.title = value
      })
    },

    SuggestItem (item) {
      this.data = item
      this.getSearch(this.data)
      this.Search(this.data)
      this.SearchResultShow = false
      this.isShow = true
    },

    clickfn1 (value) {
      this.isShow = false
      this.InputValue(value)
    }
  },

  created () {
    this.getHotSearch()
  }
}
</script>

<style lang="scss" scoped>
.poge-search {
  height: 100%;
}
.Scroll {
  position: fixed;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f5f5f5;
  overflow-y: auto;
}
.box {
  position: fixed;
  bottom: 10px;
}
</style>
