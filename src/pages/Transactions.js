import {useLocation} from 'react-router-dom';

function Transactions(props){

    const location= useLocation();
    console.log(location.state);

    return(
        <div>Transactions :  { location.state.title }</div>
    )
}

export default Transactions;