import React, { useState } from 'react'
import { Todo } from '../App'
type Props = {
    todo: Todo,
    todoList: Todo[],
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({ todo, todoList, setTodoList }: Props) => {
    const [editable, setEditable] = useState<boolean>(false)
    const handleEditTodo = (newTodo: string): void => {
        setTodoList(prev => prev.map(td => {
            if (td.id === todo.id) return { ...td, desc: newTodo }
            else return td
        }))
    }
    const handleDeleteTodo = (): void => {
        setTodoList(prev => prev.filter(td => td.id !== todo.id))
    }
    const handleTodoCompleted = (): void => {
        setTodoList(prev => prev.map(td => {
            if (td.id === todo.id) return { ...td, isDone: true }
            else return td
        }))
    }
    return (
        <div key={todo.id} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            {editable ? <input placeholder={todo.desc} value={todo.desc} onChange={(e) => handleEditTodo(e.target.value)} /> : <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>{todo.desc}</span>}
            <button onClick={() => setEditable(!editable)}>{editable ? "Save" : "Edit"}</button>
            <button onClick={handleDeleteTodo}>Delete</button>
            <button onClick={handleTodoCompleted}>Done</button></div>
    )
}

export default SingleTodo