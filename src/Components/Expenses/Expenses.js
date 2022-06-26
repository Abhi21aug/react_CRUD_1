import React, { useState } from "react";
import Expenseitem from "./Expenseitem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    // console.log("expenses.js");
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expenseResult = (
  //   <p className="errorText">No Data Found for selected Year</p>
  // );

  // if (filteredExpense.length > 0) {
  //   expenseResult = filteredExpense.map((expense) => (
  //     <Expenseitem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* {filteredExpense.length === 0 ? (
          <p className="errorText">No Data Found for selected Year</p>
        ) : (
          filteredExpense.map((expense) => (
            <Expenseitem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        {/* {filteredExpense.length === 0 && (
          <p className="errorText">No Data Found for selected Year</p>
        )}
        {filteredExpense.length > 0 &&
          filteredExpense.map((expense) => (
            <Expenseitem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/* {expenseResult} */}
        <ExpensesChart expenses={filteredExpense} />
        <ExpenseList items={filteredExpense} />
        {/* {props.items.map(
          (expense) =>
            expense.date.getFullYear().toString() === filteredYear && (
              <Expenseitem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            )
        )} */}
        {/* {filteredExpense.length > 0 ? (
          filteredExpense.map((expense) => (
            <Expenseitem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        ) : (
          <p style={{ color: "red" }}>No records found</p>
        )} */}
      </Card>
    </div>
  );
}

export default Expenses;
