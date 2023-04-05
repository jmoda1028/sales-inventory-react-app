import React, {useState, useEffect} from 'react';
import axios from '../../util/api'
import TransactionList from './TransactionList';


const Transaction = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
      axios.get('get_transaction_customer/')
        .then(res => {
          setTransactions(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    },[])

    return (
      <section className='transaction'>
        <div className='container'>
        { transactions.length > 0 ?
            <TransactionList 
              transactions={transactions}
            />
          :
          <h1 className='no--data__header'>No Data Found</h1>
        } 
        </div>
      </section>
    )
}

export default Transaction;