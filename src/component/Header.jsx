import React from 'react'
import '../component/style.scss'
import { useNavigate } from 'react-router-dom';
import Search from '../pages/Search';

function Header() {
  
  const nav = useNavigate()

  return (
    <header>
      <div className='searchBox' onClick={()=>nav('/search')}>
        <input type="text" placeholder='책 검색하기' disabled/>
        <button></button>
      </div>
    </header>
  )
}

export default Header;
