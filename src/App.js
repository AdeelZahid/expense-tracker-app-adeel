import React from 'react';
import Header from './components/header';
import Balance from './components/balance';
import AddTransaction from './components/addTransaction';
import IncomeList from './components/incomeList'
import ExpenseList from './components/expenseList';
import {GlobalContextProvider} from './context/globalState';


import './App.css';

const App = () => {
    return (
     <GlobalContextProvider>
        <div className="container">
            <div className="app-wrapper">
                <Header />
                <Balance />
                <AddTransaction />
                <IncomeList />
                <ExpenseList /> 
            </div>
        </div>
     </GlobalContextProvider>
    )
}

export default App