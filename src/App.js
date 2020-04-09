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
import { addToDatabaseCart } from './utilities/databaseManager';

function App() {

  const [cart,setCart] = useState([]);

  const addToCartBtnHandler = (foodInfo) => {
    const alreadyAdded = cart.find(crt => crt.id === foodInfo.id );
    const newCart = [...cart,foodInfo]
    setCart(newCart);
    if(alreadyAdded){
      const reamingCarts = cart.filter(crt => cart.id !== foodInfo);
      setCart(reamingCarts);

      addToDatabaseCart(cart.id,cart.quantity); //save in db

    }else{
      const newCart = [...cart,foodInfo]
      setCart(newCart);

      addToDatabaseCart(cart.id,cart.quantity); //save in db
    }

  }
   

  const [deliveryInfo,setDeliveryInfo] = useState({delivery:null,road:null, flat:null, BusinessName:null, instruction: null});

  const deliveryInfoHandler = data => {
    setDeliveryInfo(data);
  }
  return (
    <div>
      
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path ="/">
            <Home cart={cart}></Home>
          </Route>

          <Route path="/food-display">
            
            <FoodDisplay></FoodDisplay>
          </Route>

          <Route path="/food/:foodId">
            <FoodDetailInfo addToCartBtnHandler={addToCartBtnHandler}></FoodDetailInfo>
          </Route>

          <Route path="/place-order">
            <PlaceOrder cart={cart}  deliveryInfo={deliveryInfo} deliveryInfoHandler={deliveryInfoHandler}></PlaceOrder>
          </Route>

          <Route path='/login'>
            <LogIn></LogIn>
          </Route>

          <Route path ='/cart'>
            <Cart></Cart>
          </Route>

          




          {/* <Route exact path="/">
            <Home></Home>
          </Route> */}

          <Route path="*">
            <NotFound></NotFound> 
          </Route>
        </Switch>

      </Router>

      
    </div>
  );
}

export default App;
