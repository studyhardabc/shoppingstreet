import request from '../utils/maizuo'

// 这个接口是卖座网的,获取城市数据
export const getCity = () => {
  return request({
    url: '/maizuo/gateway?k=431064',
    method: 'GET',
    headers: {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.0.4","e":"15877025921894080577557","bc":"440300"}',
      'X-Host': 'mall.film-ticket.city.list'
    }
  })
}
