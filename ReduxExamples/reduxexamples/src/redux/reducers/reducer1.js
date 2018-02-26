const reducer1 = (state = [], action) => {
  switch (action.type) {
    case 'REDUCER_1_SUCCESS':
      console.log('inside reducer1 success: ', action.data);
      return state = action.data;
    case 'REDUCER_1_ERROR':
      return state = action.data;
    default:
      return state;
  }
}

export default reducer1
