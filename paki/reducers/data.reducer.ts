const init = {};
const reducer = (state = init, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'GET_DATA':
      return {
        ...state,
        ...payload,
      };
    case 'GET_DATA_ERROR':
      return {
        ...init,
      };
    default:
      return state;
  }
};

export default reducer;
