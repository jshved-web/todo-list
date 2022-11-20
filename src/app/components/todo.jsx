import React from 'react'
import {getUserTime} from '../../utils/getUserDate'
import {useHistory, useParams} from 'react-router-dom'

/**
 *
 * @param {object} data Данные данной задачи
 * @param {function} onDelete Функция для удаления данных на сервере
 * @param id Уникальный идентификатор записи пользователя
 * @returns {JSX.Element}
 */
const Todo = ({data, onDelete, id}) => {
  const history = useHistory()
  const params = useParams()
  params.data = data

  /**
   * Функция для проверки истечения срока выполнения задачи
   * @returns {string}
   */
  const isCompleted = () => {
    if (data.dateOfEnd === undefined) return ''
    else if (data.check
      || new Date(Date.now()).toISOString()
      > new Date(data.dateOfEnd).toISOString())
      return ` disabled`
    return ''
  }
  /**
   * Функция для перенаправления пользователя на страницу редактирования
   */
  const pushToEdit = () => {
    history.push(`/${id}`, data)
  }

  return (
    <div className={`todo${isCompleted()}`}>
      <div>
        <div className="todo-title">{data.title}</div>
        <div className="todo-date">
          Время окончания: {
          data.dateOfEnd !== undefined
            ? getUserTime(new Date(data.dateOfEnd))
            : 'Не указано'
        }
        </div>
      </div>
      <div className='todo-buttons'>
        <button className="push-btn" onClick={pushToEdit}>Смотреть</button>
        <button className="todo-btn" onClick={() => onDelete(id)}>Удалить</button>
      </div>
    </div>
  )
}

export default Todo