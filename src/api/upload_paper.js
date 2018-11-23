import service from "./request";

export const uploadArticle = data => {
  return service({
    url: 'upload',
    method: 'post',
    data
  })
};
export const studentID = data => {
  return service({
    url: 'upload',
    method: 'post',
    data
  })
};
