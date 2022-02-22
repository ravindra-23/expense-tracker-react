import React from 'react'

import { Expensedisplay, History, Newtransaction } from './components'

const App = () => {
  return (
    <div className='container'>
        <Expensedisplay />
        <History />
        <Newtransaction />
    </div>
  )
}

export default App