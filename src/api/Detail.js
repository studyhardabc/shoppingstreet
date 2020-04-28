import request from '../utils/request'

export const Detailbanner = (iid) => {
  return request({
    url: '/detail',
    method: 'GET',
    params: {
      iid: iid.iid
    }
  })
}

export const getRecommend = () => {
  return request({
    url: '/recommend',
    method: 'GET'
  })
}

export class Goodsnews {
  constructor (itemInfo, columns, services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.highNowPrice = itemInfo.highNowPrice // 购物车要显示的价钱
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

export class ShopList {
  constructor (shopInfo) {
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.score = shopInfo.score
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor (itemParams) {
    this.image = itemParams.info.images ? itemParams.info.images[0] : ''
    this.info = itemParams.info.set
    this.rule = itemParams.rule.tables
  }
}
