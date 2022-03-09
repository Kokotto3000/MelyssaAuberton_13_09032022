import '../styles/Item.scss';

function Item(props) {

    return(
        <div className="feature-item">
            <img src={ props.image } alt={ props.alt } className="feature-icon" />
            <h3 className="feature-item-title">{ props.title }</h3>
            <p>
                { props.description }
            </p>
        </div>
    )
}

export default Item;