import React, {useState} from 'react'
import './newtransaction.css'

const Newtransaction = () => {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState()

  const submitForm = (e) => {
    e.preventDefault()
    setText('')
    setAmount('')
}

  return (
    <div className='add-transaction'>
      <h2 className='transaction-title'>Add a New Transaction</h2>
        <form className='transaction-form'>
            <div className='form-input title-input'>
                <label>Text:</label>
                <input type='text' placeholder='Enter Expense Title' value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className='form-input amount-input'>
                <label>Amount:<br/><span className='amount-info'>(Negative-Expense, Positive-Income)</span></label>
                <input type='number' placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            
            <button onClick={submitForm} className='add-transaction-btn'>Add Transaction</button>
        </form>
    </div>
  )
}

export default Newtransaction