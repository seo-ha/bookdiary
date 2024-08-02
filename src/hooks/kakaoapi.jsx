import React from 'react';
import axios from "axios";

const Kakao = axios.create({
    baseURL: 'https://dapi.kakao.com', // 공통 요청 경로를 지정해준다.
    headers: {
        Authorization: `KakaoAK 5728823fbd02f54c4a90d1322009a785`,
    },
  });

const kakaoSearch = params =>{
  return Kakao.get('/v3/search/book',{params})
} 

export default kakaoSearch;