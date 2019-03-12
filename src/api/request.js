//request.js
import axios from "axios";
import qs from "qs";
import { Message} from 'element-ui'

/****** 创建axios实例 ******/
axios.defaults.withCredentials = true;
const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 15000  // 请求超时时间
});

/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(config => {
  if(config.method==='post'){
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    if(config.data instanceof FormData){
      config.headers['Content-Type'] = 'multipart/form-data;boundary';
    }else {
      config.data = qs.stringify({...config.data});
    }
  }else {
    config.params = {...config.params};
  }
  return config;
}, error => {  //请求错误处理
  Message({
    message: '请求出错',
    type: 'error',
    duration: 5 * 1000
  });
  Promise.reject(error)
});

/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
  response => {  //成功请求到数据
    //这里根据后端提供的数据进行对应的处理
    if(response.status===200){
      return response.data;
    } else{
      Message({
        message: '响应错误',
        type: 'error',
        duration: 2 * 1000
      });
    }
  },
  error => {  //响应错误处理
    Message({
      message: '请求超时，请刷新重试',
      type: 'error',
      duration: 2 * 1000
    });
    return Promise.reject(error)
  }
);

export default service;
