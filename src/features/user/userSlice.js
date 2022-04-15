import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import userAPI from './userAPI';

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({ email, password })=>{
        
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
);

const initialState = {
    tokenData: [],
    data: [],
    loading: false,
    isLogin: false,
    status: 'idle',
    remember: false,
    token: "",
    firstName: "",
    lastName: "",
    id: ""
};
  

export const userSlice= createSlice({
    name: "user",
    initialState,
    reducers: {
        getLocalDataUser: (state, action)=> {
            state.token= sessionStorage.getItem("jwt");
            state.firstName= sessionStorage.getItem("firstName");
            state.lastName= sessionStorage.getItem("lastName");
            state.id= sessionStorage.getItem("id");
            state.isLogin= true;
        },
        logoutUser: (state, action)=> {
            state.isLogin= false;
            state.tokenData= [];
            state.data= [];
            state.status= 'idle';
            state.firstName= "";
            state.lastName= "";
            state.token= "";
            state.id= "";
            sessionStorage.clear();
        },
        toggleRememberUser: (state, action)=> {
            state.remember= action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(loginUser.fulfilled, (state, action)=> {
            state.tokenData=action.payload;
            if(state.tokenData.status === 200){
                state.status= 'success';
                state.isLogin= true;
                state.token= action.payload.body.token;
                sessionStorage.setItem("jwt", action.payload.body.token);
            }else if(state.tokenData.status === 400){
                state.status= 'failed';
                console.log(state.tokenData.message);
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
            if(state.data.status === 200){
                state.status= 'success';
                state.firstName= action.payload.body.firstName;
                sessionStorage.setItem("firstName", action.payload.body.firstName);
                state.lastName= action.payload.body.lastName;
                sessionStorage.setItem("lastName", action.payload.body.lastName);
                state.id= action.payload.body.id;
                sessionStorage.setItem("id", action.payload.body.id);
                if(state.remember) localStorage.setItem("email", action.payload.body.email);
                else localStorage.clear();
            }else if(state.data.status === 400){
                state.status= 'failed';
                console.log(state.tokenData.message);
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
            if(state.data.status === 200){
                state.firstName= action.payload.body.firstName;
                sessionStorage.setItem("firstName", action.payload.body.firstName);
                state.lastName= action.payload.body.lastName;
                sessionStorage.setItem("lastName", action.payload.body.lastName);
                state.status= 'success';
            }else if(state.data.status === 400){
                state.status= 'failed';
                console.log(state.data.message);
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

//export const userToken = (state) => state.user.tokenData.body.token;

export const { logoutUser, toggleRememberUser, getLocalDataUser }= userSlice.actions;

export default userSlice.reducer;

