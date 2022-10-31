import { cartActions } from '../../../store/cartSlice';
import { useDispatch } from "react-redux";

const CartItem = (props) => {


const { title, quantity, price, id } = props.item;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        quantity,
        price,
      })
      
    );
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className="cart-item">
      <div>
        <h2>{title}</h2>
        <div className="cart-item__summary">
          <span className="cart-item__price">₱{price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
          <span className="cart-item__amount">x {quantity}</span>
        </div>
      </div>
      <div className="cart-item__actions">
        <button onClick={removeItemHandler}>−</button><br />
        <button onClick={addToCartHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;