import ProfileHeader from "../components/ProfileHeader";
import Account from "../components/Account";

import accounts from '../datas/accounts';

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {

    const navigate= useNavigate();

    const token= sessionStorage.getItem("jwt");

    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        if(!token){
            
            navigate('/');
            return;
        }
        //
        //console.log(body)
        //if (!url) return;
        setLoading(true);
        async function fetchData() {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            }
            });
            const data = await response.json();
            if(data.status=== 200){
                //console.log(data);
                setData(data);
            }
            
        } catch (err) {
            console.log("error : " + err);
            setError(true);
        } finally {
            setLoading(false);
        }
        }
        fetchData();
    }, [token]);

    if(error) return <p>error</p>;

    if(isLoading) return <p>Loading</p>;


    return (

        <main className="main bg-dark">
            <ProfileHeader firstName={data.body.firstName} lastName={data.body.lastName} />

            <h2 className="sr-only">Accounts</h2>

            {accounts.map((element, index)=> (
                <Account key={ index } title={ element.title } amount={ element.amount } description={ element.description } />
            ))}
        </main>

    )
}

export default Profile;