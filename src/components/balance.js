import React, {useContext} from 'react';
import {GlobalContext} from '../context/globalState';

const Balance = () => {
    const {incomeTransactions, expenseTransactions} = useContext(GlobalContext);

    const incomeAmount = incomeTransactions.map(
        (IncomeTransaction => IncomeTransaction.incomeAmount)
    )
    const expenseAmount = expenseTransactions.map(
        (expenseTransaction => expenseTransaction.expenseAmount)
    )

    const totalIncome = incomeAmount.reduce((acc, item) =>
        (acc += item), 0
    ).toFixed(2);

    const totalexpense = expenseAmount.reduce((acc, item) =>
        (acc += item), 0
    ).toFixed(2);

    let balance = (totalIncome - totalexpense).toFixed(2);

    return (
        <div className="balance">
            <h2> Your Balance </h2>
            <h3>${balance}</h3>
            <div className="income-expense">
                <div className="plus">
                    <h3>Income </h3>
                    <p>+${totalIncome}</p>
                </div>
                <div className="minus">
                    <h3>Expenses</h3>
                    <p>-${totalexpense}</p>
                </div>
            </div>
        </div>
    )
}

export default Balance
