import React, { useState } from 'react';
import './FoodDisplay.css';
import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';


const FoodDisplay = (props) => {
   
       
    const [food,setFood] = useState(fakeData);
    let foodCat=food.filter(el=>el.category==="lunch");

    
    //console.log("lunch",lunchFood);

 //button onclick  activity 
    const[tempFood,setTempFood]=useState(fakeData);
    const  onClickFunction =(clickedFoodCat)=>{
        console.log("clicked....", clickedFoodCat);
       

        // const foodCat =tempFood.filter(el=>el.category===ff);
        const foodCat =food.filter(el=>el.category===clickedFoodCat);
        
        console.log("inside function",foodCat);
        setTempFood(foodCat); //first time  setTempFood not works , but after that it works
        console.log("useState value",tempFood,typeof(tempFood));
        //return ({foodCat});
        
       
    }
    
   
    foodCat = tempFood;


   
    
    return (
        <div>
            {/* <h1>this is food display</h1> */}
            
        

        <div className="container">
            <div className="row text-center">
                <div className="col-12">
                    
                    {/* <a  onClick={()=>onClickFunction("breakfast")} >Breakfast</a>
                    <a  onClick={()=>onClickFunction("lunch")}>Lunch</a>
                    <a onClick={()=>onClickFunction("dinner")}>Dinner</a> */}
                    
                    <button onClick={()=>onClickFunction("breakfast")}>Breakfast</button>
                    <button onClick={()=>onClickFunction("lunch")}>Lunch</button>
                    <button onClick={()=>onClickFunction("dinner")}>Dinner</button>

                </div>
            </div>
        </div>
    
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="card-columns">
                        {
                            foodCat.map(el =>
                                
                                <div key={el.id}>
                                        
                                
                                    <div className="card text-center " > 
                                        <img className="card-img-top" src={el.img} alt=""/>
                                
                                        <div className="card-body">
                                            <h5 className="card-title"><Link to={"/food/"+el.id}>{el.title}</Link></h5>
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