
import React, { useState } from 'react'

const TextForm = (props) => {

    const handleUpClick = () => {
        console.log("UpperCase was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case", "success");
    }

    const clearText = () => {
        console.log("UpperCase was clicked " + text)
        let newText = " ";
        setText(newText)
        props.showAlert("Text is cleared", "success")
    }
    const handleLowClick = () => {
        console.log("LowerCase was clicked " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case", "success")
    }

    //Copy Text
    const handleCopy = () => {
        console.log("Copied")
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied", "success")
    }

    const RemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success")
    }

    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control"
                        value={text} onChange={handleOnChange} style={{
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743'
                        }} placeholder='Enter Text here' id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to UpperCase</button>

                <button className='btn btn-primary mx-2 my-2' onClick={handleLowClick}>Convert to LowerCase</button>

                <button className='btn btn-primary mx-2 my-2' onClick={clearText}>ClearText</button>

                <button className='btn btn-primary mx-2 my-2' onClick={handleCopy}>CopyText</button>

                <button className='btn btn-primary mx-2 my-2' onClick={RemoveExtraSpaces}>RemoveExtraSpaces</button>


            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : ' #042743' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length}
                    characters
                </p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Munites to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the text box to preview "}</p>
            </div>
        </>
    )
}

export default TextForm
