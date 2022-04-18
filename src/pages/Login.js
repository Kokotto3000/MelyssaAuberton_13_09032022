import '../styles/Login.scss';
import LoginForm from '../components/LoginForm';

//dans login mon reducer sera appelé avec le bouton

function Login() {
    document.title= "Login | ARGENT BANK";
    
    return (
        <main className="main bg-dark">

            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <LoginForm />
            </section>

        </main>
        
    )
}

export default Login;