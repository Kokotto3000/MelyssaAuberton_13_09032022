import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './userReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
//import transactionsReducer from './transactionsReducer';

export default createStore(
    combineReducers({
        user: userReducer,
        //transactions: transactionsReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);