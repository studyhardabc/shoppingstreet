<template>
  <div class="page-livepage">
    <div class="tab-content">
      <a
        href="https://fm.missevan.com/live/136882339"
        class="Thumbnail live"
        v-for="(item, index) in 10"
        :key="index"
      >
        <img
          alt="不谈恋爱就去死"
          src="//static.missevan.com/fmcovers/202004/28/71c61b743fc34aa4512c377be6a2c006.jpg"
          title="不谈恋爱就去死"
          class="lazy-image lazy-loaded cover"
        />
        <div class="room-name">不谈恋爱就去死</div>
        <div class="username">Cv怡方君_声演</div>
        <div class="room-info">
          <div class="accumulation">1390</div>
          <div class="status open">正在直播</div>
        </div>
      </a>
    </div>
    <button class="btn-text open-app">更多</button>
  </div>
</template>

<script>
export default {
  name: 'LivePage'
}
</script>

<style lang="scss" scoped>
.page-livepage {
  height: 100%;
}
.tab-content {
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 10px;
}
.Thumbnail {
  display: inline-block;
  /* margin: 5px; */
  padding: 0;
}
.Thumbnail.live {
  position: relative;
  width: -webkit-calc(50vw - 22px);
  width: -moz-calc(50vw - 22px);
  width: calc(50vw - 22px);
}
.Thumbnail.live .cover {
  width: 100%;
  height: -webkit-calc(50vw - 22px);
  height: -moz-calc(50vw - 22px);
  height: calc(50vw - 22px);
}
.Thumbnail .cover {
  display: block;
  overflow: hidden;
  position: relative;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: 50%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100%;
  background-size: 100%;
}
.Thumbnail.live .room-name,
.Thumbnail.live .username {
  width: 100%;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}
.Thumbnail.live .room-name {
  margin-top: 5px;
  color: #3d3d3d;
  font-size: 14px;
}
.Thumbnail.live .username {
  margin-bottom: 10px;
  color: #757575;
  font-size: 12px;
  line-height: 18px;
}
.Thumbnail.live .room-info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  top: -webkit-calc(50vw - 52px);
  top: -moz-calc(50vw - 52px);
  top: calc(50vw - 52px);
  right: 0;
  left: 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 30px;
  overflow: hidden;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(0, 0, 0, 0.5)),
    to(transparent)
  );
  background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), transparent);
  background: -moz- oldlinear-gradient(bottom, rgba(0, 0, 0, 0.5), transparent);
  background: -o-linear-gradient(bottom, rgba(0, 0, 0, 0.5), transparent);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), transparent);
}
.Thumbnail.live .room-info .accumulation {
  height: 18px;
  margin-left: 10px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
}
.Thumbnail.live .room-info .accumulation:before {
  background-image: url("https://s0.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.c71cb7b7.png");
  background-position: -44px -14px;
  -webkit-background-size: 56px 55px;
  -moz-background-size: 56px 55px;
  background-size: 56px 55px;
  content: "";
  display: inline-block;
  width: 11px;
  height: 9px;
  margin-right: 4px;
}
.Thumbnail.live .room-info .status.open {
  background-color: #60c152;
}
.Thumbnail.live .room-info .status {
  width: 76px;
  height: 18px;
  -webkit-border-radius: 9px 0 0 9px;
  -moz-border-radius: 9px 0 0 9px;
  border-radius: 9px 0 0 9px;
  background-color: #757575;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
}
.Thumbnail.live .room-info .status.open:before {
  width: 10px;
  height: 10px;
  background: url("data:image/gif;base64,R0lGODlhCgAKAIABAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRCQjI0Rjc5Mjc5ODExRTk5MUFDQzUzRjE3Q0NDMkFCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRCQjI0RjdBMjc5ODExRTk5MUFDQzUzRjE3Q0NDMkFCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEJCMjRGNzcyNzk4MTFFOTkxQUNDNTNGMTdDQ0MyQUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEJCMjRGNzgyNzk4MTFFOTkxQUNDNTNGMTdDQ0MyQUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJBwABACwAAAAACgAKAAACE4wDcIvKlh50Lx5rp74ut71hQAEAIfkECQcAAQAsAAAAAAoACgAAAhOMjwigHNsMPHNKZx92t9N9VVsBACH5BAkHAAEALAAAAAAKAAoAAAITBIKJpsq9TnixpkenxGZ7HoFaAQAh+QQJBwABACwAAAAACgAKAAACEoyPAJjLpp6KbLpG84TOcq5xBQAh+QQJBwABACwAAAAACgAKAAACEoyPecCg7RJ8jTIb0QyXV28wBQAh+QQJBwABACwAAAAACgAKAAACEYxvAIjKpxyLa8ZH8bWybakUACH5BAkHAAEALAAAAAAKAAoAAAISjI95AGrsAnRsotoSVlvmPjEFACH5BAkHAAEALAAAAAAKAAoAAAIRjI+pywbAXnwwSEtdpbvfDxQAIfkECQcAAQAsAAAAAAoACgAAAhCMj6mrAOzgWzFUU12emvsCACH5BAUHAAEALAAAAAAKAAoAAAIRjI8IkLdtHpSNJqvY1Et6UAAAOw==")
    no-repeat;
}
.Thumbnail.live .room-info .status:before {
  content: "";
  display: inline-block;
  margin-right: 4px;
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
