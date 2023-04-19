
import { getLoacalData, setLoacalData } from '../helpers/localstorage';
import * as types from './actionTypes'
import axios from 'axios';

export const getQuote =(searchTag)=>(dispatch)=>{
    dispatch({type:types.GET_RANDOM_QUOTES_REQUEST})
    axios
      .get(`https://api.quotable.io/quotes/random?tags=${searchTag}&limit=1`)
      .then((res) => {
        dispatch({type:types.GET_RANDOM_QUOTES_SUCCESS,payload:res.data[0]})
      })
      .catch((err) => dispatch({type:types.GET_RANDOM_QUOTES_FAILURE}))

  };

  export const bookMarkItem =(item)=>(dispatch)=>{
    const data= getLoacalData()
    setLoacalData([...data,item])
    dispatch({type:'BOOKMARK',payload:item})
    

  };

  export const unBookMarkItem =(item)=>(dispatch)=>{
    const data= getLoacalData()
    setLoacalData(data.filter(e=>e._id!==item._id))
    dispatch({type:'UNBOOKMARK',payload:item})
    

  };



  