import React, {useState} from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here !');
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
  return (
    <>
    <div className='container'>
        <div className="mb-3">
            <h3>{props.heading}</h3>
            <textarea className="form-control" value= {text} onChange = {handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} onChange={handleOnChange}>Convert to UpperCase</button>
        <button className="btn btn-primary ms-2" onClick={handleLowClick} onChange={handleOnChange}>Convert to LowerCase</button>
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
