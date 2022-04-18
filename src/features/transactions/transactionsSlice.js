import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import transactions from '../../datas/transactions.json';

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
    'transactions/getAccountTransactions',
    ({token, accountId})=> {
        //console.log("Authorization: " + token);
        const accountTransactions = transactions.filter(transaction=> transaction.accountId === accountId);
        return accountTransactions.sort((a,b)=> (b.timestamp).localeCompare(a.timestamp));
    }
);

/*export const updateTransactionCategory = createAsyncThunk(
    'transactions/updateTransactionCategory',
    async({token, transactionId, category})=> {
        return await fetch("http://localhost:3001/api/v1/transaction/category", {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
                body: JSON.stringify({
                    "id": transactionId,
                    "category": category
            })
        })
        .then(response=> response.json())
    }
);*/

export const updateTransactionCategory= createAsyncThunk(
    'transactions/updateTransactionCategory',
    ({token, transactionId, category})=> {
        //console.log("Authorization: " + token);
        return {"category": category, "id": transactionId};
    }
);

export const updateTransactionNotes= createAsyncThunk(
    'transactions/updateTransactionNotes',
    ({token, transactionId, notes})=> {
        //console.log("Authorization: " + token);
        return {"notes": notes, "id": transactionId};
    }
);

const initialState= {
    accountTransactions: []
};

export const transactionsSlice= createSlice({
    name: "transactions",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(getAccountTransactions.fulfilled, (state, action)=> {
            state.accountTransactions= action.payload
        })
        .addCase(updateTransactionCategory.fulfilled, (state, action)=> {
            const transaction = state.accountTransactions.find(transaction=> transaction.id === action.payload.id);
            transaction.category= action.payload.category;
        })
        .addCase(updateTransactionNotes.fulfilled, (state, action)=> {
            const transaction = state.accountTransactions.find(transaction=> transaction.id === action.payload.id);
            transaction.notes= action.payload.notes;
        })
    }
});

export default transactionsSlice.reducer;