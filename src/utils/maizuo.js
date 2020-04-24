import axios from 'axios'

const instance = axios.create({
  // 基准路径
  baseURL: 'http://localhost:8080',
  // 超时时间的设置
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  // 对响应数据做点什么
  const res = response.data
  if (res.status !== 0) {
    alert(res.msg)
    return Promise.reject(new Error(res.msg))
  }
  return response.data
}, (error) => {
  alert('网络异常，请稍后重试')
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
