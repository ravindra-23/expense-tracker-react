import React, {useContext} from 'react'
import {Context} from '../../context/Context'
import './expensedisplay.css'

const Expensedisplay = () => {

  const {allTransactions} = useContext(Context)

  const amounts = allTransactions.map(transaction => Number(transaction.amount))
  const income = amounts.filter(amount => amount > 0)
  const expense = amounts.filter(amount => amount < 0)

  const add = (acc, a) => {
    return acc + a;
  }

  const incomeAmount = income.reduce(add, 0)
  const expenseAmount = Math.abs(expense.reduce(add,0))
  const balanceAmount = incomeAmount - expenseAmount

  return (
    <div className='expense-display'>
      <div className='total-balance'>
          <p className='balance'>Your Balance</p>
          <h3 className='balance-amount'>${balanceAmount}</h3>
      </div>

      <div className='income-expense'>
          <div className='income'>
              <p className='title'>INCOME</p>
              <h3 className='income-amount amount'>${incomeAmount}</h3>
          </div>

          <div className='expense'>
              <p className='title'>EXPENSE</p>
              <h3 className='expense-amount amount'>${expenseAmount}</h3>
          </div>
      </div>
    </div>
  )
}

export default Expensedisplay