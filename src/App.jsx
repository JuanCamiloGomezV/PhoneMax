import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Navbar from './components/ComponenteNavBar/Navbar'
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/container/CartContainer/CartContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/detail/:id' element={<ItemDetailContainer />}/>
        <Route path='/categoria/:categoryId' element={<ItemListContainer />}/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
