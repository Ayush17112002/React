import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import './ExpenseFilter/ExpenseFilter.css';
import ExpenseItem from "./ExpenseItem";
function Expenses(props){
    function onDropdownSelectHandler(year){
        //you need here the selected year to perform filteration
    }
    return (
        <Card className="expenses">
            <ExpenseFilter onDropdownSelect = {onDropdownSelectHandler}/>
            {props.items.map((expenseItem)=>{
                return <ExpenseItem title={expenseItem.title} amount={expenseItem.amount} date={expenseItem.date}/>
            })}
        </Card>
    );
}
export default Expenses;