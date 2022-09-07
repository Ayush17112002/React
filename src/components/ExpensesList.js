import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return <div className="expenses-list__fallback">No Expenses Found.</div>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((exp, index) => {
        return (
          <ExpenseItem
            key={index}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          />
        );
      })}
    </ul>
  );
}
