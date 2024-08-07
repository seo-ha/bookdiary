import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DiaryDispatchContent } from '../App';
import Editor from '../component/Editor';

function New() {
    const {state} = useLocation();
    const {onCreate} = useContext(DiaryDispatchContent);
    const nav = useNavigate()
    
    
    const onSubmit = (input) => {
        onCreate(
            input.bookinfo,
            input.starpoint,
            input.startDay,
            input.endDay,
            input.content
        )
        
        nav('/', {replace: true})
        
    }

    
  return (
    <div id='edit'>
        
        <Editor initData={state} onSubmit={onSubmit}/>

    </div>
  )
}

export default New
