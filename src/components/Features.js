import '../styles/Features.scss';
/*import chat from '../assets/img/icon-chat.png';
import money from '../assets/img/icon-money.png';
import security from '../assets/img/icon-security.png';*/
import { items } from '../datas/items';
import Item from './Item';

function Features() {

    return(
        <section className="features">
            <h2 className="sr-only">Features</h2>

            {items.map((element, index)=> (
                <Item key={ index } image={ element.image } alt={ element.alt } title={ element.title } description={ element.description } />
            ))}

        </section>
    )

    
}

export default Features;