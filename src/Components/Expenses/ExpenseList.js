import React from "react";
import Expenseitem from "./Expenseitem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  //   let expenseResult = <p>No Data Found for selected Year</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No expenses</h2>;
  }

  //   if (props.items.length > 0) {
  //     expenseResult = props.items.map((expense) => (
  //       <Expenseitem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     ));
  //   }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <Expenseitem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
