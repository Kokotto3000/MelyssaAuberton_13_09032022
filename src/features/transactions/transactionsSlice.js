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
        console.log(category);
        console.log("Authorization: " + token);

        return {"category": category, "id": transactionId};
    }
);

export const updateTransactionNotes= createAsyncThunk(
    'transactions/updateTransactionNotes',
    ({token, transactionId, notes})=> {
        console.log(notes)
        console.log("Authorization: " + token);
        
        return {"notes": notes, "id": transactionId};
    }
);

function isRejectedAction(action) {
    return action.type.endsWith('rejected');
};

function isPendingAction(action) {
    return action.type.endsWith('pending');
};

const initialState= [];

//voir autre syntaxe sans builder

export const transactionsSlice= createSlice({
    name: "transactions",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(getAccountTransactions.fulfilled, (state, action)=> {
            action.payload.forEach(transaction=> {
                const accountTransaction= {
                    ...transaction,
                    status: "success",
                    isLoading: false
                }
                state.push(accountTransaction);
                //dispatch(updateLoadingStatus(false));
            })
            //state.push( action.payload);
            //state.status= "success";
            //state.loading= false;
        })
        .addCase(updateTransactionCategory.fulfilled, (state, action)=> {
            const transaction = state.find(transaction=> transaction.id === action.payload.id);
            transaction.category= action.payload.category;
            transaction.status= "success";
            transaction.loading= false;
        })
        .addCase(updateTransactionNotes.fulfilled, (state, action)=> {
            const transaction = state.find(transaction=> transaction.id === action.payload.id);
            transaction.notes= action.payload.notes;
            transaction.status= "success";
            transaction.loading= false;
        })      
        .addMatcher(
            isPendingAction,
            // `action` will be inferred as a PendingAction due to ispendingAction being defined as a type guard
            (state, action) => {
                //state.status = 'updating';
                //state.loading= true;
                //dispatch(updateLoadingStatus(true));
            }
        )
        .addMatcher(
            isRejectedAction,
            // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
            (state, action) => {
                console.log(action);
                //state.status = 'failed';
                //state.loading= false;
                //dispatch(updateLoadingStatus(false));
            }
        )
    }
});

export default transactionsSlice.reducer;