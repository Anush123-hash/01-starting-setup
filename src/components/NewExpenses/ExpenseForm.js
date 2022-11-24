import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  // Multiple State Handling Alternative approach
  // const [userImput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // })

  const titleHandler = (event) => {
    setenteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //     return ({ ...prevState, enteredTitle: event.target.value })
    // });
  };

  const amountHandler = (event) => {
    setenteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //     return ({ ...prevState, enteredAmount: event.target.value })
    // });
  };

  const dateHandler = (event) => {
    setenteredDate(event.target.value);
    // setUserInput((prevState) => {
    //     return ({ ...prevState, enteredDate: event.target.value })
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: Date(enteredDate),
    };

    props.onSaveEvent(newExpense)
    setenteredTitle('');
    setenteredAmount('');
    setenteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div class="new-expense__controls">
        <div class="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div class="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandler}
          />
        </div>
        <div class="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
        <div class="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
