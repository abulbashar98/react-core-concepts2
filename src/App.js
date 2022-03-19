import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


// Part 3
/*-------------- --------------------------------------------------------------------*\
UseEffect to load data and UseState to set on Component inside another Component....
\*-------------------------------------------------------------------------------------*/

function App() {

  return (
    <div className="App">

      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>


    </div>
  );
}
function Counter() {

  //Simple counter component....

  //  return (
  //    <div>
  //      <h1>Count: 0</h1>
  //      <button>Increase</button>
  //    </div>
  //  )


  // component using UseState returns....

  const [count, setCount] = useState(87)
  console.log(count, setCount)
  const handleIncrease = () => {
    // console.log('increase clicked');
    const newCount = count + 1;
    setCount(newCount)
  }

  //  const handleDecrease = () => {
  //    const newCount = count - 1;
  //    setCount(newCount)
  //  }

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

function ExternalUsers() {

  const [users, setUsers] = useState([])

  // Note: use effect takes to parameters.. 1. anonymous function. 2.An empty Array[]+
  useEffect(() => {
    // console.log('inside use effect')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => setUsers(data))
    console.log(users);
  }, [])

  return (
    <div>
      <h2>External Users</h2>
      {/* <p>{users}</p> */}
      {/* <p>{users.length}</p> */}

      {
        // users.map(user => <li>{user.name}</li>)

        users.map(user => <User name={user.name} email={user.email
        }></User>)
      }
    </div>
  )
}

function User(props) {

  const userStyles = {
    margin: '10px auto',
    border: '3px solid gray',
    borderRadius: '20px'
  }

  return (
    <div className='product-style' style={userStyles}>
      <h2>Name: {props.name}</h2>
      <h4>Email: {props.email}</h4>
    </div>
  )
}



export default App;




// Part 2
/*-------------- ------------------------------------------------------*`\
Use useState returns.. Chang or setState using eventHandler function onClick..
\*---------------------------------------------------------------------------*/
/*
function App() {

  return (
    <div className="App">

      <Counter></Counter>

    </div>
  );
}
function Counter() {

  //Simple counter component....

  //  return (
  //    <div>
  //      <h1>Count: 0</h1>
  //      <button>Increase</button>
  //    </div>
  //  )


  // component using UseState returns....

  const [count, setCount] = useState(87)
  console.log(count, setCount)
  const handleIncrease = () => {
    // console.log('increase clicked');
    const newCount = count + 1;
    setCount(newCount)
  }

  //  const handleDecrease = () => {
  //    const newCount = count - 1;
  //    setCount(newCount)
  //  }

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
*/



// Part 1
/*-------------- --------------------------------*\
Concepts of dynamic component and styling recap
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