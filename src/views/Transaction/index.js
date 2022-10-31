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

  // console.log(transactions);

    return (
        <>
          { transactions.length > 0 ?
              <TransactionList 
              transactions={transactions}
              />
            :
        <h1 className='centered'>No Data Found</h1>
      }
        </>
    )
}

export default Transaction;