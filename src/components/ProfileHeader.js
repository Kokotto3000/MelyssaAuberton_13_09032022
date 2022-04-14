import { useRef, useState } from 'react';
import '../styles/ProfileHeader.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../features/user/userSlice';

function ProfileHeader() {

    const user= useSelector(state=> state.user);

    const dispatch= useDispatch();

    const firstNameInput= useRef("");
    const lastNameInput=useRef("");

    const [isCollapse, setCollapse]= useState(true);

    function handleSubmit(e){
        e.preventDefault();
        dispatch(updateUser({ 
            "token": user.token, 
            "firstName": firstNameInput.current.value || user.firstName , 
            "lastName": lastNameInput.current.value || user.lastName
        }));
        setCollapse(true);
    }

    function handleClick(){
        setCollapse(isCollapse? false : true);
    }

    if(!isCollapse){

        return (
            
            <header className="header">
                <h1>Welcome back</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="firstName" placeholder={""} id="firstName" ref={firstNameInput} defaultValue={user.firstName} ></input>
                        <input type="text" name="lastName" placeholder={""} id="lastName" ref={lastNameInput} defaultValue={user.lastName} ></input>
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
            
            <h2>{user.firstName} {user.lastName}</h2>
            
            <button className="edit-button" disabled={user.loading} onClick={handleClick}>Edit Name</button>
        </div>
    )
}

export default ProfileHeader;