import { createStore, combineReducers } from 'redux';
import { FilterReducer } from './FilterReducer';
import TodosReducer from './TodosReducer';

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
        todos: TodosReducer,
        filter: FilterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);