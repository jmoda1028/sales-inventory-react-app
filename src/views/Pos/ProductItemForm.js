import { useRef, useState } from 'react';

import Input from './ProductItem-input';

const ProductItemForm = (props) => {
    const [quantityIsValid, setQuantityIsValid] = useState(true);
    const quantityInputRef = useRef();

    const submitHandler = (event) => {
      event.preventDefault();

      const enteredQuantity = quantityInputRef.current.value;
      const enteredQuantityNumber = +enteredQuantity;

      if(
        enteredQuantity.trim().length === 0 ||
        enteredQuantityNumber < 1 ||
        enteredQuantityNumber > 5
      ) {
        setQuantityIsValid(false);
        return;
      }
        props.onAddToCart(enteredQuantityNumber);
    };

    return (
    <form className="product--quantity" onSubmit={submitHandler}>
      <Input
        ref={quantityInputRef}
        label='Quantity:'
        input={{
          id: 'quantity',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!quantityIsValid && <p>Please enter a valid quantity (1-5).</p>}
    </form>
    );
};

export default ProductItemForm;