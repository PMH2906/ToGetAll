import baseURL from "."; 

// get chat API
export const getChatAPI = (location, foodCategory) => fetch(`${baseURL}/products/main2/${location}/${foodCategory}`, {
// export const getChatAPI = (location) => fetch(`${baseURL}/products/main2/${location}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getAllChatAPI = () => fetch(`${baseURL}/products/main2`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});