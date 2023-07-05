//to import any component which have to display in ui
import React, { useState }  from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


const App=()=> {
  //we have to include data like below whichever we want to display in ui
const [expenses , setExpenses]=useState(DUMMY_EXPENSES);
  
const addExpenseHandler=expense=>{
 setExpenses(prevExpenses=>{
  return [expense, ...prevExpenses]
 });
  }

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})

  //   );
//we can also write below like above by adding import react from react
  return (
    <div>
 <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

//whenever we create function we have to export it like below
export default App;
