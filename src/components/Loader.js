import '../styles/Loader.scss';
import { useSelector } from 'react-redux';

function Loader(){
    //const user= useSelector(state=> state.user);
    //console.log(user)
    {/*<div className="lds-hourglass"></div>*/}

    return(
        

        <div className="cs-loader">
            <div className="cs-loader-inner">
                <label>●</label>
                <label>●</label>
                <label>●</label>
                <label>●</label>
                <label>●</label>
                <label>●</label>
            </div>
        </div>
    )
}

export default Loader;