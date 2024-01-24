import React, { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './header/Header';
import Hero from './component/Hero';
import Service from './Page/Service';
import Review from './Page/Review';
    import Footer from './footer/Footer';
import Shop from './Page/Shop';
import Rout from './Page/Rout';


// Programmatically navigate to the '/Shop' route when the component mounts
const App = (add) => {
  const [cart,set]=useState([]);
  function add(men) {
    const exist=cart.find((y)=>{
      return y.id=men.id
    })
    if(exist)
    {
      alert('This Product is Already Added');
    }
    else{
      set([...cart,{...men,quantity:1}])
    }
  }
  return (
   <BrowserRouter>
   <Header/>

   <Rout add={add}  cart={cart} set={set}/>
   
             <Routes>
             <Route index element={<Shop />} />
   <Route path='/Shop' element={<Shop/> } />
   </Routes>
   <Footer></Footer>
   </BrowserRouter>
  )
}

export default App
