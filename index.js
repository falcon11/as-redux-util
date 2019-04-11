export const createAction = type => payload => ({ type, payload });
export const wrapCreateAction = mgt => {
  const { namespace } = mgt;
  return type => {
    const prefixType = `${namespace}/${type}`;
    return payload => createAction(prefixType)(payload);
  };
};
export const generateReducer = (mgt = {}) => {
  const { namespace, state, reducers } = mgt;
  const reducer = (originalState = state, { type, payload }) => {
    const prefix = `${namespace}/`;
    if (type.indexOf(prefix) !== 0) return originalState;
    const subType = type.substr(prefix.length);
    const reducerFunc = reducers[subType];
    if (reducerFunc) {
      return reducerFunc(originalState, payload);
    }
    return originalState;
  };
  return reducer;
};
export const generateReducers = (managers = []) => {
  const reducers = {};
  managers.forEach(manage => {
    const { namespace } = manage;
    reducers[namespace] = generateReducer(manage);
  });
  return reducers;
};
