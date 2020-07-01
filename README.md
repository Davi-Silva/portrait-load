# portrait-load

> A simple and straightforward react image uploader component.

[![NPM](https://img.shields.io/npm/v/portrait-load.svg)](https://www.npmjs.com/package/portrait-load) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

NPM:

```bash
npm install --save portrait-load
```

YARN:

```bash
yarn add portrait-load
```

## Usage

Trigger upload on a click event:

```jsx
import React, { useState, useRef } from 'react'

import { ImageUploader } from 'portrait-load'

export default Example = () => {
  const [imagesArray, setImagesArray] = useState([])
  const childRef = useRef()

  const handleSetImagesArray = (images) => {
    setImagesArray(images)
  }

  return (
    <div>
      <ImageUplaoder
        ref={childRef}
        width='450px'
        height='450px'
        imagesArray={imagesArray}
        handleSetImagesArray={handleSetImagesArray}
        isDragNotAcceptColor='rgba(0, 0, 0, 0.3)'
        isDragAcceptColor='#18840f'
        isDragRejectColor='#ff0000'
        multipleFiles={true}
        apiEndpoint='https://example.com/admin/upload/image'
      />
      <buntton
        onClick={() => {
          childRef.current.handleStartUploadingFiles()
        }}
      >
        Upload
      </button>
    </div>
  )
}
```

#### OR

Trigger on any function handler really:

```jsx
import React, { useState, useRef } from 'react'

import { ImageUploader } from 'portrait-load'

export default Example = () => {
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
      <ImageUplaoder
        ref={childRef}
        width='450px'
        height='450px'
        imagesArray={imagesArray}
        handleSetImagesArray={handleSetImagesArray}
        isDragNotAcceptColor='rgba(0, 0, 0, 0.3)'
        isDragAcceptColor='#18840f'
        isDragRejectColor='#ff0000'
        multipleFiles={true}
        apiEndpoint='https://example.com/admin/upload/image'
      />
      <button type='submit'>Upload</button>
    </form>
  )
}
```

## License

MIT © [Davi-Silva](https://github.com/Davi-Silva)
