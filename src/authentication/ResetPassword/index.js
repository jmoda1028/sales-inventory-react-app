import React, { useState } from 'react';
// import { useSelector, useDispatch } from "react-redux";
import { Navigate, useParams} from "react-router-dom";
import ResetPasswordForm from './ResetPasswordForm';
// import {authActions} from '../../store/authSlice'
// import LoadingSpinner from '../../components/UI/LoadingSpinner'
import axios from '../../util/api';


const ResetPassword = () => {

  const initialValues = {
    password: "",
    passwordConfirm: "",
};

const [values, setValues] = useState(initialValues);
const {token} = useParams();
const [redirect, setRedirect] = useState(false);

const inputHandlerChange = (e) => {
  const { name, value } = e.target;
  setValues({
    ...values,
    [name]: value,
  });
};

// const submitHandler =  (e) => {
//   e.preventDefault();
//         dispatch(login({
//             email: values.email,
//             password: values.password,
//         }
       
//     ));
//     dispatch(authActions.setAuth(true));
//     localStorage.setItem('isLoggedIn', true);
//     setRedirect(true);
// }

const submitHandler = (e) => {
  e.preventDefault();
    axios.post('reset_password/', {
      token,
      password: values.password,
      password_confirm: values.passwordConfirm,
    })
      .then(res => {
        setRedirect(true);
      })
      .catch(err => {
        console.log(err);
    })
}

if (redirect) {
  return <Navigate to="/login"/>;
}
// if(isLoading){
//   return(
//     <div className="loading">
//               <LoadingSpinner />
//             </div>
//   )
// }

    return (
        <div className='centered'>
          <ResetPasswordForm 
            // loading={loading}
            values={values}
            onInputHandler={inputHandlerChange}
            onSubmitHandler={submitHandler}
          />
        </div>
    )
}

export default ResetPassword;