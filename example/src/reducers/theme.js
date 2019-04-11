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
