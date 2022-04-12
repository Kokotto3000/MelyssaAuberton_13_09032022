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
//juste hooks
//import Todo from './pages/Todo';

//subscribe permet de voir les changements dès qu'il y en a un
//store.subscribe(()=> console.log(store.getState()));

//dispatch permet de faire l'action
//store.dispatch({type: ADD_TODO_ACTION, payload: {
//    title: 'Demo'
//}});

function App() {

    return (
            <BrowserRouter>
                <Nav />
                
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/transactions" element={<Transactions />} />
                    <Route path="/user" element={<User />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    
                </Routes>

                <Footer />
                    
            </BrowserRouter>
    );
}

export default App;
