import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import FoodDisplay from './Components/FoodDisplay/FoodDisplay';

import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import FoodDetailInfo from './Components/FoodDetailInfo/FoodDetailInfo';
import NotFound from './Components/Notfound/NotFound';
import Cart from './Components/Cart/Cart';
import LogIn from './Components/LogIn/LogIn';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Home from './Components/Home/Home';
import { useState } from 'react';
//import { addToDatabaseCart, getDatabaseCart } from './utilities/databaseManager';
import { AuthProvider, PrivateRoute } from './Components/LogIn/userAuth';
import OrderComplete from './Components/OrderComplete/OrderComplete';
import Inventory from './Components/Inventory/Inventory';


function App() {

  //const [showBanner,setShowBanner]=useState(false);

  const [cart,setCart] = useState([]);
  const [orderId , setOrderId] = useState(null);

  const addToCartBtnHandler = (foodInfo) => {
    const alreadyAdded = cart.find(el => el.id === foodInfo.id );
    const newCart = [...cart,foodInfo]
    setCart(newCart);
    if(alreadyAdded){
      const reamingCarts = cart.filter(el =>el.id !== foodInfo);
      setCart(reamingCarts);

      console.log("cart info:",cart.id,cart.quantity);

      // addToDatabaseCart(cart.id,cart.quantity); //save in db

      // console.log("from db: ",getDatabaseCart())

    }else{
      const newCart = [...cart,foodInfo]
      setCart(newCart);

      console.log("cart info:",cart.id,cart.quantity);

      // addToDatabaseCart(cart.id,cart.quantity); //save in db
      // console.log("from db: ",getDatabaseCart())
    }

  }

  const clearCart =  () => {
    const orderedItems = cart.map(cartItem => {
      return {food_id : cartItem.id, quantity: cartItem.quantity}
    })

    const orderDetailsData = { userEmail , orderedItems,  deliveryInfo }
    fetch('https://powerful-depths-96129.herokuapp.com/submitorder' , {
        method : "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(orderDetailsData)
    })
    .then(res => res.json())
    .then(data=> setOrderId(data._id))
    console.log(orderId);

    setCart([])
  }


  const checkOutItemHandler = (productId, productQuantity) => {
    const newCart = cart.map(item => {
      if(item.id === productId){
          item.quantity = productQuantity;
      }
      return item;
    })

    const filteredCart = newCart.filter(item => item.quantity > 0)
    setCart(filteredCart)
  }




   

  const [deliveryInfo,setDeliveryInfo] = useState({delivery:null,road:null, flat:null, BusinessName:null, instruction: null});

 
  const deliveryInfoHandler = data => {
    setDeliveryInfo(data);
  }

  const [userEmail, setUserEmail] = useState(null);
  const getUserEmail = (email) => {
    setUserEmail(email)
  }

  return (
    <div>
      
      <AuthProvider>
      <Header ></Header>
      <Router>
        <Switch>
          <Route exact path ="/">
            
            <Home cart={cart}></Home>
          </Route>

          <Route path="/food-display">
            
            <FoodDisplay></FoodDisplay>
          </Route>

          <Route path="/food/:foodId">
            <FoodDetailInfo cart={cart} addToCartBtnHandler={addToCartBtnHandler}></FoodDetailInfo>
          </Route>

          <Route path ='/login'>
            <LogIn></LogIn>
          </Route>

          <PrivateRoute path="/place-order">
            <PlaceOrder cart={cart}  deliveryInfo={deliveryInfo} deliveryInfoHandler={deliveryInfoHandler} clearCart={clearCart} checkOutItemHandler={checkOutItemHandler} getUserEmail={getUserEmail}></PlaceOrder>
          </PrivateRoute>

          <PrivateRoute path="/order-complete">
            <OrderComplete cart={cart} deliveryInfo={deliveryInfo} orderId={orderId}></OrderComplete>
          </PrivateRoute>

          
         

          <Route path ='/cart'>
            <Cart></Cart>
          </Route>

          <Route path ='/inventory'>
            <Inventory></Inventory>
            
          </Route>

         




          {/* <Route exact path="/">
            <Home></Home>
          </Route> */}

          <Route path="*">
            <NotFound></NotFound> 
          </Route>
        </Switch>

      </Router>
      </AuthProvider>
     

      
    </div>
  );
}

export default App;
