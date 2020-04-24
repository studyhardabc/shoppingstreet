<template>
    <div data-v-bf8cc8cc data-v-3dd2e005 class="feature" data-v-ee08a44a>
      <div data-v-bf8cc8cc class="feature-item" v-for="item in featureList" :key="item.sort">
        <a
          data-v-bf8cc8cc
          :href="item.link"
        >
          <img
            data-v-bf8cc8cc
            :src="item.image"
            alt
          />
          <div data-v-bf8cc8cc>{{ item.title }}</div>
        </a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Feature',

  props: {
    featureList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .feature {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 30px;
    border-bottom: 10px solid #eee;
  }

  .feature-item {
    flex: 1;
    text-align: center;

    a{
      color: #666;
    }
  }

  .feature img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>
