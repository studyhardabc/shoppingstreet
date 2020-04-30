<template>
  <div class="page-login">
    <div class="logo">
      <div class="tb-logo"></div>
    </div>
    <div class="email">
      <input type="email" placeholder="请输入你的邮箱" />
    </div>
    <div class="tex">
      <input type="text" placeholder="请输入校验码" />
    </div>
    <div class="login-blocks">
      <span>短信验证码登录</span>
      <router-link to="/register" class="box">免费注册</router-link>
    </div>
    <div class="fm-btn">
      <button type="submit" tabindex="3" class="fm-button fm-submit password-login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
.page-login {
  width: 320px;
  height: 100%;
  margin: 0 auto;
}
.tb-logo {
  background: url(https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png)
    no-repeat;
  background-size: contain;
  width: 80px;
  height: 80px;
  margin: 50px auto 0;
}
.email {
  flex: 1;
  height: 48px;
  border-bottom: 3px solid #fd7e1b;
  margin-bottom: 10px;
  margin-top: 30px;
  input {
    width: 100%;
    height: 100%;
    border: none;
  }
}
.tex {
  flex: 1;
  height: 48px;
  border-bottom: 3px solid #fd7e1b;
  margin-bottom: 10px;
  input {
    width: 100%;
    height: 100%;
    border: none;
  }
}
.login-blocks {
  margin-top: 20px;
  color: #666;
  font-size: 14px;
  span {
    float: left;
  }
  .box {
    float: right;
    color: #666;
  }
}
.fm-btn {
  width: 100%;
  margin-top: 60px;
}
.fm-button {
    background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
    color: #fff;
    box-shadow: 0 2px 4px #f7c7b1;
    height: 45px;
    border-radius: 35px;
    margin-top: 15px;
    font-size: 16px;
    width: 100%;
    border: none;
}
</style>
