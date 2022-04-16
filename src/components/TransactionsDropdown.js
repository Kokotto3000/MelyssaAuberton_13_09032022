import { useState } from "react";
import "../styles/TransactionsDropdown.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { updateTransactionCategory, updateTransactionNotes } from "../features/transactions/transactionsSlice";

const pen= <FontAwesomeIcon icon={faPen} />;
const check= <FontAwesomeIcon icon={faCircleCheck} />;

function TransactionsDropdown({type, category, notes, id}){

    const token= useSelector(state=> state.user.token);
    const transactions= useSelector(state=> state.transactions);
    const transaction= transactions.accountTransactions.find(transaction=> transaction.id === id);
    console.log(transaction)

    const dispatch= useDispatch();
    
    const [isCategoryCollapse, setCategoryCollapse]= useState(true);
    const [isNotesCollapse, setNotesCollapse]= useState(true);
    //const [categoryDisplay, setCategoryDisplay]= useState(category);
    //const [notesDisplay, setNotesDisplay]= useState(notes);

    const { register, handleSubmit } = useForm();
    const onSubmitCategory = data => {
        dispatch(updateTransactionCategory({"token": token, "transactionId": id, "category": data.category}));
        //setCategoryDisplay(data.category);
        setCategoryCollapse(true);
    }
    
    const onSubmitNotes = data => {
        dispatch(updateTransactionNotes({"token": token, "transactionId": id, "notes": data.notes}));
        //setNotesDisplay(data.notes);
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
                            <p>{transaction.category}</p>
                            <button className="transactions-dropdown_button category edit-button" onClick={()=> setCategoryCollapse(isCategoryCollapse? false : true)}>{ pen }</button>
                        </div>
                    :
                        <form onSubmit={handleSubmit(onSubmitCategory)} className="transactions-dropdown--category-collapse">
                            <select name="category" id="category-select" {...register("category", { required: true })}>
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
                        <p>{ transaction.notes }</p>
                        <button className="transactions-dropdown_button category edit-button" onClick={()=> setNotesCollapse(isNotesCollapse? false : true)}>{ pen }</button>
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