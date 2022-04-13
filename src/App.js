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
import User  from './pages/User';
import { useSelector } from 'react-redux';

function App() {

    const user= useSelector(state=> state.user);
    console.log(user.isLogin);

    return (
            <BrowserRouter>
                <Nav />
                
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={!user.isLogin ? <Login /> : <Navigate to="/profile" />} />
                    <Route exact path="/profile" element={user.isLogin ? <Profile /> : <Navigate to="/login" />} />
                    <Route exact path="/transactions" element={<Transactions />} />
                    <Route path="/user" element={<User />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    
                </Routes>

                <Footer />
                    
            </BrowserRouter>
    );
}

export default App;
