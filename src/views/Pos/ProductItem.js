import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cartSlice';
import ProductItemForm from './ProductItemForm';


const ProductItem = (props) => {
  const dispatch = useDispatch();

  const {id,name,price,description} = props;

//   const prc = `₱${price.toFixed(2)}`;

  const addToCartHandler = quantity => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        description,
        quantity: quantity,
        price,
      })
      
    );
    
  };

  return (
    // <li className='product-item'>
    //   {/* <Card> */}
    //     <header>
    //       <h3>{title}</h3>
    //       <div className='product-price'>${price.toFixed(2)}</div>
    //     </header>
    //     <p>{description}</p>
    //     <div className='product-actions'>
    //       <button onClick={addToCartHandler}>Add to Cart</button>
    //     </div>
    //   {/* </Card> */}
    // </li>
    <li className='pos-product__item'>
      <div>
        <h3>{name}</h3>
        <div className='pos-product__item--description'>{description}</div>
        <div className="pos-product__item--price">₱{price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</div>
      </div>
      <div>
        <ProductItemForm onAddToCart={addToCartHandler} />
  
      </div>
      
    </li>

   
  );
  
};

export default ProductItem;
