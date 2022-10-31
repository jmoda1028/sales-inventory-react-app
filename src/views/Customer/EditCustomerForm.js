// import Modal from '../../components/UI/Modal';

const EditCustomerForm = (props) => {

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
          <label htmlFor='firstName'>First Name</label>
          <input 
           value={values.firstName}
           onChange={onInputChange}
           name="firstName"
           disabled  
         /> 
        </div>
        <div className="reg-control">
          <label htmlFor='lastName'>Last Name</label>
          <input 
           value={values.lastName}
           onChange={onInputChange}
           name="lastName"
           disabled  
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

export default EditCustomerForm;