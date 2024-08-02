import React, { useContext } from 'react'
import { bookContext } from '../App'

function BookInfo({item}) {
    
    // const {books} = useContext(bookContext);
    console.log(item);
  return (
    <div>
        <div>
            <img src={item.thumbnail} alt="" />
        </div>
      {item.title}
    </div>
  )
}

export default BookInfo