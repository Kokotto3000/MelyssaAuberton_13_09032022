import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { loginUser, logoutUser } from '../features/user/userSlice';

function Login(){
    const dispatch= useDispatch();
    const email= useRef(null);
    const password= useRef(null);
    const remember= useRef(false);
    //console.log(remember.current.checked)

    /*const [isLoading, setLoading]= useState(false);
    const [isError, setError]= useState(false);*/
    const user= useSelector(state=> state.user);
    

    async function handleSubmit(e){

        e.preventDefault();
        
        dispatch(loginUser({"email" : email.current.value || "", "password": password.current.value || "" }))
            
        email.current.focus();
    }

    function handleLogout(){
        dispatch(logoutUser());
    };

    
    

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email" ref={email} />
                <input type="password" placeholder="password" ref={password} />
                <input type="checkbox" name="remember" ref={remember} />
                
                <button disabled={user.status === "success"} type="submit">Log In</button>
            </form>

            {(user.status === "success" || user.loading) && 
                <button onClick={()=> handleLogout()}>Log Out</button>
            }

            {user.loading && <Loader />}
        </>
    )
}

export default Login;