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

export const getInterfaces = data => {
  return service({
    url: 'get_Interfaces',
    method: 'post',
    data
  })
};
