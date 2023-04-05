import exitBtn from '../../assets/images/exit.png';


const ForgotPasswordForm = (props) => {
    const {
           notify,
           values,
           onInputHandler,
           onSubmitHandler,
           closeMessage
          } = props;

    let info;

    if (notify.show) {
      info = <div className="success--message">
                <p>{notify.message}</p>
                <div className='exit-btn'>
                  <img src={exitBtn} alt="exit" onClick={closeMessage}/>
                </div>
             </div>
    }

    return(
      <section className='forgot--password'>
        {info} 
        <h1>Forgot Password</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="forgot--password__control">
              <label htmlFor='email'>Email</label>
              <input 
              value={values.email}
              onChange={onInputHandler}
              name="email"
              type="email" 
              /> 
          </div>
          <div className="forgot--password__action">
            <button className='btn-submit' type="submit">Submit</button>
          </div>
        </form>
      </section>
    )
}

export default ForgotPasswordForm;