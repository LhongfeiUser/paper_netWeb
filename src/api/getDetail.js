import service from "./request";

export const getFaqDetail = data => {
  return service({
    url: 'getNewDetail',
    method: 'post',
    data
  })
};
