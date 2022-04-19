import { useDispatch, useSelector } from "react-redux";
import { getUser, loginUser, toggleRememberUser } from '../features/user/userSlice';
import { useRef } from "react";
//import { getUserAccounts } from "../features/accounts/accountsSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

function LoginForm() {
    const user= useSelector(state=> state.user);
    const dispatch= useDispatch();

    const schema = Yup.object({
        email: Yup.string()
            .email("invalid email")
            .required("email is required"),
        password: Yup.string()
            .required("password is required")
    });

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    
    const remember= useRef(false);

    const localEmail= localStorage.getItem("email") || undefined;

    async function onSubmit(data){
        
        await dispatch(loginUser({"email" : data.email, "password": data.password }))
        .then(response=> {
            if(response.payload?.status === 200) {
                dispatch(getUser({"token": response.payload.body.token}));
            }
        })
        .catch(error=> console.log("login : " + error));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" {...register("email")}  defaultValue={localEmail} />
                <span role="alert">{errors?.email?.message}</span>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" {...register("password")} />
                <span role="alert">{errors?.password?.message}</span>
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" name="remember" onChange={()=> dispatch(toggleRememberUser(remember.current.checked))}  ref={remember} defaultChecked={ localEmail ? true : false } /> 
                <label htmlFor="remember-me">Remember me</label>
            </div>

            { user.status === "failed" && <span role="alert">Credentials are invalid...</span> }
            
            <button type="submit" disabled={user.loading} className="sign-in-button">Sign In</button> 
        </form>
    );
}

export default LoginForm;