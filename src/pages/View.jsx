import React, { useContext } from 'react'
import Title from '../component/Title'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { FaRegStar, FaStar } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import BookInfoBox from '../component/BookInfoBox';
import { DiaryDispatchContent } from '../App';
import { UseDiary } from '../hooks/UseDiary';

function View() {
    const nav = useNavigate()
    const params = useParams();
    const {onDelete} = useContext(DiaryDispatchContent)
    const {state} = useLocation();
    const curDiaryItem = UseDiary(params.id)
   
    const ratingStarHandle = () => {
        let result = [];
        for (let i = 0; i < 5; i++) {
            result.push(
                <span key={i+1} name='star' className='ico_star'>
                    {
                        i + 1 <= state.starpoint 
                        ? <FaStar className='star'/>
                        : <FaRegStar className='star'/>
                    }
                </span>
            )
        }
        return result;
    }
    
    const readingDay = () => {
        const start = new Date(state.startDay);
        const end = new Date(state.endDay);

        // 두 날짜 간의 차이를 초 단위로 계산
        const time = end - start;
        //일(day) 단위로 변환
        const dayChange = time / (1000 * 60 * 60 * 24);
        //소수점 버리기
        const day = Math.trunc(dayChange)
        return  day;
    };
    
    const onSubmit = () =>{
        
        if(window.confirm('삭제하시겠습니까?') === true ) {
            onDelete(params.id)
            nav('/',{replace:true})
        }
    }
    
  return (
    <div id='edit'>
      
        <Title onClick={()=>nav(`/edit/${state.id}`,{state:curDiaryItem})} title={'수정하기'}/>
      
        <div className="inner">
            
            <BookInfoBox title={state.bookinfo?.title} thumbnail={state.bookinfo?.thumbnail} authors={state.bookinfo?.authors}/>

            <ul className='inputBox'>
                <li className='starBox'><p>별점 :</p> {ratingStarHandle()}</li>
                <li className='col'>
                    <div className='flexBox'>
                        <p>책을 읽은 기간</p>
                        <span><small className="readingDay">{readingDay()}</small> 일</span>
                    </div>
                    
                    <DatePicker className='datePicker'
                        name='startDay'
                        dateFormat='yyyy.MM.dd'
                        shouldCloseOnSelect
                        selected={ new Date(state.startDay)}
                        disabled
                    />
                    <DatePicker className='datePicker'
                        name='endDay'
                        dateFormat='yyyy.MM.dd'
                        shouldCloseOnSelect
                        selected={ new Date(state.endDay)}
                        disabled
                    />
                </li>
                <li className='col'>
                    <p>후기</p>
                    <textarea name="content" id="" value={state.content} placeholder='책을 읽고 어떤 느낌이 들었나요?' readOnly></textarea>
                </li>
            </ul>
            
            <button className='delateBtn' onClick={onSubmit}>삭제하기</button>
            
            
        </div>
    </div>
  )
}

export default View
