import React from 'react';
import './todoListItem.css'

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed}) => (
    <div className= "todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons_container">
            {todo.isCompleted ? null : 
            <button 
                onClick={() => onCompletedPressed(todo.text)}
                className= "completed-button">
                Mark as completed
            </button>}
            
            <button 
                onClick={() => onRemovePressed(todo.id)}
                className= "remove-button">Remove</button>
        </div>
        
    </div>
);
export default TodoListItem;