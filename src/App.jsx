import './App.css'
import NavBar from './Componentes/Navbar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'



function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {"Puede darme dinero?"} />
    </>
  )
}

export default App
