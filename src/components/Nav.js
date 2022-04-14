import '../styles/Nav.scss';
import logo from '../assets/img/argentBankLogo.png';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';


const userCircle= <FontAwesomeIcon icon={faUserCircle} />;
const signOutIcon= <FontAwesomeIcon icon={faArrowRightFromBracket} />;

function Nav() {
    const user= useSelector(state=> state.user);

    const dispatch= useDispatch();
    const navigate= useNavigate();

    function handleLogout(){
        dispatch(logoutUser());
        navigate('/');
    };

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

            {user.isLogin && user.firstName && user.lastName ? 
                <div className="main-nav_sign-out">
                    <Link to="/profile">{ userCircle } {user.firstName}</Link>
                    <button className="main-nav_sign-out_button" onClick={ handleLogout }>
                        { signOutIcon } Sign Out
                    </button>
                </div>
            :
                <div>
                    <Link to="/login" className="main-nav-item">
                        { userCircle } Sign In
                    </Link>
                </div>
            }
        </nav>
    );
}

export default Nav;