import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/*export const getAccountTransactions= createAsyncThunk(
    'accounts/getAccountTransactions',
    async ({token, accountId })=>{
        return await fetch("http://localhost:3001/api/v1/transactions", 
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                "accountId": accountId
            })
        })
        .then(response=> response.text())

    }
);*/
export const getAccountTransactions= createAsyncThunk(
    'accounts/getAccountTransactions',
    ({token, accountId})=> {
        console.log("Authorization: " + token);
        return transactions.filter(transaction=> transaction.accountId === accountId);
    }
);

const initialState= {
    accountTransactions: [],
    loading: false,
    status: 'idle'
};

//voir autre syntaxe sans builder

export const transactionsSlice= createSlice({
    name: "transactions",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(getAccountTransactions.fulfilled, (state, action)=> {
            state.accountTransactions= action.payload;
            state.status= "success";
            state.loading= false;
        })
        .addCase(getAccountTransactions.pending, (state) => {
            state.status= "updating";
            state.loading= true;
        })
        .addCase(getAccountTransactions.rejected, (state, action) => {
            state.status = 'failed';
            state.loading= false;
        })
    }
});

//export const {  }= transactionsSlice.actions;

export default transactionsSlice.reducer;