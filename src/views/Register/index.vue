<template>
  <div class="page-register">
    <div class="reg-form">
      <div class="reg-head">
        <div class="title">手机号注册</div>
        <div class="sub-title">亲，欢迎注册淘宝账号</div>
      </div>
      <div class="email">
        <input type="email" placeholder="请输入你的邮箱" />
      </div>
      <div class="tex">
        <input type="text" placeholder="请输入校验码" />
        <p>获取验证码</p>
      </div>
      <div class="fm-btn">
        <button type="submit" tabindex="3" class="fm-button fm-submit password-login">同意协议并注册</button>
      </div>
      <div class="reg-agreement">
        <p>
          已阅读并同意以下协议
          <a
            href="https://terms.alicdn.com/legal-agreement/terms/TD/TD201609301342_19559.html"
            target="_blank"
          >淘宝平台服务协议</a>、
          <a
            href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao201703241622_61002.html"
            target="_blank"
          >隐私权政策</a>、
          <a
            href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao201811121436_80276.html"
            target="_blank"
          >法律声明</a>、
          <a
            href="https://render.alipay.com/p/f/fd-jm7jym6r/alipay/multi-agreement.html"
            target="_blank"
          >支付宝及客户端服务协议</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";

.page-register {
  height: 100%;
}
.reg-form {
  width: 320px;
  margin: 0 auto;
}
.reg-head {
  margin: 65px 0 50px;
}
.reg-head .title {
  margin-top: 20px;
  font-size: 30px;
  color: #333;
}
.reg-head .sub-title {
  margin-top: 12px;
  font-size: 16px;
  color: #999;
}
.email {
  flex: 1;
  height: 48px;
  border-bottom: 3px solid #666;
  margin-bottom: 10px;
  input {
    width: 100%;
    height: 100%;
    border: none;
  }
}
.tex {
  display: flex;
  flex: 1;
  height: 48px;
  border-bottom: 3px solid #666;
  margin-bottom: 10px;
  input {
    width: 70%;
    height: 100%;
    border: none;
  }
  p {
    line-height: 48px;
    color: #ff5000;
    border: none;
    font-size: 16px;
  }
}
.fm-btn {
  width: 100%;
  margin-top: 40px;
}
.fm-button {
  background: -webkit-linear-gradient(left, #ff9000, #ff5000) no-repeat;
  color: #fff;
  box-shadow: 0 2px 4px #f7c7b1;
  height: 45px;
  border-radius: 35px;
  margin-top: 15px;
  font-size: 16px;
  width: 100%;
  border: none;
}
.reg-agreement {
  margin-top: 26px;
  height: 40px;
  font-size: 12px;
  color: #666;
  a {
    color: #ff5000;
  }
}
</style>
