import React, { useRef, useState } from 'react'
import API_KEY from '../data/env'
import GifList from './GifList'
import GifSearch from './GifSearch'
import { GifProvider } from './GifProvider'

function GifListContainer() {

  const [list, setList] = useState([])
  // const count = useRef(0)

  // count.current = count.current + 1
  // console.log(count.current);

  function handleSearch(searchInput) {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchInput}&limit=3&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
      .then(r => r.json())
      .then(gifList => setList(gifList.data))
  }

  return (
    <GifProvider gifs={list}>
      <div className='container-fluid'>
        <div className='row'>
          <GifList/>
          <GifSearch onSearch={handleSearch} />
        </div>
      </div>
    </GifProvider>
  )
}

export default GifListContainer