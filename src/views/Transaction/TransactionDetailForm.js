const TransactionDetailForm = (props) => {
    const {
        values,
        onHideModal,
      } = props;


    return(
      <form className="transaction--details">
        <div className="container">
          <div className="field__control">
            <label htmlFor='transactionCode'>Transaction Code</label>
            <input 
              value={values.transactionCode}
              name="transactionCode" 
              disabled 
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='productCode'>Product Code</label>
            <input 
              value={values.productCode}
              name="productCode" 
              disabled 
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='productName'>Product Name</label>
            <input 
              value={values.productName}
              name="productName" 
              disabled 
            /> 
          </div>  
          <div className="field__control">
            <label htmlFor='quantity'>Quantity</label>
            <input 
              value={values.quantity}
              name="quantity" 
              disabled 
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='price'>Price</label>
            <input 
              value={values.price}
              name="price" 
              disabled 
            /> 
          </div>
          <div className="field__actions">
            <button className='btn-cancel' onClick={onHideModal}>Close</button> {" "}
          </div>
        </div>
      </form> 
   )
  }
  
  export default TransactionDetailForm;