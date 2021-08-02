import axios from 'axios';
import * as actionTypes from '../actionTypes';
import toDos from './toDos';
import { setError } from './error';
import { getAllToDos } from './toDos';

export const saveUser=(user)=>{
    return{
         type:actionTypes.SAVE_USER,
         payload:user
       }
}
export const logOut=()=>{
    return{
         type:actionTypes.LOG_OUT,
      
       }
}
export const logUser=(user)=>{
    return(dispatch)=>{
 axios.get(`https://jsonplaceholder.typicode.com/users?password==${user.id}&&mail==${user.email}`)
.then(response=>{
     console.log(response);
     console.log('is true');
     dispatch(saveUser(user));
     dispatch(getAllToDos(user.id));

 })
 .catch(err=>{
     console.log(err); 
     console.log('is false');
     dispatch(setError(err.message))
     dispatch(setError(logOut()))
 })
}}

// export const register=(user)=>{
//     return(dispatch)=>{
//  axios.post(fetch('https://jsonplaceholder.typicode.com/users',{user})
//  .then(response=>{
//      console.log(response);
//      dispatch(saveUser(user));
    
//  })
//  .catch(err=>{
//      console.log(err); 
//      dispatch(setError(err.message))
//      dispatch(setError(logOut()))
//  })
//    ) }}