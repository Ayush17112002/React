import Card from "../UI/Card";
function ExpenseDate(props) {
  return (
    <Card className="expense-date">
      <div className="expense-date__month">{props.date.getUTCMonth() + 1}</div>
      <div className="expense-date__day">{props.date.getUTCDate()}</div>
      <div className="expense-date__year">{props.date.getUTCFullYear()}</div>
    </Card>
  );
}
export default ExpenseDate;
