import { useRef } from "react"


export const FocuScreen = () => {

    const inputRef = useRef()
  


const onClick =()=>{
    console.log(inputRef)
    inputRef.current.select();
}

  return (
    <>
    <h1>Focus Screen</h1>
    <hr/>
    <input 
    ref={inputRef}
    type="text"
    placeholder="ingrese su nombre"
    className="form-control"
    />
    <button className="btn bnt-primary mt-2" 
    onClick={onClick}
    
    >setFocus</button>
    </>
  )
}
