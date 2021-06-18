import logo from './logo.svg';
import './App.css';

function App() {
  let products = [
    {name : "Photoshop",price : "$230"},
    {name : "Illustrator",price : "$130"},
    {name : "PDF",price : "$50"}

  ]
  return (
    <div className="App">
      <header className="App-header">
       <p>React</p>
       <Person name="Kamal khondokar" job="student" ></Person>
       <Person name="Rabbi Hassan" job="football"></Person>
       <Product product= {products[0]}></Product>
       <Product product= {products[1]}></Product>
       <Product product= {products[2]}></Product>
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
  return (
    <div style ={productStyle}>
      <h3>{props.product.name}</h3>
      <h4>{props.product.price}</h4>
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

export default App;
