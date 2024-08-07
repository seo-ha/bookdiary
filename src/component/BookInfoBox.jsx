import React from 'react'

function BookInfoBox({title, thumbnail, authors}) {
  return (
    <div className="bookBox">
        <strong>{title}</strong>
        <div className='imgBox'>
            <img src={thumbnail} alt="" />
        </div>
        <p>{authors}</p>
    </div>
  )
}

export default BookInfoBox
