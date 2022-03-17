import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


// Part 2
/*-------------- ------------------------------------------------------*\
Use useState returns.. Chang or setState using eventHandler function onClick..
\*---------------------------------------------------------------------------*/

function App() {

  return (
    <div className="App">

      <Counter></Counter>

    </div>
  );
}
function Counter() {

  //Simple counter component.... 
  /*
   return (
     <div>
       <h1>Count: 0</h1>
       <button>Increase</button>
     </div>
   )
   */

  // component using UseState returns.... 

  const [count, setCount] = useState(87)
  console.log(count, setCount)
  const handleIncrease = () => {
    // console.log('increase clicked');
    const newCount = count + 1;
    setCount(newCount)
  }
  /*
   const handleDecrease = () => {
     const newCount = count - 1;
     setCount(newCount)
   }
   */
  // single line function......
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}


export default App;



// Part 1
/*-------------- --------------------------------*\
Concepts of dynamic conmponent and styling recap
\*--------------------------------------------------*/

/*
function App() {

const products = [
  {name: 'Laptop', price: '50000', color: 'black'},
  {name: 'Phone', price: '20000', color: 'blue'},
  {name: 'Camera', price: '60000', color: 'black'},
  {name: 'Watch', price: '40000', color: 'white'}
]

  return (
    <div className="App">
      
 <Product name="Camera" price="58000"></Product>   //===// Comment this line 
{
  products.map(product => <Product name={product.name} price={product.price} color={product.color}></Product> 
  )
}
    </div>
  );
}

function Product(props){
const styleObj = {
  margin: '10px auto',
  border: '3px solid blue',
  borderRadius: '20px'
}


return (
    <div className="product-style" style={styleObj}>
      <h1>Product: {props.name}</h1>
      <h3>Price: {props.price}</h3>
      <h3>color: {props.color}</h3>
    </div>
  )
}

export default App;
*/