// import Card from '../../components/UI/Card'
// import LoadingSpinner from '../../components/UI/LoadingSpinner'
import { Link } from "react-router-dom";

const LoginForm = (props) => {

  const {values,onInputHandler,onSubmitHandler,message} = props;

    return(
      <section className='auth'>
        {message}
      <h1>Login</h1>
      <form onSubmit={onSubmitHandler}>

      {/* {loading && (
            <div className="loading">
              <LoadingSpinner />
            </div>
          )} */}

      <div className="auth-control">
            <label htmlFor='email'>Email</label>
            <input 
             value={values.email}
             onChange={onInputHandler}
             name="email"
             type="email" 
           /> 
          </div>
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
          <div className="auth-actions">
            <button className='btn-submit' type="submit">Login</button>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
      </form>
    </section>
    )
}

export default LoginForm;