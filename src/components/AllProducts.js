import Product from '../components/Product';
import {useState , useEffect} from 'react';



const AllProducts = () => {

const [products, setProducts] = useState([]);   //destructing assignment hooks
useEffect(() => {
    fetch('/https://ecom-rest-apis.herokuapp.com/api/products')
    .then(response => response.json())
    .then(products => {
        console.log(products);
    });
}, []);




  return (
    <div className="container pb-24 mx-auto ">
        <h1 className="text-lg font-bold ml-8 ">Products</h1>
        <div className="grid grid-cols-5 ml-8 mr-8 gap-24">
           <Product/>
          

        </div>
    </div>
  )
}

export default AllProducts
