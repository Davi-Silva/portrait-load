import React, { Fragment } from 'react'

import { ImagesList, Sep } from '../styles/components/FilesList'

const FilesList = (props) => {
  const { imagesArray, width, height } = props

  console.log('imagesArray[0]:', imagesArray[0].data)

  return (
    <ImagesList width={width} height={height}>
      {imagesArray.length > 0 && (
        <>
          {imagesArray.map((image, index) => {
            let ext
            if (image.name !== undefined) {
              ext = image.name.split('.').pop()
            }
            if (image.data !== undefined) {
              // ext = image.name.split('.').pop()
              console.log('image uploaded:', image.data)
              ext = image.data.name.split('.').pop()
              console.log('ext uplaoded:', ext)
            }

            console.log('image:', image)
            return (
              <Fragment key={image.id}>
                {image.data === undefined ? (
                  <>
                    {(ext === 'jpg' || ext === 'jpeg' || ext === 'png') && (
                      <>
                        <img src={image.preview} alt={image.name} />
                        {!(imagesArray.length === index + 1) && <Sep />}
                      </>
                    )}
                    {(ext === 'mp4' ||
                      ext === 'mov' ||
                      ext === 'wmv' ||
                      ext === 'avi') && (
                      <>
                        <video width={width} controls>
                          <source src={image.preview} type={`video/${ext}`} />
                          Your browser does not support HTML video.
                        </video>
                        {!(imagesArray.length === index + 1) && <Sep />}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {(ext === 'jpg' || ext === 'jpeg' || ext === 'png') && (
                      <>
                        <img src={image.data.url} alt={image.name} />
                        {!(imagesArray.length === index + 1) && <Sep />}
                      </>
                    )}
                    {(ext === 'mp4' ||
                      ext === 'mov' ||
                      ext === 'wmv' ||
                      ext === 'avi') && (
                      <>
                        <video width={width} controls>
                          <source src={image.data.url} type={`video/${ext}`} />
                          Your browser does not support HTML video.
                        </video>
                        {!(imagesArray.length === index + 1) && <Sep />}
                      </>
                    )}
                  </>
                )}
              </Fragment>
            )
          })}
        </>
      )}
    </ImagesList>
  )
}

export default FilesList
