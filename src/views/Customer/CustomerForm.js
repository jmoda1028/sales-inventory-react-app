// import Card from '../../components/UI/Card'
// import LoadingSpinner from '../../components/UI/LoadingSpinner'
// import Modal from '../../components/UI/Modal'

const EmployeeForm = (props) => {

    const {
        onInputHandler,
        onSubmitHandler,
        values,
        // isLoading,
        // error,

    } = props;

    return (
        <form onSubmit={onSubmitHandler} className="reg-form">
          {/* {isLoading && (
            <div className="loading">
              <LoadingSpinner />
            </div>
          )} */}

          <div className="reg-control">
            <label htmlFor='firstName'>First Name</label>
            <input 
             value={values.firstName}
             onChange={onInputHandler}
             name="firstName"  
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='lastName'>Last Name</label>
            <input 
             value={values.lastName}
             onChange={onInputHandler}
             name="lastName"  
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='contact'>Contact</label>
            <input 
             value={values.contact}
             onChange={onInputHandler}
             name="contact"
             type="number" 
           /> 
          </div>
          <div className="reg-actions">
            <button type='button' className='cancel-btn' onClick={props.onClose}>Cancel</button> {" "}
            <button className='btn-submit'>Submit</button>
          </div>
        </form>
    )
}

export default EmployeeForm;