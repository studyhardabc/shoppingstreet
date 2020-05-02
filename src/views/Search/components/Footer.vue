<template>
  <footer>
    <div class="content">
      <button>客户端</button>
      <i class="logo-cat"></i>
      <button>返回顶部</button>
    </div>
    <div class="bottom">MissEvan弹幕音频网 京ICP备:14055174号-1</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  bottom: 0;
  height: 70px;
  padding: 10px 20px;
  color: #9e9e9e;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #f5f5f5;
}
footer .content {
  display: flex;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  width: 100%;
}
footer .content button {
  background: transparent;
  color: #9e9e9e;
  border: none;
  width: 60px;
}
footer .content .logo-cat {
  -webkit-background-size: 262px 234px;
  -moz-background-size: 262px 234px;
  background-size: 262px 234px;
  background-position: -247px -51px;
  width: 14px;
  height: 16px;
  background-image: url("https://s0.missevan.com/assets/m/images/build/sprite-icons@2x.bfd3fcc1.png");
}
footer .content button {
  background: transparent;
  color: #9e9e9e;
  border: none;
  width: 70px;
}
footer .bottom {
  width: 100%;
  text-align: center;
  font-size: 12px;
}
</style>
