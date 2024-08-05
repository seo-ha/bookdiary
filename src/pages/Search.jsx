import React, { useContext } from 'react'
import { bookContext } from '../App';
import BookList from '../component/BookList';

function Search() {
    
  const {books,inputValue, onChange,onKeyPress, onSearchBooks} = useContext(bookContext);

  return (
    <div id='search'>
        <header>
          <div className='searchBox'>
            <input type="text" value={inputValue} onChange={(e) => onChange(e)} onKeyDown={(e)=>onKeyPress(e)} placeholder='어떤 책을 읽었나요?'/>
            <button onClick={()=>onSearchBooks()}></button>
          </div>
        </header>
        <ul className='listBox'>
          {books.map((item, idx) => <BookList key={idx} idx={idx} item={item}/>)}
        </ul>
    </div>
  )
}

export default Search;
