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
import { useEffect } from 'react';
import { getUserAccounts } from './features/accounts/accountsSlice';

function App() {

    const dispatch= useDispatch();

    const user= useSelector(state=> state.user);
    /*const accounts= useSelector(state=> state.accounts);
    const transactions= useSelector(state=> state.transactions);*/
    const utils= useSelector(state=> state.utils);

    useEffect(()=> {
        if(user.isLogin) {
            dispatch(getUserAccounts({ "token": user.token, "userId": user.id}));
        }
        return;
    },[dispatch, user.token, user.id, user.isLogin]);

    return (
        <BrowserRouter>
            <Nav />

            { utils.loading && <Loader /> }
            
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
