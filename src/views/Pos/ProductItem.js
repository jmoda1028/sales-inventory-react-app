import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import ProductItemForm from './ProductItemForm';


const ProductItem = (props) => {
    const dispatch = useDispatch();

    const {id,name,price,description} = props;

    const addToCartHandler = quantity => {
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
      <li className='product__item'>
        <div>
          <h3>{name}</h3>
          <div className='description'>{description}</div>
          <div className="price">₱{price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</div>
        </div>
        <div>
          <ProductItemForm onAddToCart={addToCartHandler} />
        </div>
      </li>
    );
};

export default ProductItem;