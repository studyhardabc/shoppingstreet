<template>
  <div class="poge-profile">
    <UserInfo @register="register"></UserInfo>
    <div class="box"></div>
  </div>
</template>

<script>
import UserInfo from './compinents/UserInfo'

export default {
  name: 'Profile',

  components: {
    UserInfo
  },

  methods: {
    register () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.poge-profile {
  height: 100%;
  background: #fd7e1b;
}

.nav-bar {
  background: #ff8198;
  color: #fff;
  font-weight: bold;
}

.box {
  width: 100%;
  position: fixed;
  height: 100px;
  bottom: 49px;
  background: #f2f2f2;
}
</style>
