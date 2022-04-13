import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import { useNavigate } from 'react-router-dom';
//import userAPI from './userAPI';

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({email, password})=>{
        //console.log(email, password)
        return await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
        .then(response=> response.json())
        /*async ({email, password}) => {
            console.log(email, password)
            return await userAPI.fetchByCredentials(email, password)
        }*/
    }
);

export const getUser = createAsyncThunk(
    'user/getUser',
    async ({token})=>{
        return await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response=> response.json())
    }
);

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async({token, firstName, lastName})=> {
        return await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
                body: JSON.stringify({
                    "firstName": firstName,
                    "lastName": lastName
            })
        })
        .then(response=> response.json())
    }
)

const initialState = {
    entities: [],
    data: [],
    loading: false,
    isLogin: false,
    status: 'idle'
};
  

export const userSlice= createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser: (state, action)=> {
            state.isLogin= false;
            state.entities= [];
            state.data= [];
            state.status= 'idle';
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(loginUser.fulfilled, (state, action)=> {
            state.entities=action.payload;
            if(state.entities.status === 200){
                state.status= 'success';
                state.isLogin= true;

            }else if(state.entities.status === 400){
                state.status= 'failed';
                console.log(state.entities.message);
            }
            state.loading= false;
        })
        .addCase(loginUser.pending, (state) => {
            state.status = 'updating';
            state.loading =  true;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.status = 'failed';
            state.loading= false;
        })
        .addCase(getUser.fulfilled, (state, action)=> {
            state.data= action.payload;
            if(state.entities.status === 200){
                state.status= 'success';
            }else if(state.entities.status === 400){
                state.status= 'failed';
                console.log(state.entities.message);
            }
            state.loading= false;
        })
        .addCase(getUser.pending, (state) => {
            state.status = 'updating';
            state.loading =  true;
        })
        .addCase(getUser.rejected, (state, action) => {
            state.status = 'failed';
            state.loading= false;
        })
        .addCase(updateUser.fulfilled, (state, action)=> {
            state.data= action.payload;
            if(state.entities.status === 200){
                state.status= 'success';
            }else if(state.entities.status === 400){
                state.status= 'failed';
                console.log(state.entities.message);
            }
            state.loading= false;
        })
        .addCase(updateUser.pending, (state) => {
            state.status = 'updating';
            state.loading =  true;
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.status = 'failed';
            state.loading= false;
        })
    }
});

//export const userToken = (state) => state.user.entities.body.token;

export const { logoutUser }= userSlice.actions;

export default userSlice.reducer;

