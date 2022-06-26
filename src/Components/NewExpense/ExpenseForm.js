import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = React.useState("");
  const [enterAmount, setEnterAmount] = React.useState("");
  const [enetrDate, setEnterDate] = React.useState("");
  // const [modal, setModal] = React.useState(false);

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };

  const submitHandler = (event) => {
    // console.log("inside submit buttin ");
    event.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enetrDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
    // setModal(false);
  };

  // const addNewExpenseHandler = () => {
  //   setModal(true);
  // };
  // const cancleHandler = (event) => {
  //   // console.log("inside cancle handler");
  //   event.preventDefault();
  //   setEnterTitle("");
  //   setEnterAmount("");
  //   setEnterDate("");
  //   setModal(false);
  // };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            type="text"
            value={enterTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="paisa"
            type="number"
            min="0.1"
            step="0.1"
            value={enterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="tarikh"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enetrDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// import React from "react";
// import "./ExpenseForm.css";

// const ExpenseForm = (props) => {
//   const [enterTitle, setEnterTitle] = React.useState("");
//   const [enterAmount, setEnterAmount] = React.useState("");
//   const [enetrDate, setEnterDate] = React.useState("");
//   const [modal, setModal] = React.useState(false);

//   const titleChangeHandler = (event) => {
//     setEnterTitle(event.target.value);
//   };

//   const amountChangeHandler = (event) => {
//     setEnterAmount(event.target.value);
//   };

//   const dateChangeHandler = (event) => {
//     setEnterDate(event.target.value);
//   };

//   const submitHandler = (event) => {
//     // console.log("inside submit buttin ");
//     event.preventDefault();
//     const expenseData = {
//       title: enterTitle,
//       amount: enterAmount,
//       date: new Date(enetrDate),
//     };
//     props.onSaveExpenseData(expenseData);
//     setEnterTitle("");
//     setEnterAmount("");
//     setEnterDate("");
//     setModal(false);
//   };

//   const addNewExpenseHandler = () => {
//     setModal(true);
//   };
//   const cancleHandler = (event) => {
//     // console.log("inside cancle handler");
//     event.preventDefault();
//     setEnterTitle("");
//     setEnterAmount("");
//     setEnterDate("");
//     setModal(false);
//   };

//   return (
//     <div>
//       {modal ? (
//         <form onSubmit={submitHandler}>
//           <div className="new-expense__controls">
//             <div className="new-expense__control">
//               <label>Title</label>
//               <input
//                 name="title"
//                 type="text"
//                 value={enterTitle}
//                 onChange={titleChangeHandler}
//               />
//             </div>
//             <div className="new-expense__control">
//               <label>Amount</label>
//               <input
//                 name="paisa"
//                 type="number"
//                 min="0.1"
//                 step="0.1"
//                 value={enterAmount}
//                 onChange={amountChangeHandler}
//               />
//             </div>
//             <div className="new-expense__control">
//               <label>Date</label>
//               <input
//                 name="tarikh"
//                 type="date"
//                 min="2019-01-01"
//                 max="2022-12-31"
//                 value={enetrDate}
//                 onChange={dateChangeHandler}
//               />
//             </div>
//           </div>
//           <div className="new-expense__actions">
//             <button onClick={cancleHandler}>cancle</button>
//             <button>Add Expense</button>
//           </div>
//         </form>
//       ) : (
//         <button onClick={() => addNewExpenseHandler()}>Add New Expense</button>
//       )}
//     </div>
//   );
// };

// export default ExpenseForm;
