import React from 'react'
interface todoProps {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent<HTMLFormElement>) => void
}
const InputField: React.FC<todoProps> = ({ todo, setTodo, handleAdd }: todoProps) => {
    const handleOnChange = (text: string) => {
        setTodo(text)
    }
    return (
        <form action="" onSubmit={handleAdd}>
            <input value={todo} onChange={(e) => handleOnChange(e.target.value)} type="text" placeholder='enter task' />
            <button type='submit'>Go</button>
        </form>
    )
}

export default InputField