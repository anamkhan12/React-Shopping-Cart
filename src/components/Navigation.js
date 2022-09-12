import {Link}  from 'react-router-dom';
const Navigation = () => {
  return (
  
    <>
       <nav className="container mx-auto flex item-center">
    
            <Link to="/">
                <img style={{ height: 45 }} src="/images/logo.png" alt="logo"></img>
            </Link>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li>
                    <Link to="/carts">
                    
                    <div>
                        <span>10</span>
                        <img src="/images/cart.png" alt="logo"></img>
                    </div>

                    </Link>
                </li>
           
            </ul>
           
       </nav>
           
    </>

  )
}

export default Navigation
