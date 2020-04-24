<template>
  <div class="poge-hello">
    <router-view></router-view>
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
