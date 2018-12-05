import service from "./request";

export const uploadArticle = data => {
  return service({
    url: 'upload/single_upload',
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
export const getAuth = params => {
  return service({
    url: 'upload/sing_auth',
    method: 'get',
    params
  })
};
