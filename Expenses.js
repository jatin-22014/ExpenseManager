import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import FinalChart from "./FinalChart";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [defaultYear, setFilteredYear] = useState(2023);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === defaultYear;
  });

  return (
    <div>
      <div className="expenses">
        <ExpenseFilter
          selected={defaultYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>

        <FinalChart expenses={filteredExpenses}></FinalChart>

        {filteredExpenses.length === 0 ? (
          <h2 className="fallback">No Expenses Found</h2>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            ></ExpenseItem>
          ))
        )}

      </div>
    </div>
  );
}

export default Expenses;
