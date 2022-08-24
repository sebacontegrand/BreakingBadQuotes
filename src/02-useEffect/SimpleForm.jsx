import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

const [formState, setFormState] = useState({
    username:'sebaconte',
    email:'sebacontegrand@google.com'
});
const{username,email}=formState;

const onInputChange=({target})=>{
    const { name ,value } = target;
    setFormState({
        ...formState,
        [name]:value
    })

}

useEffect(() => {
  
}, [formState])


  return (
    <>
    <h1>SimpleForm</h1>
    <hr/>
    <input type="text"
    className="form-control"
    placeholder="username"
    name="username"
    value={username}
    onChange={onInputChange}
    />
     {(username === 'Alicia') && <Message/>}
    <input
    type="email"
    className="form-control mt-2"
    placeholder="mail"
    name="email"
    value={email}
    onChange={onInputChange}
    />
   


    </>
    

  )
}
