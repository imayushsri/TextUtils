import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [name, setName] = useState('Enable Dark Mode')
  const [mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(33 37 50)';
      document.body.style.color = 'white'
      setName('Disable Dark Mode')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
      setName('Enable Dark Mode')
    }
  }
  return (
    <>
<div className="container-fluid">
<Navbar title="TextUtils" aboutText="About Us"  mode={mode} toggleMode={toggleMode} name={name}/>
<div className="container my-3">
<TextForm heading = "Enter The Text To Analyze : "  mode={mode}/>
</div>
</div>
    </>
  );
}

export default App;
