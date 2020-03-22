import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import FoodDisplay from './Components/FoodDisplay/FoodDisplay';
import fakeData from './fakeData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FoodDetailInfo from './Components/FoodDetailInfo/FoodDetailInfo';
import NotFound from './Components/Notfound/NotFound';

function App() {

  //console.log(fakeData);
  const [food,setFood] = useState(fakeData);
  const lunchFood=food.filter(el=>el.category==="lunch");

  return (
    <div>
      
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/food-display">
            
            <FoodDisplay foodCat={lunchFood}></FoodDisplay>
          </Route>

          <Route path="/food/:foodId">
            <FoodDetailInfo></FoodDetailInfo>
          </Route>

          <Route exact path="/">
            <FoodDisplay foodCat={lunchFood}></FoodDisplay>
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
