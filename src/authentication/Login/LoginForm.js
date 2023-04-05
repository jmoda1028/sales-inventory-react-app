import { Link } from "react-router-dom";


const LoginForm = (props) => {
    const {values,onInputHandler,onSubmitHandler,message} = props;

    return(
        <section className='login'>
            <div className="container">
                {message}
                <h1>Login</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className="login__control">
                        <label htmlFor='email'>Email</label>
                        <input 
                            value={values.email}
                            onChange={onInputHandler}
                            name="email"
                            type="email" 
                        /> 
                    </div>
                    <div className="login__control">
                        <label htmlFor='password'>Password</label>
                        <input 
                            value={values.password}
                            onChange={onInputHandler}
                            name="password"
                            label="Password"  
                            type="password" 
                        /> 
                    </div>
                    <div className="login-btn--action">
                        <button className='btn-submit' type="submit">Login</button>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default LoginForm;