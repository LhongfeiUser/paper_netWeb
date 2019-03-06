import service from "./request";

//检测系统分类

export const systemClassify = data => {
  return service({
    url: 'get_min_cate',
    method: 'post',
    data
  })
};

//上传论文

export const uploadArticle = data => {
  return service({
    url: 'upload_student_lunwen',
    method: 'post',
    data
  })
};

//上传学生证

export const studentID = data => {
  return service({
    url: 'upload_student_card',
    method: 'post',
    data
  })
};

//上传学生信息

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
export const get_payQrcode = params => {
  return service({
    url: 'return_pay_qrcode',
    method: 'get',
    params
  })
};
