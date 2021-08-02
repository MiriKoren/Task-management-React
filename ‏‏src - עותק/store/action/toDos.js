import axios from "axios";
import * as actionTypes from "../actionTypes";
export const getAllToDos=(userId)=>{
    return(dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId==${userId}`)
        .then(response=>{
            console.log(response);
            dispatch(saveToDosUser(response.data));
            ;
        })
        .catch(err=>{
            dispatch(err)
        })
    }
}
export const saveToDosUser=(toDos)=>{
    return{
        type: actionTypes.SAVE_TODOS,
        payload:toDos
    }
}