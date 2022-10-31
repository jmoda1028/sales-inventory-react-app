// import React, {useState, useCallback, useEffect} from 'react';
import { NavLink, useLocation, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import CartButton from '../../views/Pos/Cart/CartButton';
import { logout } from '../../store/authSlice';
// import axios from '../../util/api'
// import AuthHeader from '../../util/AuthHeader';
import LoadingSpinner from '../UI/LoadingSpinner';


const MainNavigation = (props) => {

  // const [cookie, setCookie, removeCookie] = useCookies(['refresh_token']);

  // const [isLoggedOut, setIsLoggedOut] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  const dispatch = useDispatch();

  // const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  // const isLoggedIn = localStorage.getItem('isLoggedIn');

  const logoutHandler = async () => {
          dispatch(logout());

          localStorage.clear();
    
           navigate('/login');

 }  

  // const logout = async () => {
  //   await axios.post('logout/');

    // dispatch(authActions.setAuth(false));

   
    // localStorage.removeItem("token");
    // localStorage.clear();
    
    // navigate('/login');
    // removeCookie('refresh_token');
// }

// const token = localStorage.getItem('token');

const isLoading = useSelector((state) => state.auth.loading);

if(isLoading){
  return(
    <div className="loading">
              <LoadingSpinner />
            </div>
  )
}

// if(!token){
//   return <Navigate to="/login" state={{ from: location}} replace/>
// }


  // console.log('pathname', location.pathname);

  // const [isPosActive, setIsPosActive] = useState(false)

  // const [currentPath, setCurrentPath] = useState('');


  const {pathname} = location;
  
// const token = localStorage.getItem('token');


// if(isLoggedOut){
//   return <Navigate to="/login" state={{ from: location}} replace/>
// }

// const firstName = localStorage.getItem("firstName");
// const lastName = localStorage.getItem("lastName");

// const role = localStorage.getItem("role");

  return (
    <header className='main-nav--header'>
      <div className='main-nav--logo'>Sales Inventory</div>
      <nav className='main-nav'>
        <ul>
    
        <li>
            <NavLink to='/employee' activeclassname='active'>
              Employee
            </NavLink>
          </li>
          <li>
            <NavLink to='/customer' activeclassname='active'>
              Customer
            </NavLink>
          </li>
          <li>
            <NavLink to='/inventory' activeclassname='active'>
              Inventory
            </NavLink>
          </li>
          <li>
            <NavLink to='/supplier' activeclassname='active'>
              Supplier
            </NavLink>
          </li>
          <li>
            <NavLink to='/transaction' activeclassname='active'>
              Transaction
            </NavLink>
          </li>

         
          <li>
            <NavLink to='/pos' activeclassname='active'>
              POS
            </NavLink>
          </li>
         
          <li>
            <NavLink to='/profile' activeclassname='active'>
              Profile
            </NavLink>
          </li>
         
          <li>
            <NavLink to='/dashboard' activeclassname='active' >
              Dashboard
            </NavLink>
          </li>

          {/* <li>
            
          </li> */}
        </ul>
     
      </nav>
      {/* <div className='main-nav--cart__button'>
      <ul>
       
            </ul>
            </div> */}
      <div className='right-main--nav'>
      <ul>
      <li>
         {/* {isPosActive && <CartButton />}  */}
         { pathname === `/pos` && <CartButton onShowCart={props.onShowCart} /> }
            </li>
        <li><Link  onClick={logoutHandler}>
              Logout
            </Link>
            </li>
            {/* <li>{`${firstName} ${lastName}`}</li> */}
            </ul>
            </div>
    
    </header>
  );
};

export default MainNavigation;
