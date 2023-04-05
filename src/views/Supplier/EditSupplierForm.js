const EditSupplierForm = (props) => {
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
            <label htmlFor='companyName'>CompanyName</label>
            <input 
              value={values.companyName}
              onChange={onInputChange}
              name="companyName"  
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='address'>Address</label>
            <input 
              value={values.address}
              onChange={onInputChange}
              name="address"  
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='contact'>Contact</label>
            <input 
              value={values.contact}
              onChange={onInputChange}
              name="contact"
              type="number" 
            /> 
          </div>
          <div className="field__actions">
            <button className='btn-cancel' onClick={onHideModal}>Cancel</button> {" "}
            <button className='btn-submit'>Submit</button>
          </div>
        </div>
      </form>
    )
}

export default EditSupplierForm;