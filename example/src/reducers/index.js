import { combineReducers } from 'redux';
import theme from './theme';
import calc from './calc';

export default combineReducers({
  theme: theme,
  calc: calc,
});
