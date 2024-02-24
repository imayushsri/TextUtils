import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("UpperCase was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here !');
  return (
    <div>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value= {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} onChange={handleOnChange}>Convert to UpperCase</button>
    </div>
  )
}
