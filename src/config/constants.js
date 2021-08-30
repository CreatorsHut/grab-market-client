export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grab-market-server-01.herokuapp.com"
    : "http://localhost:8080";
//  서버 주소 추가
