import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { Navigate, useLocation } from "react-router-dom";
import { cartActions } from '../../../store/cartSlice';
import { modalActions } from '../../../store/modalSlice';
import { messageActions } from '../../../store/messageSlice';
import axios from "../../../util/api";


const Checkout = (props) => {
  const dispatch = useDispatch(); 

  const [selectedCustomer, setSelectedCustomer] = useState(1)

  const { totalAmount, items, tax, totalQuantity } = useSelector((state) => state.cart);

  

  // const [isTransactSuccess, setIsTransactSuccess] = useState(false);

  // const clear = () => {
  //   dispatch(cartActions.clearCart());
  // };

  const transactCode = Math.floor(100000000 + Math.random() * 900000000); //generate 9 digits random number

  const updatedTax = tax.toFixed(2);

  const handleSelectCustomer = e => {
    setSelectedCustomer(e.target.value);
  }

  // const itemData = {
  //   product: items.id,
  //   price: items.price,
  //   quantity: items.quantity,
  // }

  const confirmHandler = (e) => {
    // props.onConfirm({
    //   customer:selectedCustomer,
    // })
    e.preventDefault();

    axios.post('transactions/', {
      transaction_code: transactCode,
      customer: selectedCustomer,
      items_quantity: totalQuantity,
      tax: updatedTax,
      total_price: totalAmount,
     })
     .then(res =>(
      items.forEach((obj) => {
      axios.post('transaction-items/', {
        transaction: res.data.id,
        product: obj.id,
        price: obj.price,
        quantity: obj.quantity,
      } 
        // transaction: res.data.id,
        // product: items.id,
        // price: items.price,
        // quantity: items.quantity,

        
   )})


    ));

    dispatch(cartActions.clearCart());

      // .catch((err) => console.log(err))

   

     dispatch(modalActions.setModal(false));

    //  alert("Transaction Success!");

    props.setDidSubmit(true);

    dispatch(messageActions.setSuccessMessage("Transaction Successfully!"));
   
  };

  // console.log(totalQuantity);

  

  return (
    <form className='checkout-form' onSubmit={confirmHandler}>
      <div className="checkout-customer">
        {/* <label htmlFor='customer'>Customer: {" "}</label> */}
        
        <select onChange={handleSelectCustomer} required={true} >
        {/* <option defaultValue value={1} >Choose a customer</option> */}
              {props.customers.map((customer) => (

               
              <option key={customer.id} value={customer.id}>{customer.first_name} {customer.last_name}</option>

              ))
            }

          </select>
         
      </div>
      <div className='checkout-form__actions'>
        <button className='checkout-form__cancel' type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className='checkout-form__submit'>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
