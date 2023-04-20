import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation} from "react-router-dom";
import LoginForm from './LoginForm';
import Credential from './Credential-Info';
import {login} from '../../store/authSlice'
import LoadingSpinner from '../../components/UI/LoadingSpinner'
import {messageActions} from '../../store/messageSlice';


const Login = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const isLoading = useSelector((state) => state.auth.loading);
    const { loading, error } = useSelector((state) => state.auth);
    const {errorMessage} = useSelector((state) => state.message);

    const initialValues = {
        email: "",
        password: ""
    };

    const [values, setValues] = useState(initialValues);

    const token = localStorage.getItem('token');  // current user logged in token
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const inputHandlerChange = (e) => {
        const { name, value } = e.target;

        setValues({
          ...values,
          [name]: value,
        });

        e.preventDefault();
    };

    const submitHandler =  (e) => {
      e.preventDefault();

      dispatch(login({
            email: values.email,
            password: values.password,
        },
      ))

    }

    let message;

    if(errorMessage){
        message =  <div className='error--message'>
                      <p>{errorMessage}</p>
                    </div>
        
        setTimeout(() => {
            dispatch(messageActions.clearMessage());
        }, 3000);
    }

    if(isLoading){
        return(
          <div className="loading__spinner">
            <LoadingSpinner />
          </div>
        )
    }

    const userId = localStorage.getItem('userId');  // current logged user id
    const role = localStorage.getItem("role");  // current logged user role

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
    }

    return (
      <>
        <LoginForm 
          isLoading={loading}
          values={values}
          error={error}
          onInputHandler={inputHandlerChange}
          onSubmitHandler={submitHandler}
          message={message}
        />
        <Credential />
      </>

    )
}

export default Login;