import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import ExpenseFilter from './components/ExpenseFilter/ExpenseFilter';
import { useState } from 'react'
import './components/ExpenseDate.css'
import './components/ExpenseItem.css'
import './components/Expenses.css'
import './components/NewExpense/NewExpense.css'
import './components/NewExpense/NewExpenseForm.css'
import './UI/Card.css'

export default function App(){
    const [expenses, setExpenses] = useState([{title:"xyz", amount:230, date:new Date()}]);
    function addNewExpense(expense){
        const newExpense = {
            ...expense
        }
        expense.id = Math.random();
        console.log(newExpense);
        //const newarray = (JSON.parse(JSON.stringify(expenses))).push(newExpense);
        const newArray = expenses.map((e)=>{
            return {...e};
        })
        newArray.push({...newExpense});
        console.log(newArray);
        setExpenses((expenses)=>{
                const newArray = expenses.map((e)=>{
                    return {...e};
                })
                newArray.push({...newExpense});
                return newArray;
        });
    }
    return (
        <div>
            <NewExpense onAddExpense={addNewExpense}/>
            <Expenses items={expenses}/>
        </div>
    )
}