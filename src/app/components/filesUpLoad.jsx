import React from 'react'

const FilesUpLoad = ({data}) => {
  return (
    <div className='file-name'>
      <a href={data.file} download={data.fileName}>
        {data.fileName}
      </a>
    </div>
  )
}

export default FilesUpLoad