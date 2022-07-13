import React from 'react'

import imageCompression from 'browser-image-compression'
import { handleImageUpload } from '../utils/compress_images'

function AddCar() {
    return (
        <div>
            <h1>Add</h1>
            <p>This is the add page</p>
            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e)} />
        </div>
    )
}

export default AddCar