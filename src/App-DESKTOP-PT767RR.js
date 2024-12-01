import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');//Wheather my dark mode is enable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled","success")
      document.title="TextUtils-Dark Mode";
      
      /*setInterval(()=>{
        document.title="TextUtil is amazing"
      },2000)
      setInterval(()=>{
        document.title="Install TextUtil Now"
      },1500)*/

    }
  
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled","success")
      document.title="TextUtils-Light Mode";

    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" AboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About mode={mode} />}> </Route>
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}> </Route>
        </Routes>
        {/* <About /> */}
      </div>
      </Router>
    </>
  );
}

export default App;
