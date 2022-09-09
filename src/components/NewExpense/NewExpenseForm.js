import { useState } from "react";

export default function NewExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  function submitHandler(e) {
    //to prevent it from sending request to server hosting the site
    e.preventDefault();
    /*2-way binding i.e. 
        1->feeding the input to states
        2->reseting the input fields on the form
        */
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    setTitle("");
    setAmount(0);
    setDate("");
    props.onSaveExpense(expenseData);
  }
  function titleHandler(e) {
    setTitle(e.target.value);
    console.log(title, amount, date);
  }
  function amountHandler(e) {
    setAmount(parseInt(e.target.value));
    console.log(typeof e.target.value);
  }
  function dateHandler(e) {
    setDate(e.target.value);
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={amountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} onChange={dateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
}
