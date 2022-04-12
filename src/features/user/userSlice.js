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

const initialState = {
    entities: [],
    loading: false,
    isLogin: false
};
  

export const userSlice= createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser: (state, action)=> {
            state.isLogin= false;
            state.entities= [];
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
    }
});

//export const userToken = (state) => state.user.entities.body.token;

export const { logoutUser }= userSlice.actions;

export default userSlice.reducer;

