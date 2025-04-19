import React, { useEffect, useState } from 'react'
import Title from '../component/Title'
import { useLocation} from 'react-router-dom'
import { FaRegStar, FaStar } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import BookInfoBox from '../component/BookInfoBox';

function Editor({initData, onSubmit}) {

    const {state} = useLocation();
    
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    useEffect(()=>{
        if(initData) {
            setInput({
                ...initData,
            })
        }
        
    },[initData])
    
    const [input, setInput] = useState({
        bookinfo : state,
        starpoint : 0,
        startDay : new Date(),
        endDay : new Date(),
        content : ''
    })
    
    const ratingStarHandle = () => {
        let result = [];
        for (let i = 0; i < 5; i++) {
            result.push(
                <span key={i+1} name='star' onClick={()=> starClick(i)} className='ico_star'>
                    {
                        i + 1 <= input.starpoint 
                        ? <FaStar className='star'/>
                        : <FaRegStar className='star'/>
                    }
                </span>
            )
        }
        return result;
    }

    const starClick = (i) => {
        setInput({
            ...input,
            starpoint : i+1
        })
    }
    
    const calculationDay = () => {
        const start = new Date(input.startDay);
        const end = new Date(input.endDay);

        // 두 날짜 간의 차이를 초 단위로 계산
        const time = end - start;
        //일(day) 단위로 변환
        const dayChange = time / (1000 * 60 * 60 * 24);
        //소수점 버리기
        const day = Math.trunc(dayChange)
        return  day;
    };
    
    useEffect(()=>{
        setInput({
            ...input,
            startDay : new Date(startDate),
            endDay : new Date(endDate)
        })
    }, [endDate, startDate])
  
    const onChangeInput = (e) => {
        
        let name = e.target.name;
        let value = e.target.value;
        
        setInput({
            ...input,
            [name] : value
        })
    }
    

    
  return (
    <div id='edit'>
      
        <Title onClick={()=> onSubmit(input)} title={'저장'}/>
      
        <div className="inner">
            
            <BookInfoBox title={input.bookinfo?.title} thumbnail={input.bookinfo?.thumbnail} authors={input.bookinfo?.authors}/>
           
            <ul className='inputBox'>
                <li className='starBox'><p>별점 :</p> {ratingStarHandle()}</li>
                <li className='col'>
                    <div className='flexBox'>
                        <p>책을 읽은 기간</p>
                        <span><small className="readingDay">{calculationDay()}</small> 일</span>
                    </div>
                    
                    <DatePicker className='datePicker'
                        locale={ko}
                        name='startDay'
                        dateFormat='yyyy.MM.dd'
                        shouldCloseOnSelect
                        selected={input.startDay}
                        onChange={(date)=> setStartDate(date)}
                    />
                    <DatePicker className='datePicker'
                        locale={ko}
                        name='endDay'
                        dateFormat='yyyy.MM.dd'
                        shouldCloseOnSelect
                        selected={input.endDay}
                        minDate={input.startDay}
                        onChange={(date)=> setEndDate(date)}
                    />
                    
                </li>
                <li className='col'>
                    <p>후기</p>
                    <textarea name="content" id="" value={input.content} onChange={(e)=>onChangeInput(e)} placeholder='책을 읽고 어떤 느낌이 들었나요?'></textarea>
                </li>
            </ul>
            
        </div>

      
    </div>
  )
}

export default Editor
