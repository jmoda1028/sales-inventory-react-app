// import Card from '../../components/UI/Card'
// import LoadingSpinner from '../../components/UI/LoadingSpinner'
// import Modal from '../../components/UI/Modal'

const SupplierForm = (props) => {

    const {
        onInputHandler,
        onSubmitHandler,
        values,
        // isLoading,
        // error,

    } = props;

    return (
        <form onSubmit={onSubmitHandler} className="reg-form">
          {/* {isLoading && (
            <div className="loading">
              <LoadingSpinner />
            </div>
          )} */}

          <div className="reg-control">
            <label htmlFor='companyName'>CompanyName</label>
            <input 
             value={values.companyName}
             onChange={onInputHandler}
             name="companyName"  
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='description'>Description</label>
            <input 
             value={values.description}
             onChange={onInputHandler}
             name="description"  
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='address'>Address</label>
            <input 
             value={values.address}
             onChange={onInputHandler}
             name="address"  
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='contact'>Contact</label>
            <input 
             value={values.contact}
             onChange={onInputHandler}
             name="contact"
             type="number" 
           /> 
          </div>
          <div className="reg-actions">
            <button type='button' className='cancel-btn' onClick={props.onClose}>Cancel</button> {" "}
            <button className='btn-submit'>Submit</button>
          </div>
        </form>
    )
}

export default SupplierForm;