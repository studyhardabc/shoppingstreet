<template>
  <div class="page-uppage">
    <div class="tab-content" v-if="Object.keys(SearchUserList).length !== 0">
      <a class="search-user-block" href="https://www.missevan.com/5728218" v-for="(item, index) in SearchUserList.Datas" :key="index">
        <img
          :alt="item.username"
          :src="item.avatar2"
          :title="item.username"
          class="lazy-image lazy-loaded user-avatar"
        />
        <!-- react-empty: 6837 -->
        <div class="user-info">
          <span class="name">{{ item.username }}</span>
          <div class="details">
            <span>
              <!-- react-text: 6842 -->
              音频
              <!-- /react-text -->
              <!-- react-text: 6843 -->
              {{ item.soundnumchecked }}
              <!-- /react-text -->
            </span>
            <span>
              <!-- react-text: 6845 -->
              粉丝
              <!-- /react-text -->
              <!-- react-text: 6846 -->
              {{ item.fansnum }}
              <!-- /react-text -->
            </span>
          </div>
          <div class="intro">{{ item.userintro }}</div>
        </div>
      </a>
    </div>
      <button class="btn-text open-app">更多</button>
  </div>
</template>

<script>
export default {
  name: 'upPage',

  props: {
    SearchUserList: Object,
    default () {
      return {}
    }
  }
}
</script>

<style lang="scss" scoped>
.page-uppage {
  height: 100%;
}
.tab-content {
  padding: 0;
}
.search-user-block {
    display: flex;
    position: relative;
    width: 100%;
    height: 80px;
    margin-left: 10px;
    padding: 10px;
    padding-left: 0;
    border-bottom: 1px solid #e0e0e0;
}
.search-user-block .user-avatar {
    position: relative;
    width: 60px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}
.search-user-block .user-info {
    margin-left: 10px;
    width: -webkit-calc(100% - 70px);
    width: -moz-calc(100% - 70px);
    width: calc(100% - 70px);
}
.search-user-block .user-info .name {
    display: block;
    color: #000;
    font-size: 15px;
    height: 22px;
    line-height: 22px;
    margin-bottom: 2px;
    width: 100%;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
}
.search-user-block .user-info .details {
    height: 18px;
    line-height: 30px;
    width: 170px;
    clear: both;
}
.search-user-block .user-info .details>span {
    float: left;
    width: 85px;
    font-size: 12px;
    color: #9e9e9e;
}
.search-user-block .user-info .intro {
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    color: #9e9e9e;
    width: 100%;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
}
.open-app {
    display: block;
    width: 80%;
    height: 30px;
    margin: 10px auto;
    background-color: #e0e0e0;
}
.btn-text {
    border: none;
    font-size: 14px;
}
</style>
