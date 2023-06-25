import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpenses = [
  {
    id:"01",
    title: "car insurance",
    date: new Date(2023, 5, 16),
    amount: 294,
  },
  {
    id:"02",
    title: "health insurance",
    date: new Date(2022, 5, 16),
    amount: 300,
  },
  {
    id:"03",
    title: "house rent",
    date: new Date(2021, 5, 16),
    amount: 500,
  },
  {
    id:"04",
    title: "misc",
    date: new Date(2021, 5, 16),
    amount: 200,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DummyExpenses);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [ ...prevExpenses,expenseData];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
