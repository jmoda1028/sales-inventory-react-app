import React from 'react';
import {authActions} from '../../store/authSlice'
import {useSelector,useDispatch} from "react-redux";
import {logout} from '../../store/authSlice'

const Logout = () => {

  const dispatch = useDispatch();


  const { loading, error } = useSelector((state) => state.auth);
  
    return (
        <div>
          <h1>Logout</h1>
        </div>
    )
}

export default Logout;