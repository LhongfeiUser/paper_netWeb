import service from "./request";

export const uploadArticle = data => {
  return service({
    url: 'upload_student_lunwen',
    method: 'post',
    data
  })
};
export const studentID = data => {
  return service({
    url: 'upload_student_card',
    method: 'post',
    data
  })
};
export const student_info = data => {
  return service({
    url: 'upload_student_info',
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

//获取支付二维码
export const getQrcode = data => {
  return service({
    url: 'get_agent_qrcode',
    method: 'post',
    data
  })
};
