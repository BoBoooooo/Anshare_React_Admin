import { getUserInfo } from '@/services/user';

const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    *getUserInfo(_, { call, put }) {
      console.log(2);
      const response = yield call(getUserInfo);
      yield put({
        type: 'changeUserInfo',
        payload: response.data,
      });
    },
  },
  reducers: {
    changeUserInfo(state, action) {
      return { ...state, currentUser: action.payload || {} };
    },
  },
};
export default UserModel;
