import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Transactions from './pages/Transactions';
import Loader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalDataUser } from './features/user/userSlice';
import { useEffect } from 'react';
import { getUserAccounts } from './features/accounts/accountsSlice';

function App() {

    const dispatch= useDispatch();

    useEffect(()=> {
        const token= sessionStorage.getItem("jwt")
        const id= sessionStorage.getItem("id");
        if(token && id) {
            dispatch(getLocalDataUser());
            dispatch(getUserAccounts({ "token": token, "userId": id}));
        }
        return;
    },[dispatch]);

    const user= useSelector(state=> state.user);

    return (
        <BrowserRouter>
            <Nav />

            { user.loading && <Loader /> }
            
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={!user.isLogin  ? <Login /> : <Navigate to="/profile" />} />
                <Route exact path="/profile" element={user.isLogin ? <Profile /> : <Navigate to="/login" />} />
                <Route exact path="/transactions" element={user.isLogin ? <Transactions /> : <Navigate to="/login" />} />
                <Route path="*" element={<Navigate to="/" />} />
                
            </Routes>

            <Footer />
                
        </BrowserRouter>
    );
}

export default App;
