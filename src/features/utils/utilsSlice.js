import { createSlice } from "@reduxjs/toolkit";

function isRejectedAction(action) {
    //console.log(action)
    return action.type.endsWith('rejected');
};
  
function isPendingAction(action) {
    return action.type.endsWith('pending');
};

function isFulfilledAction(action) {
    return action.type.endsWith('fulfilled');
};

const initialState= {
    loading: false,
    status: 'idle'
}

export const utilsSlice= createSlice({
    name: "utils",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addMatcher(
          isFulfilledAction, 
          (state, action)=> {
              state.status= 'success';
              state.loading= false;
          }
    
      )      
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
              state.status = 'failed';
              state.loading= false;
          }
      )
      },
});

export default utilsSlice.reducer;