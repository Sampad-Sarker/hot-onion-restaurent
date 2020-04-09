import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';

const Home = (props) => {
    // const[foods,setFoods]=useState(fakeData);
    const[foodCat,setFoodCat]=useState("lunch");

    const selectedFoodCat = fakeData.filter(el=>el.category===foodCat);


    console.log("cart info",props.cart);

    return (
        <div>
            <h1>Home</h1>
            <h1>cart info:{props.cart.length}</h1>
            
           
            <div style={{textAlign:"center"}}>
                <button onClick={()=>setFoodCat("breakfast")}>Breakfast</button>
                <button onClick={()=>setFoodCat("lunch")}>Lunch</button>
                <button onClick={()=>setFoodCat("dinner")}>Dinner</button>
            </div>
            

            <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="card-columns">   
                        {
                            selectedFoodCat.map(el =>
                                
                                <div key={el.id}>
                                        
                                    <Link to={"/food/"+el.id}>
                                    <div className="card text-center " > 
                                        <img className="card-img-top" src={el.img} alt=""/>
                                
                                        <div className="card-body">
                                            <h5 className="card-title">{el.title}</h5>
                                            <p className="card-text">{el.category}</p>
                                            <p className="font-weight-bold">${el.price}</p>
                                            
                                        </div>
                                    </div>
                                    </Link>

                                        
                                    
                                </div>
                            
                                
                        
                            )
                        }
                    </div>
                </div>
            </div>

        
        </div>
        <div className="row">
            <div className="col-md-12 text-center">
                {
                    props.cart.length ?
                    <Link to ="/place-order">
                    <button style={{color:"black",backgroundColor:"red"}}>Checkout Your Food</button>
                    </Link> 
                    :
                    <button>Checkout Your Food</button>
                }   
            </div>
        </div>


        </div>
    );
};

export default Home;