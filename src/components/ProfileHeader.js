import { useRef, useState } from 'react';
import '../styles/ProfileHeader.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../features/user/userSlice';
import { useForm } from "react-hook-form";

function ProfileHeader() {

    const user= useSelector(state=> state.user);

    const dispatch= useDispatch();
    const { 
        register,
        handleSubmit,
        formState: { errors } 
    } = useForm();

    const [isCollapse, setCollapse]= useState(true);

    function onSubmit(data){
        dispatch(updateUser({ 
            "token": user.token, 
            "firstName": data.firstName || user.firstName , 
            "lastName": data.lastName || user.lastName
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='profile-header_inputs'>
                        <div className="profile-header_input">
                            <input 
                                type="text" 
                                name="firstName" 
                                id="firstName" 
                                defaultValue={user.firstName} 
                                {...register(
                                    "firstName", { 
                                        pattern: { 
                                        value: /^[A-Za-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ_\s-]+$/i, 
                                        message: "invalid field name" 
                                        },
                                        maxLength: {
                                            value: 30,
                                            message : "max length exceeded"
                                        }
                                    }
                                )} 
                            />
                            {errors.firstName && (
                                <span role="alert">{errors?.firstName.message}</span>
                            )}
                        </div>
                        <div className="profile-header_input">
                            <input 
                                type="text" 
                                name="lastName" 
                                id="lastName" 
                                defaultValue={user.lastName} 
                                {...register("lastName", {
                                    pattern: {
                                        value: /^[A-Za-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ_\s-]+$/i, 
                                        message: "invalid field name" 
                                    },
                                    maxLength: {
                                        value: 30,
                                        message : "max length exceeded"
                                    }
                                })} 
                            />
                            {errors.lastName && (
                                <span role="alert">{errors?.lastName.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="profile-header_buttons">
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