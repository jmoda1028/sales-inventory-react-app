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
            setTotalProducts(count);
        })
        .catch(err => {
          console.log(err);
        })
      axios.get('count_suppliers/')
        .then(res => {
            const {count} = res.data;
            setTotalSuppliers(count);
        })
        .catch(err => {
          console.log(err);
        })
      axios.get('count_transactions/')
        .then(res => {
            const {count} = res.data;
            setTransactions(count);
        })
        .catch(err => {
          console.log(err);
        })
    }

    useEffect(() => {
      getCurrentUser();
    }, [])

    return (
      <section className='dashboards'>
        <div className='container'>
          <h1>Dashboard</h1>   
          <List 
            totalCustomers={totalCustomers}
            totalUsers={totalUsers}
            totalProducts={totalProducts}
            totalSuppliers={totalSuppliers}
            totalTransactions={totalTransactions}
          />
        </div>
      </section>
    )
}

export default Dashboard;