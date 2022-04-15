import { useState } from "react";
import "../styles/TransactionsItem.scss";
import TransactionsDropdown from "./TransactionsDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function TransactionsItem({date, id, amount, correspondingUserId, balance, type, category, notes}){
    const chevronDownIcon= <FontAwesomeIcon icon={faChevronDown} />;
    const chevronUpIcon= <FontAwesomeIcon icon={faChevronUp} />;

    const [isCollapse, setCollapse]= useState(true);

    function handleCollapse(){
        setCollapse(isCollapse? false : true);
    }

    let options = {year: "numeric", month: "long", day: "numeric"};
    const newDate= new Date(date).toLocaleDateString('en-EN', options);
    console.log(newDate)

    return(

        <div className="transactions-item">

            <div className="transactions-item_details">
                {isCollapse? (
                    <button className="transactions-item_button edit-button" onClick={handleCollapse}>
                        {chevronDownIcon}
                    </button>
                ) : (
                    <button className="transactions-item_button edit-button" onClick={handleCollapse}>
                        {chevronUpIcon}
                    </button>
                )}

                <div className="transactions-item_details-content">
                    <div className="transactions-item_details-content-row">
                        <p className="transactions-item_details-content-cell">{newDate}</p>
                        <p className="transactions-item_details-content-cell">{correspondingUserId}</p>
                        <p className="transactions-item_details-content-cell">{amount}</p>
                        <p className="transactions-item_details-content-cell">{balance}</p>
                    </div>

                    {!isCollapse && 
                        <TransactionsDropdown 
                            type={type} 
                            category={category}
                            notes={notes}
                            id={id}
                        />
                    }
                    
                </div>

                
            </div>

            

            
            
        </div>
    )
}

export default TransactionsItem;