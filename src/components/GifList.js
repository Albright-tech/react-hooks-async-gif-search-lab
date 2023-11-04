import React, { useContext } from 'react'
import { GifContext } from './GifProvider'

function GifList() {

    const list = useContext(GifContext)

    const gifArray = list.map((gitObject) => {
        return (
            <li key={gitObject.id} >
                <img src={gitObject.images.original.url} alt={gitObject.images.original.url} />
            </li>
        )
    })

    return (
        <div className='col-9'>
            <ul>
                {gifArray}
            </ul>
        </div>
    )
}

export default GifList