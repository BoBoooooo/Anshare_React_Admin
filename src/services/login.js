import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

// 用户登录
export async function login(userInfo) {
  return request('/user/login',{
    method: 'POST',
    params: userInfo,
  });
}