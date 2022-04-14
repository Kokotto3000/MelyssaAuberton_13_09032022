import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loginUser, toggleRememberUser } from '../features/user/userSlice';
//import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function LoginForm() {
    //const navigate= useNavigate();
    const user= useSelector(state=> state.user);
    const dispatch= useDispatch();
    
    
    const email= useRef(null);
    const password= useRef(null);
    const remember= useRef(false);

    const localEmail= localStorage.getItem("email") || undefined;
    //const localRemember= localStorage.getItem("remember") === "true" ? true : false;

    

    async function handleSubmit(e){
        e.preventDefault();
        await dispatch(loginUser({"email" : email.current.value, "password": password.current.value }))
        .then(response=> {
            if(response.payload.status === 200) {
                dispatch(getUser({"token": response.payload.body.token}));
            }
            email.current.focus();
            return;
        })
        .catch(error=> console.log("login : " + error))
    }

    //defaultChecked={localRemember}, value={localEmail

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" ref={email}  defaultValue={localEmail} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" ref={password} />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" name="remember" onChange={()=> dispatch(toggleRememberUser(remember.current.checked))}  ref={remember} defaultChecked={ localEmail ? true : false } /> 
                <label htmlFor="remember-me">Remember me</label>
            </div>

            { user.status === "failed" && <div>Les identifiants sont invalides...</div> }
            
            <button type="submit" disabled={user.loading} className="sign-in-button">Sign In</button> 
        </form>
    );
}

export default LoginForm;