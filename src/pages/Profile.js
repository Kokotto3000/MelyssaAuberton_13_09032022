import ProfileHeader from "../components/ProfileHeader";
import Account from "../components/Account";

import accounts from '../datas/accounts';

import { useState, useEffect } from "react";


function Profile() {

    const token= localStorage.getItem("jwt");

    console.log(token);

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
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            }
            });
            const data = await response.json();
            if(data.status=== 200){
                console.log(data);
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
        console.log(data.body.firstName),
        <main className="main bg-dark">
            <ProfileHeader name={data.body.firstName} />

            <h2 className="sr-only">Accounts</h2>

            {accounts[0].account.map((element, index)=> (
                <Account key={ index } title={ element.title } amount={ element.amount } description={ element.description } />
            ))}
        </main>
    )
}

export default Profile;