import { connect } from "react-redux"
import { setFilterAction } from "../store/filterActions"
import { filterSelectors } from "../store/filterSelectors"

export function TodoFilter({value, onChange}){
    return(
        <div>
            <button disabled={value === null} onClick={()=> onChange(null)}>aucun filtre</button>
            <button disabled={value === true} onClick={()=> onChange(true)}>complétées</button>
            <button disabled={value === false} onClick={()=> onChange(false)}>à faire</button>
        </div>
    )
};

export const TodoFilterStore= connect(
    state=> ({
        value: filterSelectors(state)
    }),
    dispatch=> ({
        onChange: (value)=> dispatch(setFilterAction(value))
    })
)(TodoFilter);