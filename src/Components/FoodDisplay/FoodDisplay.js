import React, { useState } from 'react';
import './FoodDisplay.css';
import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';

const FoodDisplay = (props) => {
   
    // console.log(fakeData);

    // const [food,setFood] = useState(fakeData);
    
    // const specificFoodCategory=food.filter(el=>el.category==="lunch");

    //console.log(specificFoodCategory);
    let foodCat = props.foodCat;
    console.log("from app.js",foodCat);

    // const[clickedFoodCat,setClickedFoodCat] = useState(fakeData);

    // const OnClickHandler=foodCategory=>{
        
    //     const food = clickedFoodCat.filter(el =>el.category===foodCategory);

    //     setClickedFoodCat(food);

    // }
    
    // console.log("in FoodDisplay.js",clickedFoodCat)

    const onClickFunction =(pp)=>{

        console.log("clicked and",pp);
    }
    return (
        <div>
            <h1>this is food display</h1>
            
        

        <div className="container">
            <div className="row text-center">
                <div className="col-12">
                    {/* <a href="" onClick={OnClickHandler("breakfast")}>Breakfast</a>
                    <a href="" onClick={OnClickHandler("lunch")}>Lunch</a>
                    <a href="" onClick={OnClickHandler("dinner")}>Dinner</a> */}
                    <a href="" onClick={onClickFunction("breakfast")} >Breakfast</a>
                    <a href="" onClick={onClickFunction("lunch")}onClick={onClickFunction("breakfast")}>Lunch</a>
                    <a href="" onClick={onClickFunction("dinner")}>Dinner</a>
                </div>
            </div>
        </div>
    
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="card-columns">
                        {
                            foodCat.map(el =>
                                
                                    <div>
                                
                                    <div className="card text-center" > 
                                        <img className="card-img-top" src={el.img} alt="Card image cap"></img>
                                
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