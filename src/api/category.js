import service from "./request";

export const getCategory = data => {
  return service({
    url: 'getCate',
    method: 'post',
    data
  })
};
