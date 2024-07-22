import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import {useLocalStorage} from './hooks/useLocalStorage'

function App() {
/* const defaultTodos = [
   { text: 'Cortar cebolla', completed: true },
   { text: 'Tomar el Curso de Intro a React.js', completed: false },
   { text: 'Llorar con la Llorona', completed: false },
   { text: 'LALALALALA', completed: false },
   { text: 'Usar estados derivados', completed: true },
 ];

 localStorage.setItem('TODO_DB', JSON.stringify(defaultTodos));  */

  const [todos, saveTodos] = useLocalStorage('TODO_DB', []);
  const [searchValue, setSearchValue] = React.useState(''); 
  const completedTodo = todos.filter(todo => !!todo.completed).length;
  const totalTodo = todos.length;
  const searchedTodos = todos.filter((todo) =>  (todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())))
  
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }

  return (
    <>
      <TodoCounter completed={completedTodo} total={totalTodo}/>
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