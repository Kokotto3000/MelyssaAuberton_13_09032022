import { useRef } from "react";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../store/userActions";

function LoginUser(){
    const dispatch= useDispatch();
    const email= useRef(null);
    const password= useRef(null);
    const remember= useRef(null);
    

    function handleSubmit(e){
        e.preventDefault();
        dispatch(loginUserAction({"email" : email.current.value, "password": password.current.value, "remember": remember.current.checked }))
        if(!remember.current.checked){
            email.current.value="";
            password.current.value="";
            //remember.current.checked= false;
        }
        email.current.focus();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" ref={email} />
            <input type="password" placeholder="password" ref={password} />
            <input type="checkbox" name="remember" ref={remember} />
            <button type="submit">Log In</button>
        </form>
    )
}

export default LoginUser;