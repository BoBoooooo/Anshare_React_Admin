import request from '@/utils/request';

export async function queryRule(params) {
  console.log(params);
  const {current,pageSize} = params;
  const res = await request('/users/list', {
    method: 'POST',
    data:{
      orderCondition: '',
      searchCondition: [],
      pageIndex: current,
      pageSize
    }
  });
  return {
   data: res.data.list,
   success:true,
   total: res.data.total,
   pageSize,
   current
  };
}
export async function removeRule(params) {
  return request('/users/delete', {
    method: 'POST',
    params: { ...params },
  });
}
export async function addRule(params) {
  return request('/users/add', {
    method: 'POST',
    data: { ...params },
  });
}
export async function updateRule(params) {
  return request('/users/update', {
    method: 'POST',
    data: { ...params },
  });
}
