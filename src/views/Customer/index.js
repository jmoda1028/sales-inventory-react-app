import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../util/api'
// import Modal from '../../components/UI/Modal'
// import Card from '../../components/UI/Card'
import AddCustomer from './AddCustomer';
import CustomerList from './CustomerList';
import {useDispatch, useSelector} from "react-redux";
import {modalActions} from '../../store/modalSlice';

const Customer = () => {

  const dispatch = useDispatch();

  const isModalVisible = useSelector((state) => state.modal.isShown);

  const [customers, setCustomers] = useState([]);

  const showHandler = () => {
    dispatch(modalActions.setModal(true));
  };

  const hideHandler = () => {
    dispatch(modalActions.setModal(false));
  };

  const loadData = useCallback(() => {
    axios.get('customers/')
        .then(res => {
          setCustomers(res.data);
        })
        .catch(err => {
          console.log(err);
      })
  }, [])

  useEffect(() => {
    loadData();
  }, [loadData])

    return (
      <>
   
        <button type="button" className='btn-add__employee' onClick={showHandler}>
          Add Customer
        </button>
        {isModalVisible && <AddCustomer hideHandler={hideHandler} />}
   
      <br /> <br />
      { customers.length > 0 ?
        <CustomerList 
            customers={customers}
            onShowModal={showHandler}
        />
        :
        <h1 className='centered'>No Data Found</h1>
      }
     </>
    )
}

export default Customer;