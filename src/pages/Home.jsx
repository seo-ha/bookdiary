import React, { useContext } from 'react'
import { DiaryStateContent } from '../App';
import Readbook from '../component/Readbook';

function Home() {
    
  const data = useContext(DiaryStateContent);
  
  return (
    <div className='home'>
       <div className='home-list'>
            {
              data.length === 0
               ? <p className='home-list__empty'>읽은 책이 없어요 :&#40; <br/>책을 검색해 독후감을 작성해주세요.</p>
               : <ul> { data.map((item)=> <Readbook key={item.id} data={item}/>) }</ul>
            }
       </div>
    </div>
  )
}

export default Home;
