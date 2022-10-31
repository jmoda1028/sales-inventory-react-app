import { Link } from 'react-router-dom';
import moment from "moment";
// import {modalActions} from '../../store/modalSlice';
// import {useDispatch} from "react-redux";


const CustomerList = (props) => {

    // const dispatch = useDispatch();

    const {customers} = props;

    // const showHandler = () => {
    //     dispatch(modalActions.setModal(true));
    //   };

    return (

    <table className="content-table">
        <thead>
            <tr>
                <th>Fullname</th>
                <th>Contact</th>
                <th>Created_at</th>
                <th>Updated_at</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {customers.map(customer => (
            <tr key={customer.id}>
                <td>{customer.first_name}{" "}{customer.last_name}</td>
                <td>{customer.contact_no}</td>
                <td>{moment(customer.created_at).format('MMMM DD, YYYY | hh:mm A')}</td>
                <td>{moment(customer.updated_at).format('MMMM DD, YYYY | hh:mm A')}</td>
                <td>
                <Link className='btn-edit' to={'/customer/' + customer.id}>
                    edit
                </Link>
                    {/* <button className="btn-edit" >Edit</button> {" "} */}
                    {/* <button className='btn-activate'  >Delete</button> */}
                </td>  
            </tr>
           ))}
        </tbody>
    </table>

   )
}

export default CustomerList;