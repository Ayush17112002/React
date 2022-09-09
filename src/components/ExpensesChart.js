import Chart from "./Chart/Chart";
const ExpensesChart = (props) => {
  //here you will get the filteredexpenses list of the expenses that done in filteredYear
  let dataItems = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "July", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sept", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  let maximumVal = 0;
  if (props.items.length > 0) {
    props.items.forEach((expense) => {
      dataItems[parseInt(expense.date.getUTCMonth())].value += parseInt(
        expense.amount
      );
      maximumVal += parseInt(expense.amount);
    });
  }
  return <Chart dataItems={dataItems} maximumVal={maximumVal} />;
};
export default ExpensesChart;
