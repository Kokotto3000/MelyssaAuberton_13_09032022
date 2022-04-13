import { useRef, useState } from 'react';
import '../styles/ProfileHeader.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../features/user/userSlice';
import Loader from './Loader';

//ou récupérer response ou useeffect sur response quand update user...

function ProfileHeader() {

    const user= useSelector(state=> state.user);

    console.log(user);

    const dispatch= useDispatch();

    const firstNameInput= useRef("");
    const lastNameInput=useRef("");

    const [isCollapse, setCollapse]= useState(true);

    function handleSubmit(e){
        e.preventDefault();
        dispatch(updateUser({ "token": user.entities.body.token, "firstName": firstNameInput.current.value, "lastName": lastNameInput.current.value }));
        setCollapse(true);
    }

    /*const [firstNameInput, setFirstName]= useState(firstName);
    const [lastNameInput, setLastName]= useState(lastName);*/

    function handleClick(){
        setCollapse(isCollapse? false : true);
    }

    /*const { 
        register, 
        handleSubmit,
        formState: {errors} 
    } = useForm();*/

    /*const onSubmit = input => {
        console.log(input);
        if(input.firstName) setFirstName(input.firstName);
        if(input.lastName) setLastName(input.lastName);
        setCollapse(true);
    };*/
    
    //const token= sessionStorage.getItem("jwt");

    /*const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);*/

    /*useEffect(() => {
        //console.log(body)
        //if (!url) return;
        setLoading(true);
        async function fetchData() {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "firstName": firstNameInput,
                "lastName": lastNameInput
            })
            });
            const data = await response.json();
            //console.log(data);
            
        } catch (err) {
            console.log("error : " + err);
            setError(true);
        } finally {
            setLoading(false);
        }
        }
        fetchData();
    }, [firstNameInput, lastNameInput, token]);*/

    //if(error) return <p>error</p>;

    //if(isLoading) return <Loader />;
    

    if(!isCollapse){

        return (
            
            <header className="header">
                <h1>Welcome back</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="firstName" placeholder={""} id="firstName" ref={firstNameInput} ></input>
                        <input type="text" name="lastName" placeholder={""} id="lastName" ref={lastNameInput} ></input>
                    </div>

                    <div>
                        <button type="submit">Save</button>
                        <button onClick={handleClick}>Cancel</button>
                    </div>
                    
                </form>
            </header>
        )
    }

    return (

        <div className="header">
            <h1>Welcome back</h1>
            
            { user.data.body && 
                <h2>{user.data.body.firstName} {user.data.body.lastName}</h2>
            }
            
            <button className="edit-button" disabled={user.loading} onClick={handleClick}>Edit Name</button>
        </div>
    )
}

export default ProfileHeader;