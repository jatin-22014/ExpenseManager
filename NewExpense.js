import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditHandler = () => {
    setIsEditing(true);
  };

  const saveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const stopEdit = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditHandler}> Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEdit}
          onSaveData={saveDataHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
