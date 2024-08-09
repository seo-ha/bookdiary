import './App.css';
import {createContext, useEffect, useReducer, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import BookInfo from './pages/BookInfo';
import Edit from './pages/Edit';
import View from './pages/View';
import New from './pages/New';


function reducer (state, action){
  let nextState;
  
  switch (action.type) {
    case 'init' : 
      return action.data;
    case 'create': { 
      nextState = [action.data,...state]
      break
    }
    case 'update':{
      nextState =  state.map((item)=> String(item.id) === String(action.data.id) ? action.data : item)
        break;
      }
    case 'delete': {  
      nextState = state.filter((item)=> String(item.id) !== String(action.id))
      break;
    }
    default:
      return state;
  }
  
  localStorage.setItem('diary', JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContent = createContext();
export const DiaryDispatchContent = createContext();


function App() {
  
  const [loading ,setLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer,[]);
  const idRef = useRef(0);
  
  useEffect(() => {
    const storedData = localStorage.getItem('diary');
    if(!storedData){
      return;
    }
    const parsedDate = JSON.parse(storedData);
    
    if(!Array.isArray(parsedDate)){
      setLoading(false);
      return ;
    }
    
    let maxId = 0;
    parsedDate.forEach(item => {
      if(Number(item.id) > maxId) {
        maxId = Number(item.id)
      }
    });
    
    idRef.current = maxId + 1 ;
    
    dispatch({
      type : 'init',
      data : parsedDate
    })
    
    setLoading(false)
    
  },[])
  
  const onCreate = (bookinfo, starpoint, startDay, endDay, content) => {
    dispatch({
      type : 'create',
      data : {
        id : idRef.current++,
        bookinfo,
        starpoint,
        startDay,
        endDay,
        content
      }
    })
    
  }
  
  const onUpdate = (id,bookinfo, starpoint, startDay, endDay, content) => {
    dispatch({
      type : 'update',
      data : {
        id,
        bookinfo,
        starpoint,
        startDay,
        endDay,
        content
      }
    })
  }
  
  const onDelete = (id) => {
    dispatch({
      type : 'delete',
      id 
    })
  }
  
  if(loading) {
    return <div className='loading'></div>
  }
  
  return (
    
      <DiaryStateContent.Provider value={data}>
      <DiaryDispatchContent.Provider value={{onCreate,onUpdate,onDelete}}>
        
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/bookinfo/:id' element={<BookInfo/>}></Route>
          <Route path='/edit/:id' element={<Edit/>}></Route>
          <Route path='/view/:id' element={<View/>}></Route>
          <Route path='/new' element={<New/>}></Route>
        </Routes>
        
      </div>
      </DiaryDispatchContent.Provider>
    </DiaryStateContent.Provider>
  );
  
}

export default App;
