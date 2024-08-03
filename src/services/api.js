import axios from 'axios';

const API_URL = 'http://localhost:8000'
export const uploadFile = async(data) =>{
    try{

       let respone = await axios.post(`${API_URL}/upload`,data);
       return respone.data;
    }catch(err){
        console.log('Error while calling the api',err.message);
    }
}