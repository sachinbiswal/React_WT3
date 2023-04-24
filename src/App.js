// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Component/Navbar";
import Userdata from "./Component/Userdata";

function App() {
  return (
    <div className="App">
      <div style = {{boxShadow : "0 0 1px black",width : "1000px",marginTop : "20px",marginLeft : "17%",display : "flex",justifyContent : "center",flexDirection : "column",alignItems : "center"}}>
      <Navbar />
      <Userdata />
      </div>
      
    </div>
  );
}

export default App;
