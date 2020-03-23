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

function App() {

  

  return (
    <div>
      
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/food-display">
            
            <FoodDisplay></FoodDisplay>
          </Route>

          <Route path="/food/:foodId">
            <FoodDetailInfo></FoodDetailInfo>
          </Route>

          <Route path='/login'>
            <LogIn></LogIn>
          </Route>

          <Route path ='/cart'>
            <Cart></Cart>
          </Route>

          <Route path="/place-order">
            <PlaceOrder></PlaceOrder>
          </Route>




          <Route exact path="/">
            <FoodDisplay></FoodDisplay>
          </Route>
          <Route path="*">
            <NotFound></NotFound> 
          </Route>
        </Switch>

      </Router>

      
    </div>
  );
}

export default App;
