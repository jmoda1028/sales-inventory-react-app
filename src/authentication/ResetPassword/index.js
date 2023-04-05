import React, { useState } from 'react';
import { Navigate, useParams} from "react-router-dom";
import ResetPasswordForm from './ResetPasswordForm';
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

    return (
        <>
          <ResetPasswordForm 
            values={values}
            onInputHandler={inputHandlerChange}
            onSubmitHandler={submitHandler}
          />
        </>
    )
}

export default ResetPassword;