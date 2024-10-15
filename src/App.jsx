import './App.css';
import DoubleArray from "./Components/DoubleArray/DoubleArray";
import ProductList from "./Components/ProductList/ProductList";

function App() {
  const products = [ 
    {sku: 'A123', name: 'Laptop', price:'999'},
    {sku: 'B456', name: 'Phone', price:'699'},
    {sku: 'C789', name: 'Tablet', price:'399'},
  ];
  const nums = [2,4,6,8,10];

  return (
    <div>
       <ProductList products= {products}/>
       <DoubleArray numbers={nums}/>
      
           
    </div>
  );
}

export default App;
