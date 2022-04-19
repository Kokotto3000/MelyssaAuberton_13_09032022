import '../styles/Login.scss';
import LoginForm from '../components/LoginForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Login() {
    document.title= "Login | ARGENT BANK";
    
    return (
        <main id="login" className="main bg-dark">

            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} />
                <h1>Sign In</h1>
                <LoginForm />
            </section>

        </main>
        
    )
}

export default Login;