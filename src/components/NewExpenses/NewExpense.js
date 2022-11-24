import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense=(props)=>{
    const saveNewExpense = (expense) => {
        const newExpense = {
            ...expense, id: Math.random().toString()
        }
        props.onAddExpense(newExpense)
    };

    return(
        <div class="new-expense">
            <ExpenseForm onSaveEvent={saveNewExpense}/>
        </div>
    )
};

export default NewExpense;