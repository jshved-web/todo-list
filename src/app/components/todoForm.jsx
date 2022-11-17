import React, {useEffect, useState} from 'react'
import axios from 'axios'

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('')
  const [inputDate, setInputDate] = useState('')
  const [todos, setTodos] = useState()

  useEffect(() => {
    axios.get('https://todo-list-a07f5-default-rtdb.europe-west1.firebasedatabase.app/todos/1.json')
      .then(resData => {
        console.log(resData)
        setTodos(resData)
        console.log(todos)
      })
  }, [])

  const handleSubmit = (e) => {
    console.log(inputDate)
    e.preventDefault()
  }
  return (
    <form className='todo-form'>
        <input
          type='text'
          name='text'
          className='todo-input'
          placeholder='Введите задачу'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      <input
        type='datetime-local'
        name='date'
        className='todo-input-date'
        value={inputDate}
        onChange={e => setInputDate(e.target.value)}
      />
      <button className='todo-btn' onClick={handleSubmit}>Добавить</button>
    </form>
  )
}

export default TodoForm