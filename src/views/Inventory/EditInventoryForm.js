const EditInventoryForm = (props) => {
    const {
        values,
        onHideModal,
        onInputChange,
        onSubmit
    } = props;

    return(
      <form onSubmit={onSubmit} className="edit--form">
        <div className="container">
          <div className="field__control">
            <label htmlFor='quantity'>Quantity</label>
            <input 
              value={values.quantity}
              onChange={onInputChange}
              name="quantity"  
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='price'>Price</label>
            <input 
              value={values.price}
              onChange={onInputChange}
              name="price"  
            /> 
          </div>
          <div className="field__actions">
            <button type='button' className='cancel-btn' onClick={onHideModal}>Cancel</button> {" "}
            <button className='btn-submit'>Submit</button>
          </div>
        </div>
      </form>
    )
  }
  
export default EditInventoryForm;