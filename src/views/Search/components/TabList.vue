<template>
  <ul class="tab-list light black">
    <li class="tab" :class="{'active': activeIndex === index}" v-for="(item, index) in TabList" :key="index" @click="getactiveIndex(index)">{{ item.name }}({{ item.total ? item.total : '' }})</li>
  </ul>
</template>

<script>
export default {
  name: 'TabList',

  data () {
    return {
      activeIndex: 0
    }
  },

  props: {
    TabList: {
      type: Array,
      default () {
        return []
      }
    }
  },

  methods: {
    getactiveIndex (index) {
      this.activeIndex = index
      this.$emit('getactiveIndex', { index, TabList: this.TabList[index].type })
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-list.light {
  margin: 0;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
}
.tab-list {
  display: flex;
  position: relative;
  height: 40px;
  line-height: 40px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 12px;
  margin: 6px 0;
  overflow-x: scroll;
  overflow-y: hidden;
}
.tab-list.black .tab {
  padding: 0 15px;
  color: #9e9e9e;
  font-size: 14px;
}
.tab-list.black .tab:after {
  right: 0;
  left: 0;
  width: calc(100% - 40px);
  min-width: 50px;
  margin: 0 auto;
}
.tab-list .tab {
  position: relative;
  display: inline-block;
  text-align: center;
  -webkit-box-flex: 1;
  flex: 1 0 auto;
  z-index: 0;
}
.tab-list.black .active {
  color: #000;
  border-bottom: 2px solid #000;
  margin-left: 5px;
}
</style>
