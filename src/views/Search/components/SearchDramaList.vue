<template>
  <div class="search-drama-list">
    <a class="Thumbnail list-drama" v-for="(item, index) in SearchList2.Datas || getSearchList" :key="index">
      <img
        :alt="item.name"
        :src="item.cover"
        :title="item.name"
        class="lazy-image lazy-loaded cover"
      />
      <div class="detail">
        <div class="name">{{ item.name }}</div>
        <div class="drama-types">
          <span>{{ item.catalog_name }}</span>
          <span>
            <!-- react-text: 941 -->
            类型：
            <!-- /react-text -->
            <!-- react-text: 942 -->
            {{ item.type_name }}
            <!-- /react-text -->
          </span>
        </div>
        <div class="update-detail">
          <span class="status">{{ item.newest }}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SearchDramaList',

  computed: {
    getSearchList () {
      var data = []
      if (Object.keys(this.SearchList).length !== 0) {
        this.SearchList.Datas.forEach((item, index) => {
          if (index >= 3) {
            return
          }
          data.push(item)
        })
      }
      return data
    }
  },

  props: {
    SearchList: {
      type: Object,
      default () {
        return {}
      }
    },

    SearchList2: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Thumbnail.list-drama {
  display: block;
  position: relative;
  width: 100%;
  height: 70px;
  margin: 0;
  padding: 10px;
}
.Thumbnail.list-drama .cover {
  width: 70px;
  height: 70px;
}
.Thumbnail.list-drama:after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 10px;
  border-bottom: 1px solid #e0e0e0;
}
.Thumbnail.list-drama .detail {
  position: absolute;
  top: 10px;
  right: 0;
  left: 0;
  padding-left: 90px;
}
.Thumbnail.list-drama .detail .name {
  width: 100%;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #000;
}
.Thumbnail.list-drama .detail .drama-types {
  margin-top: 8px;
  color: #9e9e9e;
  font-size: 12px;
}
.Thumbnail.list-drama .detail .update-detail {
  margin-top: 8px;
  color: #9e9e9e;
  font-size: 12px;
}
.Thumbnail.list-drama .detail .drama-types span {
  width: 50%;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
}
.Thumbnail.list-drama .detail .update-detail {
  color: #9e9e9e;
  font-size: 12px;
}
.Thumbnail.list-drama .detail .drama-types[data-v-1c3b91b7] {
  margin-top: 15px;
  color: #9e9e9e;
  font-size: 0.75rem;
}
</style>
