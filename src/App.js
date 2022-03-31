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

function App() {

    return (
        <BrowserRouter>
            <Nav />
            
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/transactions" element={<Transactions />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            <Footer />
                
        </BrowserRouter>
    );
}

export default App;
