<template>
  <div class="poge-hello">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar/Tabbar'

export default {
  name: 'Hello',

  components: {
    Tabbar
  }
}
</script>

<style lang="scss" scoped>

</style>
