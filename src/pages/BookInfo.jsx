import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Title from '../component/Title';
import BookInfoBox from '../component/BookInfoBox';

function BookInfo() {
  
  const {state} = useLocation();
  const nav = useNavigate();
  
  const choice = () => {
    nav(`/new`,{state:state});
  }
  
  return (
    <div id='Bookinfo'>
        
     <Title onClick={()=>choice()} title={'독후감쓰기'}/>
      
      <div className="infoBox">
        <BookInfoBox title={state.title} thumbnail={state.thumbnail} authors={state.authors} />
        
        <div className="txtBox">
          <p><span>줄거리</span> {state.contents}</p>
          <p className='date'><span>출판사</span> { state.publisher }</p>
          <p className='date'><span>출판일</span> { new Date(state.datetime).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

export default BookInfo;