import { useState, useEffect } from 'react';
import '../styles/ProfileHeader.scss';
import { useForm } from "react-hook-form";
import Loader from './Loader';

function ProfileHeader({firstName, lastName}) {

    const [isCollapse, setCollapse]= useState(true);

    const [firstNameInput, setFirstName]= useState(firstName);
    const [lastNameInput, setLastName]= useState(lastName);

    function handleClick(){
        setCollapse(isCollapse? false : true);
    }

    const { 
        register, 
        handleSubmit,
        formState: {errors} 
    } = useForm();

    const onSubmit = input => {
        console.log(input);
        if(input.firstName) setFirstName(input.firstName);
        if(input.lastName) setLastName(input.lastName);
        setCollapse(true);
    };
    
    const token= sessionStorage.getItem("jwt");

    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        //console.log(body)
        //if (!url) return;
        setLoading(true);
        async function fetchData() {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "firstName": firstNameInput,
                "lastName": lastNameInput
            })
            });
            const data = await response.json();
            //console.log(data);
            
        } catch (err) {
            console.log("error : " + err);
            setError(true);
        } finally {
            setLoading(false);
        }
        }
        fetchData();
    }, [firstNameInput, lastNameInput, token]);

    if(error) return <p>error</p>;

    if(isLoading) return <Loader />;

    if(!isCollapse){

        return (
            <header className="header">
                <h1>Welcome back</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input type="text" name="firstName" placeholder={firstNameInput} id="firstName" {...register("firstName")}></input>
                        <input type="text" name="lastName" placeholder={lastNameInput} id="lastName" {...register("lastName")}></input>
                    </div>

                    <div>
                        <button type="submit">Save</button>
                        <button onClick={handleClick}>Cancel</button>
                    </div>
                    
                    
                </form>
            </header>
        )
    }

    return (

        <div className="header">
            <h1>Welcome back</h1>
            <h2>{firstNameInput} {lastNameInput}</h2>
            <button className="edit-button" onClick={handleClick}>Edit Name</button>
        </div>
    )
}

export default ProfileHeader;