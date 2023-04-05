import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../util/api'
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
      <section className='customers'>
        <div className='container'>
          <button className='btn-add__customer' onClick={showHandler}>
            Add Customer
          </button>
          {isModalVisible && <AddCustomer hideHandler={hideHandler} />}
          <br/> <br/>
          { customers.length > 0 ?
          <CustomerList 
              customers={customers}
              onShowModal={showHandler}
          />
          :
          <h1 className='no--data__header'>No Data Found</h1>
          }
        </div>
      </section>
    )
}

export default Customer;