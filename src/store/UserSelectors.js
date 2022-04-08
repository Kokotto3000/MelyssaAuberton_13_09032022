//pour la mémoisation
import { createSelector } from 'reselect';

export const userSelectors= ({user})=> user;

/*export const loginUserSelectors= ({user})=> {
    user.email= "kokotto@gmail.com";
    user.password= "123";
    user.isRemember= true;
};*/

//export const filterTodosSelector= ({todos, filter})=> {
//    if(filter === null) return todos;
//    return todos.filter(todo=> todo.completed === filter);
//}