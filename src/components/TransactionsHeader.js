import "../styles/TransactionsHeader.scss";

function TransactionsHeader(props){
    return (
        <header className="transactions_header">
            <p>{props.title}</p>
            <h1>{props.amount}</h1>
            <p>{props.description}</p>
        </header>
    )
}

export default TransactionsHeader;