import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Title from '../component/Title';

function BookInfo() {
  
  const {state} = useLocation();
  const nav = useNavigate();
  
  const choice = () => {
    nav('/edit',{state:state});
  }
  
  
  
  return (
    <div id='Bookinfo'>
        
     <Title leftOnclick={()=>choice()} leftTxt={'독후감쓰기'}/>
      
      <div className="infoBox">
        <div className="bookBox">
          <strong>{state.title}</strong>
          <div className='imgBox'>
              <img src={state.thumbnail} alt="" />
          </div>
          <p>{state.authors}</p>
        </div>
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