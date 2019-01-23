import service from "./request";

//获取首页导航APi

export const getCategory = data => {
  return service({
    url: 'getCate',
    method: 'post',
    data
  })
};
