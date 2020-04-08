import request from '@/utils/request';
const expectKeys = ['pageSize', 'current', '_timestamp', 'sorter'];

export async function queryRule(params) {
  console.log(params);
  const { current, pageSize, sorter } = params;
  let searchCondition = [];
  Object.keys(params).forEach((k) => {
    if (expectKeys.every((item) => item !== k)) {
      searchCondition.push({
        field: k,
        operator: 'like',
        value: params[k],
      });
    }
  });
  const {
    data: { list, total },
  } = await request('/users/list', {
    method: 'POST',
    data: {
      orderCondition: sorter,
      searchCondition,
      pageIndex: current,
      pageSize,
    },
  });
  return {
    data: list,
    success: true,
    total,
    pageSize,
    current,
  };
}
export async function removeRule(params) {
  return request('/users/deleteByIds', {
    method: 'POST',
    data: { ...params },
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
