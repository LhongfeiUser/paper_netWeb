import service from './request'

export const getListData = data => {
  return service({
    url: 'getNewList',
    method: 'post',
    data
  })
};
