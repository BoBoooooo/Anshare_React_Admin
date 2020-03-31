import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

// 用户登录
export async function login(userInfo) {
  return request('http://116.62.78.229:8086/FlowSCBackend/user/login',{
    method: 'POST',
    params: userInfo,
  });
}