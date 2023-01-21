import React,{useState,useEffect} from 'react'
import { gFetch } from '../../../utils/gFetch';
import { useParams } from 'react-router-dom';
import CarouselProducto from '../../CarouselProducto/CarouselProducto';
import Loader from '../../Loader/Loader';
import ItemList from '../../ItemList/ItemList';

const ItemListContainer = () => {
  const [productos, setProductos]=useState([]);
  const [loading, setLoading]=useState(true);
  const {categoryId} = useParams();

  useEffect(() =>setLoading(true),[categoryId])
  useEffect(()=>{
    if (categoryId) {
        gFetch()// asincrinónico
            .then(respuestaPromesa => {
                // throw new Error('Error generado a la fuerza')            
               setProductos(respuestaPromesa.filter(items => items.categoria === categoryId))
            })   
            .then(() => setLoading(false))     
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))               
        
    } else {
        gFetch()// asincrinónico
            .then(respuestaPromesa => {
                // throw new Error('Error generado a la fuerza')            
               setProductos(respuestaPromesa)
            })       
            .then(() => setLoading(false)) 
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))               
    }
}, [categoryId])

return (
  loading ?
  <>
  {/* <CarouselProducto categoria={categoryId}/> */}
  <div className="d-flex justify-content-center align-items-center w-100 vh-100">
    <Loader/>
  </div>
  </>
  :
  <>
  {/* <CarouselProducto categoria={categoryId}/> */}
  <ItemList productos={productos}/>
  </>
)

}

export default ItemListContainer