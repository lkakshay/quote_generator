
import * as types from './actionTypes'
import axios from 'axios';

export const getQuote =(searchTag)=>(dispatch)=>{
    console.log('searchTag',searchTag);
    dispatch({type:types.GET_RANDOM_QUOTES_REQUEST})
    axios
      .get(`https://api.quotable.io/quotes/random?tags=${searchTag}&limit=1`)
      .then((res) => {
        dispatch({type:types.GET_RANDOM_QUOTES_SUCCESS,payload:res.data[0]})
      })
      .catch((err) => dispatch({type:types.GET_RANDOM_QUOTES_FAILURE}))

  };

  