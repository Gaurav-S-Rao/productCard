import React from 'react';
import ProductCard from './Product_Card/ProductCard'
function App() {
  return (
    <div>
    <ProductCard photos={["1.jpeg","2.jpeg"]} price={`₹1200`} productName="Step Cake" description="This is a Wedding kinda cake :)" buttonText="Add To Cart"/>
    </div>
  );
}

export default App;
