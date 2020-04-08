import request from '@/utils/request';

export async function queryRule(params) {
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
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'delete' },
  });
}
export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'update' },
  });
}
