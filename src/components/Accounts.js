import Account from './AccountItem';
import accounts from '../datas/accounts.json';

function Accounts() {
    return (
        <div>
            <h2 className="sr-only">Accounts</h2>

            {accounts.map((element, index)=> (
                <Account key={ index } title={ element.title } amount={ element.amount } description={ element.description } />
            ))}
        </div>
        
    )
}

export default Accounts;