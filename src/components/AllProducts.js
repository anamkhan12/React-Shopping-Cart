import Product from '../components/Product';
import {useState , useEffect, useContext} from 'react';
import { CartContext } from '../CartContext';



const AllProducts = () => {
  // const {name} = useContext(CartContext);

const [products, setProducts] = useState([]);   //destructing assignment hooks
useEffect(() => {
    fetch('https://star-spark-pasta.glitch.me/api/products')
    .then(response => response.json())
    .then(products => {
      console.log(products);
        setProducts(products);
    });
}, []);




  return (
    <div className="container pb-24 mx-auto ">
        <h1 className="text-lg font-bold ml-8 ">Products  </h1>
        <div className="grid grid-cols-5 ml-8 mr-8 gap-24">
          {
            products.map(product =>  <Product key={product._id} product={product}/>)
          }
          
          

        </div>
    </div>
  )
}

export default AllProducts
