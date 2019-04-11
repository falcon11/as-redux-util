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
