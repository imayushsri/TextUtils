import React, {useState} from 'react';
export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleUpClick = () =>{
        // console.log("UpperCase was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () =>{
        setText("");
    }
    const handleLocLowClick = () =>{
        let newText = text.toString();
        setText(newText);
    }
  // Dark Mode
    const [mode, setMode] = useState({
        color : 'black',
        backgroundColor : 'white'
      })
      const [btnText, setBtnText] = useState('Enable Dark Mode')
      const toggleStyle = () =>{
          if(mode.color === 'white'){
            setMode({
              color : 'black',
              backgroundColor : 'white'
            });
            setBtnText("Enable Dark Mode");
          }
            else{
              setMode({
                color : 'white',
                backgroundColor : '#000000de'
              });
              setBtnText("Diable Dark Mode")
            }
              
          }
  return (
    <>
    <div className='container-fluid p-4' style={mode}>
        <div className="pb-3">
        <button onClick={toggleStyle} style={mode} className="btn btn-dark mb-3">{btnText}</button>
            <h3>{props.heading}</h3>
            <textarea className="form-control" style={mode} value= {text} onChange = {handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary" style={mode} onClick={handleUpClick} onChange={handleOnChange}>Convert to UpperCase</button>
        <button className="btn btn-primary ms-2" style={mode} onClick={handleLowClick} onChange={handleOnChange}>Convert to LowerCase</button>
        <button className="btn btn-primary ms-2" style={mode} onClick={handleLocLowClick} onChange={handleOnChange}>Convert to LowerCase</button>
        <button className="btn btn-danger ms-2" style={mode} onClick={handleClearClick} onChange={handleOnChange}>Clear</button>
    </div>
    <div className="container mt-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
