import React from 'react'

/**
 * Компонент предостовляющий возможность скачать загруженный файл
 * @param {object} data Данные о загруженных файлах
 * @returns {JSX.Element}
 */
const FilesUpLoad = ({data}) => {
  return (
    <div className='file-name'>
      <label className='file-label'>Прикрепленные файлы:</label>
      <a href={data.file} download={data.fileName}>
        {data.fileName}
      </a>
    </div>
  )
}

export default FilesUpLoad