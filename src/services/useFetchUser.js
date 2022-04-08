import { useState } from "react";

export default async function useFetchUser(token) {

    const [data, setData]= useState({});
    const [isLoading, setLoading]= useState(true);
    const [isError, setError]= useState(false);

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
    return {data, isLoading, isError};
}