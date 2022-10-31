import {Link} from 'react-router-dom';
import moment from "moment";

const ProductList = (props) => {

    const {products} = props;

    return (

 
    <table className="content-table">
        <thead>
            <tr>
                <th>Product Code</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Created_at</th>
                <th>Updated_at</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {products.map(product => (
            <tr key={product.id}>
                <td>{product.product_code}</td>
                <td>{product.name}</td>
                <td>{product.qty_on_hand}</td>
                <td>{product.price}</td>
                <td>{moment(product.created_at).format('MMMM DD, YYYY | hh:mm A')}</td>
                <td>{moment(product.updated_at).format('MMMM DD, YYYY | hh:mm A')}</td>
                <td>
                    {/* <button className="btn-deactivate" >Edit</button> {" "} */}
                    {/* <button className='btn-activate'  >Delete</button> */}
                    <Link className='btn-edit' to={'/inventory/edit/' + product.id}>
                        edit
                    </Link> {" "}
                    <Link className='btn-detail' to={'/inventory/detail/' + product.id}>
                        detail
                    </Link>
                </td>  
            </tr>
           ))}
        </tbody>
    </table>



   )
}

export default ProductList;