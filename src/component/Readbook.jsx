import React from 'react'
import { useNavigate } from 'react-router-dom'

function Readbook(item) {
    
    const nav = useNavigate()
    
  return (
    <li className='readbook' onClick={ ()=>nav(`/view/${item.data.id}`,{ state : item.data})} >
      <div className="imgBox">
        <img src={item.data.bookinfo?.thumbnail} alt="" />
      </div>
      <p>{item.data.bookinfo?.title}</p>
    </li>
  )
}

export default Readbook
