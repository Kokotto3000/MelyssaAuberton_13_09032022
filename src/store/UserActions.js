import { LOGIN_USER_ACTION, LOGOUT_USER_ACTION, GET_USER_ACTION, UPDATE_USER_ACTION, TOGGLE_USER_ACTION, FETCHING_ACTION, RESOLVED_ACTION, REJECTED_ACTION } from "./userReducer";
import { userSelectors } from "./userSelectors";
import { useSelector } from "react-redux";
//import wait from "./wait";

export const userFetchingAction= ()=> ({ type: FETCHING_ACTION });
export const userResolvedAction= (data)=> ({ type: RESOLVED_ACTION, payload: data });
export const userRejectedAction= (error)=> ({ type: REJECTED_ACTION, payload: error });

//pour login, j'ai besoin email, password
//grâce à thunk je peux faire des requêtes asynchrones ici !!!
export const loginUserAction= ({email, password, remember})=>
    
    async (dispatch)=> {

        //userFetchingAction();
        dispatch({type: FETCHING_ACTION});

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
                //navigate("/profile");
                dispatch({
                    type: LOGIN_USER_ACTION,
                    payload: {
                        token: data.body.token
                    }
                })
            }
            if(data.status=== 400){
                throw data.message;
            }
            
        } catch (err) {
            console.log(err);
            //isSubmitted && setError(true);
        } finally {
            //setLoading(false);
            //await wait(2000);
            
        }
    }

export const getUserAction= (token)=> ({
    type: GET_USER_ACTION,
    payload: {...token}
});

export const updateUserAction= (user)=> ({
    type: UPDATE_USER_ACTION,
    payload: {...user}
});

export const logoutUserAction= (user)=> ({
    type: LOGOUT_USER_ACTION,
    payload: {
        ...user,
        isLogin: false,
        token: null
    }
})

export const toggleUserAction= (user)=> ({
    type: TOGGLE_USER_ACTION,
    payload: {
        ...user,
        isLogin: !user.isLogin,
        token: sessionStorage.getItem("test")
    }
});

/*export const fetchOrUpdateUserAction= (status)=>
        async (dispatch)=> {
            console.log(status);
            if(status === 'pending' || status === 'updating') {
                return;
            }
            dispatch(userFetchingAction());
            try{
                const response= await fetch('http://localhost:3001/api/v1/user/login');
                const data= await response.json();
                dispatch(userResolvedAction(data));
            }catch(error){
                dispatch(userRejectedAction(error));
            }
        }*/
        

        

//logique de fetch et tout ici ? + voir comment ranger mieux