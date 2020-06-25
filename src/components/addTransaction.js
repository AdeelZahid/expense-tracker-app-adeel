import React, {useState, useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import {GlobalContext} from '../context/globalState';

const AddTransaction = () => {
    const {addIncome, addExpense} = useContext(GlobalContext);
    
    
    const [income, setIncome] = useState({
        incomeText: "",
        incomeAmount: 0
    });

    const {incomeText, incomeAmount} = income;

    const onChangeIncome = (e) =>{
        setIncome({...income, [e.target.name]: e.target.value} )
    }

    const onSubmitIncome = (e) =>
     {
        e.preventDefault();
        
        if((incomeAmount!=="" && incomeAmount > 0) && incomeText!==""){
            const IncomeTransactions={
                id: uuidv4(),
                incomeText, 
                incomeAmount: incomeAmount * 1
            }

             addIncome(IncomeTransactions);
             setIncome({
                incomeText:'',
                incomeAmount:''
             })
        }
    }

    
    const [expense, setexpense] = useState({
        expenseText: "",
        expenseAmount: 0
    });

    const {expenseText, expenseAmount} = expense;

    const onChangeExpense = (e) =>{
        setexpense({...expense, [e.target.name]: e.target.value} )
    }

    const onSubmitExpense = (e) =>
     {
        e.preventDefault();
        
        if((expenseAmount!=="" && expenseAmount > 0) && expenseText!==""){
            const newExpenseTransaction={
                id: uuidv4(),
                expenseText, 
                expenseAmount: expenseAmount * 1
            }
             addExpense(newExpenseTransaction);
             setexpense({
                 expenseText:"",
                 expenseAmount:""
             })
        }
    }






    

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input type="text" name="incomeText" id="incomeText" placeholder="Add Income ..." autoComplete="off"
                        onChange={onChangeIncome} value={incomeText}/>
                    <input type="number" name="incomeAmount" id="incomeAmount" placeholder="Amount ..." autoComplete="off"
                        onChange={onChangeIncome} value={incomeAmount}/>
                    <input type="submit" value="Submit" />
                </div>
            </form>

            <form onSubmit={onSubmitExpense}>
                <div className="input-group expense">
                    <input type="text" name="expenseText" id="expenseText" placeholder="Add Expense ..." autoComplete="off"
                    onChange={onChangeExpense} value={expenseText}/>
                    <input type="number" name="expenseAmount" id="expenseAmount" placeholder="Amount ..." autoComplete="off"
                    onChange={onChangeExpense} value={expenseAmount}/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            

            
        </div>
    )
}

export default AddTransaction
