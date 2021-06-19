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

export default App;
