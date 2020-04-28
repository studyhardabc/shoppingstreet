<template>
  <div class="param-info" v-if="Object.keys(GoodsParamList).length !== 0">
    <table class="info-size">
      <tr v-for="(item, index) in GoodsParamList.rule[0]" :key="index">
        <td v-for="(list, index) in item" :key="index">{{ list }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item, index) in GoodsParamList.info" :key="index">
        <td class="info-param-key">{{ item.key }}</td>
        <td class="param-value">{{ item.value }}</td>
      </tr>
    </table>
    <!---->
  </div>
</template>

<script>
export default {
  name: 'ParamInfo',

  props: {
    GoodsParamList: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

.param-info table {
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr {
  line-height: 42px;
  height: 42px;
}

.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}

.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.param-value {
  color: #eb4868;
}

.info-img img {
  width: 100%;
}
</style>
