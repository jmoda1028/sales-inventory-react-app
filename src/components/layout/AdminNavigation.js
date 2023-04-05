import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../store/authSlice';
import LoadingSpinner from '../UI/LoadingSpinner';


const AdminNavigation = (props) => {
    const navigate = useNavigate();
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

    return (
      <nav className='admin-main--nav'>
        <div className='nav-brand'>
          <h3>Sales Inventory</h3>
        </div>
        <ul className='mid-nav__list'>
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
            <NavLink to='/profile' activeclassname='active'>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard' activeclassname='active' >
              Dashboard
            </NavLink>
          </li>
        </ul>
        <ul className='right-nav__list'>
          <li>
            <Link  onClick={logoutHandler}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
};

export default AdminNavigation;