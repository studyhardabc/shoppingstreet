import request from '../utils/request'

export const banner = () => {
  return request({
    url: '/home/multidata',
    method: 'GET'
  })
}

export const goodList = (type, page) => {
  return request({
    url: '/home/data',
    method: 'GET',
    params: {
      type,
      page
    }
  })
}
