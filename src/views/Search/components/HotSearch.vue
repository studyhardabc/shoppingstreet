<template>
  <div id="SearchPage">
    <div class="search-header">热门搜索</div>
    <div class="search-content">
      <span class="search-tag" v-for="(item, index) in HotSearchList" :key="index" @click="getSearchTag(item.key)">{{ item.key }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotSearch',

  props: {
    HotSearchList: {
      type: Array,
      default () {
        return []
      }
    }
  },

  methods: {
    getSearchTag (item) {
      this.$emit('getSearchTag', item)
    }
  }
}
</script>

<style lang="scss" scoped>
#SearchPage {
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
  background: #f5f5f5;
}
#SearchPage .search-header {
  display: block;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  height: 40px;
  padding: 10px;
  font-size: 14px;
  color: #424242;
}
#SearchPage .search-header:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 10px;
  border-bottom: 1px solid #e0e0e0;
}
#SearchPage .search-content {
  display: block;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
}
#SearchPage .search-content .search-tag {
  display: inline-block;
  position: relative;
  padding: 4px 10px;
  margin: 5px 6px;
  color: #9e9e9e;
  border: 1px solid #9e9e9e;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  background-color: #fff;
  font-size: 12px;
}
</style>
