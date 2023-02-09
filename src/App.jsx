import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import CartContainer from './components/container/CartContainer/CartContainer'
import CartContextProvider  from './context/CartContextProvider'
import ErrorContainer from './components/container/ErrorContainer/ErrorContainer'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer'
import Navbar from './components/ComponenteNavBar/Navbar'

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
