const EditInventoryForm = (props) => {

    const {
         values,
         onHideModal,
         onInputChange,
         onSubmit
        } = props;
  
  
      return(
        // <Modal>
          <form onSubmit={onSubmit} className="reg-form">
          {/* {isLoading && (
            <div className="loading">
              <LoadingSpinner />
            </div>
          )} */}
  
          <div className="reg-control">
            <label htmlFor='quantity'>Quantity</label>
            <input 
             value={values.quantity}
             onChange={onInputChange}
             name="quantity"  
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='price'>Price</label>
            <input 
             value={values.price}
             onChange={onInputChange}
             name="price"  
           /> 
          </div>
          <div className="reg-actions">
            <button type='button' className='cancel-btn' onClick={onHideModal}>Cancel</button> {" "}
            <button className='btn-submit'>Submit</button>
          </div>
        </form>
        // </Modal>
       
      )
  }
  
  export default EditInventoryForm;