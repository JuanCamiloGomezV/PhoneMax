import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Navbar from './components/ComponenteNavBar/Navbar'
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/container/CartContainer/CartContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer'
import CartContextProvider  from './context/CartContextProvider'
import ErrorContainer from './components/container/ErrorContainer/ErrorContainer'


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/detail/:id' element={<ItemDetailContainer />}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer />}/>
          <Route path='/categoria/:categoryId/:marcaId' element={<ItemListContainer />}/>
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='/error404' element={<ErrorContainer/>}/>
        
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
