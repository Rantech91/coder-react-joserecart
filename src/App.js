import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <ItemListContainer
          greeting={
            "Bienvenidos a mi proyecto de React, el sitio se encuentra en construcción."
          }
        />
      </div>
    </div>
  );
}

export default App;
