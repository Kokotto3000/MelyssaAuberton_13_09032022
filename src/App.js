import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';

import { useFetch } from "./utils/useFetch";

function App() {

    const { isLoading, data, error }= useFetch("http://localhost:3001/api/v1/user/login");
    console.log(data);

    return (
        <BrowserRouter>
            <Nav />
            
            
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/sign-in" element={<SignIn />} />
                <Route exact path="/user" element={<User />} />
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>            
            

            <Footer />
                
        </BrowserRouter>
    );
}

export default App;
