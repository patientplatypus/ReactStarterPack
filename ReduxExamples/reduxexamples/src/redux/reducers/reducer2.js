const reducer2 = (state = [], action) => {
  switch (action.type) {
    case 'REDUCER_2_SUCCESS':
      console.log('inside reducer1 success: ', action.data);
      return state = action.data;
    case 'REDUCER_2_ERROR':
      return state = action.data;
    default:
      return state;
  }
}

export default reducer2
