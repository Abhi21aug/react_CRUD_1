import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const months = props.date.toLocaleString("en-us", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{months}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
