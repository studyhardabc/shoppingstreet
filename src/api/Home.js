import request from '../utils/request'

export const banner = () => {
  return request({
    url: '/home/multidata',
    method: 'GET'
  })
}
