import React from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBar() {

  const nav = useNavigate();

  return (
    <div className='search-Box' onClick={()=>nav('/search')}>
        <input type="text" placeholder='책 검색하기'/>
        <button></button>
    </div>
  )
}

export default SearchBar