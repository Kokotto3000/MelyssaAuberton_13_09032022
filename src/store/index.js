import { createStore, combineReducers } from 'redux';
//import { FilterReducer } from './FilterReducer';
import UserReducer from './UserReducer';
//import TranscationsReducer from './TransactionsReducer';

//const store= createStore(TodoReducer);
//avec devtools
//avec un reducer
//const store = createStore(
//    TodoReducer, /* preloadedState, */
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//);
//avec plusieurs
export default createStore(
    combineReducers({
        user: UserReducer,
        //transactions: TransactionsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//définir les reducers dont on va avoir besoin
//