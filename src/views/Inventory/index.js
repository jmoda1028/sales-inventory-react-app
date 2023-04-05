import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../util/api'
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import {useDispatch, useSelector} from "react-redux";
import {modalActions} from '../../store/modalSlice';


const Inventory = () => {
    const dispatch = useDispatch();

    const isModalVisible = useSelector((state) => state.modal.isShown);

    const [products, setProducts] = useState([]);

    const showHandler = () => {
      dispatch(modalActions.setModal(true));
    };

    const hideHandler = () => {
      dispatch(modalActions.setModal(false));
    };

    const loadData = useCallback(() => {
      axios.get('get_products/')
        .then(res => {
          setProducts(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    useEffect(() => {
      loadData();
    }, [loadData])

    return (
      <section className='inventories'>
        <div className='container'>
          <button className='btn-add__product' onClick={showHandler}>
            Add Product
          </button>
          {isModalVisible && <AddProduct hideHandler={hideHandler} />}
          <br /> <br />
          { products.length > 0 ?
          <ProductList 
            products={products}
          />
          :
          <h1 className='no--data__header'>No Data Found</h1>
          }
        </div>
      </section>
    )
}

export default Inventory;