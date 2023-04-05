import { useSelector } from 'react-redux';


const CartButton = (props) => {
    const { items } = useSelector((state) => state.cart);

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.quantity;
    }, 0);


    return (
        <button className="cart-btn" onClick={props.onShowCart}>
            <span>Cart</span>
            <span className="badge">{numberOfCartItems}</span>
        </button>
    )
}

export default CartButton;