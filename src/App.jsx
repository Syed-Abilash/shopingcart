import React ,{ useState } from 'react';
import Head from './Component/Head';
import Nav from './Component/Nav';
import Foot from './Component/Foot';
import Rendering from './Component/Rendering';

const App = () => {
  const[status, setStatus] = useState(true)
  const [cartCount, setCartCount] = useState(0)
  let data = [{ id: 1,name: "Fancy Product", price: "$80.00" },
  { id: 2,name: "Special Item", price: "$30.00" },
  { id: 3,name: "Sale Item", price: "$60.00" },
  { id: 4, name: "Popular Item", price: "$90.00" },
  { id: 5,name: "Sale Item", price: "$70.00" },
    { id: 6,name: "Fancy Product", price: "$45.00" },
    { id: 7,name: "Special Item", price: "$125.00" },
  { id: 8,name: "Popular Item", price: "$90.00" },
  ];

  const[products, setProducts] = useState(data)
  return (
    <div>
      
      <Nav  cartCount={cartCount} />
      <Head />
      {status ? <Rendering setCartCount={ setCartCount} cartCount={cartCount} setProducts={setProducts} products={products} /> : ''}
      
      <Foot />
    </div>
  );
};

export default App;