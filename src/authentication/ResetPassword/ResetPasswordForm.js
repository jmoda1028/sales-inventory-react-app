const ResetPasswordForm = (props) => {
    const {values,onInputHandler,onSubmitHandler} = props;
    
    return(
      <section className='reset--password'>
        <h1>Reset Password</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="control">
            <label htmlFor='password'>New Password</label>
            <input 
              value={values.password}
              onChange={onInputHandler}
              name="password"
              label="Password"  
              type="password" 
            /> 
          </div>
          <div className="control">
            <label htmlFor='passwordConfirm'>Password Confirm</label>
            <input 
              value={values.passwordConfirm}
              onChange={onInputHandler}
              name="passwordConfirm" 
              type="password" 
            /> 
          </div>
          <div className="action">
            <button className='btn-submit' type="submit">Submit</button>
          </div>
        </form>
      </section>
    )
}

export default ResetPasswordForm;