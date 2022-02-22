import React, {useState} from 'react'

const Context = React.createContext();

const ContextProvider = ({children}) => {

    const [allTransactions, setAllTransactions] = useState([]);
    console.log(allTransactions)

    const addTransaction = (transaction) => {
        setAllTransactions(prevTransactions => [...prevTransactions, transaction])
    }

    const deleteTransaction = (id) => {
        setAllTransactions(prevTransactions => prevTransactions.filter(item => item.id !== id))
    }

    return (
        <Context.Provider value={{addTransaction, deleteTransaction, allTransactions}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}