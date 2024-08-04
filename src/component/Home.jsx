import React, { useContext } from 'react'
import Header from './Header'
import { bookContext } from '../App'

function Home() {
    
    const {books} = useContext(bookContext);
    
  return (
    <div className='home'>
       <Header/>
       
       <div>
            {
              books === '' 
              ? books.map((item, idx)=><p key={idx}>{item.title}<img src={item.thumbnail} alt=''/></p>)
              : books.map((item, idx)=><p key={idx}>{item.title}<img src={item.thumbnail} alt=''/></p>)
            }
          </div>
    </div>
  )
}

export default Home;
