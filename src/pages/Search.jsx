import React, { useEffect, useState } from 'react'
import kakaoSearch from '../hooks/kakaoapi'
import BookList from '../component/BookList';
import { useNavigate } from 'react-router-dom';

function Search() {
  const nav = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [books, setBooks] = useState([]);
  const [loading ,setLoading] = useState(true);
  
  const onChange = (e) =>{
    setInputValue(e.target.value);
  }
  const onKeyPress = (e) =>{
    if(e.keyCode === 13) {
      setTimeout(() => {
        setLoading(false);
      }, 300);
      setLoading(true);
      
      getBooks(inputValue);
      
    }
  }
  const onSearchBooks = () =>{
    setTimeout(() => {
      setLoading(false);
    }, 300);
    setLoading(true);
    
    getBooks(inputValue);
    
  }

  const getBooks = async(value) => {
    try {
        if(value === "") {
            setBooks([])
        }else {
            const params = {
                query : value,
                size : 45,
                target : ['title','person']
            };
            const result = await kakaoSearch(params);
            if(result){
                setBooks(result.data.documents);
            }else {
                console.log("fail");
            }
            
        }
    } catch(error) {
        console.log('error', error)
    }
  }

  return (
    <div id='search'>
        <header>
          <button className='back' onClick={()=>nav('/',{replace:true})}></button>
          <div className='searchBox'>
            <input type="text" value={inputValue} onChange={(e) => onChange(e)} onKeyDown={(e)=>onKeyPress(e)} placeholder='어떤 책을 읽었나요?'/>
            <button onClick={()=>onSearchBooks()}></button>
          </div>
        </header>
        {
          loading
          ? <div className='loading'></div>
          : <ul className='listBox'>
              {books.map((item, idx) => <BookList key={idx} idx={idx} item={item}/>)}
            </ul>
        }
    </div>
  )
}

export default Search;
