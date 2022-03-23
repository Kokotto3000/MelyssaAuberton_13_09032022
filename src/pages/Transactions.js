import {useLocation} from 'react-router-dom';
import TransactionsHeader from '../components/TransactionsHeader';
import transactions from '../datas/transactions';
import TransactionsItem from '../components/TransactionsItem';
import "../styles/Transactions.scss"

function Transactions(props){

    const location= useLocation();
    //console.log(location.state);

    return(

        <div className="transactions">
            <TransactionsHeader title={ location.state.title } amount={ location.state.amount } description={ location.state.description } />

            <div className="transactions_table">

                <div className="transactions_table-header">
                    <p>DATE</p>
                    <p>TRANSACTION</p>
                    <p>AMOUNT</p>
                    <p>BALANCE</p>
                </div>

                <div className="transactions_table-body">
                    {transactions.map((element)=> (
                        <TransactionsItem 
                            key={ element.id } 
                            date={ element.date } 
                            amount={ element.amount } 
                            description={ element.description } 
                            balance={ element.balance } 
                            type={ element.type }
                            category={ element.category }
                            notes={ element.notes }
                        />
                    ))}
                </div>

                
                
            </div>

            
        </div>
        
    )
}

export default Transactions;