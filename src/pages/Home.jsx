import React, { useContext } from 'react'
import Header from '../component/Header'
import { DiaryStateContent } from '../App';
import Readbook from '../component/Readbook';

function Home() {
    
  const data = useContext(DiaryStateContent);
  console.log(data);
  
  return (
    <div id='home'>
       <Header/>
       
       <div className='listBox'>
            {
              data.length === 0
               ? <p className='emptyList'>읽은 책이 없어요 :&#40; </p>
               : <ul> { data.map((item)=> <Readbook key={item.id} data={item}/>) }</ul>
            }
       </div>
    </div>
  )
}

export default Home;
