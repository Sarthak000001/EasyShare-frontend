import { useState, useRef } from 'react';
import '../App.css';
import { downloadFile } from '../services/api';
import Navbar from './Navbar';

function Dowload() {
  const [url, setUrl] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const urlImg = `https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg`;

  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      // Call downloadFile function with url and password
      const response = await downloadFile(url, password);
      console.log("dowload respone : ",response);
      if (response.success) {
        setResult(response.fileUrl);
      } else {
        console.error('Download failed:', response.error);
        alert("Dowload failed",response);
      }
    } catch (error) {
      console.error('Error during file download:', error);
      alert("Error",error);
    }
  };

  return (
    <>
      <div><Navbar /></div>
      <div className='container'>
        <img src={urlImg} alt='banner' />
        <div className='wrapper'>
          <h1>EasyShare</h1>
          <h1>Simple file sharing!</h1>
          <p>Upload and share the download link.</p>
          <form onSubmit={handleDownload}>
            <input
              type='text'
              placeholder='File URL'
              className='large-input'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <input
              type='password'
              value={password}
              placeholder='Password (optional)'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Download</button>
          </form>
          {result && <a href={result} target='_blank' rel='noopener noreferrer'>{result}</a>}
        </div>
      </div>
    </>
  );
}

export default Dowload;
