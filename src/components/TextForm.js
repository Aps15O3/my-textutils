import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper","success")
    } 
    const handleLoClick = ()=>{
        // console.log("Clicked " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower","success")
    }

    const handleOnChange = (eveobject)=>{
        // console.log("change")
        setText(eveobject.target.value)
    }
    const[text,setText]=useState(''); //useState is a hook
    // caanot change text like text="dfghjkl"
    //we have to use setText function
  return (
    <>
<div className="container" style={{color :props.mode==='light'?"#2b2929":'white'}}>
<div className="mb-3" >
    <h1>{props.heading}</h1>
<textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor :props.mode==='light'?'white':'#2b2929' , color :props.mode==='light'?'#2b2929':'white'}}rows="8" value={text} onChange={handleOnChange}></textarea>
<br></br>
<button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert To uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To lowercase</button>
</div>
    </div>
    <div className="container my-4" style={{color :props.mode==='light'?'#2b2929':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something'}</p>
    </div>
    </>
  )
}
