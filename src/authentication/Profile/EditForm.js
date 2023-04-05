import LoadingSpinner from "../../components/UI/LoadingSpinner";


const EditForm = (props) => {
    const {
        onInputHandler,
        onSubmitHandler,
        values,
        isLoading,
        onClose,
      } = props;

    return ( 
      <form onSubmit={onSubmitHandler} className="profile--edit__form">
        {isLoading && (
          <div className="loading">
            <LoadingSpinner />
          </div>
        )}
        <div className="field__control">
          <label htmlFor='password'>New Password</label>
          <input 
            value={values.password || ""}
            onChange={onInputHandler}
            name="password"
            label="Password"  
            type="password" 
          /> 
        </div>
        <div className="field__control">
          <label htmlFor='passwordConfirm'>Password Confirm</label>
          <input 
            value={values.passwordConfirm || ""}
            onChange={onInputHandler}
            name="passwordConfirm" 
            type="password" 
          /> 
        </div>
        <div className="field__action">
          <button className='btn-cancel' onClick={onClose}>Cancel</button>
          <button className='btn-submit'>Submit</button>
        </div>
      </form>
    )
}

export default EditForm;