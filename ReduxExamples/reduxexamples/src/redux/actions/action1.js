import axios from 'axios';

const url = 'http://129.146.106.151:8080/pd'


export const actionREDUCER1 = () => {
  return (dispatch) => {
    var sendurl = url;
    console.log('value of sendurl: ', sendurl);
    axios.get(sendurl)
    .then((response)=>{
      console.log('inside response from reducer1: ', response);
      dispatch(AXIOSRETURNREDUCER1(response))
    })
    .catch(error => {
      console.log('inside error from login auth and response : ', error);
      dispatch(AXIOSERRORREDUCER1(error))
    })
  }
}

//HERE ARE THE ACTIONS ->>> REDUCERS

export const AXIOSRETURNREDUCER1 = (payload) => {
  console.log('inside AXIOSRETURN and payload ', payload);
  return{
    type: 'REDUCER_1_SUCCESS',
    data: payload.data
  }
}

export const AXIOSERRORREDUCER1 = (payload) => {
  console.log('inside AXIOSERROR and payload ', payload);
  return{
    type: 'REDUCER_1_ERROR',
    data: payload
  }
}
