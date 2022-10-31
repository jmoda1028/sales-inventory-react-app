import LoadingSpinner from "../../components/UI/LoadingSpinner";
// import Modal from "../../components/UI/Modal";

const EditForm = (props) => {

    const {
        onInputHandler,
        onSubmitHandler,
        values,
        isLoading,
        onClose,
        // message,

    } = props;

    return ( 
        // <Modal>
        <form onSubmit={onSubmitHandler} className="reg-form">
          {isLoading && (
            <div className="loading">
              <LoadingSpinner />
            </div>
          )}
          <div className="reg-control">
            <label htmlFor='password'>New Password</label>
            <input 
             value={values.password || ""}
             onChange={onInputHandler}
             name="password"
             label="Password"  
             type="password" 
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='passwordConfirm'>Password Confirm</label>
            <input 
             value={values.passwordConfirm || ""}
             onChange={onInputHandler}
             name="passwordConfirm" 
             type="password" 
           /> 
          </div>
          <div className="reg-actions">
            <button type='button' className='cancel-btn' onClick={onClose}>Cancel</button> {" "}
            <button className='btn-submit'>Submit</button>
          </div>
        </form>
        // </Modal>
    )
}

export default EditForm;