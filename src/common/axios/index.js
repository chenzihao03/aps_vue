import axios from 'axios'
// axios 配置
axios.defaults.timeout = 50000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = 'http://' + window.location.hostname + ':8019/aps/';

// 配置发送请求拦截器
axios.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

export default axios;
