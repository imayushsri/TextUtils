import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
<div className="container-fluid">
<Navbar title="TextUtils" aboutText="About Us"/>
<div className="container my-3">
<TextForm heading = "Enter The Text To Analyze : "/>
</div>
</div>
    </>
  );
}

export default App;
