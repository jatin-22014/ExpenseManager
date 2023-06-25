import ExpenseItem from "./ExpenseItem";
const ExpensesList=(props)=>{

    {filteredExpenses.length === 0 ? (
        <p>No Expenses Found</p>
      ) : (
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          ></ExpenseItem>
        ))
      )}


};

export default ExpensesList;