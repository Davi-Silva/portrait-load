import React, { useState, useRef } from 'react'

import { ImageUploader } from 'portrait-load'
import 'portrait-load/dist/index.css'

const App = () => {
  const [imagesArray, setImagesArray] = useState([])
  const childRef = useRef()

  const handleSetImagesArray = (images) => {
    setImagesArray(images)
  }

  const submitForm = (e) => {
    e.preventDefault()
    childRef.current.handleStartUploadingFiles()
  }

  return (
    <form onSubmit={submitForm}>
      <ImageUploader
        ref={childRef}
        width='300px'
        height='300px'
        imagesArray={imagesArray}
        handleSetImagesArray={handleSetImagesArray}
        isDragNotAcceptColor='rgba(0, 0, 0, 0.3)'
        isDragAcceptColor='#18840f'
        isDragRejectColor='#ff0000'
        textColor='red'
        textSize='20px'
        multipleFiles={true}
        onDragMessage='Drop files here'
        defaultMessage='Drag and Drop files here'
        fileDimensions={{
          width: '650px',
          height: '650px'
        }}
        apiEndpoint='http://localhost:5000/admin/products/publish/media'
      />
      <button type='submit'>
        Send
      </button>
    </form>
  )
}

export default App
