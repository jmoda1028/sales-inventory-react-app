// import Card from '../../components/UI/Card'
// import LoadingSpinner from '../../components/UI/LoadingSpinner'
// import { Link } from "react-router-dom";

const ResetPasswordForm = (props) => {

  const {values,onInputHandler,onSubmitHandler} = props;
  
    return(
      <section className='auth'>
      <h1>Reset Password</h1>

      
      <form onSubmit={onSubmitHandler}>

      {/* {loading && (
            <div className="loading">
              <LoadingSpinner />
            </div>
          )} */}

      <div className="auth-control">
      <label htmlFor='password'>Password</label>
            <input 
             value={values.password}
             onChange={onInputHandler}
             name="password"
             label="Password"  
             type="password" 
           /> 
          </div>
          <div className="auth-control">
          <label htmlFor='passwordConfirm'>Password Confirm</label>
            <input 
             value={values.passwordConfirm}
             onChange={onInputHandler}
             name="passwordConfirm" 
             type="password" 
           /> 
          </div>
          <div className="auth-actions">
            <button className='btn-submit' type="submit">Submit</button>
          </div>
      </form>
    </section>
    )
}

export default ResetPasswordForm;