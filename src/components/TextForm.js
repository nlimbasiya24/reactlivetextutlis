import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =() =>{
       // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick =() =>{
        //console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClClick =() =>{
        //console.log("UpperCase was clicked" + text);
        let newText = "";
        setText(newText)
    }

    const handleOnChange =(event) =>{
        console.log("Onchage");
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 >{props.heading} </h1>
            <div className="mb-3">
                    <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
                color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} charcters</p>
            <p>{0.08 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>
    )
}
