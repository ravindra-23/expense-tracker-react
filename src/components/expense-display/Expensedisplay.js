import React from 'react'
import './expensedisplay.css'

const Expensedisplay = () => {
  return (
    <div className='expense-display'>
      <div className='total-balance'>
          <p className='balance'>Your Balance</p>
          <h3 className='balance-amount'>$500</h3>
      </div>

      <div className='income-expense'>
          <div className='income'>
              <p className='title'>INCOME</p>
              <h3 className='income-amount amount'>$1000</h3>
          </div>

          <div className='expense'>
              <p className='title'>EXPENSE</p>
              <h3 className='expense-amount amount'>$500</h3>
          </div>
      </div>
    </div>
  )
}

export default Expensedisplay