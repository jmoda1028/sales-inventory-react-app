import React, { useState } from 'react';
import CustomerForm from './CustomerForm';
import Modal from '../../components/UI/Modal'
import axios from '../../util/api'


const AddCustomer = (props) => {
    const initialValues = {
        firstName: "",
        lastName: "",
        contact: "",
    };

    const [values, setValues] = useState(initialValues);

    const inputHandlerChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('customers/', {
            first_name: values.firstName,
            last_name: values.lastName,
            contact_no: values.contact,
        })
        .then(res => {
            props.hideHandler();
            window.location.reload();
        })
        .catch(err => {
            console.log(err);
        })
    };

    return(
        <Modal onClose={props.onClose}>
            <CustomerForm 
                onInputHandler={inputHandlerChange}
                onSubmitHandler={submitHandler}
                values={values}
                onClose={props.hideHandler}
            />
        </Modal>
    );
}

export default AddCustomer;