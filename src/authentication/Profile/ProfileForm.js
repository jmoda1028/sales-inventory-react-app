const ProfileForm = (props) => {
    const {values} = props;

    return(
      <div className='profile--info'>
        <h1>Profile</h1>
        <form>
          <div className="field__control">
            <label htmlFor='firstName'>First Name</label>
            <input 
              value={values.firstName}
              name="firstName"
              disabled 
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='lastName'>Last Name</label>
            <input 
              value={values.lastName}
              name="lastName"
              disabled 
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='email'>Email</label>
            <input 
              value={values.email}
              name="email"
              disabled 
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='role'>Position</label>
            <input 
              value={values.role}
              name="role"
              disabled 
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='status'>Status</label>
            <input 
              value={values.status  === true ? "active" : "deactive"}
              name="status"
              disabled 
            /> 
          </div>
        </form>
      </div>    
    )
}

export default ProfileForm;