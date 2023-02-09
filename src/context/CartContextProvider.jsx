import { CartContext } from "./CartContext"
import React,{useState} from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const CartContextProvider = ({children}) => {
    const[cartList, setCartList] = useState([])
    const notifyInfo = ()=>{
        toast.info('Cantidad actualizada!', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      }
      const notifySuccess = ()=>{
        toast.success('Producto agregado con exito!', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      }
    const addCarrito = (producto) =>{
        let bandera = null;
        bandera = cartList.find(element => element.id == producto.id);
        if(bandera)
        {
            const nuevoArray = cartList.filter(element => element.id != producto.id);
            bandera.cantidad = bandera.cantidad+producto.cantidad;
            let aux=[...nuevoArray,bandera].sort((x, y) => x.precio - y.precio)
            setCartList(aux);
            notifyInfo();
        }
        else
        {
            let aux=[...cartList,producto].sort((x, y) => x.precio - y.precio)
            setCartList(aux)    
            notifySuccess();
        }
    }
    const setCarrito = (productos) => {
        setCartList(productos.sort((x, y) => x.precio - y.precio)) 
    }
    const removeItem = (id) =>{
        setCartList(cartList.filter(item => item.id != id))
    }
    const clear = () => {
        setCartList([])
    }
  return (
    <>
    <ToastContainer />
    <CartContext.Provider value={{
        cartList,
        addCarrito,
        removeItem,
        setCarrito,
        clear
    }}>
        {children}
    </CartContext.Provider>
    </>
    
    
  )
}

export default CartContextProvider


