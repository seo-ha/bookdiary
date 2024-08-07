import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DiaryStateContent } from '../App'

export const UseDiary = (id) => {
    
    const nav = useNavigate()
    const data = useContext(DiaryStateContent);
    const [curDiaryItem, setCurDiaryItem] = useState();
    
    useEffect(()=>{
        
        const currentDiaryItem = data.find((item)=> String(item.id) === String(id))
        
        if(!currentDiaryItem) {
            window.confirm('원활하지 않음')
            nav('/',{replace:true})
        }

        setCurDiaryItem(currentDiaryItem)
        
    },[id,data])
    
  return curDiaryItem;
}
