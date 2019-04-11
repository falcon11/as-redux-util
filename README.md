# as-redux-util

Redux util to help simplify redux usage. Inspired by [dva](https://dvajs.com/).

## usage

[**calc.js**](./example/src/reducers/calc.js)
```js
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

export default calcManager;
```
[*theme.js*](./example/src/reducers/theme.js)
```js
import * as ReduxUtil from 'as-redux-util';

export const LIGHT_STYLES = {
  backgroundColor: '#f7f7f7',
  textColor: '#333',
  buttonBgColor: 'black',
  buttonTextColor: 'white',
};

export const DARK_STYLES = {
  backgroundColor: '#282c34',
  textColor: 'white',
  buttonBgColor: 'white',
  buttonTextColor: 'black',
};

export const THEMES = {
  light: LIGHT_STYLES,
  dark: DARK_STYLES,
};

const themeManager = {
  namespace: 'theme',
  state: {
    theme: THEMES.dark,
  },
  reducers: {
    updateState: (state, payload) => ({ ...state, ...(payload || {}) }),
  },
};

const createAction = ReduxUtil.wrapCreateAction(themeManager);

export const themeActions = {
  changeTheme: ({ theme }) => {
    return dispatch => {
      dispatch(createAction('updateState')({ theme }));
    };
  },
};

export default themeManager;
```

[**reducers**](./example/src/reducers/index.js)
```js
import { combineReducers } from 'redux';
import theme from './theme';
import calc from './calc';
import * as ReduxUtil from 'as-redux-util';

// convenience create reducers
export default combineReducers(ReduxUtil.generateReducers([theme, calc]));
// or you can do like
// export default combineReducers({
//   theme: ReduxUtil.generateReducer(theme),
//   calc: ReduxUtil.generateReducer(calc),
// });

```

[**run the example**](./example)