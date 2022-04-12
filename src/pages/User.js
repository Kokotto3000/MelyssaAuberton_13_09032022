import { connect, useDispatch, useSelector, useStore } from 'react-redux';
import { toggleUserAction, loginUserAction, logoutUserAction } from '../store/userActions';
//import fetchOrUpdateUserAction from '../store/userActions';

import { TOGGLE_USER_ACTION } from '../store/userReducer';
import { loginUserSelectors, userSelectors } from '../store/userSelectors';
import { useCallback, useEffect } from 'react';
//import LoginUser from '../components/LoginUser';
//import store from '../store';
import UserComponent from '../features/user/UserComponent';
import { loginUser } from '../features/user/userSlice';
import Login from '../components/Login';
import Loader from '../components/Loader';


export default function User(){

    
    const {token} = useSelector(state=> state.user.entities.body || "");
    //const dispatch= useDispatch();

    console.log(token)

    

    /*useEffect(()=> {
        const data= {
            email: "melyssa.auberton@gmail.com",
            password: "Kokotto3000"
        }

        dispatch(loginUser(data))
    }, [dispatch])*/

    return (
        <main className="bg-dark">
            {token}
            <Login />
        </main>
    );
}