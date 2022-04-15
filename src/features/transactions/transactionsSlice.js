import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState= {
    userAccount: [],
    loading: false,
    status: 'idle'
};

//voir autre syntaxe sans builder

export const transactionsSlice= createSlice({
    name: "transactions",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(getUserAccounts.fulfilled, (state, action)=> {
            state.userAccounts= action.payload;
            state.status= "success";
            state.loading= false;
        })
        .addCase(getUserAccounts.pending, (state) => {
            state.status= "updating";
            state.loading= true;
        })
        .addCase(getUserAccounts.rejected, (state, action) => {
            state.status = 'failed';
            state.loading= false;
        })
    }
});

export const {  }= transactionsSlice.actions;

export default transactionsSlice.reducer;


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import accounts from '../../datas/accounts.json';

/*export const getUserAccounts= createAsyncThunk(
    'accounts/getUserAccounts',
    async ({token, userId})=>{
        return await fetch("http://localhost:3001/api/v1/accounts", 
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                "userId": userId
            })
        })
        .then(response=> response.text())

    }
);*/
export const getUserAccounts= createAsyncThunk(
    'accounts/getUserAccountsAPI',
    ({token, userId})=> {
        console.log("Authorization: " + token);
        return accounts.filter(account=> account.userId === userId);
    }
)



export const accountsSlice= createSlice({
    name: "accounts",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(getUserAccounts.fulfilled, (state, action)=> {
            state.userAccounts= action.payload;
            state.status= "success";
            state.loading= false;
        })
        .addCase(getUserAccounts.pending, (state) => {
            state.status= "updating";
            state.loading= true;
        })
        .addCase(getUserAccounts.rejected, (state, action) => {
            state.status = 'failed';
            state.loading= false;
        })
    }
});