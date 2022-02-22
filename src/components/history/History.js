import React from 'react'
import './history.css'
import Delete from '../../assets/icon-cross.svg'

const History = () => {
  return (
    <div className='history'>
      <h2 className='history-title'>History</h2>

      <div className='transaction'>
        <p className='transaction-text'>Salary of month Feb</p>
        <div className='transaction-delete'>
          <p className='transaction-amount'>$1000</p>
          <button className='delete-btn'>
            <img src={Delete} alt='delete icon' className='delete-image'/>
          </button>
        </div>
      </div>
      <div className='transaction'>
        <p className='transaction-text'>Salary of month Feb</p>
        <div className='transaction-delete'>
          <p className='transaction-amount'>$1000</p>
          <button className='delete-btn'>
            <img src={Delete} alt='delete icon' className='delete-image'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default History