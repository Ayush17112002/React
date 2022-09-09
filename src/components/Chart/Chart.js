import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const chartBars = [];
  props.dataItems.forEach((dataItem) => {
    chartBars.push(
      <ChartBar
        key={dataItem.label}
        value={dataItem.value}
        maxValue={props.maximumVal}
        label={dataItem.label}
      />
    );
  });
  return <div className="chart">{chartBars}</div>;
};
export default Chart;
