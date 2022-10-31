// import Card from '../../components/UI/Card'
import LoadingSpinner from '../../components/UI/LoadingSpinner'
// import Modal from '../../components/UI/Modal'

const EmployeeForm = (props) => {

    const {
        onInputHandler,
        onSubmitHandler,
        values,
        isLoading,

    } = props;

    return(
       
        // <Modal onClose={props.onClose}>
        <form onSubmit={onSubmitHandler} className="reg-form">
          {isLoading && (
            <div className="loading">
              <LoadingSpinner />
            </div>
          )}

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
            <label htmlFor='email'>Email</label>
            <input 
             value={values.email}
             onChange={onInputHandler}
             name="email"
             type="email" 
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='password'>Password</label>
            <input 
             value={values.password}
             onChange={onInputHandler}
             name="password"
             label="Password"  
             type="password" 
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='passwordConfirm'>Password Confirm</label>
            <input 
             value={values.passwordConfirm}
             onChange={onInputHandler}
             name="passwordConfirm" 
             type="password" 
           /> 
          </div>
          <div className="reg-actions">
            <button type='button' className='cancel-btn' onClick={props.onClose}>Cancel</button> {" "}
            <button className='btn-submit'>Submit</button>
          </div>
        </form>
        // </Modal>
 
      
      
    )
}

export default EmployeeForm;