import {useState,useEffect,useRef} from 'react';
import './App.css';
import { uploadFile } from './services/api';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Download from './components/Download'

function Home() {
  const [file,setFile] = useState('');
  const [password, setPassword] = useState('');
  const [result,setResult] = useState('');

  const fileInputRef = useRef();

  const url = `https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg`;
  
  const transformUrl = (originalUrl) => {
    const oldBaseUrl = "http://localhost:8000";
    const newBaseUrl = "https://easyshare-backend-0d13.onrender.com";
    return originalUrl.replace(oldBaseUrl, newBaseUrl);
  };

    const getImage = async(e) =>{
      e.preventDefault();
      if(file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        if (password) {
          data.append("password", password);
        }
        let respone = await uploadFile(data);
        setResult(respone.path);
      }
    }



    return (
      <>
      <div><Navbar /></div>
       <div className='container'>
      <img src={url} alt='banner'></img>
      <div className='wrapper'>
        <h1>EasyShare</h1>
        <h1>Simple file sharing!</h1>
        <p>Upload and share the dowload link.</p>
        <form>
            <input 
              type='file'
              ref={fileInputRef}
              // style={{display:'none'}}
              onChange={(e)=>setFile(e.target.files[0])}
            />
            <input
              type='password'
              placeholder='Password (optional)'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' onClick={getImage}>Upload</button>
        </form>
        {result && <a href={result} target='_blank'>{result}</a>}
      </div>
    </div>
      </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contacts' element={<Contact />}/>
        <Route path='/download' element={<Download />}/>
      </Routes>
    </Router>
  );
}
export default App;
