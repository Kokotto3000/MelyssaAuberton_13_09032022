import ProfileHeader from "../components/ProfileHeader";
import Account from "../components/Account";

import accounts from '../datas/accounts';

//dans la même logique, créer un component accounts et transformer account en accountsitem, on fera l'appel à "l'api" dans ce composant
//créer une slice transactions pour tout ce système mais garder props entre accounts et item ?


function Profile() {
    document.title= "Profile | ARGENT BANK";

    return (

        <main className="main bg-dark">
            <ProfileHeader />

            <h2 className="sr-only">Accounts</h2>

            {accounts.map((element, index)=> (
                <Account key={ index } title={ element.title } amount={ element.amount } description={ element.description } />
            ))}
        </main>

    )
}

export default Profile;