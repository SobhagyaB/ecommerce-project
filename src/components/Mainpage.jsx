// import React,{useEffect, useState} from 'react'
// import {Link} from "react-router-dom"

// export default function Mainpage(){

//     let[product,setProduct] = useState([])
//     let[search,setSearch]=useState('')
//     let[count,setCount] = useState(0)

//     function adding(){
//         setCount(++count)

//     }
//     function tozero(){
//         setCount(0)

//     }

//     useEffect(()=>{
//         fetch("https://fakestoreapi.com/products").then(response=>response.json()).then(result=>{

//             setProduct(result)
//         });

//     })
//     function searching(e){
//         setSearch(e.target.value)

//     }
//     // console.log(product);
    
//     return(
//         <>
//         <nav id='nav-bar'>
//             <h1 id='shopify'>Shopify</h1>
//             <ul>
//                 <Link to="/signinpage"><button className='navbtn'><li><b>Sign up</b></li></button></Link>
//                 <Link to="loginpage"><button className='navbtn'><li><b>Log in</b></li></button></Link>
//                 <button className='navbtn'><li><i className="fa-solid fa-cart-shopping"></i><b> Add to Cart : <span style={{backgroundColor:'green',fontSize:'15px'}}>{count}</span></b></li></button>
//                 <button className='navbtn' onClick={tozero}><li><i className="fa-solid fa-trash"></i></li></button>
//             </ul>
//         </nav> <br /><br /><br />
//         <div id='topimg'>
//             <h1 id='shop' style={{fontSize:'25px',color:'white'}}>Shop millions of top-quality products at unbeatable prices! From fashion to electronics,<br /> discover the latest trends and unique finds.</h1>
//             <h4 id='fast' style={{fontSize:'15px',color:'white'}}> Fast shipping, exclusive deals—your ultimate shopping destination!</h4>

        
//             <input type="text" placeholder='Search any products' onChange={searching} id='search-input' />    
//         </div> <br /><br /> <br />
//             <div id='productbox'>
//             {
//             product.filter(value=>value.title.toLowerCase().includes(search)).map((data,index)=>
//                 <div key={index} id='imagecart' >
//                     <img id='productimages'  src={data.image} alt={data.title} />
                    
//                     <div id='productinfo'>
//                         <p>{data.title}</p>
//                         <p>Price:  ${data.price}</p> <br />

//                         <button id='btn1' className='shopbtns' onClick={adding}>Add to Cart</button>
//                         <button id='btn2' className='shopbtns'> Buy Now</button>

//                     </div>
//                 </div>
                
//             )}
//             </div> <br /><br />

//         </>
//     )
// }



import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Mainpage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]); // Simple cart state
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(result => setProducts(result));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
  };

  const resetCart = () => {
    setCart([]); // Clear cart
  };

  // Navigate to CartPage and pass the cart using state
  const goToCartPage = () => {
    navigate('/cartpage', { state: { cart } });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <>
      <nav id='nav-bar'>
        <h1 id='shopify'>Shopify</h1>
        <ul>
          <Link to="/signinpage"><button className='navbtn'><li><b>Sign up</b></li></button></Link>
          <Link to="/loginpage"><button className='navbtn'><li><b>Log in</b></li></button></Link>
          <button className='navbtn' onClick={goToCartPage}>
            <li><i className="fa-solid fa-cart-shopping"></i><b> Cart: {cart.length}</b></li>
          </button>
          <button className='navbtn' onClick={resetCart}><li><i className="fa-solid fa-trash"></i></li></button>
        </ul>
      </nav>
      <br /><br /><br />
      <div id='topimg'>
        <h1 id='shop' style={{ fontSize: '25px', color: 'white' }}>Shop millions of top-quality products at unbeatable prices!</h1>
        <h4 id='fast' style={{ fontSize: '15px', color: 'white' }}>Fast shipping, exclusive deals—your ultimate shopping destination!</h4>
        <input type="text" placeholder='Search any products' onChange={handleSearch} id='search-input' />
      </div>
      <br /><br /><br />
      <div id='productbox'>
        {products
          .filter(product => product.title.toLowerCase().includes(searchTerm)) // Filter products by search term
          .map((product, index) => (
            <div key={index} id='imagecart'>
              <img id='productimages' src={product.image} alt={product.title} />
              <div id='productinfo'>
                <p>{product.title}</p>
                <p>Price: ${product.price}</p>
                <br />
                <button id='btn1' className='shopbtns' onClick={() => addToCart(product)}>Add to Cart</button>
                <button id='btn2' className='shopbtns'>Buy Now</button>
              </div>
            </div>
        ))}
      </div>
      <br /><br />
    </>
  );
}

