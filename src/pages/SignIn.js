import '../styles/SignIn.scss';
import { useFetch } from "../utils/useFetch";
//utilisation de useForm pour éviter les render inutiles dès qu'on change qqch dans les champs du formulaire
import { useForm } from "react-hook-form";
import { useState } from 'react';

function SignIn() {

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const { 
        register, 
        handleSubmit,
        formState: {errors} 
    } = useForm();
    const onSubmit = data => {
        console.log(data);
        setEmail(data.email);
        setPassword(data.password);
    };

    const { isLoading, data, error }= useFetch("http://localhost:3001/api/v1/user/login", email, password);
    console.log(data, isLoading, error);
    
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" {...register("email", { required: true })}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" {...register("password", { required: true })}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" name="remember-me" {...register("remember-me")} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    {/*PLACEHOLDER DUE TO STATIC SITE
                    <Link to="/user" className="sign-in-button">Sign In</Link>
                    SHOULD BE THE BUTTON BELOW*/}
                    
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
        
    )
}

export default SignIn;