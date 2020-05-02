<template>
  <div>
    <SearchDramaList :SearchList2="SearchList"></SearchDramaList>
    <button class="btn-text open-app">更多</button>
  </div>
</template>

<script>
import SearchDramaList from './SearchDramaList'

export default {
  name: 'DramaSeries',

  components: {
    SearchDramaList
  },

  props: {
    SearchList: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.open-app {
    display: block;
    width: 80%;
    height: 30px;
    margin: 10px auto;
    background-color: #e0e0e0;
}
.btn-text {
    border: none;
    font-size: 14px;
}
</style>
