import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>React</p>
       <Person name="Kamal khondokar" job="student" ></Person>
       <Person name="Rabbi Hassan" job="football"></Person>
       
      </header>
    </div>
  );
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
