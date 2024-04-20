import NavBar from "./components/NavBar/Navbar"
import Brand from "./components/Brand/Brand"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "./App.css"

function App() {
  return (
    <div>
      <div className="header-app">
        <Brand />
        <NavBar />
      </div>
      <ItemListContainer bienvenido= "Bienvenido a M&G Bijouterie" />
    </div>
  )
}

export default App
