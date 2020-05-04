<template>
  <div class="page-popularpages">
    <TabList :TabList="TabList" @getactiveIndex="getactiveIndex"></TabList>

    <div class="tab-content">
      <SearchDramaList :SearchList="SearchList" v-if="!isShow && getIndex === 0"></SearchDramaList>

      <SearchDramaMore :SearchList="SearchList" v-if="!isShow && getIndex === 0" @DramaSeries="DramaSeries"></SearchDramaMore>

      <ListSoundLarge :getSearchList2="getSearchList2" v-if="!isShow && getIndex === 0"></ListSoundLarge>

      <DramaSeries :SearchList="SearchList" v-if="isShow || getIndex === 3"></DramaSeries>

      <upPage :SearchUserList="SearchUserList" v-if="getIndex === 1"></upPage>

      <LivePage v-if="getIndex === 4" :liveList="liveList"></LivePage>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import TabList from './TabList'
import SearchDramaList from './SearchDramaList'
import SearchDramaMore from './SearchDramaMore'
import ListSoundLarge from './ListSoundLarge'
import Footer from './Footer'
import DramaSeries from './DramaSeries'
import upPage from './upPage'
import LivePage from './LivePage'

export default {
  name: 'PopularPages',

  components: {
    TabList,
    SearchDramaList,
    SearchDramaMore,
    ListSoundLarge,
    Footer,
    DramaSeries,
    upPage,
    LivePage
  },

  data () {
    return {
      isShow: false,
      getIndex: 0
    }
  },

  props: {
    TabList: {
      type: Array,
      default () {
        return []
      }
    },

    SearchList: {
      type: Object,
      default () {
        return {}
      }
    },

    getSearchList2: {
      type: Object,
      default () {
        return {}
      }
    },

    SearchUserList: {
      type: Object,
      default () {
        return {}
      }
    },

    liveList: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  methods: {
    DramaSeries () {
      this.isShow = true
    },

    getactiveIndex (obj) {
      console.log(obj)
      this.$emit('getactiveIndex', obj)
      if (obj.index === 0 || obj.index === 1) {
        this.isShow = false
      }
      this.getIndex = obj.index
    }
  }
}
</script>

<style lang="scss" scoped>
.page-popularpages {
  height: 100%;
}

.tab-content {
  padding: 0;
  background: #f5f5f5;
}
</style>
