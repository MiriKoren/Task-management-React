import * as actionTypes from '../actionTypes';
const initialState={
    cuurentUser:null
}

export const userReducer=(state=initialState,action)=>{
  switch(action.type){
      case(actionTypes.SAVE_USER):
      return{
          ...state,
          cuurentUser:action.payload
      }
      case(actionTypes.LOG_OUT):
      return{
          ...state,
          cuurentUser:null
      }
  }
  return state;
}