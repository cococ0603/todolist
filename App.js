import React, { useState } from 'react';
import './App.css';

function TodoList() {
  const [todos, setTodos] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    setTodoList([...todoList, { text: todos, completed: false }]);
    setTodos('');
  };

  const deleteItem = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  const toggleComplete = (index) => {
    const updatedList = [...todoList];
    updatedList[index].completed = !updatedList[index].completed;
    setTodoList(updatedList);
  };

  return (
    <div className="todo-body">
      <h1 className="black-nav">Todo List</h1>
      <input
        className="input"
        value={todos}
        type="text"
        onChange={(e) => setTodos(e.target.value)}
        placeholder="  할 일을 입력하세요"
      />
      <button className="input" onClick={addItem}>
        할 일 추가
      </button>

      <ul className="list">
        {todoList.map((item, index) => (
          <div 
          className="todo-item"
          key={index}>
            <span
              style={{
                textDecoration: item.completed ? 'line-through' : 'none',
              }}
            >
              {item.text}
            </span>
            <button
            className="todo-button" 
            onClick={() => toggleComplete(index)}>
               ✅
            </button>
            <button
            className="todo-button"
            onClick={() => deleteItem(index)}> ❌</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;