import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import accountsReducer from '../features/accounts/accountsSlice';
import transactionsReducer from '../features/transactions/transactionsSlice';
import utilsReducer from '../features/utils/utilsSlice';

const preloadedState = {
  user: {
    token: sessionStorage?.getItem("jwt"),
    firstName: sessionStorage?.getItem("firstName"),
    lastName: sessionStorage?.getItem("lastName"),
    id: sessionStorage?.getItem("id"),
    isLogin: sessionStorage.length !== 0
  }
}

export const store = configureStore({
  reducer: {
    utils: utilsReducer,
    user: userReducer,
    accounts: accountsReducer,
    transactions: transactionsReducer
  },
  preloadedState
});
