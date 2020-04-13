import React, { useEffect }  from 'react';
import './PlaceOrder.css';
//import { getDatabaseCart } from '../../utilities/databaseManager';
//import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';
//import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../LogIn/userAuth';
//import { getDatabaseCart } from '../../utilities/databaseManager';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
  
import Payment from '../Payment/Payment';
import { useState } from 'react';

const PlaceOrder = (props) => {
    const auth = useAuth(); 

    const stripePromise = loadStripe('pk_test_rSuk8z9YFWlOuvcrhCV31Rhh007S7Wuc83');
    const [paid, setPaid] = useState(null);
    const markAsPaid = (paymentInfo) => {
        setPaid(paymentInfo)
    }
    useEffect(() =>{
        window.scrollTo(0, 0)
    }, []);

    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {
        props.deliveryInfoHandler(data);
        props.getUserEmail(auth.user.email);
    };

    const {delivery,road, flat, BusinessName, instruction} = props.deliveryInfo;

    console.log("Added to cart item",props.cart);

    const foodCart = props.cart;

    // const db =getDatabaseCart();
    // console.log("from database",db);

    //console.log("foodCart info now: ",foodCart)

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

       
    
        // const { register, handleSubmit, errors } = useForm()
        
        // const onSubmit = data => { 
        //     console.log(data)
        //     props.deliveryInfoHandler(data); 
        // }

        

    return (
        <div className='container'>
            {/* <h1>place Order Page</h1>
            <h2>item:{foodCart.length}</h2>
            <br/> */}

            <div className="row">
                <div className="col-md-6" style={{display:(delivery && road && flat && BusinessName && instruction) ? "none" : "block"}} >

                    <h3>Delivery Details</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function
                        <input name="example" defaultValue="test" ref={register} />
                         */}
                        {/* include validation with required or other standard HTML validation rules */}
                        
                        <input name="delivery" ref={register({ required: true })}  placeholder="Delivery to door"/>
                        {errors.delivery && <span>This field is required</span>}

                        <input name="road" ref={register({ required: true })}  placeholder="Road number"/>
                        {errors.road && <span>This field is required</span>}

                        <input name="flat" ref={register({ required: true })}  placeholder="Flat ,suite or floor"/>
                        {errors.flat && <span>This field is required</span>}

                        <input name="BusinessName" ref={register({ required: true })}  placeholder="Business Name"/>
                        {errors.BusinessName && <span>This field is required</span>}

                        <input name="instruction" ref={register({ required: true })}  placeholder="Add Delivery instruction"/>
                        {errors.instruction && <span>This field is required</span>}
                        
                        <button type="submit">save and continue</button>
                        {/* <input type="submit" /> */}
                    </form>

                </div>
                <div style={{display:(delivery && road && flat && BusinessName && instruction) ? "block" : "none"}} className="col-md-6">
                    <Elements stripe={stripePromise}>
                        <Payment markAsPaid={markAsPaid}/>
                    </Elements>
                </div>

                <div className="col-md-6">
                {
                    props.cart.map(el => {return <div  key={el.id} >
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
                    {
                        //delivery && road && flat && BusinessName && instruction ?
                        paid ? 
                        <Link to="/order-complete">
                        <button style={{color:"red"}} onClick={() => props.clearCart()}>Place Order</button>
                        </Link>
                        :
                        <button disabled style={{}}>Place order</button>
                    }
                </div>

                
            </div>
            
           


            {/* <h2>item:{foodCart.length}</h2> */}

            
            
        </div>
    );
};

export default PlaceOrder;