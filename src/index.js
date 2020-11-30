import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle
} from 'react'
import Uploader from './components/Uploader'
import FilesList from './components/FilesList'
import axios from 'axios'
// import PropTypes from 'prop-types'

export const ImageUploader = forwardRef((props, ref) => {
  const {
    width,
    height,
    imagesArray,
    handleSetImagesArray,
    isDragNotAcceptColor,
    isDragAcceptColor,
    isDragRejectColor,
    onDragMessage,
    defaultMessage,
    fileDimensions,
    textColor,
    textSize,
    multipleFiles,
    apiEndpoint,
    destinationFolder
  } = props
  const [processedFilesArray, setProcessedFilesArray] = useState([])

  useEffect(() => {
    console.log(imagesArray)
  }, [imagesArray])

  useEffect(
    () => () => {
      imagesArray.map((image) => {
        URL.revokeObjectURL(image.preview)
      })
    },
    []
  )

  useEffect(() => {
    handleSetImagesArray(processedFilesArray)
  }, [processedFilesArray])

  const handleDeleteImage = async (index) => {
    const tempImagesArray = [...imagesArray]
    tempImagesArray.splice(index, 1)
    handleSetImagesArray(tempImagesArray)
  }

  const handleProcessFiles = () => {
    imagesArray.map(async (file) => {
      const formData = new FormData()
      formData.append('file', file.file)
      await handleUploadFile(formData)
    })
    // handleSetImagesArray(processedFilesArray);
  }

  const handleUploadFile = async (formData, processedFilesArray) => {
    if (destinationFolder !== null || destinationFolder !== undefined) {
      axios
        .post(`${apiEndpoint}`, formData, {
          headers: {
            Authorization: `${destinationFolder}`
          }
        })
        .then(async (response) => {
          console.log('response:', response)
          setProcessedFilesArray((oldProcessedFilesArray) => [
            ...oldProcessedFilesArray,
            response
          ])
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      axios
        .post(`${apiEndpoint}`, formData)
        .then(async (response) => {
          console.log('response:', response)
          setProcessedFilesArray((oldProcessedFilesArray) => [
            ...oldProcessedFilesArray,
            response
          ])
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  useImperativeHandle(ref, () => ({
    handleStartUploadingFiles() {
      handleProcessFiles()
    }
  }))

  return (
    <div>
      <Uploader
        width={width}
        height={height}
        handleSetImagesArray={handleSetImagesArray}
        isDragNotAcceptColor={isDragNotAcceptColor}
        isDragAcceptColor={isDragAcceptColor}
        isDragRejectColor={isDragRejectColor}
        textColor={textColor}
        textSize={textSize}
        multipleFiles={multipleFiles}
        onDragMessage={onDragMessage}
        defaultMessage={defaultMessage}
        fileDimensions={fileDimensions}
      >
        {imagesArray.length > 0 && (
          <FilesList
            imagesArray={imagesArray}
            handleDeleteImage={handleDeleteImage}
            width={width}
            height={height}
          />
        )}
      </Uploader>
    </div>
  )
})

// ImageUploader.PropTypes = {
//   ref: PropTypes.shape().isRequired,
//   width: PropTypes.string.isRequired,
//   height: PropTypes.string.isRequired,
//   imagesArray: PropTypes.array.isRequired,
//   handleSetImagesArray: PropTypes.func.isRequired,
//   isDragNotAcceptColor: PropTypes.string.isRequired,
//   isDragAcceptColor: PropTypes.string.isRequired,
//   isDragRejectColor: PropTypes.string.isRequired,
//   multipleFiles: PropTypes.bool.isRequired,
//   apiEndpoint: PropTypes.string.isRequired
// }
