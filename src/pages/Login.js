import '../styles/SignIn.scss';
import LoginForm from '../components/LoginForm';

//dans login mon reducer sera appelé avec le bouton

function Login() {
    document.title= "Login | ARGENT BANK";

    //const user= useSelector(state=> state.user);

    

    //const navigate= useNavigate();

    /*const [email, setEmail]= useState(localEmail);
    const [password, setPassword]= useState("");
    const [remember, setRemember]= useState(false);
    //const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isSubmitted, setIsSubmitted]= useState(false);

    const { 
        register, 
        handleSubmit,
        formState: {errors} 
    } = useForm();

    const onSubmit = input => {
        //console.log(input);
        setEmail(input.email);
        setPassword(input.password);
        setRemember(input.remember);
        setIsSubmitted(true);
    };*/

    /*useEffect(() => {

        if(token){
            navigate('/profile');
            return;
        }

        setLoading(true);

        async function fetchData() {

            try {
                const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
                });
                const data = await response.json();
                //console.log(remember);
                if(data.status=== 200){
                    //console.log(data);
                    if(remember){
                        localStorage.setItem("email", email);
                        localStorage.setItem("remember", remember);
                    }else localStorage.clear();
                    sessionStorage.setItem("jwt", data.body.token);
                    navigate("/profile");
                }
                if(data.status=== 400){
                    throw data.message;
                }
                
            } catch (err) {
                console.log(err);
                isSubmitted && setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [email, password, remember]);*/

    //if(isLoading) return <Loader />;

    //if(error) return <Error />;
    
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