import {useState,useEffect,useRef} from 'react';
import './App.css';
import { uploadFile } from './services/api';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

function Home() {
  const [file,setFile] = useState('');
  const [result,setResult] = useState('');

  const fileInputRef = useRef();

  const url = `https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg`;
  
  const transformUrl = (originalUrl) => {
    const oldBaseUrl = "http://localhost:8000";
    const newBaseUrl = "https://easyshare-backend-0d13.onrender.com";
    return originalUrl.replace(oldBaseUrl, newBaseUrl);
  };
  useEffect(() =>{
    const getImage = async() =>{
      if(file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let respone = await uploadFile(data);
        respone.path = transformUrl(respone.path);
        setResult(respone.path);
      }
    }
    getImage();
  },[file])

  const onUploadClick = () =>{
    fileInputRef.current.click()
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

        <button onClick={()=>onUploadClick()}>Upload</button>
        <input 
          type='file'
          ref={fileInputRef}
          style={{display:'none'}}
          onChange={(e)=>setFile(e.target.files[0])}
        />

       <a href={result} target='_blank'>{result}</a>

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
      </Routes>
    </Router>
  );
}
export default App;
