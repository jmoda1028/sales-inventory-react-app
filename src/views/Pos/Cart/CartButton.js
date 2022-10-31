// import { cartActions } from '../../../store/cartSlice';
// import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const CartButton = (props) => {

    const { items } = useSelector((state) => state.cart);

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.quantity;
      }, 0);
    

    return (
        <button className="cart-button" onClick={props.onShowCart}>
            <span>Cart</span>
            <span className="cart-button__badge">{numberOfCartItems}</span>
        </button>
    )
}

export default CartButton;