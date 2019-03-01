import service from "./request";

export const getSlide_pic = data => {
  return service({
    url: 'get_banner',
    method: 'post',
    data
  })
};

export const getLogo = data => {
  return service({
    url: 'get_logo',
    method: 'post',
    data
  })
};

//检测系统分类
export const getInterfaces = data => {
  return service({
    url: 'get_Interfaces',
    method: 'post',
    data
  })
};

//合作学校图片
export const get_Partners = data => {
  return service({
    url: 'get_Partners',
    method: 'post',
    data
  })
};
