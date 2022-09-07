import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import "./ExpenseFilter/ExpenseFilter.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import "./ExpensesList.css";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("");
  function onDropdownSelectHandler(year) {
    //you need here the selected year to perform filteration
    setFilteredYear(year);
  }
  const filteredExpenses = props.items.filter((p) => {
    return p.date.getFullYear() == filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter onDropdownSelect={onDropdownSelectHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
