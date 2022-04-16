import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAccountTransactions } from '../features/transactions/transactionsSlice';
import '../styles/Account.scss';

function Account({ accountId, type, accountNumber, amount, description }) {

    const navigate= useNavigate();
    const dispatch= useDispatch();

    const title= `Argent Bank ${ type } (${ accountNumber })`;

    const token= useSelector(state=> state.user.token);

    async function handleClick(){
        await dispatch(getAccountTransactions({"token": token, "accountId": accountId }));
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