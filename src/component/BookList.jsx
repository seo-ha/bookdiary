import React from 'react'
import { useNavigate } from 'react-router-dom';


function BookList({idx, item}) {
    
    const nav = useNavigate();
    
    return (
        <li className='list' onClick={()=> nav(`/bookinfo/${idx}`,{state:item})}>
            <div className="imgBox"><img src={item.thumbnail} alt="" /></div>
            <div className="txtBox">
                <p className='title'>{item.title}</p>
                <p className='author'>{item.authors}</p>
                <p className='date'>{ new Date(item.datetime).toLocaleDateString()}</p>
            </div>
        </li>
    )
}

export default BookList
