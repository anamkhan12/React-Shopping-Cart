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
import {CartContext} from './CartContext';
import { useEffect ,useState } from 'react';
// import { getCart, storeCart } from './helpers';

const App = () =>{
    const [cart ,setCart] = useState({});
    //fetch cart from local storage 
    useEffect(() =>{
       const cart = window.localStorage.getItem('cart');
       setCart(JSON.parse(cart));
    },[]);

    useEffect(() =>{
        window.localStorage.setItem('cart',JSON.stringify(cart));
    },[cart]);
    // Fetch cart from local storage
    // useEffect(() => {
    //     getCart().then(cart => {
    //     setCart(JSON.parse(cart));
    //     });
    // }, []);
    
    // useEffect(() => {
    //     storeCart(JSON.stringify(cart));
    // }, [cart]);
    return (
        <>
            <Router>
                <CartContext.Provider value={{ cart, setCart }}>
                <Navigation />
            
                <Routes>
                    <Route path="/" element={<Home/>} exact></Route>
                    {/* <Route path="/about" element={<About/>}></Route> */}
                    <Route path="/products" exact element={<Products/>}></Route>
                    <Route path="/products/:_id" exact element={<SingleProduct/>}></Route>
                    <Route path="/carts" element={<Carts/>}></Route>

                    
                </Routes>
                </CartContext.Provider>
            </Router>
            
        </>

    )
   
}

export default App;