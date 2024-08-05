import React from 'react'
import Title from '../component/Title'
import { useLocation } from 'react-router-dom'

function Edit() {
    
    const {state} = useLocation();
    
    console.log(state);
    
    
  return (
    <div id='edit'>
      
      <Title leftOnclick={()=>''} leftTxt={'저장'}/>
      
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

export default Edit
