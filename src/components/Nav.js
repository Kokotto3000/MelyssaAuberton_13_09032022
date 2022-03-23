import '../styles/Nav.scss';
import logo from '../assets/img/argentBankLogo.png';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';


const userCircle= <FontAwesomeIcon icon={faUserCircle} />;




function Nav() {

    const navigate= useNavigate();

    const token= sessionStorage.getItem("jwt");

    console.log(token);

    function handleClick(){
        sessionStorage.clear();
       navigate('/');
    }



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
                <div>
                    <button className="main-nav-item" onClick={handleClick}>
                        { userCircle }
                        Sign Out
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
                    { userCircle }
                    Sign In
                </Link>
            </div>
        </nav>
    );
}

export default Nav;