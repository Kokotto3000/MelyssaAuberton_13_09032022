function TransactionsHeader(props){
    return (
        <div>
            <p>{props.title}</p>
            <h1>{props.amount}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default TransactionsHeader;