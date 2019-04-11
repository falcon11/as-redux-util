import * as ReduxUtil from 'as-redux-util';

const calcManager = {
  namespace: 'calc',
  state: { sum: 0 },
  reducers: {
    updateState: (state, payload) => ({ ...state, ...(payload || {}) }),
  },
};

const createAction = ReduxUtil.wrapCreateAction(calcManager);

export const calcActions = {
  add(payload = {}) {
    const { addNum } = payload;
    return (dispatch, getState) => {
      const {
        calc: { sum },
      } = getState();
      dispatch(createAction('updateState')({ sum: sum + addNum }));
    };
  },
};

export default ReduxUtil.generateReducer(calcManager);
