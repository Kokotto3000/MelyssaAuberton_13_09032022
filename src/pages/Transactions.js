import {useLocation, Navigate} from 'react-router-dom';
import TransactionsHeader from '../components/TransactionsHeader';
import transactions from '../datas/transactions';
import TransactionsItem from '../components/TransactionsItem';
import "../styles/Transactions.scss";

//useEffect

function Transactions(){
    document.title= "Transactions | ARGENT BANK";

    const location= useLocation();
    console.log(location.state);

    return(

        <main className="transactions main bg-dark">
            <TransactionsHeader title={ location.state.title } amount={ location.state.amount } description={ location.state.description } />

            <div className="transactions_table">

                <div className="transactions_table-header">
                    <h2 className='transactions_table-header-title'>DATE</h2>
                    <h2 className='transactions_table-header-title'>TRANSACTION</h2>
                    <h2 className='transactions_table-header-title'>AMOUNT</h2>
                    <h2 className='transactions_table-header-title'>BALANCE</h2>
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

            
        </main>
        
    )
}

export default Transactions;