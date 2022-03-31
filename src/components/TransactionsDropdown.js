import { useState } from "react";
import "../styles/TransactionsDropdown.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

const pen= <FontAwesomeIcon icon={faPen} />;
const check= <FontAwesomeIcon icon={faCircleCheck} />;

function TransactionsDropdown({type, category, notes}){
    
    const [isCategoryCollapse, setCategoryCollapse]= useState(true);
    const [isNotesCollapse, setNotesCollapse]= useState(true);
    const [categoryDisplay, setCategoryDisplay]= useState(category);
    const [notesDisplay, setNotesDisplay]= useState(notes);

    const { register, handleSubmit } = useForm();
    const onSubmitCategory = data => {
        console.log(data);
        setCategoryDisplay(data.categories);
        handleCollapseCategory();
    }
    
    const onSubmitNotes = data => {
        console.log(data);
        setNotesDisplay(data.notes);
        handleCollapseNotes();
    }

    function handleCollapseCategory(){
        setCategoryCollapse(isCategoryCollapse? false : true);
    }

    function handleCollapseNotes(){
        setNotesCollapse(isNotesCollapse? false : true);
    }

    return(
        <div className="transactions-dropdown">
            <div className="transactions-dropdown--type">
                <p>Transaction type:</p>
                <p>{ type }</p>
            </div>

            <div className="transactions-dropdown--category">
                <label htmlFor="category-select">Category:</label>

                    { isCategoryCollapse ? 
                        <div className="transactions-dropdown--category-collapse">
                            <p>{categoryDisplay}</p>
                            <button className="transactions-dropdown_button category edit-button" onClick={handleCollapseCategory}>{ pen }</button>
                        </div>
                    :
                        <form onSubmit={handleSubmit(onSubmitCategory)} className="transactions-dropdown--category-collapse">
                            <select name="categories" id="category-select" {...register("categories", { required: true })}>
                                <option value="">--Please choose a category--</option>
                                <option value="Food">Food</option>
                                <option value="Clothes">Clothes</option>
                                <option value="Car">Car</option>
                                <option value="Heath">Health</option>
                                <option value="Hobbies">Hobbies</option>
                                <option value="Other">Other</option>
                            </select>
                            <button type="submit">{check}</button>
                        </form>
                        
                    }

            </div>

            <div className="transactions-dropdown--notes">
                <label htmlFor="notes">Notes:</label>

                {isNotesCollapse ? 
                    <div className="transactions-dropdown--notes-collapse">
                        <p>{ notesDisplay }</p>
                        <button className="transactions-dropdown_button category edit-button" onClick={handleCollapseNotes}>{ pen }</button>
                    </div>
                :
                    <form onSubmit={handleSubmit(onSubmitNotes)} className="transactions-dropdown--notes-collapse">
                        <textarea id="notes" name="notes" rows="5" cols="33" {...register("notes")}></textarea>
                        <button type="submit">{check}</button>
                    </form>

                }
                
            </div>
            
        </div>
    )
}

export default TransactionsDropdown;