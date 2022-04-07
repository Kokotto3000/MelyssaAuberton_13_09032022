//import { GET_USER_ACTION, UPDATE_USER_ACTION, LOGOUT_USER_ACTION } from "./UserReducer"

export const GET_USER_ACTION= 'GET_USER_ACTION';
export const UPDATE_USER_ACTION= 'UPDATE_USER_ACTION';
export const LOGOUT_USER_ACTION= 'LOGOUT_USER_ACTION';

export const getUserAction= (user)=> ({
    type: GET_USER_ACTION,
    payload: {...user}
});

export const updateUserAction= (user)=> ({
    type: UPDATE_USER_ACTION,
    payload: {...user}
});

export const logoutUserAction= (user)=> ({
    type: LOGOUT_USER_ACTION,
    payload: {...user}
})