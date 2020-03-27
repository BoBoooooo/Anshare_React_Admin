import { history } from 'umi';
import { login } from '@/services/login';
import { setAuthority } from '@/utils/authority';

const Model = {
  namespace: 'login',
  state: {
    status: undefined,
  },
  effects: {
    *login({ payload }, { call, put }) {

      const response = yield call(login, payload);
      const {data,code}  = response;

      yield put({
        type: 'changeLoginStatus',
        payload: response,
      }); // Login successfully
      // 如果登录成功
      if (code === 200) {
        sessionStorage.setItem('auth',data.token);
        history.push('/');
      }
    },

    logout() {
      if (window.location.pathname !== '/user/login') {
        sessionStorage.removeItem('auth');
        history.push({
          pathname: '/user/login',
        });
      }
    },
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(['user']);
      return { ...state, status: payload.status, type: payload.type };
    },
  },
};
export default Model;
