// 拆分出来的城市相关的仓库子模块
import { getCity } from '@/api/City'

const city = sessionStorage.getItem('city')

const state = {
  CityList: [],
  // 当前选择的城市 { cityId: 123, name: '深圳'}
  curCity: city ? JSON.parse(city) : null,
  AddGoods: []
  // AddGoodslength: 0
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
  },

  getAddGoodsLength (state) {
    var num = null
    state.AddGoods.forEach((item, index) => {
      item.list.forEach((data, index) => {
        num += data.num
      })
    })
    return num
  },

  getAddGoodsAllprice (state) {
    var price = null
    state.AddGoods.forEach(item => {
      item.list.forEach(item => {
        if (item.data === true) {
          price += (Number(item.price) * item.num) * 100
          // price += Number(item.price) * 100
        }
      })
    })
    return price
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
  },

  AddGoodsAlldata (state, payload) {
    state.AddGoods.forEach(item => {
      item.list.forEach(item => {
        item.data = payload
      })
    })
  },

  AddGoodplus (state, payload) {
    state.AddGoods[payload.i].list[payload.index].num++
  },

  AddGoodsub (state, payload) {
    state.AddGoods[payload.i].list[payload.index].num--
    if (state.AddGoods[payload.i].list[payload.index].num <= 1) {
      state.AddGoods[payload.i].list[payload.index].num = 1
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
