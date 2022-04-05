export const todosSelectors= ({todos})=> todos;

export const filterTodosSelector= ({todos, filter})=> {
    if(filter === null) return todos;
    return todos.filter(todo=> todo.completed === filter);
}