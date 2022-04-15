import "../styles/TransactionsHeader.scss";

function TransactionsHeader({title, amount, description}){
    return (
        <header className="transactions_header">
            <p>{title}</p>
            <h1>${amount.toLocaleString('en')}</h1>
            <p>{description}</p>
        </header>
    )
}

export default TransactionsHeader;