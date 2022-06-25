// API 요청에 대한 코드
import baseURL from "."; // .으로 지정하면 index.js import 한다는 의미

export const postChatAPI = (data) => fetch(`${baseURL}/chat/register`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});