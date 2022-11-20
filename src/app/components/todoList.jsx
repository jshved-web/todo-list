import React from 'react'
import TodoForm from './todoForm'
import {useEffect, useState} from 'react'
import todosService from '../../services/todos.service'
import Todo from './todo'
import {postContent} from '../../utils/postData'

/**
 * Компонент для отображения задач пользователя
 * @returns {JSX.Element} Возвращает компонент <TodoForm/> и <Todo/>
 */
const TodoList = () => {
  const [todos, setTodos] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  /**
   * Асинхронная функция служащая для запроса к серверу и записи полученных
   * данных в состояние
   * @returns {Promise<void>}
   */
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

  /**
   * Функция отправки данных (задачи пользователя) на сервер
   * @param {object} e Объект Event описывает событие, произошедшее на странице
   * @param {object} value Состояние в котором хранятся данные введенные пользователем
   * @returns {Promise<void>}
   */
  const handleSubmit = async (e, value) => {
    e.preventDefault()
    try {
      const content = postContent(value.text, value.date, value.description, value.check, value.files)
      const {name} = await todosService.create(content)
      setTodos({...todos, [name]: content})
    } catch (e) {
      console.warn(e)
    }
  }

  /**
   * Функция удаления данных (задачи пользователя) с сервера и обновления данных на клиенте
   * @param _id Уникальный идентификатор задачи пользователя
   * @returns {Promise<void>}
   */
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