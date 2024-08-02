import axios from "axios";

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: "KakaoAK 카카오restkey",
  },
});

// 책 검색
export const bookSearch = params => {
  return Kakao.get("/v3/search/book?target=title", { params });
};

// book api
export const book = () => {
  return Kakao.get("/v3/search/book?target=title");
};