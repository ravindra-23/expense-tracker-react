import React, { useContext } from 'react'
import { Context } from '../../context/Context'

import Delete from '../../assets/icon-cross.svg'

const  HistoryItem = ({name, amount, transaction}) => {

    const {deleteTransaction} = useContext(Context)
  return (
    <div className='transaction'>
        <p className='transaction-text'>{name}</p>
        <div className='transaction-delete'>
          <p className='transaction-amount'>${amount}</p>
          <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>
            <img src={Delete} alt='delete icon' className='delete-image'/>
          </button>
        </div>
    </div>
  )
}

export default HistoryItem