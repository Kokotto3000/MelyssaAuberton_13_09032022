import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
        console.log("Authorization: " + token);
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
        console.log("Authorization: " + token);
        const transaction = transactions.find(transaction=> transaction.id === transactionId);
        const index= transactions.indexOf(transaction);
        return {"category": category, "index": index};
    }
);

export const updateTransactionNotes= createAsyncThunk(
    'transactions/updateTransactionNotes',
    ({token, transactionId, notes})=> {
        console.log(notes)
        console.log("Authorization: " + token);
        const transaction = transactions.find(transaction=> transaction.id === transactionId);
        const index= transactions.indexOf(transaction);
        return {"notes": notes, "index": index};
    }
);

function isRejectedAction(action) {
    return action.type.endsWith('rejected');
};

function isPendingAction(action) {
    return action.type.endsWith('pending');
};

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
        .addCase(updateTransactionCategory.fulfilled, (state, action)=> {
            state.accountTransactions[action.payload.index].category= action.payload.category;
            state.status= "success";
            state.loading= false;
        })
        .addCase(updateTransactionNotes.fulfilled, (state, action)=> {
            state.accountTransactions[action.payload.index].notes= action.payload.notes;
            state.status= "success";
            state.loading= false;
        })        
        .addMatcher(
            isPendingAction,
            // `action` will be inferred as a PendingAction due to ispendingAction being defined as a type guard
            (state, action) => {
                state.status = 'updating';
                state.loading= true;
            }
        )
        .addMatcher(
            isRejectedAction,
            // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
            (state, action) => {
                console.log(action);
                state.status = 'failed';
                state.loading= false;
            }
        )
    }
});

export default transactionsSlice.reducer;