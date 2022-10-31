// import Card from '../../components/UI/Card'
// import LoadingSpinner from '../../components/UI/LoadingSpinner'
// import { Link } from "react-router-dom";

const ProfileForm = (props) => {

    const {values} = props;

    return(
    //   <section className='auth'>

    

      <section className='profile-form'>

<h1>Profile</h1>
      <form>

      {/* {loading && (
            <div className="loading">
              <LoadingSpinner />
            </div>
          )} */}

      <div className="profile-control">
            <label htmlFor='firstName'>First Name</label>
            <input 
             value={values.firstName}
            //  onChange={onInputHandler}
             name="firstName"
             disabled 
           /> 
          </div>
          <div className="profile-control">
            <label htmlFor='lastName'>Last Name</label>
            <input 
             value={values.lastName}
            //  onChange={onInputHandler}
             name="lastName"
             disabled 
           /> 
          </div>
          <div className="profile-control">
            <label htmlFor='email'>Email</label>
            <input 
             value={values.email}
            //  onChange={onInputHandler}
             name="email"
             disabled 
           /> 
          </div>
          <div className="profile-control">
            <label htmlFor='role'>Position</label>
            <input 
             value={values.role}
            //  onChange={onInputHandler}
             name="role"
             disabled 
           /> 
          </div>
          <div className="profile-control">
            <label htmlFor='status'>Status</label>
            <input 
             value={values.status  === true ? "active" : "deactive"}
            //  onChange={onInputHandler}
             name="status"
             disabled 
           /> 
          </div>
          {/* <div className="auth-actions">
            <button className='btn-submit' type="submit">Submit</button>
          </div> */}
      </form>

      </section>
      
    )
}

export default ProfileForm;