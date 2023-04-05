import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from '../../util/api';
import ProfileForm from './ProfileForm';
import EditForm from './EditForm';
import Modal from '../../components/UI/Modal'
import { messageActions } from '../../store/messageSlice';


const Profile = () => {
    const dispatch = useDispatch();

    const [IsShown, setIsShown] = useState(false);

    const isLoading = useSelector((state) => state.auth.loading);
    const {successMessage} = useSelector((state) => state.message);

    const userId = localStorage.getItem('userId');

    const initialValues = {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      status: "",
      password: "",
      passwordConfirm: "",
    };

    const [values, setValues] = useState(initialValues);

    const showHandler = () => {
      setIsShown(true);
    };

    const hideHandler = () => {
      setIsShown(false);
    };


    const inputHandlerChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };

    const submitHandler = (e) => {
      e.preventDefault();

      if(values.password !== values.passwordConfirm){
          alert("Passwords don't match");
      }else if(values.password === values.passwordConfirm){
          axios.patch('update-profile/', {
              password: values.password,
          })
          .then(res => {
            setIsShown(false);
            dispatch(messageActions.setSuccessMessage("Password Successfully Changed!"));
          })
          .catch(err => {
              console.log(err);
          })
       }  
    };
    
    useEffect(() => {
      const getCurrentUser = () => {
        axios.get(`get_current_user/?user_id=${userId}`)
             .then(res => {
                const user = res.data;
                user.map(user => {
                  setValues({
                    firstName: user.first_name,
                    lastName: user.last_name,
                    email: user.email,
                    role: user.role__name,
                    status: user.is_active
                  });

                  return user;

                });
                  
             })
             .catch(err => {
                console.log(err);
             })
      }

      getCurrentUser();

    }, [userId])

    const getTimeout = () => {
      setTimeout(() => {
        dispatch(messageActions.clearMessage());
      }, 3000);
    };

    if(successMessage){
      getTimeout();
    }

    let message;

    if(successMessage){
      message = <div className='success__message'><p>{successMessage}</p></div>
    }

    return (
       <section className="profile">
          <div className="container">
            {message}
            <button className='btn-change__password' onClick={showHandler}>
              Change Password
            </button>
            {IsShown && 
                      <Modal>
                        <EditForm 
                              onInputHandler={inputHandlerChange}
                              onSubmitHandler={submitHandler}
                              values={values}
                              isLoading={isLoading}
                              onClose={hideHandler}
                              message={message}
                        />
                      </Modal>
              }
              <ProfileForm
                values={values}
              />
          </div>
       </section>
    )
}

export default Profile;