const SupplierForm = (props) => {
    const {
        onInputHandler,
        onSubmitHandler,
        values,
    } = props;

    return (
      <form onSubmit={onSubmitHandler} className="add-supplier--form">
        <div className="container">
          <div className="field__control">
            <label htmlFor='companyName'>CompanyName</label>
            <input 
              value={values.companyName}
              onChange={onInputHandler}
              name="companyName"  
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='description'>Description</label>
            <input 
              value={values.description}
              onChange={onInputHandler}
              name="description"  
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='address'>Address</label>
            <input 
              value={values.address}
              onChange={onInputHandler}
              name="address"  
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='contact'>Contact</label>
            <input 
              value={values.contact}
              onChange={onInputHandler}
              name="contact"
              type="number" 
            /> 
          </div>
          <div className="field__actions">
            <button className='btn-cancel' onClick={props.onClose}>Cancel</button> {" "}
            <button className='btn-submit'>Submit</button>
          </div>
        </div>
      </form>
    )
}

export default SupplierForm;