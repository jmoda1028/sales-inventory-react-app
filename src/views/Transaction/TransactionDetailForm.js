const TransactionDetailForm = (props) => {

    const {
         values,
         onHideModal,
        } = props;
  
  
      return(
          <form className="reg-form">
          <div className="reg-control">
            <label htmlFor='transactionCode'>Transaction Code</label>
            <input 
             value={values.transactionCode}
            //  onChange={onInputChange}
             name="transactionCode" 
             disabled 
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='productCode'>Product Code</label>
            <input 
             value={values.productCode}
            //  onChange={onInputChange}
             name="productCode" 
             disabled 
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='productName'>Product Name</label>
            <input 
             value={values.productName}
            //  onChange={onInputChange}
             name="productName" 
             disabled 
           /> 
          </div>  
          <div className="reg-control">
            <label htmlFor='quantity'>Quantity</label>
            <input 
             value={values.quantity}
            //  onChange={onInputChange}
             name="quantity" 
             disabled 
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='price'>Price</label>
            <input 
             value={values.price}
            //  onChange={onInputChange}
             name="price" 
             disabled 
           /> 
          </div>
          <div className="reg-actions">
            <button type='button' className='cancel-btn' onClick={onHideModal}>Close</button> {" "}
            {/* <button className='btn-submit'>Submit</button> */}
          </div>
        </form>
   
   
       
      )
  }
  
  export default TransactionDetailForm;