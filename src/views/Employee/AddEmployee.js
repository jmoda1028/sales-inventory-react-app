import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
// import { Navigate } from "react-router-dom";
import {register} from '../../store/authSlice';
import EmployeeForm from './EmployeeForm';
import Modal from '../../components/UI/Modal'

const AddEmployee = (props) => {

    const dispatch = useDispatch();

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    };

    const [values, setValues] = useState(initialValues);
    const { loading, error } = useSelector((state) => state.auth);

    const inputHandlerChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

    const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register({
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        password: values.password,
        password_confirm: values.passwordConfirm,
        role: 1,
    }));
    
    props.hideHandler();
    window.location.reload();
};

return(
    <Modal onClose={props.onClose}>
        <EmployeeForm 
            onInputHandler={inputHandlerChange}
            onSubmitHandler={submitHandler}
            values={values}
            isLoading={loading}
            error={error}
            onClose={props.hideHandler}
        />
    </Modal>
);


}

export default AddEmployee;