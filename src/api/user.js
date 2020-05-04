import request from '../utils/search'

export const getMailCode = (mail) => {
  return request({
    url: '/user/getMailCode',
    method: 'POST',
    data: {
      mail
    }
  })
}

export const getregister = (email, password, nickname, code) => {
  return request({
    url: '/user/register',
    method: 'POST',
    data: {
      email,
      password,
      nickname,
      code
    }
  })
}

export const getlogin = (email, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: {
      email,
      password
    }
  })
}
