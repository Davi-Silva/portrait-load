import React, { useState, useRef, Fragment } from 'react'

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
        width='450px'
        height='450px'
        imagesArray={imagesArray}
        handleSetImagesArray={handleSetImagesArray}
        isDragNotAcceptColor='rgba(0, 0, 0, 0.3)'
        isDragAcceptColor='#18840f'
        isDragRejectColor='#ff0000'
        multipleFiles={true}
        apiEndpoint='http://localhost:5000/admin/products/publish/media'
      />
      <button type='submit'>
        Send
      </button>
    </form>
  )
}

export default App
