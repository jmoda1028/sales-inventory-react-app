import { Fragment } from 'react';
// import MainNavigation from './MainNavigation';
import Cart from '../../views/Pos/Cart';
import { useDispatch, useSelector } from "react-redux";
import {modalActions} from '../../store/modalSlice';
// import { authActions } from '../../store/authSlice';
// import axios from '../../util/api'
import CashierNavigation from './CashierNavigation';
import AdminNavigation from './AdminNavigation';

const Layout = (props) => {

  const dispatch = useDispatch();

  // const [currentUser, setCurrentUser] = useState('');
  const cartIsShown = useSelector((state) => state.modal.isShown);
  // const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  


  const showCartHandler = () => {
    dispatch(modalActions.setModal(true));
    // setCartIsShown(true);
  };

  const hideCartHandler = () => {
    dispatch(modalActions.setModal(false));
    // setCartIsShown(false);
  };

  // const mainNav = (
  //     <>
  //         {isLoggedIn ? <MainNavigation onShowCart={showCartHandler}/> : ''}
  //     </>
  // );

  // const userId = localStorage.getItem('userId');

  // if(isLoggedIn){
      
  // }

    const isLogged = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("role");


    console.log(role);

    let cashier;
    let admin;

    if(isLogged && role === "Cashier"){
      cashier = <CashierNavigation onShowCart={showCartHandler} />
    }
    else if(isLogged && role === "Admin"){
      admin = <AdminNavigation onShowCart={showCartHandler} />
    }
  

    return (
      <Fragment>
        {/* {isLogged && role == 'Cashier' && <MainNavigation onShowCart={showCartHandler} /> } */}
        {cashier}
        {admin}
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <main >{props.children}</main>
      </Fragment>
    );
  };
  
  export default Layout;
  