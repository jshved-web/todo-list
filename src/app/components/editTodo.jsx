import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import TodoForm from './todoForm'
import todosService from '../../services/todos.service'
import {postContent} from '../../utils/postData'

/**
 * Компонент редактирования задачи пользователя
 * @returns {JSX.Element}
 */
const EditTodo = () => {
  const history = useHistory()
  const params = useParams()
  const data = history.location.state

  /**
   * Функция перенаправляния на главную страницу
   */
  const backToMainPage = () => {
    history.push('/')
  }
  /**
   * Функция для обновления данных текущей задачи и перенаправления пользователя на главную страницу
   * после завершения обновления
   * @param {object} e Объект Event описывает событие, произошедшее на странице
   * @param {object} inputValue Состояние в котором хранятся данные введенные пользователем
   * @returns {Promise<void>}
   */
  const handleSubmit = async (e, inputValue) => {
    e.preventDefault()
    const content = postContent(inputValue.text,
      inputValue.date,
      inputValue.description,
      inputValue.check,
      inputValue.files
    )
    await todosService.update(params.id, content)
    history.push('/')
  }
  return (
    <div className="edit-todo">
      <h1 style={{margin: '10px'}}>Edit todo</h1>
      <TodoForm handleSubmit={handleSubmit} data={data} btnTitle="Изменить"/>
      <button className="back-btn" onClick={backToMainPage}>Назад</button>
    </div>
  )
}

export default EditTodo