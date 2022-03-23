import '../styles/SignIn.scss';
//import { useFetch } from "../utils/useFetch";
//utilisation de useForm pour éviter les render inutiles dès qu'on change qqch dans les champs du formulaire
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate= useNavigate();

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const { 
        register, 
        handleSubmit,
        formState: {errors} 
    } = useForm();

    const onSubmit = input => {
        console.log(input);
        setEmail(input.email);
        setPassword(input.password);
        
    };

    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        //console.log(body)
        //if (!url) return;
        setLoading(true);
        async function fetchData() {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
            });
            const data = await response.json();
            if(data.status=== 200){
                console.log(data);
                setData(data);
                localStorage.clear();
                sessionStorage.setItem("jwt", data.body.token);
                navigate("/profile");
            }
            
        } catch (err) {
            console.log("error : " + err);
            setError(true);
        } finally {
            setLoading(false);
        }
        }
        fetchData();
    }, [email, password, navigate]);

    if(error) return <p>error</p>;

    if(isLoading) return <p>Loading</p>;
    
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" {...register("email", { required: true })}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" {...register("password", { required: true })}/>
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

export default Login;