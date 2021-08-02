// import { connect } from "react-redux";
// import {register} from '../store/action';
// import React from 'react';
// import { useState } from "react";
// import './Register.css';



// const Register = (props) => {

// const [userName,setuserName]=useState(null);
// const [city,setcity]=useState(null);
// const [street,setstreet]=useState(null);
// const [mail,setmail]=useState(null);
// const [phone,setphone]=useState(null);


// const changeUserName=(e)=>{
//     console.log(e.target.value);
// setuserName(e.target.value);
// }
// const changeCity=(e)=>{
//     console.log(e.target.value);
// setcity(e.target.value);
// }
// const changeStreet=(e)=>{
//     console.log(e.target.value);
// setstreet(e.target.value);
// }
// const changeMail=(e)=>{
//     console.log(e.target.value);
// setmail(e.target.value);
// }

// const changePhone=(e)=>{
//     setphone(e.target.value);
//     }
//     return ( <>
    
     

       
//        <div class="container">
//       <div class="forms-container">
//         <div class="signin-signup">
//           <form action="#" class="sign-in-form">
//             <h2 class="title">Sign up</h2>
//             <div class="input-field">
//               <i class="fas fa-user"></i>
//               <input type="text" placeholder="user name" name="userName"   onChange={changeUserName}/>
//             </div>
//             <div class="input-field">
//               <i class="fas fa-user"></i>
//               <input type="text" placeholder="city" name="city"   onChange={changeCity}/>
//             </div>
//             <div class="input-field">
//               <i class="fas fa-user"></i>
//               <input type="text" placeholder="street" name="street"   onChange={changeStreet}/>
//             </div>
//             <div class="input-field">
//               <i class="fas fa-user"></i>
//             <input type="text" placeholder="mail" name="mail"   onChange={changeMail}/>
//             </div>
//             <div class="input-field">
//               <i class="fas fa-lock"></i>
//              <input type="number" placeholder="phone" name="phone"   onChange={changePhone}/>
//             </div>
//             {/* <input type="submit" value="Login" class="btn solid" /> */}
//             <input type="button"  value="Sign up" class="btn solid" onClick={()=>{props.register({userName:userName,adress:{city:city,street:street},email:mail,phone:phone})}}/>
//             <p class="social-text">Or Sign in with social platforms</p>
//             <div class="social-media">
//               <a href="#" class="social-icon">
//                 <i class="fab fa-facebook-f"></i>
//               </a>
//               <a href="#" class="social-icon">
//                 <i class="fab fa-twitter"></i>
//               </a>
//               <a href="#" class="social-icon">
//                 <i class="fab fa-google"></i>
//               </a>
//               <a href="#" class="social-icon">
//                 <i class="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//           </form>
//           <form action="#" class="sign-up-form">
//             <h2 class="title">Sign up</h2>
//             <div class="input-field">
//               <i class="fas fa-user"></i>
//               <input type="text" placeholder="Username" />
//             </div>
//             <div class="input-field">
//               <i class="fas fa-envelope"></i>
//               <input type="email" placeholder="Email" />
              
//             </div>
//             <div class="input-field">
//               <i class="fas fa-lock"></i>
//             <input type="password" placeholder="Password" /> 
            
//             </div>
//             <input type="submit" class="btn" value="Sign up" />
//             <p class="social-text">Or Sign up with social platforms</p>
//             <div class="social-media">
//               <a href="#" class="social-icon">
//                 <i class="fab fa-facebook-f"></i>
//               </a>
//               <a href="#" class="social-icon">
//                 <i class="fab fa-twitter"></i>
//               </a>
//               <a href="#" class="social-icon">
//                 <i class="fab fa-google"></i>
//               </a>
//               <a href="#" class="social-icon">
//                 <i class="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>

//       <div class="panels-container">
//         <div class="panel left-panel">
//           <div class="content">
//             <h3>New here ?</h3>
//             <p>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
//               ex ratione. Aliquid!
//             </p>
//             <button class="btn transparent" id="sign-up-btn">
//               Sign up
//             </button>
//           </div>
//           <img src="img/log.svg" class="image" alt="" />
//         </div>
//         <div class="panel right-panel">
//           <div class="content">
//             <h3>One of us ?</h3>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//               laboriosam ad deleniti.
//             </p>
//             <button class="btn transparent" id="sign-in-btn">
//               Sign in
//             </button>
//           </div>
//           <img src="img/register.svg" class="image" alt="" />
//         </div>
//       </div>
//     </div>
//     </>
//      );
// }
 
// export default connect({register})(Register) ;