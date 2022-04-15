import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import accountsReducer from '../features/accounts/accountsSlice';
//import transactionsReducer from '../features/transactions/transactionsSlice';

//import accounts from '../datas/accountsNew.json';

/*const preloadedState = {
  accounts: {
    accounts: accounts
  }
}*/

export const store = configureStore({
  reducer: {
    user: userReducer,
    accounts: accountsReducer,
    //transactions: transactionsReducer
  },
  //preloadedState
});
