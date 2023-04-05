import React, { useState } from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';
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

    const inputHandlerChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };

    const submitHandler = (e) => {
      e.preventDefault();
        axios.post('forgot_password/', {
          email: values.email,
        })
          .then(res => {
            setNotify({
              show: true,
              error: false,
              message: 'Please check your email and click on the provided link to reset your password.'
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

    const closeMessageHandler = () => {
      setNotify({
        show: false,
        error: false,
        message: ''
      })
    } 

    return (
        <>
          <ForgotPasswordForm 
              values={values}
              notify={notify}
              onInputHandler={inputHandlerChange}
              onSubmitHandler={submitHandler}
              closeMessage={closeMessageHandler}
          />
        </>
    )
}

export default ForgotPassword;