import '../styles/Nav.scss';
import logo from '../assets/img/argentBankLogo.png';
import { Link } from 'react-router-dom';


function Nav() {
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
                <a className="main-nav-item" href="./sign-in.html">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </a>
            </div>
        </nav>
    );
}

export default Nav;