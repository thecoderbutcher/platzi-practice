import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: "Tarea 1", completed:true},
  {text: "Tarea 2", completed:true},
  {text: "Tarea 3", completed:false},
  {text: "Tarea 4", completed:false},
  {text: "Tarea 5", completed:false},
  {text: "Tarea 6", completed:true},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')  
  const completedTodo = todos.filter(todo => !!todo.completed).length;
  const totaTodo = todos.length;
  const searchedTodos = todos.filter((todo) =>  (todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())))
  
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoCounter completed={completedTodo} total={totaTodo}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;