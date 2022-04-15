import { useNavigate } from 'react-router-dom';
import '../styles/Account.scss';

function Account({ type, accountNumber, amount, description }) {

    const navigate= useNavigate();

    const title= `Argent Bank ${ type } (${ accountNumber })`;

    function handleClick(){
        navigate("/transactions", { state: { title: title, amount: amount, description: description } });
    }

    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{ title }</h3>
                <p className="account-amount">${ amount.toLocaleString('en') }</p>
                <p className="account-amount-description">{ description }</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button" onClick={handleClick}>View transactions</button>
            </div>
        </section>
    )
}

export default Account;