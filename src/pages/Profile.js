import ProfileHeader from "../components/ProfileHeader";
import Accounts from "../components/Accounts";

//dans la même logique, créer un component accounts et transformer account en accountsitem, on fera l'appel à "l'api" dans ce composant
//créer une slice transactions pour tout ce système mais garder props entre accounts et item ?


function Profile() {
    document.title= "Profile | ARGENT BANK";

    return (

        <main className="main bg-dark">
            <ProfileHeader />
            <Accounts />
        </main>

    )
}

export default Profile;