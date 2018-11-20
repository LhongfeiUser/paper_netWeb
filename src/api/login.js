//api.js
import service from './request'

export const login_req = data => {
  return service({
    url: 'login',
    method: 'post',
    data
  })
};
