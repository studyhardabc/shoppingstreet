<template>
  <Scroll id="tab-menu">
    <div class="menu-list">
      <div class="menu-list-item" v-for="(item, index) in categoryList.list" :key="index" :class="{'active': index === currentIndex}" @click="categoryIndex(index)">{{ item.title }}</div>
    </div>
  </Scroll>
</template>

<script>
import Scroll from '@/components/Scroll/Scroll'

export default {
  name: 'TabMenu',

  components: {
    Scroll
  },

  props: {
    categoryList: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  data () {
    return {
      currentIndex: 0
    }
  },

  methods: {
    categoryIndex (index) {
      this.currentIndex = index
      this.$emit('categoryIndex', index)
    }
  }
}
</script>

<style lang="scss" scoped>
#tab-menu {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
  color: #666;
}

.menu-list-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}

.menu-list-item.active {
  font-weight: 700;
  color: #ff8198;
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>
