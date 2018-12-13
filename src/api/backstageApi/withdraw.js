import service from "../request";

export const withdraw = data => {
  return service({
    url: 'requestWithdrawal',
    method: 'post',
    data
  })
};
