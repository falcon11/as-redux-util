import * as ReduxUtil from '../../index';
import { combineReducers } from 'redux';

const manager = {
  namespace: 'resMgt',
  state: { test: 1 },
  reducers: {
    updateState: (state, payload) => ({ ...state, ...(payload || {}) }),
  },
};

const createAction = ReduxUtil.wrapCreateAction(manager);

export const resMgtActions = {
  fetDNSEGFlow(payload = {}) {
    const { test } = payload;
    return dispatch => {
      dispatch(createAction('updateState')({ test }));
    };
  },
};

const resMgtReducer = ReduxUtil.generateReducer(manager);

export default combineReducers({
  resMgt: resMgtReducer,
});
