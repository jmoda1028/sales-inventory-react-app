import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation} from "react-router-dom";
import LoginForm from './LoginForm';
import {login} from '../../store/authSlice'
// import {authActions} from '../../store/authSlice'
import LoadingSpinner from '../../components/UI/LoadingSpinner'
// import axios from '../../util/api';
import {messageActions} from '../../store/messageSlice';


const Login = () => {

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  
  

  const location = useLocation();

  

  // const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.loading);

  const initialValues = {
    email: "",
    password: ""
};

const [values, setValues] = useState(initialValues);

// const [redirect, setRedirect] = useState(false);

const { loading, error } = useSelector((state) => state.auth);

// const errMessage = useSelector((state) => state.auth.error);

const {errorMessage} = useSelector((state) => state.message);

const token = localStorage.getItem('token');
const isLoggedIn = localStorage.getItem('isLoggedIn');

const inputHandlerChange = (e) => {

  const { name, value } = e.target;
  setValues({
    ...values,
    [name]: value,
  });

  e.preventDefault();
};


// console.log(errMessage);

// const clearMessage = useCallback(() => {
//   if(errorMessage){
//     dispatch(messageActions.clearMessage());
//   }
// },[errorMessage,dispatch])


const submitHandler =  (e) => {
  e.preventDefault();
        dispatch(login({
            email: values.email,
            password: values.password,
        },
        // clearMessage()
    ))

    // if(!errorMessage){
    //   axios.get(`profile_view/?email=${values.email}`)
    //   .then(res => {
    //       //GET USER DETAILS
    //        const user = res.data;
           
    //        console.log(user);
          
  
    //        user.map(user => {
    //            const role = user.role__name;
    //            const userId = user.id;
    //            const firstName = user.first_name;
    //            const lastName = user.last_name;
    //            localStorage.setItem('role', role);
    //            localStorage.setItem('userId', userId);
    //            localStorage.setItem('firstName', firstName);
    //            localStorage.setItem('lastName', lastName);
    //    })
    //   })
    //   .catch(error => {
    //             console.log(error);
  
    //               });
    // }
     
   

    // .unwrap()
    // .then(() => {
     
      // navigate("/");
      // window.location.reload();   
      // dispatch(authActions.setAuth(true));
    
    // })
    // .catch(() => {
    //   return error_message;
    // }); 
    // // dispatch(authActions.setAuth(...true));
    // localStorage.setItem('isLoggedIn', true);
    // if(token){
    //   dispatch(authActions.setAuth(true));
    // }
    // setRedirect(true);
}

console.log(errorMessage);

let message;


if(errorMessage){
  message =  <div className='error-info'>{errorMessage}</div>  
}

// const clearForm = () => {
//   setValues(initialValues);
// }

// if(error){
//   clearForm();
// }

if(isLoading){
  return(
    <div className="loading">
              <LoadingSpinner />
            </div>
  )
}


// if(token){
//   localStorage.setItem('isLoggedIn', true);
// }

const userId = localStorage.getItem('userId');
const role = localStorage.getItem("role");





console.log(userId);
console.log(token);

if (isLoggedIn) {
  if(errorMessage){
    dispatch(messageActions.clearMessage());
  }

  if(role === "Cashier"){
    return <Navigate to="/pos" state={{ from: location}} replace/>
  } 
  else if(role === "Admin"){
    return <Navigate to="/" state={{ from: location}} replace/>
  }
  
  // navigate('/');
}



    return (
        <div className='centered'>
          <LoginForm 
            isLoading={loading}
            values={values}
            error={error}
            onInputHandler={inputHandlerChange}
            onSubmitHandler={submitHandler}
            message={message}
          />
        </div>
    )
}

export default Login;