const EditCustomerForm = (props) => {
    const {
          values,
          onHideModal,
          onInputChange,
          onSubmit
    } = props;

    return(
      <form onSubmit={onSubmit} className="edit--form">
        <div className='container'>
          <div className="field__control">
            <label htmlFor='firstName'>First Name</label>
            <input 
              value={values.firstName}
              onChange={onInputChange}
              name="firstName"
              disabled  
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='lastName'>Last Name</label>
            <input 
              value={values.lastName}
              onChange={onInputChange}
              name="lastName"
              disabled  
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
            <button type='button' className='btn-cancel' onClick={onHideModal}>Cancel</button> {" "}
            <button className='btn-submit'>Submit</button>
          </div>
        </div>
      </form>
    )
}

export default EditCustomerForm;