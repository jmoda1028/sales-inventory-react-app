import React, { useState } from 'react';
// import { useSelector } from "react-redux";
// import { Navigate, useLocation, useNavigate} from "react-router-dom";
import ForgotPasswordForm from './ForgotPasswordForm';
// import {authActions} from '../../store/authSlice'
// import LoadingSpinner from '../../components/UI/LoadingSpinner'
import axios from '../../util/api';


const ForgotPassword = () => {

  const initialValues = {
    email: "",
};

const [values, setValues] = useState(initialValues);
const [notify, setNotify] = useState({
  show: false,
  error: false,
  message: ''
});

// const [redirect, setRedirect] = useState(false);

// const { loading, error } = useSelector((state) => state.auth);

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
    axios.post('forgot_password/', {
      email: values.email,
    })
      .then(res => {
        setNotify({
          show: true,
          error: false,
          message: 'Please check your email!'
      });
      })
      .catch(err => {
        setNotify({
          show: true,
          error: true,
          message: 'Error occurred!'
      });
    })
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
          <ForgotPasswordForm 
            // loading={loading}
            values={values}
            notify={notify}
            onInputHandler={inputHandlerChange}
            onSubmitHandler={submitHandler}
          />
        </div>
    )
}

export default ForgotPassword;