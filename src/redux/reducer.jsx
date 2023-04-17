import * as types from './actionTypes'

const initialState = {
  
  randomQuotes: [],
  isLoading: false,
};

export const reducer = (state = initialState,action) => {

  const {type,payload}=action
 
  
  switch(type){
    case types.GET_RANDOM_QUOTES_REQUEST:{
      return{
        ...state,isLoading:true,
      }

    }

    case types.GET_RANDOM_QUOTES_SUCCESS:{
      return{
        ...state,randomQuotes:payload,
        isLoading:false,
      }

    }
    case types.GET_RANDOM_QUOTES_FAILURE:{
      return{
        ...state,isLoading:false,      }

    }
   
   
    default:
     return state;
  }
  
  
};