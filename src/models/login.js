/*
 * @file: 登录model
 * @copyright: NanJing Anshare Tech .Com
 * @author: BoBo
 * @Date: 2020年03月27 15:18:04
 */
import { history } from 'umi';
import { login } from '@/services/login';
import { setAuthority } from '@/utils/authority';

const Model = {
  namespace: 'login',
  state: {
    status: undefined,
  },
  effects: {
    // 登录submit提交后  dispatch到此处发出请求
    *login({ payload }, { call, put }) {

      const response = yield call(login, payload);
      const {data,code}  = response;

      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });

      // 如果登录成功,将token存在sessionStorage,网页重定向到首页
      if (code === 200) {
        sessionStorage.setItem('auth',data.token);
        history.push('/');
      }
      else{
        yield put({
          type: 'changeLoginStatus',
          payload: {status:'error'},
        });
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
    // 此处reducers负责修改state中的status值,进行重写
    changeLoginStatus(state, { payload }) {
      setAuthority(['admin']);
      // 只复写status这个属性
      return { ...state, status: payload.status };
    },
  },
};
export default Model;
