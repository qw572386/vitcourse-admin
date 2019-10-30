import axios from 'axios'
import store from '../store'
import { Message, MessageBox } from 'element-ui'
import { getToken } from '@/utils/auth'

// 创建axios实例
const instance = axios.create({
  baseURL: process.env.baseURL, // api的base_url
  timeout: 5000 // 请求超时时间
})

// 请求拦截器
instance.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-Token'] = getToken() 
  }
  return config
}, err => {
  console.error(err)
  Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(res => {
  return res.data;
  // // 判断是否登录，根据权限返回登录页
  // const result = res.data
  // if (result.code === 0) {
  //   return result
  // }
  // let errMsg = res.message || '服务器响应错误，请稍后重试';
  // // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //   errMsg = '身份验证失败';
  //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //     confirmButtonText: '重新登录',
  //     cancelButtonText: '取消',
  //     type: 'warning'
  //   }).then(() => {
  //     store.dispatch('FedLogOut').then(() => {
  //       location.reload();// 为了重新实例化vue-router对象 避免bug
  //     });
  //   })
  // } else {
  //   Message({
  //     message: result.message,
  //     type: 'error',
  //     duration: 3 * 1000
  //   })
  // }
  // return Promise.reject(new Error(errMsg))
}, err => {
  console.error(err)
  Message({
    message: err.message,
    type: 'error',
    duration: 3 * 1000
  })
  return Promise.reject(err)
})