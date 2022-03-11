
//import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


function Xyz() {

  const [mode,setMode] = useState('light'); // dark mode is enble or not
  const toggleMode=()=>{
    if(mode==='light')
      {
        setMode('dark');
        document.body.style.backgroundColor='grey';
      }
    else
      {
        setMode('light');
        document.body.style.backgroundColor='white';
      }
  }


  return (
  <>
      {/* <Navbar title="TextUtils"aboutText="About US234"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <div className="container my-3">
      <TextForm heading="Enter the text to Analyze" mode={mode}/>
      {/* <About/> */}
 </div>
</>
  );
}
export default Xyz;
