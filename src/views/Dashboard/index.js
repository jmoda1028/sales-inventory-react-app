import React, {useState, useEffect} from 'react';
import axios from '../../util/api'
import List from './List';

const Dashboard = () => {

  const [totalCustomers, setTotalCustomers] = useState('');
  const [totalUsers, setTotalUsers] = useState('');
  const [totalProducts, setTotalProducts] = useState('');
  const [totalSuppliers, setTotalSuppliers] = useState('');
  const [totalTransactions, setTransactions] = useState('');


  const getCurrentUser = () => {
    axios.get('count_customers/')
         .then(res => {
              const {count} = res.data;

              // console.log(count)

              // totalCount.map(totalCount => {
              //   setValue({
              //     totalCustomers: totalCount.count,
              //   });
              // })

              setTotalCustomers(count);
         })
         .catch(err => {
          console.log(err);
       })
    axios.get('total_users/?role=1')
    .then(res => {
        const {total_users} = res.data;

        
        setTotalUsers(total_users);
       
    })
      .catch(err => {
      console.log(err);
    })
    axios.get('count_products/')
    .then(res => {
        const {count} = res.data;

        // totalCount.map(totalCount => {
        //   setValue({
        //     totalProducts: totalCount?.count,
        //   });
        // })
        setTotalProducts(count);
    })
      .catch(err => {
      console.log(err);
  })
  axios.get('count_suppliers/')
  .then(res => {
      const {count} = res.data;

      // totalCount.map(totalCount => {
      //   setValue({
      //     totalSuppliers: totalCount.count,
      //   });
      // })
      setTotalSuppliers(count);
  })
    .catch(err => {
    console.log(err);
})
axios.get('count_transactions/')
  .then(res => {
      const {count} = res.data;

      // totalCount.map(totalCount => {
      //   setValue({
      //     totalTransactions: totalCount.count,
      //   });
      // })
      setTransactions(count);
  })
    .catch(err => {
    console.log(err);
})
  }

  useEffect(() => {
    getCurrentUser();
  }, [])

  console.log(totalSuppliers);
  console.log(totalUsers);
  console.log(totalProducts);
  console.log(totalTransactions);

  console.log(totalCustomers);

    return (
      <>
      {/* <div className='centered'> */}
        <div className='dashboard-label'>
        <h1>Dashboard</h1>
        </div>
      {/* </div> */}
      <div className='centered'>
      
        <div className='dashboard-container'>
          {/* <h1>Dashboard {totalCustomers}</h1> */}
        
        
          <List 
            totalCustomers={totalCustomers}
            totalUsers={totalUsers}
            totalProducts={totalProducts}
            totalSuppliers={totalSuppliers}
            totalTransactions={totalTransactions}
          />
          {/* <span></span> */}
        </div>
        </div>

        </>
    )
}

export default Dashboard;