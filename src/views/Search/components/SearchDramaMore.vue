<template>
  <div class="search-drama-more" v-if="Object.keys(SearchList).length !== 0">
    <span @click="DramaSeries ">
      <!-- react-text: 969 -->
      查看更多（
      <!-- /react-text -->
      <!-- react-text: 970 -->
      {{ SearchList.Datas.length }}
      <!-- /react-text -->
      <!-- react-text: 971 -->
      ）
      <!-- /react-text -->
    </span>
  </div>
</template>

<script>
export default {
  name: 'SearchDramaMore',

  props: {
    SearchList: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  methods: {
    DramaSeries () {
      this.$emit('DramaSeries')
    }
  }
}
</script>

<style lang="scss" scoped>
.search-drama-more {
  position: relative;
  z-index: 1;
  margin-bottom: 10px;
  color: #c62828;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}
.search-drama-more:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: "";
  z-index: -1;
  height: 0;
  margin: auto;
  border-top: 1px solid #e0e0e0;
}
.search-drama-more span {
  padding: 0 5px;
  background-color: #f5f5f5;
}
</style>
