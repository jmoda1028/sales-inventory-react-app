import React, { useState } from 'react';
// import { useDispatch } from "react-redux";
import SupplierForm from './SupplierForm';
import Modal from '../../components/UI/Modal'
import axios from '../../util/api'

const AddSupplier = (props) => {

    // const dispatch = useDispatch();

    const initialValues = {
        companyName: "",
        description: "",
        address: "",
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
    axios.post('suppliers/', {
        company_name: values.companyName,
        address: values.address,
        contact_no: values.contact,
        description: values.description,
    })
    .then(res => {
        props.hideHandler();
        window.location.reload();
    })
    .catch(err => {
        console.log(err);
    })
};

return  (
        <Modal onClose={props.onClose}>
            <SupplierForm 
                onInputHandler={inputHandlerChange}
                onSubmitHandler={submitHandler}
                values={values}
                // isLoading={loading}
                // error={error}
                onClose={props.hideHandler}
            />
        </Modal>
    );
}

export default AddSupplier;