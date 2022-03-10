import Header from "../components/Header";
import Account from "../components/Account";

import accounts from '../datas/accounts';

function User() {

    return (
        <main className="main bg-dark">
            <Header name={ accounts[0].name } />

            <h2 className="sr-only">Accounts</h2>

            {accounts[0].account.map((element, index)=> (
                <Account key={ index } title={ element.title } amount={ element.amount } description={ element.description } description={ element.description } />
            ))}
        </main>
    )
}

export default User;