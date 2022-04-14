import { createSlice } from "@reduxjs/toolkit";

const initialState= {

}

export const transactionsSlice= createSlice({
    name: "transactions",
    initialState,
    reducers: {
        getLocalDataUser: (state, action)=> {
            state.token= sessionStorage.getItem("jwt");
            state.firstName= sessionStorage.getItem("firstName");
            state.lastName= sessionStorage.getItem("lastName");
            state.isLogin= true;
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
    }
});

//export const userToken = (state) => state.user.tokenData.body.token;

export const {  }= transactionsSlice.actions;

export default transactionsSlice.reducer;