

// import React, { useState } from 'react'
// import './LoginPopup.css'
// import { useForm } from "react-hook-form";
// //import { assets } from '../../assets/assets/admin_assets/assets'
// import {axiosInstance} from "../../config/axiosInstance";
// import { useNavigate } from 'react-router-dom';


// const LoginPopUp = ({setShowLogin}) => {

// const [currState,setCurrState] = useState("Login")
// // const { register, handleSubmit } = useForm();
// // const navigate = useNavigate();

// // const onSubmit = async (data) => {
// //    try{
// //     const response = await axiosInstance({
// //       method : "PUT",
// //       url: "/user/login",
// //       data : data,
// //     })
// //     console.log("response====", response)
// //     navigate('/user/profile')

// //    }catch(error){
// //       console.log(error)
// //    }
// //     }

// //onSubmit={handleSubmit(onSubmit)}
  

//   return (
//     <div className='login-popup'>
//        <form className='login-popup-container'  >
//         <div className='login-popup-title'>
//             <h2>{currState}</h2>
//             <img onClick={()=>setShowLogin(false)}src="\public\close.png" alt="" />
//         </div>

//        <div className='login-popup-inputs'>
//            {currState==="Login"?<></>:<input type="text" placeholder='Name' required />}
          
//            <input type="email" placeholder='Email' required />
//            <input type="password" placeholder='Password' required />

//        </div>
//           <button>{currState==="Sign Up"?"Create account":"Login"}</button>
//           <div className='login-popup-condition'>
//               <input type='checkbox' required/>
//               <p>By continuing, I agree to the terms of use & privacy policy. </p>
//           </div>
//           {currState==="Login"
//           ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
//           :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
//           }

//        </form>
//     </div>
//   )
// }

// export default LoginPopUp

 123456


// import React, { useState, useContext } from 'react';
// import './LoginPopup.css';
// import { useForm } from "react-hook-form";
// import { useNavigate } from 'react-router-dom';
// import {StoreContext} from '../../Context/StoreContext'

// const LoginPopUp = ({ setShowLogin }) => {

//   //const url : "http://localhost:3000/api/v1/usersignup"
//   //const {url} = useContext(StoreContext)

//   const [currState, setCurrState] = useState("Login");
//   const { register, handleSubmit } = useForm();


//   const [data,setData] = useState({
//      name: "",
//      email: "",
//      password: ""
//   })

//   const onChangeHandler = (event) => {
//        const name = event.target.name;
//        const value = event.target.value;
//        setData(data=>({...data,[name]:value}))
//   }

//   // useEffect(()=>{
//   //   console.log(data);
//   // },[data])


//   const onLogin = async (event) =>{


//   }


//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);

//     if (currState === "Login") {
//       // Simulating a login action
//       console.log("Logging in...");
//       // navigate('/user/restaurant'); // Redirecting after login
//       navigate('/user/all-restaurants');
//     } else {
//       console.log("Signing up...");
//       // navigate('/user/restaurant'); // Redirecting after sign-up
//       navigate('/user/all-restaurants');
//     }
//   };

//   return (
//     <div className='login-popup'>
//       <form onSubmit={onLogin} className='login-popup-container' onSubmit={handleSubmit(onSubmit)}>
//         <div className='login-popup-title'>
//           <h2>{currState}</h2>
//           <img onClick={() => setShowLogin(false)} src="/public/close.png" alt="Close" />
//         </div>

//         <div className='login-popup-inputs'>
//           {currState === "Sign Up" && <input name= 'name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Name' {...register("name")} required />}
//           <input name= 'email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email' {...register("email")} required />
//           <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' {...register("password")} required />
//         </div>

//         <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>

//         <div className='login-popup-condition'>
//           <input type='checkbox' required />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>

//         {currState === "Login" ? (
//           <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
//         ) : (
//           <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
//         )}
//       </form>

//       console.log("End of signUp...")
//     </div>
//   );
// };

// export default LoginPopUp;






//////////0000000000000000000000000000000

// import React, { useState, useContext } from 'react';
// import './LoginPopup.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'
//  import {StoreContext} from '../../Context/StoreContext'
//  //import {StoreContextProvider} from './Context/StoreContext'

// const LoginPopUp = ({ setShowLogin }) => {
//   const [currState, setCurrState] = useState("Login");
//   const navigate = useNavigate();

//   const {url,setToken} = useContext(StoreContext)

//   // State to hold form values
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const onChangeHandler = (event) => {
//             const name = event.target.name;
//             const value = event.target.value;
//           //  setData(data=>({...data,[name]:value}))
//           setFormData(prevData=>({...prevData,[name]:value}));
//       }
    

//       const onLogin = async (event) =>{
//             event.preventDefault()
//             let newUrl = url;
//             if(currState==='Login'){
//               newUrl += '/api/v1/user/login'
//             }
//             else{
//               newUrl += '/api/v1/user/signup'
//             }


//             const response = await axios.post(newUrl,formdata);
//                if(response.data.success){
//                      setToken(response.data.token)
//                      ge.setItem("token",response.data.token)
//                      setShowLogin(false)
//                }
//                else{
//                  alert(response.data.message)
//                }
//           }

//   // Handle input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form Submitted:", formData);

//     if (currState === "Login") {
//       console.log("Logging in...");
//       navigate('/user/all-restaurants');
//     } else {
//       console.log("Signing up...");
//       navigate('/user/all-restaurants');
//     }
//   };

//   return (
//     <div className='login-popup'>
//       <form onSubmit={onLogin} className='login-popup-container' onSubmit={handleSubmit}>
//         <div className='login-popup-title'>
//           <h2>{currState}</h2>
//           <img onClick={() => setShowLogin(false)} src="/assets/close.png" alt="Close" />
//         </div>

//         <div className='login-popup-inputs'>
//           {currState === "Sign Up" && (
//             <input
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               type="text"
//               placeholder="Name"
//               required
//             />
//           )}
//           <input
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             type="email"
//             placeholder="Email"
//             required
//           />
//           <input
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             type="password"
//             placeholder="Password"
//             required
//           />
//         </div>

//         <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>

//         <div className='login-popup-condition'>
//           <input type='checkbox' required />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>

//         {currState === "Login" ? (
//           <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
//         ) : (
//           <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginPopUp;

//////////////////////////////////////////////kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

// import React, { useState, useContext } from 'react';
// import './LoginPopup.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { StoreContext } from '../../Context/StoreContext';

// const LoginPopUp = ({ setShowLogin }) => {
//   const [currState, setCurrState] = useState("Login");
//   const navigate = useNavigate();
//   const { url, setToken } = useContext(StoreContext);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setFormData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
    
//     let newUrl = url;
//     newUrl += currState === 'Login' ? '/api/v1/user/login' : '/api/v1/user/signup';

//     try {
//       const response = await axios.post(newUrl, formData);
      
//       if (response.data.success) {
//         setToken(response.data.token);
//         localStorage.setItem("token", response.data.token);
//         setShowLogin(false);
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       console.error("Login Error:", error.response?.data || error.message);
//       alert("Something went wrong! Please try again.");
//     }
//   };

//   return (
//     <div className='login-popup'>
//       <form onSubmit={onLogin} className='login-popup-container'>
//         <div className='login-popup-title'>
//           <h2>{currState}</h2>
//           <img onClick={() => setShowLogin(false)} src="/assets/close.png" alt="Close" />
//         </div>

//         <div className='login-popup-inputs'>
//           {currState === "Sign Up" && (
//             <input
//               name="name"
//               value={formData.name}
//               onChange={onChangeHandler}
//               type="text"
//               placeholder="Name"
//               required
//             />
//           )}
//           <input
//             name="email"
//             value={formData.email}
//             onChange={onChangeHandler}
//             type="email"
//             placeholder="Email"
//             required
//           />
//           <input
//             name="password"
//             value={formData.password}
//             onChange={onChangeHandler}
//             type="password"
//             placeholder="Password"
//             required
//           />
//         </div>

//         <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>

//         <div className='login-popup-condition'>
//           <input type='checkbox' required />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>

//         {currState === "Login" ? (
//           <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
//         ) : (
//           <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginPopUp;



// import React, { useState, useContext } from 'react';
// import './LoginPopup.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { StoreContext } from '../../Context/StoreContext';

// const LoginPopUp = ({ setShowLogin }) => {
//   const [currState, setCurrState] = useState("Login");
//   const navigate = useNavigate();
//   const { url, setToken } = useContext(StoreContext);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: ""
//   });

//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setFormData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
    
//     let newUrl = url;
//     newUrl += currState === 'Login' ? '/api/v1/user/login' : '/api/v1/user/signup';

//     try {
//       const response = await axios.post(newUrl, formData);
//       console.log("REsponse---",response)
      
//       if (response.data.success) {
//         setToken(response.data.token);
//         console.log("PhoneFrontend--", response.data.phone)
//         console.log("TokenFrontend--", response.data.token)
//         // localStorage.setItem("token", response.data.token);
//        // setTokenCookie(response.data.token); 

//         console.log("TOKEN1------",token)

//         function setTokenCookie(token) {
//           document.cookie = `token=${token}; path=/; max-age=${2 * 60 * 60}; Secure; SameSite=Strict`;
//       }
      

//       // Now call the function
//        const token = response.data.token;  // Ensure token exists
//          setTokenCookie(token);
     
//         setShowLogin(false);
//         navigate('/user/all-restaurants');
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       console.error("Login Error:", error.response?.data || error.message);
//       alert("Something went wrong! Please try again.");
//     }
//   };

 
// // // Example usage:
// // setTokenCookie("your-jwt-token-here");


//   return (
//     <div className='login-popup'>
//       <form onSubmit={onLogin} className='login-popup-container'>
//         <div className='login-popup-title'>
//           <h2>{currState}</h2>
//           <img onClick={() => setShowLogin(false)} src="https://logowik.com/content/uploads/images/close1437.jpg" alt="Close" />
//         </div>

//         <div className='login-popup-inputs'>
//           {currState === "Sign Up" && (
//             <>
//               <input
//                 name="name"
//                 value={formData.name}
//                 onChange={onChangeHandler}
//                 type="text"
//                 placeholder="Name"
//                 required
//               />
//               <input
//                 name="phone"
//                 value={formData.phone}
//                 onChange={onChangeHandler}
//                 type="tel"
//                 placeholder="Phone Number"
//                 pattern="[0-9]{10}"
//                 required
//               />
//             </>
//           )}
//           <input
//             name="email"
//             value={formData.email}
//             onChange={onChangeHandler}
//             type="email"
//             placeholder="Email"
//             required
//           />
//           <input
//             name="password"
//             value={formData.password}
//             onChange={onChangeHandler}
//             type="password"
//             placeholder="Password"
//             required
//           />
//         </div>

//         <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>

//         <div className='login-popup-condition'>
//           <input type='checkbox' required />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>

//         {currState === "Login" ? (
//           <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
//         ) : (
//           <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginPopUp;



///-----------------------------

import React, { useState, useContext } from 'react';
import './LoginPopup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../Context/StoreContext';

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const navigate = useNavigate();
  const { url, setToken } = useContext(StoreContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // ✅ Function to set the token inside cookies
  // console.log("token:--->",token)
  const setTokenCookie = (token) => {
    document.cookie = `token=${token}; path=/; max-age=${2 * 60 * 60}; Secure; SameSite=Strict`;
  };

  const onLogin = async (event) => {
    event.preventDefault();
    
    let newUrl = url + (currState === 'Login' ? '/api/v1/user/login' : '/api/v1/user/signup');

    try {
      const response = await axios.post(newUrl, formData);
      console.log("Response:", response);

      if (response.data.success) {
        const token = response.data.token;
        console.log("token:--->",token)
        
        // ✅ Store token in React state
        setToken(token);

        // ✅ Store token in cookies
        setTokenCookie(token);

        console.log("Phone (Frontend):", response.data.phone);
        console.log("Token (Frontend):", token);
        
        // ✅ Close login popup and navigate
        setShowLogin(false);
        navigate('/user/all-restaurants');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src="https://logowik.com/content/uploads/images/close1437.jpg" 
            alt="Close" 
          />
        </div>

        <div className='login-popup-inputs'>
          {currState === "Sign Up" && (
            <>
              <input
                name="name"
                value={formData.name}
                onChange={onChangeHandler}
                type="text"
                placeholder="Name"
                required
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={onChangeHandler}
                type="tel"
                placeholder="Phone Number"
                pattern="[0-9]{10}"
                required
              />
            </>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Email"
            required
          />
          <input
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>

        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;

