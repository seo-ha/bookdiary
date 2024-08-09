import React from 'react'
import { useNavigate } from 'react-router-dom'
import notFindImg from '../assets/notfind-bookimg.jpg'

function Readbook(item) {
    
    const nav = useNavigate()
    
  return (
    <li className='readbook' onClick={ ()=>nav(`/view/${item.data.id}`,{ state : item.data})} >
      <div className="imgBox">
        {
          !item.data.bookinfo?.thumbnail
          ? <img src={notFindImg} alt="" />
          : <img src={item.data.bookinfo?.thumbnail} alt="" />
        }
      </div>
      <p>{item.data.bookinfo?.title}</p>
    </li>
  )
}

export default Readbook
