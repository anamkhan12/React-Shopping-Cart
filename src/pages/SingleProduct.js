import React from 'react';
import {useState , useEffect} from 'react';
import {useParams,useNavigate } from 'react-router-dom';

const SingleProduct = () => {
    const [singleproduct,setSingleProduct] = useState([]);
    const params = useParams();
    let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  };
  
    useEffect(() =>{
        fetch(`https://star-spark-pasta.glitch.me/api/products/${params._id}`)
        .then(res =>res.json())
        .then(singleproduct => {
            setSingleProduct(singleproduct);
        })
    } ,[params._id]);


  return (

    <div className="container mx-auto mt-12">
    <button className="mb-12 font-bold" onClick={handleClick}>Back</button>
    <div className="flex">
        <img src={singleproduct.image} alt="pizza" />
        <div className="ml-16">
            <h1 className="text-xl font-bold">{singleproduct.name}</h1>
            <div className="text-md">{singleproduct.size}</div>
            <div className="font-bold mt-2">₹ {singleproduct.price}</div>
            <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
        </div>
    </div>
</div>
  )
}

export default SingleProduct
