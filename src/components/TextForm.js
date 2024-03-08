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
        props.showAlert("Converted To Upper Case", "success");
    }

    // lower case
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case", "success");
    }

    // clear
    const handleClearClick = () =>{
        setText("");
        props.showAlert("Text Cleared", "warning");
    }

    // copy text
    const handleCopy = () =>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!", "success");
    }

    // remove extra spaces
    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces", "success");
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
        props.showAlert("Converted as sentence", "success");
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
        props.showAlert("Converted As Pascal", "success");
    }

    // convert in camelCase
    const handleCamel = () =>{
        let newText = text.split(" ");
        for(let i = 0; i < newText.length; i++){
            if(newText[i].length > 1){
                newText[i] = newText[i][0].toUpperCase() + newText[i].substring(1).toLowerCase();
            }
            else{
                newText[i] = newText[i].toUpperCase();
            }
        }
        let camel = newText.join("");
        camel = camel.charAt(0).toLowerCase() + camel.substring(1);
        props.showAlert("Converted as Camel", "success");
        setText(camel);
}
const handleClick = () => {
    // Ask the user for confirmation
    const userConfirmed = window.confirm('It will remove all spaces from your text and you can not revert it. \n Are you sure?');

    // Check user's response and call handleCamel if confirmed
    if (userConfirmed) {
      handleCamel();
    }
  };

    // convert to snake_case
    const handle_Snake = () =>{
          let newText = text.split(" ");
          let snake = newText.join("_");
          setText(snake);
          props.showAlert("Converted_as_snake", "success");
    }

    // Snake to normal
    const handle_normal = () =>{
        let newText = text.split("_");
        let snake = newText.join(" ");
        setText(snake);
        props.showAlert("Converted as normal", "success");
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
            <h3 className="mb-3">{props.heading}</h3>
        <div className="pb-3">
            <textarea placeholder='Enter Your Text To Convert it into UPPER CASE , lower case, Pascal Case, camelCase, Snake_Case and Remove Extra Spaces, Copy Text' className="form-control" style= {{backgroundColor : props.mode === 'dark' ? 'rgb(33 37 50)' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} value= {text} onChange = {handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary me-2" onClick={handleUpClick} onChange={handleOnChange}>UPPER CASE</button>
        <button disabled={text.length === 0} className="btn btn-primary me-2 my-1" onClick={handleLowClick} onChange={handleOnChange}>lower case</button>
        <button disabled={text.length === 0} className="btn btn-primary me-2 my-1" onClick={handleFirstLetter} onChange={handleOnChange}>Sentence</button>
        <button disabled={text.length === 0} className="btn btn-primary me-2 my-1" onClick={handlePascal} onChange={handleOnChange}>Pascal</button>
        <button disabled={text.length === 0} className="btn btn-primary me-2 my-1" onClick={handle_Snake} onChange={handleOnChange}>Snake_case</button>
        <button disabled={text.length === 0} className="btn btn-primary me-2 my-1" onClick={handle_normal} onChange={handleOnChange}>SnakeNormal</button>
        <button disabled={text.length === 0} className="btn btn-primary me-2 my-1" onClick={handleSpaces} onChange={handleOnChange}>RemoveExtraSpaces</button>
        <button disabled={text.length === 0} className="btn btn-primary me-2 my-1" onClick={handleClick} onChange={handleOnChange}>camelCase</button>
        <button disabled={text.length === 0} className="btn btn-primary me-2 my-1" onClick={handleCopy} onChange={handleOnChange}>CopyText</button>
        <button disabled={text.length === 0} className="btn btn-danger me-2 my-1" onClick={handleClearClick} onChange={handleOnChange}>Clear</button>
    </div>
    <div className="container mt-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").filter((element) =>{return element.length !== 0}).length} Words and {text.length} Characters and {text.split(". ").filter((element) =>{return element.length !== 0}).length} sentences</p>
        <p>{0.008 * text.split(" ").filter((element) =>{return element.length !== 0}).length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
