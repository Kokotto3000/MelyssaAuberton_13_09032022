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
import SignIn from './pages/SignIn';
import User from './pages/User';
import Transactions from './pages/Transactions';

function App() {

    return (
        <BrowserRouter>
            <Nav />
            
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/sign-in" element={<SignIn />} />
                <Route exact path="/user" element={<User  />} />
                <Route path="/profile" element={<Navigate to="/user" />} />
                <Route exact path="/transactions" element={<Transactions />} />
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>

            <Footer />
                
        </BrowserRouter>
    );
}

export default App;
