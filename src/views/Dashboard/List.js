const List = (props) => {

    const {
        totalCustomers,
        totalUsers,
        totalProducts,
        totalSuppliers,
        totalTransactions
    } = props;

    return (

            <>
                <div className="dashboard-list"> 
                    <h3>Customers</h3>
                    <hr/>
                    <span>{totalCustomers} Record/s</span>
                </div>
                <div className="dashboard-list"> 
                    <h3>Cashiers</h3>
                    <hr/>
                    <span>{totalUsers} Record/s</span>
                </div>
                <div className="dashboard-list"> 
                    <h3>Products</h3>
                    <hr/>
                    <span>{totalProducts} Record/s</span>
                </div>
                <div className="dashboard-list"> 
                    <h3>Suppliers</h3>
                    <hr/>
                    <span>{totalSuppliers} Record/s</span>
                </div>
                <div className="dashboard-list"> 
                    <h3>Transactions</h3>
                    <hr/>
                    <span>{totalTransactions} Record/s</span>
                </div>
                </>

    )
}

export default List;