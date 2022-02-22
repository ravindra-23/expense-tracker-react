import React from 'react'

import { Header, Expensedisplay, History, Newtransaction } from './components'
import './App.css'

const App = () => {
  return (
    <div className='container'>
        <Header />
        <Expensedisplay />
        <History />
        <Newtransaction />
    </div>
  )
}

export default App