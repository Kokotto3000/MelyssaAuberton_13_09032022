import { createSlice } from "@reduxjs/toolkit";

const initialState= {

}

export const transactionsSlice= createSlice({
    name: "transactions",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder)=>{

    }
});

export const {  }= transactionsSlice.actions;

export default transactionsSlice.reducer;