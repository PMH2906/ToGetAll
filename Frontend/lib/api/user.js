// API 요청에 대한 코드
import baseURL from "."; // .으로 지정하면 index.js import 한다는 의미

// post signup api
export const postUserAPI = (data) => fetch(`${baseURL}/user/signup`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});

// post login api
export const postLoginAPI = (data) => fetch(`${baseURL}/user/login`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});