import React, { useRef, useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'
import { GifProvider } from './GifProvider'

function GifListContainer() {

  const [list, setList] = useState([])
  // const count = useRef(0)

  // count.current = count.current + 1
  // console.log(count.current);

  function handleSearch(searchInput) {
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=08FFSB1qodYwCLmYVd1MzmsNMhf9125u')
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