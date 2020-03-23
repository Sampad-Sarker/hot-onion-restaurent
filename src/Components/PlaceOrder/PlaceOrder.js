import React, { useEffect, useState } from 'react';
import './PlaceOrder.css';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {

    const [foodCart,setFoodCart]=useState([]);
    useEffect(()=>{
        const savedFood=getDatabaseCart();
        const foodKey = Object.keys(savedFood);
        
        const orderedFood= foodKey.map(el => {
           // savedFood[el]
           const findOutFood = fakeData.find(food=>food.id===el);
           findOutFood.number=savedFood[el];
           
           return findOutFood;
        });
        console.log(orderedFood);
        setFoodCart(orderedFood);
        
        // console.log(savedFood);
        // console.log(quantity);

    },[])

    let total=0;
    
    for (let i = 0; i < foodCart.length; i++) {
        const element = foodCart[i];
        total=total+element.price*element.number;

    }

    const tax=total*0.10;
    const deliveryCharge=2;
    

    const {title,shortDescription,price,img,number}=foodCart;

    return (
        <div>
            {/* <h1>place Order Page</h1> */}
            <h2>item:{foodCart.length}</h2>
            {
                foodCart.map(el => {return <div>
                                                <div className="area">
                                                    <div style={{width:"20%"}}>
                                                        <img src={el.img} alt="" style={{width:"100%"}}/>
                                                    </div>
                                                    <p>{el.title}</p>
                                                    <p>${el.price}</p>
                                                    <p>{el.shortDescription}</p>
                                                    <h6>Ordered Quantity:{el.number}</h6>
                                                    <h6>total:${(el.price*el.number).toFixed(2)}</h6>
                                                </div>
                                                
                                          </div>
                })
            }

            <div className="calculateArea">
                <p>subtotal:${total.toFixed(2)}</p>
                <p>tax(10%):{tax.toFixed(2)}</p>
                <p>delevery charge:${deliveryCharge.toFixed(2)}</p>
                <h6>Overall total:${(total+tax+deliveryCharge).toFixed(2)}</h6>
            </div>

            <Link to="/logIn">
            <button>Place Order</button>
            </Link>
        </div>
    );
};

export default PlaceOrder;