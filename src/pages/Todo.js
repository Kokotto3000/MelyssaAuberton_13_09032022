import { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {TodoFilterStore} from "../components/TodoFilter";
import { toggleTodoAction, deleteTodoAction } from "../store/UserActions";
import { UPDATE_TODO_ACTION, DELETE_TODO_ACTION } from "../store/UserReducer";
import { filterTodosSelector, todosSelectors } from "../store/UserSelectors";

function TodoItem({todo, onToggle, onDelete}){


    return(
        <li>
            <label htmlFor="">
                <input type="checkbox" checked={todo.completed} onChange={()=> onToggle(todo)} />
                {todo.title}
                <button onClick={()=> onDelete(todo)}>X</button>
            </label>
        </li>
    )

}

//dernière technique qui combine un peu les 2 logiques
export default function Todo({todos, onToggle, onDelete}){
    return(
        <div>
            <ul>
                {todos.map(todo=> <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} key={todo.id} />)}
            </ul>
            <TodoFilterStore />
        </div>
        
        
    )
}

export function TodoStore() {
    const todos= useSelector(filterTodosSelector);
    const dispatch= useDispatch();
    const onToggle= useCallback((todo)=> {
        dispatch(toggleTodoAction(todo))
    }, []);
    const onDelete= useCallback((todo)=> {
        dispatch(deleteTodoAction(todo))
    }, []);
    return(
        <Todo todos={todos} onToggle={onToggle} onDelete={onDelete}/>
    )
}

//avec hooks
/*export default function Todo(){
    const todos= useSelector(todosSelectors);
    const dispatch= useDispatch();
    const onToggle= useCallback((todo)=> {
        dispatch(toggleTodoAction(todo))
    }, []);
    return(
        <ul>
            {todos.map(todo=> <TodoItem todo={todo} onToggle={onToggle} key={todo.id} />)}
        </ul>
        
    )
}*/

//avec connect
/*export const TodoStore= connect(
    (state)=> ({
        todos: todosSelectors(state)
    }),
    //utilise dispatch
    (dispatch)=> ({
        //renvoie une fonction qui utilise dispatch
        //onToggle: todo=> dispatch({
        //    type: UPDATE_TODO_ACTION,
        //    payload: {...todo, completed: !todo.completed}
        //})
        //grâce aux selector et action
        onToggle: todo=> dispatch(toggleTodoAction(todo))
    })
)(Todo);*/