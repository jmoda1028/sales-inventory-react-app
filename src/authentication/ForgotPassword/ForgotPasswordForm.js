// import Card from '../../components/UI/Card'
// import LoadingSpinner from '../../components/UI/LoadingSpinner'
// import { Link } from "react-router-dom";

const ForgotPasswordForm = (props) => {

  const {notify,values,onInputHandler,onSubmitHandler} = props;

  let info;

  if (notify.show) {
    info = <div>
        {notify.message}
    </div>
}

    return(
      <section className='auth'>
        {info}
      <h1>Forgot Password</h1>

      
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
          <div className="auth-actions">
            <button className='btn-submit' type="submit">Submit</button>
          </div>
      </form>
    </section>
    )
}

export default ForgotPasswordForm;