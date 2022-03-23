import { useState } from "react";
import "../styles/TransactionsItem.scss";
import TransactionsDropdown from "./TransactionsDropdown";

function TransactionsItem({date, amount, description, balance, type, category, notes}){

    const [isCollapse, setCollapse]= useState(true);

    function handleCollapse(){
        setCollapse(isCollapse? false : true);
    }

    const newDate= new Date(date).toString();
    //console.log(newDate)

    return(

        <div className="transactions-item">

            <div className="transactions-item_details">
                {isCollapse? (
                    <button className="transactions-item_button" onClick={handleCollapse}>V</button>
                ) : (
                    <button className="transactions-item_button" onClick={handleCollapse}>A</button>
                )}

                <p>{newDate}</p>
                <p>{description}</p>
                <p>{amount}</p>
                <p>{balance}</p>
            </div>

            {!isCollapse? (
                <TransactionsDropdown 
                    type={type} 
                    category={category}
                    notes={notes}
                />
            ) : (
                ""
            )}

            
            
        </div>
    )
}

export default TransactionsItem;