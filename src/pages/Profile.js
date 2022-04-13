import ProfileHeader from "../components/ProfileHeader";
import Account from "../components/Account";
import Loader from "../components/Loader";
import Error from "../components/Error";

import accounts from '../datas/accounts';

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchUser } from "../services/useFetchUser";
import { useSelector } from "react-redux";

//appel

function Profile() {
    //ajouter profil de ?
    document.title= "Profile | ARGENT BANK";

    

    //const navigate= useNavigate();

    //const token= sessionStorage.getItem("jwt");
    
    //console.log(token);

    /*const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);*/

    /*useEffect(() => {
        
        setLoading(true);
        
        async function fetchData() {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            }});
            const data = await response.json();
            if(data.status=== 200){
                setData(data);
            }
        }catch(err){
            console.log("error : " + err);
            setError(true);
        }finally{
            setLoading(false);
        }
        }
        fetchData();
    }, [token]);*/

    //if(isLoading) return <Loader />;

    //if(error) return <Error />;

    return (

        <main className="main bg-dark">
            <ProfileHeader />

            <h2 className="sr-only">Accounts</h2>

            {accounts.map((element, index)=> (
                <Account key={ index } title={ element.title } amount={ element.amount } description={ element.description } />
            ))}
        </main>

    )
}

export default Profile;