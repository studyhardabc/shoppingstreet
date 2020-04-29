<template>
  <div class="poge-profile">
    <NavBar class="nav-bar" title="浩哥商城"></NavBar>

    <UserInfo></UserInfo>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar'
import UserInfo from './compinents/UserInfo'

export default {
  name: 'Profile',

  components: {
    NavBar,
    UserInfo
  }
}
</script>

<style lang="scss" scoped>
.poge-profile {
  height: 100%;
}

.nav-bar {
  background: #ff8198;
  color: #fff;
  font-weight: bold;
}

</style>
