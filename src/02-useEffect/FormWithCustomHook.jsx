
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

const{formState, onInputChange,onResetForm,username, email, password}=useForm({
        username:'',
        email:'',
        password: ''
        
})
  return (
    <>
    <h1>SimpleFormWith CustomHook</h1>
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
    <input
    type="password"
    className="form-control mt-2"
    placeholder="password"
    name="password"
    value={password}
    onChange={onInputChange}
    />
<button onClick={onResetForm} className="btn btn-primary mt-2">Reset</button>

    </>
    

  )
}
