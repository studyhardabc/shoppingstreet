<template>
  <div class="suggest-keyword">
    <div class="keyword-container">
      <!-- react-text: 85 -->
      搜索“
      <!-- /react-text -->
      <span class="keyword">{{ title }}</span>
      <!-- react-text: 87 -->
      ”
      <!-- /react-text -->
    </div>
    <ul class="suggest-list">
      <a v-for="(item, index) in titleList" :key="index" class="suggest-item" @click="SuggestItem(item)">
        <i class="search-icon"></i>
        <div class="item-content">
          <span class="keyword">{{ item.substring(0,1) }}</span>
          {{ item.substring(1) }}
        </div>
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',

  props: {
    titleList: {
      type: Array,
      default () {
        return []
      }
    },

    title: {
      type: String,
      default: ''
    }
  },

  methods: {
    SuggestItem (item) {
      this.$emit('SuggestItem', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.suggest-keyword {
  display: block;
  position: absolute;
  top: 45px;
  width: 100%;
  height: -webkit-calc(100vh - 40px);
  height: -moz-calc(100vh - 40px);
  height: calc(100vh - 40px);
  padding-left: 10px;
  background-color: #f5f5f5;
  font-size: 14px;
}
.suggest-keyword .keyword-container {
  display: block;
  position: relative;
  height: 40px;
  border-bottom: 1px solid #e0e0e0;
  line-height: 40px;
}
.suggest-keyword .suggest-list {
  display: block;
  position: relative;
}
.suggest-keyword .suggest-list .suggest-item {
  display: block;
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.suggest-keyword .suggest-list .suggest-item .search-icon {
  display: inline-block;
  position: relative;
  width: 13px;
  height: 13px;
  margin: 14px 10px 0 0;
  background-image: url("https://s0.missevan.com/assets/m/images/build/sprite-icons@2x.bfd3fcc1.png");
  background-position: -247px -103px;
  -webkit-background-size: 262px 234px;
  -moz-background-size: 262px 234px;
  background-size: 262px 234px;
  vertical-align: top;
}
.suggest-keyword .suggest-list .suggest-item .item-content {
  width: -webkit-calc(100% - 30px);
  width: -moz-calc(100% - 30px);
  width: calc(100% - 30px);
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  position: relative;
  height: 40px;
  color: #3d3d3d;
  vertical-align: top;
}
.suggest-keyword .keyword {
  color: #e63c3c;
}
</style>
