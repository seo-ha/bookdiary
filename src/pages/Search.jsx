import React, { useContext } from 'react'
import { bookContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Search() {
    
  const {books,inputValue, onChange,onKeyPress, onSearchBooks} = useContext(bookContext);
  const nav = useNavigate();

  return (
    <div>
        <header>
          <div className='searchBox'>
            <input type="text" value={inputValue} onChange={(e) => onChange(e)} onKeyDown={(e)=>onKeyPress(e)} placeholder='어떤 책을 읽었나요?'/>
            <button onClick={()=>onSearchBooks()}></button>
          </div>
        </header>
        <ul>
          {books.map((item, idx) => <li onClick={()=> nav(`/bookinfo/${idx}`,{item})}>
            <div className="imgBox"><img src={item.thumbnail} alt="" /></div>
            <div className="txtBox">
              <p>{item.title}</p>
              <p>{item.translators}</p>
              <p>{ new Date(item.datetime).toLocaleDateString()}</p>
            </div>
          </li>)}
        </ul>
    </div>
  )
}

export default Search;
