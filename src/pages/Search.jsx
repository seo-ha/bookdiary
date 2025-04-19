import React, { useEffect, useState } from 'react'
import kakaoSearch from '../hooks/kakaoapi'
import BookList from '../component/BookList';
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

function Search() {
  const nav = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const [books, setBooks] = useState([])
  const [bookLength, setBookLength] = useState(15)
  
  const onChange = (e) =>{
    setInputValue(e.target.value);
  }
  const onKeyPress = (e) =>{
    if(e.keyCode === 13) {
      getBooks(inputValue);
    }
  }
  const onSearchBooks = () =>{
    getBooks(inputValue);
  }

  const getBooks = async(value) => {
    try {
        if(value === "") {
            setBooks([])
        }else {
            const params = {
                query : value,
                size : bookLength,
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

  useEffect(()=>{
    if(!inputValue !== '') {
      getBooks(inputValue)
    }
  },[bookLength])

  return (
    <div id='search'>
        <div className='search-bar'>
          <button className='back' onClick={()=>nav('/',{replace:true})}></button>
          <div className='search-box'>
            <input type="text" value={inputValue} onChange={(e) => onChange(e)} onKeyDown={(e)=>onKeyPress(e)} placeholder='어떤 책을 읽었나요?'/>
            <button onClick={()=>onSearchBooks()}></button>
          </div>
        </div>
        <InfiniteScroll className='listBox'
          dataLength={bookLength}
          next={()=> setBookLength( prev => prev + 10)}
          hasMore={true}
          loader={<div className='search--info-txt'>책을 검색해주세요</div>}
        >
       
          {books.map((item, idx) => <BookList key={idx} idx={idx} item={item}/>)}
      
        </InfiniteScroll>
    </div>
  )
}

export default Search;
