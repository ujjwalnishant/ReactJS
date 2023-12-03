import React from 'react'
import { Todo } from '../App'
import SingleTodo from './SingleTodo'
interface todoListProps {
    todoList: Todo[],
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>,
}
const TodoList = ({ todoList, setTodoList }: todoListProps) => {
    return (
        <div>
            {todoList.map(todo => (
                <SingleTodo key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList} />
            ))}
        </div>
    )
}

export default TodoList