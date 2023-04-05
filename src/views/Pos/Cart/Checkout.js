import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from '../../../store/cartSlice';
import { modalActions } from '../../../store/modalSlice';
import { messageActions } from '../../../store/messageSlice';
import axios from "../../../util/api";


const Checkout = (props) => {
    const dispatch = useDispatch(); 

    const [selectedCustomer, setSelectedCustomer] = useState(1)

    const { totalAmount, items, tax, totalQuantity } = useSelector((state) => state.cart);

    const transactCode = Math.floor(100000000 + Math.random() * 900000000); //generate 9 digits random number

    const updatedTax = tax.toFixed(2);

    const handleSelectCustomer = e => {
      setSelectedCustomer(e.target.value);
    }

    const confirmHandler = (e) => {
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
        )})
      ));

      dispatch(cartActions.clearCart());

      dispatch(modalActions.setModal(false));

      props.setDidSubmit(true);

      dispatch(messageActions.setSuccessMessage("Transaction Successfully!"));
      
    };

    return (
      <form className='checkout-form' onSubmit={confirmHandler}>
        <div className="checkout__customer">
          <h3>Customer :</h3>
          <select onChange={handleSelectCustomer} required={true} >
                {props.customers.map((customer) => (
                <option key={customer.id} value={customer.id}>{customer.first_name} {customer.last_name}</option>
                ))
              }
          </select>   
        </div>
        <div className='checkout-form__actions'>
          <button className='btn--cancel' onClick={props.onCancel}>
            Cancel
          </button>
          <button className='btn--confirm'>Confirm</button>
        </div>
      </form>
    );
};

export default Checkout;