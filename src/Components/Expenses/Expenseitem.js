import React from "react";
import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function Expenseitem(props) {
  //   const ExpenseDate = new Date(2022, 11, 24);
  //   const ExpenseTitle = "bike insurance";
  //   const ExpenseAmount = 500;
  //   console.log(props);
  //   const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  //   const months = props.date.toLocaleString("en-us", { month: "long" });
  //   const year = props.date.getFullYear();
  return (
    <Card className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}
      {/* <div>
        <div>{year}</div>
        <div>{months}</div>
        <div>{day}</div>
      </div> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
    </Card>
  );
}

export default Expenseitem;
