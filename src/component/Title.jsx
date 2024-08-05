import React from 'react'
import { useNavigate } from 'react-router-dom';

function Title({ leftOnclick , leftTxt, rightOnclick, rightTxt}) {
    
    const nav = useNavigate();
    
  return (
    <div id="titleBox">
        <button className='back' onClick={() => nav(-1)}></button>
        <div className="right">
            {
                rightTxt !== ''
                ? <button onClick={rightOnclick}>{rightTxt}</button>
                : ''
            }
            <button onClick={leftOnclick}>{leftTxt}</button>
        </div>
    </div>
  )
}

export default Title
