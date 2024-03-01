import React, {useState} from 'react';
export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
    // upper case
    const handleUpClick = () =>{
        // console.log("UpperCase was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    // lower case
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    // clear
    const handleClearClick = () =>{
        setText("");
    }

    // copy text
    const handleCopy = () =>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value)
        alert("Text Copied")
    }

    // remove extra spaces
    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
      
    // convert first letter in upper case of sentences
    const handleFirstLetter = () =>{
        let newText = text.split(". ");
        for(let i = 0; i < newText.length; i++){
            if(newText[i].length > 1){
                newText[i] = newText[i][0].toUpperCase() + newText[i].substring(1).toLowerCase();
            }
            else{
                newText[i] = newText[i].toUpperCase();
            }
        }
        let sentence = newText.join(". ");
        setText(sentence);

    }

    // convert in pascal
    const handlePascal = () =>{
        let newText = text.split(" ");
        for(let i = 0; i < newText.length; i++){
            if(newText[i].length>1){
                newText[i] = newText[i][0].toUpperCase() + newText[i].substring(1).toLowerCase();
            }
            else{
                newText[i] = newText[i].toUpperCase();
            }
        }
        let pascal = newText.join(" ");
        setText(pascal);
    }

    // convert in camelCase
    const handleCamel = () =>{
        let newText = text.split(" ");
        for (let i = 0; i < newText.length; i++) {
            if (newText[i].length > 1) {
                newText[i] = newText[i][0].toLowerCase() + newText[i][1].toUpperCase() + newText[i].substring(2).toLowerCase();
            } else {
                newText[i] = newText[i].toLowerCase();
            }
        }
        let camel = newText.join(" ");
        setText(camel)
    }

    // convert to snake_case
    const handle_Snake = () =>{
          let newText = text.split(" ");
          let snake = newText.join("_");
          setText(snake);
    }

    // Snake to normal
    const handle_normal = () =>{
        let newText = text.split("_");
        let snake = newText.join(" ");
        setText(snake);
  }

    // convert to kebab-case
//     const handlekebab = () =>{
//         let newText = text.split(" ");
//         let camel = text.split("_")
//         let kebab = camel.join("-");
//         let kebab2 = newText.join("-");
//         setText(kebab);
//   }
         
  return (
    <>
    <div className='container' style= {{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h3>{props.heading}</h3>
        <div className="pb-3">
            <textarea className="form-control" style= {{backgroundColor : props.mode === 'dark' ? 'rgb(33 37 50)' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} value= {text} onChange = {handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} onChange={handleOnChange}>UPPER CASE</button>
        <button className="btn btn-primary ms-2" onClick={handleLowClick} onChange={handleOnChange}>lower case</button>
        <button className="btn btn-primary ms-2" onClick={handleFirstLetter} onChange={handleOnChange}>Sentence</button>
        <button className="btn btn-primary ms-2" onClick={handlePascal} onChange={handleOnChange}>Pascal</button>
        <button className="btn btn-primary ms-2" onClick={handleCamel} onChange={handleOnChange}>camelCase</button>
        <button className="btn btn-primary ms-2" onClick={handle_Snake} onChange={handleOnChange}>Snake_case</button>
        <button className="btn btn-primary ms-2" onClick={handle_normal} onChange={handleOnChange}>SnakeNormal</button>
        <button className="btn btn-primary ms-2" onClick={handleSpaces} onChange={handleOnChange}>RemoveExtraSpaces</button>
        <button className="btn btn-primary ms-2" onClick={handleCopy} onChange={handleOnChange}>CopyText</button>
        <button className="btn btn-danger ms-2" onClick={handleClearClick} onChange={handleOnChange}>Clear</button>
    </div>
    <div className="container mt-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} Characters and {text.split(". ").length} sentences</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something in text box to preview it here"}</p>
    </div>
    </>
  )
}
