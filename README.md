# as-redux-util

Redux util to help simplify redux usage. Inspired by [dva](https://dvajs.com/).

## usage
```js
import * as ReduxUtil from '../index';

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
    return (dispatch) => {
      dispatch(createAction('updateState')({ test }));
    };
  },
};

export default ReduxUtil.generateReducer(manager);
```