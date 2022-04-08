import '../styles/Nav.scss';
import logo from '../assets/img/argentBankLogo.png';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';


const userCircle= <FontAwesomeIcon icon={faUserCircle} />;
const signOutIcon= <FontAwesomeIcon icon={faArrowRightFromBracket} />;

function Nav() {

    const navigate= useNavigate();

    const token= sessionStorage.getItem("jwt");

    const [firstName, setFirstName]= useState("");

    //console.log(token);

    function handleClick(){
        sessionStorage.clear();
        navigate('/');
    }

    //useEffect(() => {
        
        //setLoading(true);
        async function fetchData() {
            if(!token) return;
            try {
                const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                }});
                const data = await response.json();
                if(data.status=== 200){
                    //console.log(data.body);
                    setFirstName(data.body.firstName);
                }
            }catch(err){
                console.log("error : " + err);
                //setError(true);
            }
        }
        fetchData();
    //}, [token]);



    if(token){
        return (
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img
                    className="main-nav-logo-image"
                    src={ logo }
                    alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div className="main-nav_sign-out">
                    <Link to="/profile">{ userCircle } {firstName}</Link>
                    <button className="main-nav_sign-out_button" onClick={ handleClick }>
                        { signOutIcon } Sign Out
                    </button>
                </div>
            </nav>
        );
    }

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                className="main-nav-logo-image"
                src={ logo }
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link to="/login" className="main-nav-item">
                    { userCircle } Sign In
                </Link>
            </div>
        </nav>
    );
}

export default Nav;