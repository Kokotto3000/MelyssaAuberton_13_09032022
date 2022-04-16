import {useLocation, Navigate} from 'react-router-dom';
import TransactionsHeader from '../components/TransactionsHeader';
//import transactions from '../datas/transactions';
import TransactionsItem from '../components/TransactionsItem';
import "../styles/Transactions.scss";
import { useSelector } from 'react-redux';


function Transactions(){
    document.title= "Transactions | ARGENT BANK";

    const location= useLocation();
    const transactions= useSelector(state=> state.transactions.accountTransactions);

    let balance= location.state.amount;

    function decrementBalance(amount){
        balance= balance - amount;
        return balance;
    }

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
                    {transactions.map((transaction, index)=> (
                        <TransactionsItem 
                            key={ index } 
                            id={ transaction.id }
                            date={ transaction.timestamp } 
                            amount={ transaction.amount } 
                            correspondingUserId={ transaction.correspondingUserId } 
                            balance={ balance } 
                            type={ transaction.type }
                            category={ transaction.category }
                            notes={ transaction.notes }
                            previousBalance= { decrementBalance(transaction.amount) }
                        />
                    ))}
                </div>
                
            </div>
        </main>
    )
}

export default Transactions;