const EditSupplierForm = (props) => {

  const {
       values,
       onHideModal,
       onInputChange,
       onSubmit
      } = props;


    return(
      // <Modal>
        <form onSubmit={onSubmit} className="reg-form">
        {/* {isLoading && (
          <div className="loading">
            <LoadingSpinner />
          </div>
        )} */}

        <div className="reg-control">
          <label htmlFor='companyName'>CompanyName</label>
          <input 
           value={values.companyName}
           onChange={onInputChange}
           name="companyName"  
         /> 
        </div>
        <div className="reg-control">
          <label htmlFor='address'>Address</label>
          <input 
           value={values.address}
           onChange={onInputChange}
           name="address"  
         /> 
        </div>
        <div className="reg-control">
          <label htmlFor='contact'>Contact</label>
          <input 
           value={values.contact}
           onChange={onInputChange}
           name="contact"
           type="number" 
         /> 
        </div>
        <div className="reg-actions">
          <button type='button' className='cancel-btn' onClick={onHideModal}>Cancel</button> {" "}
          <button className='btn-submit'>Submit</button>
        </div>
      </form>
      // </Modal>
     
    )
}

export default EditSupplierForm;