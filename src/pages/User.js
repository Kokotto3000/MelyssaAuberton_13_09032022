import { connect, useDispatch, useSelector, useStore } from 'react-redux';
import { toggleUserAction, loginUserAction, logoutUserAction } from '../store/userActions';
//import fetchOrUpdateUserAction from '../store/userActions';

import { TOGGLE_USER_ACTION } from '../store/userReducer';
import { loginUserSelectors, userSelectors } from '../store/userSelectors';
import { useCallback, useEffect } from 'react';
import LoginUser from '../components/LoginUser';
//import store from '../store';


export default function User(){
    //console.log(user);
    const user= useSelector(userSelectors);
    //const dispatch= useDispatch();
    //const loginUser = useCallback((user)=> {
     //   dispatch(loginUserAction(user));
    //}, []);
    

    //ou import store ? 

    /*useEffect(()=> {
        //console.log("useEffect");
        fetchOrUpdateUserAction(user.status);

    }, [])*/

    return(
        <>
            <h1>USER</h1>
            <div>{user.token}</div>
            <LoginUser />
            {/*<div onClick={()=> onToggleToken(user)}>{user.isLogin ? "true" : "false"}</div>*/}
        </>
        
    )
};


//avec connect
/*export const UserStore= connect(
    state=> ({
        user: userSelectors(state)
    }),
    dispatch=> ({
        onToggleToken: user => dispatch(toggleUserAction(user))
    })
)(User);*/