import axios from 'axios';
import './App.css';
import {useState } from 'react';


function App() {
  
  const Kakao = axios.create({
    baseURL: 'https://dapi.kakao.com', // 공통 요청 경로를 지정해준다.
    headers: {
        Authorization: `KakaoAK 5728823fbd02f54c4a90d1322009a785`,
    },
  });

  const kakaoSearch = params =>{
      return Kakao.get('/v3/search/book',{params})
  }

  const [inputValue, setInputValue] = useState('')
  const [books, setBooks] = useState([])


  const getBooks = async(value) => {
    try {
        if(value === "") {
            setBooks([])
        }else {
            const params = {
                query : value,
                size : 45,
                target : 'title'
            };
            const result = await kakaoSearch(params);
            if(result){
                setBooks(result.data.documents);
                console.log(result.data.documents);
            }else {
                console.log("fail");
            }
            
        }
    } catch(error) {
        console.log('error', error)
    }
  }
  
  return (
    <div className="App">
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={()=>getBooks(inputValue)}>버튼</button>
        
        <div>
          {books.map((item, idx)=><p key={idx}>{item.title}<img src={item.thumbnail} alt=''/></p>)}
        </div>
    </div>
  );
}

export default App;
