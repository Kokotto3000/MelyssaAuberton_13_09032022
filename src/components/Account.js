import { useNavigate } from 'react-router-dom';
import '../styles/Account.scss';

function Account(props) {

    const navigate= useNavigate();

    function handleClick(){
        console.log(props)
        navigate("/transactions", { state: { title: props.title, amount: props.amount, description: props.description } });
    }

    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{ props.title }</h3>
                <p className="account-amount">{ props.amount }</p>
                <p className="account-amount-description">{ props.description }</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button" onClick={handleClick}>View transactions</button>
            </div>
        </section>
    )
}

export default Account;