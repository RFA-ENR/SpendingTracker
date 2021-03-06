import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onSaveExpenseData}) => {
  return (
    <div className={'new-expense'}>
      <ExpenseForm onSaveExpenseData={(data) => onSaveExpenseData(data)}/>
    </div>
  );
};

export default NewExpense;

