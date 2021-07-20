import "./App.css";
import data from "./assets/data/data.json"
import Section from "./components/Section"
import logo from "./assets/img/logo.png"

function App() {
  return (
    
    <div className="body">

      
      <img src={logo} className="logo" alt="" />
     {data.map((elem, index)=>{
       return(
         <Section
         key={index}
         image={elem.image}
         time={elem.time}
         title={elem.title}
         type={elem.type}
         duration={elem.duration}
         isUnseen={elem.model}
         />
       )
     })}
    </div>
  );
}

export default App;
