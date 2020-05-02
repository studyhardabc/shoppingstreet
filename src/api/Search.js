import request from '../utils/search'

export const getHotSearch = () => {
  return request({
    url: '/fm/mobileWeb/hotsearch',
    method: 'GET'
  })
}

export const getSearch = (s, type = 3) => {
  return request({
    url: '/fm/sound/getsearch',
    method: 'GET',
    params: {
      s,
      type,
      page_size: 10,
      p: 1
    }
  })
}

export const Search = (s) => {
  return request({
    url: '/fm/dramaapi/search',
    method: 'GET',
    params: {
      s,
      p: 1
    }
  })
}

export const getLivePage = (q) => {
  return request({
    url: '/live/api/chatroom/search',
    method: 'GET',
    params: {
      q,
      p: 1,
      page_size: 10
    }
  })
}

export const getSuggest = (s) => {
  return request({
    url: '/fm/sound/suggest',
    method: 'GET',
    params: {
      s
    }
  })
}
