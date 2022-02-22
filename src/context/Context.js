import React, {useState} from 'react'

const Context = React.createContext();

const ContextProvider = ({children}) => {

    const [allTransactions, setAllTransactions] = useState([]);
    console.log(allTransactions)

    const addTransaction = (transaction) => {
        setAllTransactions(prevTransactions => [...prevTransactions, transaction])
    }

    return (
        <Context.Provider value={{addTransaction, allTransactions}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}