import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DiaryDispatchContent } from '../App';
import Editor from '../component/Editor';
import { UseDiary } from '../hooks/UseDiary';

function Edit() {
    const params = useParams()
    const {onUpdate} = useContext(DiaryDispatchContent);
    const nav = useNavigate()

    const onSubmit = (input) => {
        onUpdate(
            input.starpoint,
            input.startDay,
            input.endDay,
            input.content
        )
        nav('/', {replace: true})
    }
    
    const curDiaryItem = UseDiary(params.id)

    
  return (
    <div id='edit'>
        
        <Editor initData={curDiaryItem} onSubmit={onSubmit}/>

    </div>
  )
}

export default Edit
