//we have to import this file below to access styles of imported folder

import './ExpenseDate.css';
import React from "react";

const ExpenseDate=(props)=> {
      //we can predeclare month,year,date with variable name like below and use it as{..}later like below in return()
      //tolacalestring and all are inbuild functions
      const month = props.date.toLocaleString('en-US', { month: 'long' });
      const day = props.date.toLocaleString('en-US', { day: '2-digit' });
      const year = props.date.getFullYear();

  return (
    <div className="expense-date">
    {
    /* //if we already declared above with some variable name like above means,then we simply mention those variable name like below {}  */}
   <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
      </div>
  );
}
export default ExpenseDate;