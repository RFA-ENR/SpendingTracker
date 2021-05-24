import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import React from 'react';
import Card from '../UI/Card';

function Expenses({items}) {


    return (
    <Card className={"expenses"}>

      {items.map((a, index) => (
          <ExpenseItem
              key={`expense${index}`}
              title={a.title}
              amount={a.amount}
              date={a.date}
          />
      ))}
    </Card>
  );
}
export default Expenses;
