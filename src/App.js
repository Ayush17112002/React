import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import "./components/ExpenseDate.css";
import "./components/ExpenseItem.css";
import "./components/Expenses.css";
import "./components/NewExpense/NewExpense.css";
import "./components/NewExpense/NewExpenseForm.css";
import "./UI/Card.css";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  function addNewExpense(newExpense) {
    setExpenses(() => {
      return [newExpense, ...expenses];
    });
    console.log([newExpense, ...expenses]);
  }
  return (
    <div>
      <NewExpense onAddExpense={addNewExpense} />
      <Expenses items={expenses} />
    </div>
  );
}
