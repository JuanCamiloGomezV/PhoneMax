import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/ComponenteNavBar/Navbar'
import ItemListContainer from './components/ComponenteContenedor/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  

  return (
    <>
    <Navbar/>
    <ItemListContainer saludo='En construcción ...'/>
    </>
  )
}

export default App
