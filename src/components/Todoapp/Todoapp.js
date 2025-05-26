import React, { useState } from 'react';
import TodoItem from './Todoitem';

export default function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: task }]);
    setTask('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>📝 Todo List</h2>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleAdd} style={styles.button}>Add</button>

      {todos.map(todo => (
        <TodoItem key={todo.id} text={todo.text} onDelete={() => handleDelete(todo.id)} />
      ))}
    </div>
  );
}

const styles = {
  container: { maxWidth: '400px', margin: '50px auto', textAlign: 'center' },
  input: { padding: '10px', width: '70%', marginRight: '5px' },
  button: { padding: '10px 15px' }
};
