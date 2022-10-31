import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Modal from '../../../components/UI/Modal';
import CartItem from './CartItem';
// import { cartActions } from '../../../store/cartSlice';
import Checkout from './Checkout';
import axios from "../../../util/api";

const Cart = (props) => {
  
  // const dispatch = useDispatch();  

  const [isCheckout, setIsCheckout] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [customers, setCustomers] = useState([]);

  const { totalAmount, items } = useSelector((state) => state.cart);

  const total = `₱${totalAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  const hasItems = items.length > 0;

  useEffect(() => {
    axios.get("customers/")
         .then((res) => setCustomers(res.data))
         .catch((err) => console.log(err))
  }, []);

  const orderHandler = () => {
    setIsCheckout(true);
  };

  // const clearCart = () => {
  //   dispatch(cartActions.clearCart());
  // };

  // const submitOrderHandler = () => {
  //   setIsSubmitting(true);
  //   setIsSubmitting(false);
  //   setDidSubmit(true);
  //   clearCart();
  // };

  // console.log(totalQuantity);

  const cartItems = (
    <ul className="cart-items">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={{
            id: item.id,
            title: item.name,
            quantity: item.quantity,
            price: item.price,
          }}
          // onRemove={removeItemHandler.bind(null, item.id)}
          // onAdd={addToCartHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className="cart-actions">
      <button className="cart-button__close" onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className="cart-button__order" onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className="cart-total">
        <span>Total Amount:</span>
        <span className='total-amount'>{total}</span>
      </div>
      {isCheckout && (
         
        <Checkout 
              customers={customers}
              // onConfirm={submitOrderHandler}
              setDidSubmit={setDidSubmit} 
              onCancel={props.onClose}
        />
    
  
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  // const isSubmittingModalContent = <p>Sending order data...</p>;

  // const didSubmitModalContent = (
  //   <React.Fragment>
  //     <p>Successfully sent the order!</p>
  //     <div className="cart-actions">
  //     <button className="cart-button" onClick={props.onClose}>
  //       Close
  //     </button>
  //   </div>
  //   </React.Fragment>
  // );

  return (
    <Modal onClose={props.onClose}>
      {!didSubmit && cartModalContent}
      {/* {isSubmitting && isSubmittingModalContent} */}
      {/* {!isSubmitting && didSubmit && didSubmitModalContent} */}
    </Modal>
  );
};

export default Cart;
