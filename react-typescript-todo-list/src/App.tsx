import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

export interface Todo {
  id: number,
  desc: string,
  isDone: boolean,

}
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todoList, setTodoList] = useState<Todo[]>([])
  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (todo) {
      setTodoList(prev => [...prev, { id: new Date().getTime(), desc: todo, isDone: false }])
      setTodo("")
    }
  }
  console.log(todoList)
  return (
    <div className="App">
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
