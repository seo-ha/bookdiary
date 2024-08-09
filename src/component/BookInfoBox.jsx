import React from 'react'
import notFindImg from '../assets/notfind-bookimg.jpg'

function BookInfoBox({title, thumbnail, authors}) {
  return (
    <div className="bookBox">
        <strong>{title}</strong>
        <div className='imgBox'>
            {
              !thumbnail
              ? <img src={notFindImg} alt="" />
              : <img src={thumbnail} alt="" />
            }
        </div>
        <p>{authors}</p>
    </div>
  )
}

export default BookInfoBox
