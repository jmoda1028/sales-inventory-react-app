import { Link } from 'react-router-dom';
import moment from "moment";


const CustomerList = (props) => {
    const {customers} = props;

    return (
        <div className="table--container">
            <table className="table">
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
                            Edit
                        </Link>
                        </td>  
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CustomerList;