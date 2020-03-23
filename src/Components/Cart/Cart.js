import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {

    //console.log("props from food detail info",props);
   

    const foodCart=props.foodInfo;
    
    // const [singleFood,setSingleFood]=useState({});
    
    let total=0;
    let name="";
    let price=0;
    for (let i = 0; i < foodCart.length; i++) {
        const element = foodCart[i];
        total=total+element.price;

         name=element.title;
        price=element.price;

        
    }

    const tax=total*0.10;


    //const{title,price}=foodCart;
    console.log("cart inside",foodCart);
    return (
        <div>
            {/* <h1>this cart page</h1> */}
            <h2>Purchase info</h2>
            <h3>name:{name}</h3>
            <h3>Item quantity number:{foodCart.length}</h3>
            <h3>price:{price}</h3>
            <h3>tax:{tax.toFixed(2)}</h3>
            <h3>food total:{(total+tax).toFixed(2)}</h3>

            <Link to="/place-order">
                <button>review button</button>
            </Link>
            
            

        </div>
    );
};

export default Cart;