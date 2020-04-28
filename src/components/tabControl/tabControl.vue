<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in titleList" :key="item" @click="tabClick(index)" :class="{active: currentIndex === index}">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',

  data () {
    return {
      currentIndex: 0
    }
  },

  props: {
    titleList: {
      type: Array,
      default () {
        return []
      }
    }
  },

  methods: {
    tabClick (index) {
      this.currentIndex = index
      this.$emit('tabIndex', this.currentIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-control {
  display: flex;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
  z-index: 9;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: #ff5777;
}

.active span {
  border-bottom: 2px solid #ff5777;
}
</style>
