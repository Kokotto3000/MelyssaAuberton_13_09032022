import Account from './AccountItem';
import accounts from '../datas/accounts.json';
import accountsNew from '../datas/accountsNew.json';
import { useSelector } from 'react-redux';

function Accounts() {
    console.log(accountsNew);

    const user= useSelector(state=> state.user);

    //on pourra faire un account selector avec filtre après...

    const userAccounts= accountsNew.filter(account=> account.userId === user.id)
    console.log(userAccounts);

    return (
        <div>
            <h2 className="sr-only">Accounts</h2>

            {userAccounts.map((account)=> (
                <Account key={ account.id } type={ account.type } accountId={ account.accountId} amount={ account.amount } description={ account.description } />
            ))}
        </div>
        
    )
}

export default Accounts;