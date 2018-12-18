import service from "../request";

export const withdraw = data => {
  return service({
    url: 'requestWithdrawal',
    method: 'post',
    data
  })
};

//代理商用户列表
export const getuserList = data => {
  return service({
    url: 'get_agent_user_lists',
    method: 'post',
    data
  })
};

//代理商订单详情
export const getorderDetail = data => {
  return service({
    url: 'get_agent_order_detail',
    method: 'post',
    data
  })
};

//代理商分成列表
export const getprofitSharing = data => {
  return service({
    url: 'get_agent_profitSharing_lists',
    method: 'post',
    data
  })
};

//代理商收支明细列表
export const getstatement = data => {
  return service({
    url: 'get_agent_incomeAndExpenditure_lists',
    method: 'post',
    data
  })
};

//推广链接二维码二维码
export const getQrcode = data => {
  return service({
    url: 'get_agent_qrcode',
    method: 'post',
    data
  })
};
