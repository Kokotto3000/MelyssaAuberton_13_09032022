import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Nav />
            
            <main>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/*<Route path="*" element={<NotFound />} />*/}
                </Routes>            
            </main>  

            <Footer />
                
        </BrowserRouter>
    );
}

export default App;
