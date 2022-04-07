import { GET_USER_ACTION, UPDATE_USER_ACTION, LOGOUT_USER_ACTION } from './UserActions';

//interne
const initialState= [
    {
        user: {},
        isSignIn: false
    }
];


export default function UserReducer(state = initialState, action){
    switch(action.type){
        case GET_USER_ACTION:
            return {
                ...state,
                isSignIn: true,
                user: action.payload
            };
            //logique de get avec le fetch post et le token
        case UPDATE_USER_ACTION:
            /*return state.map(todo=> {
                if(todo.id === action.payload.id){
                    return {...todo, ...action.payload};
                }else{
                    return todo;
                }
            });*/
            //logique de update avec le fetch put et le token
        case LOGOUT_USER_ACTION: 
            //return state.filter(todo=> todo.id !== action.payload);
            //logique de logout clear session storage et relocation
        default:
            return state;
    }
};