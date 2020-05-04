<template>
  <div class="SoundList" v-if="Object.keys(getSearchList2).length !== 0">
    <div class="Thumbnail list-sound large" v-for="(item, index) in getSearchList2.Datas" :key="index">
      <div class="cover">
        <img
          :alt="item.soundstr"
          v-lazy="item.front_cover"
          :title="item.soundstr"
          class="lazy-image lazy-loaded cover-img"
        />
      </div>
      <a class="detail" href="/sound/1412477">
        <div class="title">{{ item.soundstr }}</div>
        <div class="username">
          <!-- react-text: 92 -->
          UP主：
          <!-- /react-text -->
          <!-- react-text: 93 -->
          {{ item.username }}
          <!-- /react-text -->
        </div>
        <div class="statistics">
          <div class="item play-times">{{ item.view_count_formatted }}</div>
          <div class="item duration">{{ item.sub_comments_count }}</div>
        </div>
      </a>
    </div>
    <button class="btn-text open-app">更多</button>
  </div>
</template>

<script>
export default {
  name: 'ListSoundLarge',

  props: {
    getSearchList2: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Thumbnail.list-sound.large {
  height: 90px;
  line-height: 90px;
}
.Thumbnail.list-sound {
  display: block;
  position: relative;
  height: 70px;
  line-height: 70px;
  width: 100%;
  margin: 0;
}
.Thumbnail.list-sound.large .cover {
  height: 70px;
  width: 70px;
}
.cover-img {
  height: 70px;
  width: 70px;
}
.Thumbnail.list-sound.large .detail {
  width: calc(100% - 90px);
  height: 70px;
}
.Thumbnail.list-sound .detail {
  float: right;
  padding: 10px 0;
  height: 100%;
  width: -webkit-calc(100% - 70px);
  width: -moz-calc(100% - 70px);
  width: calc(100% - 70px);
  color: #424242;
}
.Thumbnail.list-sound .detail {
  overflow: hidden;
  position: relative;
}
.Thumbnail.list-sound:after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 10px;
  border-bottom: 1px solid #e0e0e0;
}
.Thumbnail.list-sound.large .detail .title {
  font-size: 16px;
}
.Thumbnail.list-sound .detail .title {
  width: 94%;
  height: 36px;
  word-break: break-all;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  box-orient: vertical;
  line-clamp: 2;
  line-height: 18px;
  font-size: 12px;
}
.Thumbnail.list-sound .detail .username {
  width: 86%;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  color: #9e9e9e;
}
.Thumbnail.list-sound .detail .statistics,
.Thumbnail.list-sound .detail .statistics .item,
.Thumbnail.list-sound .detail .statistics .item:before {
  height: 12px;
  line-height: 12px;
}
.Thumbnail.list-sound .detail .statistics {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 11px;
}
.Thumbnail.list-sound .detail .statistics .item {
  font-size: 12px;
  color: #9e9e9e;
  margin-right: 20px;
  padding-left: 18px;
  width: 66px;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  position: relative;
}
.Thumbnail.list-sound .detail .statistics,
.Thumbnail.list-sound .detail .statistics .item,
.Thumbnail.list-sound .detail .statistics .item:before {
  height: 12px;
  line-height: 12px;
}
.Thumbnail.list-sound .detail .statistics .item.duration:before,
.Thumbnail.list-sound .detail .statistics .item.play-times:before {
  background-image: url("https://s0.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.c71cb7b7.png");
  -webkit-background-size: 56px 55px;
  -moz-background-size: 56px 55px;
  background-size: 56px 55px;
}
.Thumbnail.list-sound .detail .statistics .item.play-times:before {
  background-position: -29px -44px;
}
.Thumbnail.list-sound .detail .statistics .item:before {
  content: "";
  display: block;
  position: absolute;
  left: 2px;
  top: 1px;
  width: 12px;
}
.Thumbnail.list-sound .detail .statistics,
.Thumbnail.list-sound .detail .statistics .item,
.Thumbnail.list-sound .detail .statistics .item:before {
  height: 12px;
  line-height: 12px;
}
.Thumbnail.list-sound .detail .statistics .item {
  font-size: 12px;
  color: #9e9e9e;
  margin-right: 20px;
  padding-left: 18px;
  width: 82px;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  position: relative;
}
.Thumbnail.list-sound .detail .statistics .item.duration:before {
  background-position: -15px -44px;
}
.Thumbnail.list-sound .detail .statistics .item:before {
  content: "";
  display: block;
  position: absolute;
  left: 2px;
  top: 1px;
  width: 12px;
}
.Thumbnail.list-sound .cover {
  margin: 10px;
  float: left;
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
