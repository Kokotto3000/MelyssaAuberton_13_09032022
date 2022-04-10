import produce from 'immer';
import { useSelector } from 'react-redux';

const initialState= [
    {
        token: null,
        isLogin: false,
        firstName: "",
        lastName: "",
        //email: "",
        //password: "",
        //isRemember: false
        status: "void",
        data: null,
        error: null
    }
]

export const LOGIN_USER_ACTION= 'user/login';
export const LOGOUT_USER_ACTION= 'user/logout';
export const TOGGLE_USER_ACTION= 'user/toggle';
export const GET_USER_ACTION= 'user/get';
export const UPDATE_USER_ACTION= 'user/update';

export const FETCHING_ACTION= 'user/fetching';
export const RESOLVED_ACTION= 'user/resolved';
export const REJECTED_ACTION= 'user/rejected';

export default function userReducer (state = initialState, action) {
    //avec immer
    //return produce(state, draft=> { et tout le switch dedans })
    
    switch (action.type) {
        case LOGIN_USER_ACTION:
            return {...state, isLogin: true, token: action.payload.token};
        case LOGOUT_USER_ACTION:
            sessionStorage.clear();
            return {...state, ...action.payload};
        case TOGGLE_USER_ACTION:
            !state.isLogin ? sessionStorage.clear(): sessionStorage.setItem("test", "prout");
            return {...state, ...action.payload};
        case FETCHING_ACTION: {
            console.log(state[0].status);
            /*if(state.status === 'void'){
                return{
                    ...state,
                    status: 'pending'
                }
            }
            if(state.status === 'rejected'){
                return{
                    ...state,
                    error: null,
                    status: 'pending'
                }
            }
            if(state.status === 'resolved'){
                return{
                    ...state,
                    status: 'updating'
                }
            }
            return;
        }
        case RESOLVED_ACTION: {
            if(state.status === 'pending' || state.status === 'updating'){
                return{
                    ...state,
                    data: action.payload,
                    status: 'resolved'
                }
            }
            return;
        }
        case REJECTED_ACTION: {
            if(state.status === 'pending' || state.status === 'updating'){
                return{
                    ...state,
                    data: null,
                    status: 'rejected',
                    error: action.payload
                }
            }
            return;*/
        }
        default:
            return state;
    }
};