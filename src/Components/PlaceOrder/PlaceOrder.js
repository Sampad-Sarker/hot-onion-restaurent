import React, { useEffect, useState } from 'react';
import './PlaceOrder.css';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';
//import React from 'react'
import { useForm } from 'react-hook-form'

const PlaceOrder = (props) => {

    console.log("Added to cart item",props.cart);

    const foodCart = props.cart;

    console.log("foodCart info now: ",foodCart)

    //const [foodCart,setFoodCart]=useState([]);
    //setFoodCart(props.cart);
    
    // useEffect(()=>{
    //     const savedFood=getDatabaseCart();
    //     const foodKey = Object.keys(savedFood);
        
    //     const orderedFood= foodKey.map(el => {
    //        // savedFood[el]
    //        const findOutFood = fakeData.find(food=>food.id===el);
    //        findOutFood.number=savedFood[el];
           
    //        return findOutFood;
    //     });
    //     console.log(orderedFood);
    //     setFoodCart(orderedFood);
        
    //     // console.log(savedFood);
    //     // console.log(quantity);

    // },[])

    let total=0;
    
    for (let i = 0; i < foodCart.length; i++) {
        const element = foodCart[i];
        total=total+element.price*element.quantity;

    }

    const tax=total*0.10;
    const deliveryCharge=2;
    

    //const {title,shortDescription,price,img,number}=foodCart;

    return (
        <div className='container'>
            <h1>place Order Page</h1>
            <h2>item:{foodCart.length}</h2>
            <br/>

            <div className="row">
                <div className="col-md-6">

                    <h3>Delivery Details</h3>
                    <input type="text" name="" id=""/><br/>
                    <input type="text" name="" id=""/><br/>
                    <input type="text" name="" id=""/><br/>
                    <input type="text" name="" id=""/><br/>
                    <input type="button" value="save and continue"/>
                </div>
                <div className="col-md-6">
                {
                    foodCart.map(el => {return <div  key={el.id} >
                                                    <div className="area" >
                                                        <div >
                                                            <img src={el.img} alt="" style={{width:"100%"}}/>
                                                        </div>
                                                        <p>{el.title}</p>
                                                        <p>${el.price}</p>
                                                        <p>{el.shortDescription}</p>
                                                        <h6>Ordered Quantity:{el.quantity}</h6>
                                                        <h6>total:${(el.price*el.quantity).toFixed(2)}</h6>
                                                    </div>
                                                    
                                            </div>
                    })
                }

                




                </div>

                <div className="calculateArea">
                    <p>subtotal:${total.toFixed(2)}</p>
                    <p>tax(10%):{tax.toFixed(2)}</p>
                    <p>delivery charge:${deliveryCharge.toFixed(2)}</p>
                    <h6>Overall total:${(total+tax+deliveryCharge).toFixed(2)}</h6>
                    <Link to="/logIn">
                        <button>Place Order</button>
                    </Link>
                </div>

                
            </div>
            
           


            {/* <h2>item:{foodCart.length}</h2> */}

            
            
        </div>
    );
};

export default PlaceOrder;