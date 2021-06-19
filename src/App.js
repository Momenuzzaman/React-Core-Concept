import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =  ["Razzak","Jabbar", "Manna","Jashim"];
  
  let products = [
    {name : "Photoshop",price : "$230"},
    {name : "Illustrator",price : "$130"},
    {name : "PDF",price : "$50"}
  ];
  const nakoyNames = nayoks.map(nayok => nayok);
  console.log(nakoyNames);
  return (
    <div className="App">
      <header className="App-header">
       <p>React</p>
       <Users></Users>
       <Counter></Counter>
       <ul>
         {
           nayoks.map(nayok =><li>{nayok}</li>)
         }
       </ul>
       {
         products.map(pd=><Product product = {pd}></Product>)
       }
       <Person name="Kamal khondokar" job="student" ></Person>
       <Person name="Rabbi Hassan" job="football"></Person>
      </header>
    </div>
  );
}
function Product(props){
  const productStyle = {
    border : "3px solid gray",
    borderRadius : "15px",
    backgroundColor :"lightgray",
    height : "250px",
    width :"200px",
    float : "left"
  }
  const {name,price} = props.product;
  return (
    <div style ={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>By Now</button>
    </div>
  )
}
function Person(props){
  let personalStyle = {
    border: "3px solid white",
    padding:"15px",
    margin: "10px"
    
  }
 return (
   <div style = {personalStyle}>
     <h1>Name: {props.name}</h1>
     <p>Profetion: {props.job} </p>
   </div>
 )
 }

 function Counter(){
   const [count, setCount] = useState(0);
   const handleIncrease = () => setCount(count +1);
   return(
     <div>
       <h1>Count:{count}</h1>
       <button onClick = {() => setCount(count +1)}>Increase</button>
       <button onClick = {() => setCount(count -1)}>Decrease</button>
     </div>
   )
 }
 function Users(){
   const [users, setUser] = useState([]);
   useEffect(() =>{
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(res => res.json())
     .then(data => setUser(data));
   } ,[])
   return(
     <div>
       <h2>Dynamic Users : {users.length}</h2>
       <ul>
         {
           users.map(user =><li>{user.name}</li>)
         }
       </ul>
     </div>
   )
 }
export default App;
