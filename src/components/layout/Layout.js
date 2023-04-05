import Cart from '../../views/Pos/Cart';
import { useDispatch, useSelector } from "react-redux";
import {modalActions} from '../../store/modalSlice';
import CashierNavigation from './CashierNavigation';
import AdminNavigation from './AdminNavigation';


const Layout = (props) => {
    const dispatch = useDispatch();

    const cartIsShown = useSelector((state) => state.modal.isShown);

    const showCartHandler = () => {
      dispatch(modalActions.setModal(true));
    };

    const hideCartHandler = () => {
      dispatch(modalActions.setModal(false));
    };

    const isLogged = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("role");

    let cashier;
    let admin;

    if(isLogged && role === "Cashier"){
      cashier = <CashierNavigation onShowCart={showCartHandler} />
    }
    else if(isLogged && role === "Admin"){
      admin = <AdminNavigation onShowCart={showCartHandler} />
    }
    
    return (
      <>
        {cashier}
        {admin}
        {cartIsShown && isLogged && role === "Cashier" && <Cart onClose={hideCartHandler} />}
        <main >{props.children}</main>
      </>
    );
};
  
export default Layout;