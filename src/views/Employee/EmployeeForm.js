import LoadingSpinner from '../../components/UI/LoadingSpinner'


const EmployeeForm = (props) => {
    const {
        onInputHandler,
        onSubmitHandler,
        values,
        isLoading,
    } = props;

    return(
      <form onSubmit={onSubmitHandler} className="add-employee--form">
        {isLoading && (
          <div className="loading__spinner">
            <LoadingSpinner />
          </div>
        )}
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
            <label htmlFor='email'>Email</label>
            <input 
              value={values.email}
              onChange={onInputHandler}
              name="email"
              type="email" 
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='password'>Password</label>
            <input 
              value={values.password}
              onChange={onInputHandler}
              name="password"
              label="Password"  
              type="password" 
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='passwordConfirm'>Password Confirm</label>
            <input 
              value={values.passwordConfirm}
              onChange={onInputHandler}
              name="passwordConfirm" 
              type="password" 
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