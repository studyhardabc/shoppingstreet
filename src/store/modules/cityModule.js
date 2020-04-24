// 拆分出来的城市相关的仓库子模块
import { getCity } from '@/api/City'

const state = {
  CityList: []
}

const getters = {
  getcityList (state) {
    const result = []
    state.CityList.forEach(item => {
      var py = item.pinyin.substr(0, 1).toUpperCase()

      var index = result.findIndex(item => item.py === py)
      if (index > -1) {
        result[index].list.push(item)
      } else {
        result.push({
          py,
          list: [item]
        })
      }
    })
    return result.sort((a, b) => {
      return a.py.charCodeAt() - b.py.charCodeAt()
    })
  }
}

const mutations = {
  SET_CURCITY (state, payload) {
    state.CityList = payload
  }
}

const actions = {
  GET_CITIES (context, payload) {
    getCity().then(res => {
      // console.log(res)
      // 获取城市数据
      context.commit('SET_CURCITY', res.data.cities)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
