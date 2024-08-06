import axios from 'axios';

// const API_URL = 'http://localhost:8000'
const API_URL = 'https://easyshare-backend-0d13.onrender.com';
export const uploadFile = async(data) =>{
    try{

       let respone = await axios.post(`${API_URL}/upload`,data);
    //    console.log(respone);
       return respone.data;
    }catch(err){
        console.log('Error while calling the api',err.message);
        throw err;
    }
}

export const downloadFile = async (url, password) => {
    console.log("url :", url);
    const fileId = extractFileIdFromUrl(url);
    console.log(fileId);
    if (!fileId) {
        return { success: false, error: 'File ID could not be extracted from the URL.' };
    }

    try {
        const response = await axios.get(`${API_URL}/file/${fileId}`, {
            params: { password }
        });
        console.log("response : ", response);
        if (response.status === 200) {
            const { fileUrl } = response.data;
            return { success: true, fileUrl };
        } else {
            return { success: false, error: 'Failed to download file. Invalid password or file not found.' };
        }
    } catch (err) {
        console.error('Error while calling the API:', err.message);
        return { success: false, error: err.message };
    }
};

const extractFileIdFromUrl = (url) => {
    const urlString = String(url);
    const regex = /\/file\/([a-zA-Z0-9]+)/;
    const match = urlString.match(regex);

    if (match) {
        return match[1];
    }

    return null;
};

