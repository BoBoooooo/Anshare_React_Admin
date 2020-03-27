import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}
export async function queryCurrent() {
  return request('http://116.62.78.229:8086/FlowSCBackend/user/userinfo',{
    method:'POST'
  });
}
export async function queryNotices() {
  return request('/api/notices');
}

