import * as types from './actionTypes'

const initialState = {
  
  saved_quotes: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {

  const {type,payload}=action
 
  
  switch(type){
    case types.GET_SAVED_QUOTES_REQUEST:{
      return{
        ...state,isLoading:true,
        isError:false
      }

    }

    case types.GET_SAVED_QUOTES_SUCCESS:{
      return{
        ...state,saved_quotes:payload,
        isLoading:false,
        isError:false
      }

    }
    case types.GET_SAVED_QUOTES_FAILURE:{
      return{
        ...state,isLoading:false,
        isError:true
      }

    }
   
    default:
     return state;
  }
  
  
};