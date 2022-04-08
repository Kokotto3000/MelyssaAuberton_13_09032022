import { connect, useDispatch, useSelector } from 'react-redux';
import { toggleUserAction, loginUserAction, logoutUserAction } from '../store/userActions';
import { TOGGLE_USER_ACTION } from '../store/userReducer';
import { loginUserSelectors, userSelectors } from '../store/userSelectors';
import { useCallback } from 'react';
import LoginUser from '../components/LoginUser';

export default function User(){
    //console.log(user);
    const user= useSelector(userSelectors);
    const dispatch= useDispatch();
    const loginUser = useCallback((log)=> {
        dispatch(loginUserAction(log));
    }, []);
    const logoutUser = useCallback((user)=> {
        dispatch(logoutUserAction(user));
    }, []);
    return(
        <>
            <h1>USER</h1>
            <div>{user.token}</div>
            <LoginUser />
            <div>
                {!user.isLogin ? 
                    <button onClick={()=> loginUser(user)}>login</button>
                :
                    <button onClick={()=> logoutUser(user)}>logout</button>
                }
            </div>
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