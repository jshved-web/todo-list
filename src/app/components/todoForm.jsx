import React, {useRef, useState} from 'react'
import FilesUpLoad from './filesUpLoad'

/**
 * Компонент форма, позволяющий пользователю вводить информацию для последующей обработки системой
 * @param {function} handleSubmit Функция отправки данных с формы на сервер
 * @param {object} data Объект (состояние) служащий для заполнения полей формы по умолчанию
 * @param {string} btnTitle Строка названия кнопки формы
 * @return {JSX.Element}  Возвращает jsx разметку и компонент служащий для отображения загружженных файлов <FilesUpLoad/>
 */
const TodoForm = ({handleSubmit, data, btnTitle}) => {
  const [inputValue, setInputValue] = useState({
    text: data?.title,
    description: data?.description,
    date: data?.dateOfEnd,
    check: data?.check,
    files: data?.files
  })
  const ref = useRef()

  /**
   * Функция загрузки файлов, представляющая файл, кодированый в base64 строку и помещает их в
   * состояние для дальнейшей отправки на сервер и отображения.
   */
  const uploadFiles = () => {
    if (!ref.current.files.length) return
    const files = Array.from(ref.current.files)
    const array = []
    files.forEach(file => {
      const reader = new FileReader()
      reader.onload = e => {
        const fileName = file.name.replaceAll(' ', '_')
        array.push({fileName: fileName, file: e.target.result})
        setInputValue({...inputValue, files: {...array}})
      }
      reader.readAsDataURL(file)
    })
  }
  /**
   * Функция помещает в состояние имя эелемента который изменился и данные которые были введены
   * @param {object} target Это элемент, на котором произошло событие
   *
   */
  const handleChangeCheck = ({target}) => {
    setInputValue({...inputValue, [target.name]: target.checked})
  }

  /**
   * Функция помещает в состояние имя эелемента который изменился и данные которые были введены
   * @param {object} target Это элемент, на котором произошло событие
   *
   */
  const handleChange = ({target}) => {
    setInputValue({...inputValue, [target.name]: target.value.trim()})
  }
  return (
    <form className="form">
      <div className="form-inputs">
        <input
          type="text"
          name="text"
          className="form-text input"
          placeholder="Введите задачу"
          value={inputValue.text || ''}
          onChange={e => handleChange(e)}
        />
        <input
          type="text"
          name="description"
          className="form-description input"
          placeholder="Введите описание"
          value={inputValue.description || ''}
          onChange={e => handleChange(e)}
        />
        <label>Введите дату окончания задачи</label>
        <input
          type="datetime-local"
          name="date"
          className="form-date input"
          value={inputValue.date || ''}
          onChange={e => handleChange(e)}
        />
        <input
          type="file"
          name="file"
          className="file-input"
          ref={ref}
          multiple
          onChange={uploadFiles}
        />
        {inputValue.files &&
          Object.keys(inputValue.files)
            .map(data => (
              <FilesUpLoad data={inputValue.files[data]} key={inputValue.files[data].file}/>
            ))}
        {btnTitle === 'Изменить' ? (
          <div className="form-check">
            <label>Завершено</label>
            <input name="check" type="checkbox" className="input-check" checked={inputValue.check || false}
                   onChange={e => handleChangeCheck(e)}/>
          </div>
        ) : ''}
      </div>
      <button className="form-btn" onClick={(e) => handleSubmit(e, inputValue)}>{btnTitle}</button>
    </form>
  )
}

export default TodoForm