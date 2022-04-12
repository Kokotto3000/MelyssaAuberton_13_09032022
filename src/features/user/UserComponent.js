import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginUser } from './userSlice';
import { useSelector } from 'react-redux';

function UserComponent() {
    const {token} = useSelector(state=> state.user.entities.body);
    const dispatch= useDispatch();

    console.log(token)

    

    useEffect(()=> {
        const data= {
            email: "melyssa.auberton@gmail.com",
            password: "Kokotto3000"
        }

        dispatch(loginUser(data))
    }, [dispatch])

    return (
        <div>
            {token}
        </div>
    );
}

export default UserComponent;