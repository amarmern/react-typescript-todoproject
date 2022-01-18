import React from 'react'
import './styles.css'

interface props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e: React.FormEvent<EventTarget>) => void
}
const InputFeild : React.FC<props> = ({todo,setTodo, handleAdd}) => {
    return (
        <form className='input' onClick={handleAdd}>
          <input type='input'
          value={todo} onChange={(e) => setTodo(e.target.value)}
          placeholder="Ente a task" className="input__box" /> 
          <button className='input_submit' type='submit'>Go</button> 
        </form>
    )
}

export default InputFeild
