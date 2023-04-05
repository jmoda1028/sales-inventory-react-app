import { NavLink, useLocation, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import CartButton from '../../views/Pos/Cart/CartButton';
import { logout } from '../../store/authSlice';
import LoadingSpinner from '../UI/LoadingSpinner';


const CashierNavigation = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const logoutHandler = async () => {
      dispatch(logout());
      localStorage.clear();  
      navigate('/login');
    }  

    const isLoading = useSelector((state) => state.auth.loading);

    if(isLoading){
      return(
        <div className="loading__spinner">
          <LoadingSpinner />
        </div>
      )
    }

    const {pathname} = location;

    return (
        <nav className='cahier-main--nav'>
          <div className='nav-brand'>
            <h3>Sales Inventory</h3>
          </div>
          <ul className='mid-nav__list'>
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
          </ul>
          <ul className='right-nav__list'>
            <li>
              { pathname === `/pos` && <CartButton onShowCart={props.onShowCart} /> }
            </li>
            <li>
              <Link  onClick={logoutHandler}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
    );
};

export default CashierNavigation;