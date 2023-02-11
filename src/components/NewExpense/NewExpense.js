import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import "./ExpenseForm.css";

function NewExpense(props) {
  const [isVisible, setIsvisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsvisible(false);
  };

  const makeVisibleHandler = () => {
    setIsvisible(true);
  };

  const cancelHandler = () => {
    setIsvisible(false);
  };

  return (
    <div className="new-expense">
      {isVisible ? (
        <ExpenseForm
          onSaveFormData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      ) : (
        <div className="new-expense__action">
          <button onClick={makeVisibleHandler}>Add New Expense</button>
        </div>
      )}
    </div>
  );
}

export default NewExpense;
