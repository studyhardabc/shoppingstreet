// 拆分出来的城市相关的仓库子模块
import { getCity } from '@/api/City'

const city = sessionStorage.getItem('city')

const state = {
  CityList: [],
  // 当前选择的城市 { cityId: 123, name: '深圳'}
  curCity: city ? JSON.parse(city) : null,
  AddGoods: []
}

const getters = {
  // 城市数据
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
  },

  // 当前点击的城市名字
  curCityName (state) {
    return state.curCity ? state.curCity.name : ''
  }
}

const mutations = {
  SET_CURCITY (state, payload) {
    state.CityList = payload
  },

  // 修改城市名字
  GET_CURCITY (state, payload) {
    state.curCity = payload
    sessionStorage.setItem('city', JSON.stringify(state.curCity))
  },

  // 创建购物车要展示商品的数据结构
  GET_AddGOODS (state, payload) {
    var i = null

    if (state.AddGoods.length === 0) {
      state.AddGoods.push({ iid: payload.iid, list: [payload] })
      return
    }

    i = state.AddGoods.find(item => {
      return item.iid === payload.iid
    })

    if (!i) {
      state.AddGoods.push({ iid: payload.iid, list: [payload] })
    } else {
      var data = i.list.find(item => {
        return item.iid === payload.iid && item.name === payload.name && item.size === payload.size
      })
      if (!data) {
        i.list.push(payload)
      } else {
        data.num += payload.num
      }
    }
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
