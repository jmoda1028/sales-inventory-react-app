import { Link } from 'react-router-dom';
import moment from "moment";


const TransactionList = (props) => {
    const {transactions} = props;

    return (
        <div className='table--container'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Transaction Code</th>
                        <th>Customer Name</th>
                        <th>Quantity</th>
                        <th>Vat</th>
                        <th>Total Price</th>
                        <th>Created_at</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.transaction_code}</td>
                        <td>{transaction.customer__first_name}{" "}{transaction.customer__last_name}</td>
                        <td>{transaction.items_quantity}</td>
                        <td>{transaction.tax}</td>
                        <td>{transaction.total_price}</td>
                        <td>{moment(transaction.created_at).format('MMMM DD, YYYY | hh:mm A')}</td>
                        <td>
                            <Link className='btn-detail' to={'/transaction/' + transaction.id}>
                                Detail
                            </Link>
                        </td>  
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionList;