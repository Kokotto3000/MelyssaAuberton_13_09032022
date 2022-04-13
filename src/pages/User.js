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
import { getUser } from '../features/user/userSlice';


export default function User(){

    
    const user = useSelector(state=> state.user);
    //const dispatch= useDispatch();

    const dispatch= useDispatch();

    useEffect(async()=> {
        if(user.isLogin){
            await dispatch(getUser(user.entities.body))
            console.log(user)
        }
        
    }, [dispatch, user.isLogin]);

    

    /*useEffect(()=> {
        const data= {
            email: "melyssa.auberton@gmail.com",
            password: "Kokotto3000"
        }

        dispatch(loginUser(data))
    }, [dispatch])*/

    return (
        <main className="bg-dark">
            <Login />
        </main>
    );
}