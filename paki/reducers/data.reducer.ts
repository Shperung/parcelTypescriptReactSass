const init: object[] = [];
const reducer = (state = init, action: {type: string; payload: object[]}) => {
  const {type, payload} = action;

  console.log('payload', payload);

  switch (type) {
    case 'GET_DATA':
      return state.concat(payload);

    case 'GET_DATA_ERROR':
      return init;

    default:
      return init;
  }
};

export default reducer;
