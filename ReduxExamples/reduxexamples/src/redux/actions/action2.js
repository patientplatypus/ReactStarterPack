
export const actionREDUCER2 = (payload) => {
  console.log('inside actionREDUCER2 and payload ', payload);
  return{
    type: 'REDUCER_2_SUCCESS',
    data: payload.data
  }
}
