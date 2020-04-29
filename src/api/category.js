import request from '../utils/request'

export const getCategory = () => {
  return request({
    url: '/category',
    method: 'GET'
  })
}

export const getSubcategory = (maitKey) => {
  return request({
    url: '/subcategory',
    method: 'GET',
    params: {
      maitKey
    }
  })
}

export const getCategoryDetail = (miniWallkey, type) => {
  return request({
    url: '/subcategory/detail',
    method: 'GET',
    params: {
      miniWallkey,
      type
    }
  })
}
