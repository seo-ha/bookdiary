import React from 'react'

function Review() {
  return (
    <div className='review'>
      <strong className='review-title'>책을 읽고 난 생각을 다른 사람들과 나눠보세요!</strong>

      <div className='review_input'>
        <input type="text" value={'sksksk'}/>
        <button>등록</button>
      </div>

      <ul className='review--chat'>
        <li>좋아요!! <span>2025.04.19</span></li>
        <li>난 별로!! <span>2025.04.19</span></li>
        <li>좋아요!! 좋아요!!좋아요!!좋아요!!좋아요!!좋아요!!좋아요!!좋아요!!좋아요!!좋아요!!좋아요!!좋아요!!좋아요!!좋아요!!좋아요!!좋아요!!좋아요!!좋아요!! <span>2025.04.19</span></li>
        <li>좋아요!! <span>2025.04.19</span></li>
        <li>좋아요!! <span>2025.04.19</span></li>
        <li>좋아요!! <span>2025.04.19</span></li>
      </ul>

    </div>
  )
}

export default Review