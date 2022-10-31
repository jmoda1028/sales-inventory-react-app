// import React, {useState, useCallback} from 'react';
import { useLocation, Navigate, Outlet } from "react-router-dom";
// import {useSelector,useDispatch} from "react-redux";
// import {authActions} from '../store/authSlice'


const PrivateRoutes =  () => {

    const location = useLocation();

    // const role = localStorage.getItem('role');

    // const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

    // const isLoggedIn = localStorage.getItem('isLoggedIn');

    // const redirect = () => {
    //     if(isLoggedIn && role === 'Cashier' && isAdmin){
    //         return <Navigate to="/pos" />;
    //     }
    
    //     if(isLoggedIn && role === 'Admin' && isCashier){
    //         return <Navigate to="/" />;
    //     }
    // }

    
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    return (
        isLoggedIn
            ?  <Outlet /> : <Navigate to="/login" state={{ from: location}} replace/>
    )
    
}

export default PrivateRoutes;

// export default function PrivateRoute({ children }) {

//     const dispatch = useDispatch();

//     const location = useLocation();
//     const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  
//     // if (isLoggedIn === undefined) return null; // or loading spinner/etc...

//     // const token = localStorage.getItem('token');

//     // if (token) {
//     //     dispatch(authActions.setAuth(true));
//     // }
  
//     return isLoggedIn
//       ? children
//       : <Navigate to="/login" replace state={{ from: location }} />;
//   }