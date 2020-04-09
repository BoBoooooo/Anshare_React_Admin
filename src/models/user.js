import { getUserInfo } from '@/services/user';

const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    *getUserInfo(_, { call, put }) {
      const response = yield call(getUserInfo);
      yield put({
        type: 'getUserInfo',
        payload: response.data,
      });
    },
  },
  reducers: {
    getUserInfo(state, action) {
      return { ...state, currentUser: action.payload || {} };
    },
  },
};
export default UserModel;
