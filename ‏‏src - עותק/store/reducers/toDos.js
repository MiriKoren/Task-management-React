import * as actionTypes from '../actionTypes';
const initialState={
    toDosList:[]
}
export const toDosReducer=(state=initialState,action)=>{
    switch(action.type){
        case(actionTypes.SAVE_TODOS):
        return{...state,toDosList:action.payload}
    }
   return state; 
}