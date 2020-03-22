import React, { useState } from 'react';
import './FoodDisplay.css';
import fakeData from '../../fakeData';

const FoodDisplay = () => {
   
    console.log(fakeData);

    const [food,setFood] = useState(fakeData);
    
    const specificFoodCategory=food.filter(el=>el.category==="lunch");
   
    console.log(specificFoodCategory);
    return (
        <div>
            <h1>this is food display</h1>
            
        <h3>{food.length}</h3>

        <div className="container">
            <div className="row text-center">
                <div className="col-12">
                    <a href="">Breakfast</a>
                    <a href="" onClick>Lunch</a>
                    <a href="">Dinner</a>
                </div>
            </div>
        </div>
    
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="card-columns">
                        {
                            specificFoodCategory.map(el =>
                                
                                    <div>
                                
                                    <div className="card text-center" > 
                                        <img className="card-img-top" src={el.img} alt="Card image cap"></img>
                                
                                        <div className="card-body">
                                            <h5 className="card-title">{el.title}</h5>
                                            <p className="card-text">{el.category}</p>
                                            <p className="font-weight-bold">${el.price}</p>
                                        </div>
                                    </div>
                                </div>
                            
                            
                        
                            )
                        }
                    </div>
                </div>
            </div>

        
        </div>
        <div className="row">
            <div className="col-md-12 text-center">
                <button>Checkout Your Food</button>
            </div>
        </div>
            
        
    </div>
    );
};

export default FoodDisplay;