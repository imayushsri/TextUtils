import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
// import { Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Switch } from 'react-router-dom';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
function App() {
  const [name, setName] = useState('Enable Dark Mode')
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,typo) =>{
    setAlert({
      msg : message,
      typo : typo
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(33 37 50)';
      document.body.style.color = 'white';
      setName('Disable Dark Mode');
      document.title = 'TextUtils - Dark';
      showAlert("Dark Mode Enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
      setName('Enable Dark Mode')
      document.title = 'TextUtils - Home'
      showAlert("Light Mode Enabled", "success");
    }
  }
  return (
    <>
    <Router>
<div className="container-fluid">
<Navbar title="TextUtils" aboutText="About Us"  mode={mode} toggleMode={toggleMode} name={name}/>
<Alert alert={alert}/>
<div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading = "Enter The Text To Analyze : "  mode={mode}/>}/>    
          <Route path="/about" element={<About/>}/>
        </Routes>
</div>
</div>
     </Router>
</>
  );
}

export default App;
