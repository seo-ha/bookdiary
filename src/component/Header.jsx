import React, { useState } from 'react'
import '../style.scss'
import { Link } from 'react-router-dom';

function Header() {

  const [ham, setHam] = useState(false);

  const onChangeHam = () =>{
    setHam(!ham)
  }

  return (
    <header>
      <Link to={'/'} className='logo'>BookDiary</Link>
      <div className='header-nav'>
        <Link to={'/search'} className='search-btn'></Link>
        <button className='ham' onClick={onChangeHam}><span></span></button>
      </div>

      <nav className={ham === true ? 'nav__on' : ''}>
        <button className='nav-close' onClick={onChangeHam} ></button>
        <ul>
          <li className='nav-li'><Link to={'/'} onClick={()=>setHam(false)}>내 책장보기</Link></li>
          <li className='nav-li'><Link to={'/login'} onClick={()=>setHam(false)}>로그인</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
