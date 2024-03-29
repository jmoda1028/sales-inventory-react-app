import { Link } from 'react-router-dom';
import moment from "moment";


const SupplierList = (props) => {
    const {suppliers} = props;

    return (
        <div className='table--container'>
            <table className="table">
                <thead>
                    <tr>
                        <th>CompanyName</th>
                        <th>address</th>
                        <th>Contact</th>
                        <th>Created_at</th>
                        <th>Updated_at</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map(supplier => (
                    <tr key={supplier.id}>
                        <td>{supplier.company_name}</td>
                        <td>{supplier.address}</td>
                        <td>{supplier.contact_no}</td>
                        <td>{moment(supplier.created_at).format('MMMM DD, YYYY | hh:mm A')}</td>
                        <td>{moment(supplier.updated_at).format('MMMM DD, YYYY | hh:mm A')}</td>
                        <td>
                            <Link className='btn-edit' to={'/supplier/' + supplier.id}>
                            edit
                        </Link>
                        </td>  
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SupplierList;