import React from "react";
import Chart from "./Chart/Chart";
const ExpensesChart = (props) => {
  const chartDataPoint = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sept", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for(const i of props.expenses)
  {
    const expenseMonth= i.date.getMonth();
    chartDataPoint[expenseMonth].value += i.amount;
  }

  return <Chart dataPoint={chartDataPoint}></Chart>;
};

export default ExpensesChart;
