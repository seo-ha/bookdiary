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
       
       <ul>
          {
              data.map((item)=> <Readbook key={item.id} data={item}/>)
          }
        </ul>
    </div>
  )
}

export default Home;
