import { useState } from "react";
import "../styles/TransactionsDropdown.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const pen = <FontAwesomeIcon icon={faPen} />

function TransactionsDropdown({type, category, notes}){

    console.log(category)
    
    const [isCategoryCollapse, setCategoryCollapse]= useState(true);
    const [isNotesCollapse, setNotesCollapse]= useState(true);


    function handleCollapseCategory(){
        setCategoryCollapse(isCategoryCollapse? false : true);
        console.log(isCategoryCollapse);
    }

    function handleCollapseNotes(){
        setNotesCollapse(isNotesCollapse? false : true);
        console.log(isNotesCollapse);
    }

    return(
        <div className="transactions-dropdown">
            <div className="transactions-dropdown--type">
                <p>Transaction type:</p>
                <p>{ type }</p>
            </div>

            <div className="transactions-dropdown--category">
                <p>Category:</p>
                <ul className="transactions-dropdown_category-list">
                    {category.map((element, index)=> (
                    console.log(element),
                     <li key={index}>{ element }</li>
                ))}
                </ul>
                <button className="transactions-dropdown_button category" onClick={handleCollapseCategory}>{ pen }</button>
            </div>

            <div className="transactions-dropdown--notes">
                <p>Notes:</p>
                <p>{ notes }</p>
                <button className="transactions-dropdown_button category" onClick={handleCollapseNotes}>{ pen }</button>
            </div>
            
        </div>
    )
}

export default TransactionsDropdown;