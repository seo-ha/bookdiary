import React from 'react'
import '../style.scss'
import { useNavigate } from 'react-router-dom';

function Header() {
  
  const nav = useNavigate()

  return (
    <header>
      <div className='searchBox' onClick={()=>nav('/search')}>
        <input type="text" placeholder='책 검색하기'/>
        <button></button>
      </div>
    </header>
  )
}

export default Header;
