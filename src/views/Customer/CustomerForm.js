const EmployeeForm = (props) => {
    const {
        onInputHandler,
        onSubmitHandler,
        values,
    } = props;

    return (
        <form onSubmit={onSubmitHandler} className="add-customer--form">
          <div className='container'>
            <div className="field__control">
              <label htmlFor='firstName'>First Name</label>
              <input 
                value={values.firstName}
                onChange={onInputHandler}
                name="firstName"  
              /> 
            </div>
            <div className="field__control">
              <label htmlFor='lastName'>Last Name</label>
              <input 
                value={values.lastName}
                onChange={onInputHandler}
                name="lastName"  
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

export default EmployeeForm;