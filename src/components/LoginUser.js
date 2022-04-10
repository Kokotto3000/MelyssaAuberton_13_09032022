import { useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction, logoutUserAction } from "../store/userActions";
import Loader from "./Loader";
import { userSelectors, userStatusSelector } from "../store/userSelectors";

function LoginUser(){
    const dispatch= useDispatch();
    const email= useRef(null);
    const password= useRef(null);
    const remember= useRef(false);
    //console.log(remember.current.checked)

    const [isLoading, setLoading]= useState(false);
    const [isError, setError]= useState(false);
    const user= useSelector(userSelectors);
    //const status= useSelector(userStatusSelector);
    

    async function handleSubmit(e){
        //console.log(status)
        e.preventDefault();
        setLoading(true);
        try{
            await dispatch(loginUserAction({"email" : email.current.value, "password": password.current.value, "remember": remember.current.checked }))
            //fait buggggg
            //if(rememberChecked){
            //    email.current.value="";
            //    password.current.value="";
                //remember.current.checked= false;
            //}
        }catch(err){
            console.log(err);
            setError(true);
        }finally{
            setLoading(false);
            email.current.focus();
        }
    }

    const logoutUser = useCallback((user)=> {
        //console.log(user)
        dispatch(logoutUserAction(user));
    }, []);

    if(isLoading) return <Loader />;

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email" ref={email} />
                <input type="password" placeholder="password" ref={password} />
                <input type="checkbox" name="remember" ref={remember} />
                
                <button disabled={user.isLogin} type="submit">Log In</button>
            </form>

            <div>{user.isLogin}</div>

            {user.isLogin && 
                <button onClick={()=> logoutUser(user)}>Log Out</button>
            }
        </>
    )
}

export default LoginUser;