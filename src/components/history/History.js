import React, {useContext} from 'react'
import { Context } from '../../context/Context'
import './history.css'
import HistoryItem from './HistoryItem'

const History = () => {

  const {allTransactions} = useContext(Context)

  const transactionEle = allTransactions.map(transaction => (
    <HistoryItem 
        key={transaction.id} 
        transaction={transaction} 
        name={transaction.text}
        amount={transaction.amount}
    />
    ))
  return (
    <div className='history'>
      <h2 className='history-title'>History</h2>
      {transactionEle}
    </div>
  )
}

export default History