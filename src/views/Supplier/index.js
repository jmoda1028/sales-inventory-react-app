import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../util/api'
// import Modal from '../../components/UI/Modal'
// import Card from '../../components/UI/Card'
import AddSupplier from './AddSupplier';
import SupplierList from './SupplierList';
import {useDispatch, useSelector} from "react-redux";
import {modalActions} from '../../store/modalSlice';

const Supplier = () => {

  const dispatch = useDispatch();

  const isModalVisible = useSelector((state) => state.modal.isShown);

  const [suppliers, setSuppliers] = useState([]);

  const showHandler = () => {
    dispatch(modalActions.setModal(true));
  };

  const hideHandler = () => {
    dispatch(modalActions.setModal(false));
  };

  const loadData = useCallback(() => {
    axios.get('suppliers/')
        .then(res => {
          setSuppliers(res.data);
        })
        .catch(err => {
          console.log(err);
      })
  }, [])

  useEffect(() => {
    loadData();
  },[loadData])

    return (
      <>
   
        <button type="button" className='btn-add__employee' onClick={showHandler}>
          Add Supplier
        </button>
        {isModalVisible && <AddSupplier hideHandler={hideHandler} />}
   
      <br /> <br />
      { suppliers.length > 0 ?
        <SupplierList 
            suppliers={suppliers}
        />
        :
        <h1 className='centered'>No Data Found</h1>
      }
     </>
    )
}

export default Supplier;