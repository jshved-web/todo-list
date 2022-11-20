import React from 'react'
import TodoForm from './todoForm'
import {useEffect, useState} from 'react'
import todosService from '../../services/todos.service'
import Todo from './todo'
import {postContent} from '../../utils/postData'

const TodoList = () => {
  const [todos, setTodos] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const getTodos = async () => {
    try {
      const data = await todosService.get()
      setTodos(data)
      setIsLoading(false)
    } catch (error) {
      console.warn('Something was wrong', error)
    }
  }
  useEffect(() => {
    getTodos()
  }, [])

  const handleSubmit = async (e, inputValue) => {
    e.preventDefault()
    try {
      const content = postContent(inputValue.text, inputValue.date, inputValue.description, inputValue.check, inputValue.files)
      const {name} = await todosService.create(content)
      setTodos({...todos, [name]: content})
    } catch (e) {
      console.warn(e)
    }
  }

  const handleDelete = async (_id) => {
    await todosService.remove(_id)
    getTodos()
  }
  return (
    <div className="todo-list">
      <h1 style={{textAlign: 'center'}}>Todo-list</h1>
      <TodoForm handleSubmit={handleSubmit} btnTitle='Добавить'/>
      {!isLoading && todos ?
        Object.keys(todos).map(todo => (
          <Todo data={todos[todo]} key={todo} id={todo} onDelete={handleDelete}/>
        ))
        : <h3 style={{textAlign: 'center'}}>Fetching data</h3>
      }
    </div>
  )
}

export default TodoList