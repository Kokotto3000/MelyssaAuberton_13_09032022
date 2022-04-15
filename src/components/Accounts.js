import Account from './AccountItem';
import { useSelector } from 'react-redux';

function Accounts() {

    const accounts= useSelector(state=> state.accounts.userAccounts);

    return (
        <div>
            <h2 className="sr-only">Accounts</h2>

            {accounts.map((account)=> (
                <Account key={ account.id } type={ account.type } accountNumber={ account.accountNumber} amount={ account.amount } description={ account.description } />
            ))}
        </div>
        
    )
}

export default Accounts;