import React from 'react'
import { useNavigate } from 'react-router-dom';

function Title({ title, onClick}) {
    
    const nav = useNavigate();
    
  return (
    <div className="title-box">
        <button className='back' onClick={() => nav(-1)}></button>
        <div className="right">
            <button onClick={onClick}>{title}</button>
        </div>
    </div>
  )
}

export default Title
