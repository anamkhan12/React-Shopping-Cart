 /*arrow function const App = () =>{
    same
 } */


import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Navigation from './components/Navigation';
import Products from './pages/Products';
import Carts from './pages/Carts';
import SingleProduct from './pages/SingleProduct';

const App = () =>{
    return (
        <>
            <Router>
                <Navigation />
            
                <Routes>
                    <Route path="/" element={<Home/>} exact></Route>
                    {/* <Route path="/about" element={<About/>}></Route> */}
                    <Route path="/products" exact element={<Products/>}></Route>
                    <Route path="/products/:_id" exact element={<SingleProduct/>}></Route>
                    <Route path="/carts" element={<Carts/>}></Route>

                    
                </Routes>

            </Router>
            
        </>

    )
   
}

export default App;