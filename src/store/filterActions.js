import { UPDATE_FILTER } from "./FilterReducer";

export const setFilterAction= (value)=> ({
    type: UPDATE_FILTER,
    payload: value
})