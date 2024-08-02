import './App.css';
import {createContext, useState } from 'react';
import kakaoSearch from './hooks/kakaoapi'
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Search from './pages/Search';
import BookInfo from './pages/BookInfo';

export const bookContext = createContext();

function App() {
  

  const [inputValue, setInputValue] = useState('')
  const [books, setBooks] = useState([])
  
  const onChange = (e) =>{
    setInputValue(e.target.value);
  }
  const onKeyPress = (e) =>{
    if(e.keyCode === 13) {
      getBooks(inputValue);
    }
  }
  
  const onSearchBooks = () =>{
    getBooks(inputValue);
  }

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
    
    <bookContext.Provider value={{books, inputValue, onChange,onKeyPress, onSearchBooks}} >
      <div className="App">
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/bookinfo/:id' element={<BookInfo/>}></Route>
        </Routes>
        
      </div>
    </bookContext.Provider>
  );
}

export default App;
