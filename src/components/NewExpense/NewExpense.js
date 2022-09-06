import React  from "react";
import NewExpenseForm from './NewExpenseForm';
export default function NewExpense(props){
    function expenseData(expense){
        props.onAddExpense(expense);
    }
    return (
        <div className="new-expense">
        <NewExpenseForm onSaveExpense={expenseData}/>
        </div>
    );
}
