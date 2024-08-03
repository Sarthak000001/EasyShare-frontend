import axios from 'axios';

// const API_URL = 'http://localhost:8000'
const API_URL = 'https://easyshare-backend-0d13.onrender.com';
export const uploadFile = async(data) =>{
    try{

       let respone = await axios.post(`${API_URL}/upload`,data);
       console.log(respone);
       return respone.data;
    }catch(err){
        console.log('Error while calling the api',err.message);
    }
}