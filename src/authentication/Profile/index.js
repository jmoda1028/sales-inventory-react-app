import {useEffect, useState} from "react";
// import axiosInstance from '../../interceptors/axios';
import {useDispatch, useSelector} from "react-redux";
import axios from '../../util/api';
import ProfileForm from './ProfileForm';
import EditForm from './EditForm';
import Modal from '../../components/UI/Modal'
// import {modalActions} from '../../store/modalSlice';
import { messageActions } from '../../store/messageSlice';

const Profile = () => {

  const dispatch = useDispatch();
  // const [currentUser, setCurrentUser] = useState(null);
  const [IsShown, setIsShown] = useState(false);

  // const authToken = useSelector((state) => state.auth.token);
  const isLoading = useSelector((state) => state.auth.loading);
  // const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  // const isModalVisible = useSelector((state) => state.modal.isShown);
  const {successMessage} = useSelector((state) => state.message);

  const userId = localStorage.getItem('userId');

// console.log(userId);

  // const userCurrent = useSelector((state) => state.auth.currentUser);

  // const token = JSON.parse(localStorage.getItem('access_token'));

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
// const [isPasswordMatch, setIsPasswordMatch] = useState(false);

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
    dispatch(messageActions.setSuccessMessage("Successfully Changed Password!"));
  })
  .catch(err => {
      console.log(err);
  })


  }
  
};


  // const getCurrentUser =  async () => {
   
  //     try {
  //       const response = await axios.get(`get_current_user/?user_id=${userId}`);


  //       // localStorage.setItem('user', JSON.stringify(data));
  //       // console.log(data);

        

  //       console.log(response.data);

  //       // const {data} = response;

  //      const user = response.data;
       
  //      user.map(user => {
  //           const role = user.role__name;
  //           const userId = user.id;
  //           const firstName = user.first_name;
  //           const lastName = user.last_name;
  //           const email = user.email;

  //           setCurrentUser(`${firstName} ${lastName}`);
  //      })
        
  //       // setCurrentUser(`${data.first_name} ${data.last_name}`);
  //       // console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  
  // }

  // const UserCurr = localStorage.getItem('user');

  // console.log(UserCurr.first_name);
  
  useEffect(() => {
    const getCurrentUser = () => {
      axios.get(`get_current_user/?user_id=${userId}`)
           .then(res => {
                const user = res.data;
                // console.log(user);
                // user.map(user => {
                  // setCurrentUser(user?.first_name + " " + user?.last_name);

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
          //  })
           .catch(err => {
            console.log(err);
         })
  }

    getCurrentUser();

  }, [userId])



// if(!currentUser){
//   return <div>loading...</div>
// }


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
  message = <div className='centered pos-success__message'>{successMessage}</div>
}

    return (
       <>
    {message}
<button type="button" className='btn-change__password' onClick={showHandler}>
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
          {/* <h1>{currentUser}</h1> */}
          <ProfileForm
            values={values}
          />
        </>
    )
}

export default Profile;