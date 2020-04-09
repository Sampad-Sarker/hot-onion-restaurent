import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
//import FoodDetailInfo from '../FoodDetailInfo/FoodDetailInfo'

const Cart = (props) => {

    //console.log("props from food detail info",props);
   

    const foodCart=props.foodInfo;
    let count =props.count;
    if (count<=1) {
        count =1;
    }
    
    console.log(count);
    
    
    // const [singleFood,setSingleFood]=useState({});
    
    let total=0;
    let name="";
    let price=0;
    for (let i = 0; i < foodCart.length; i++) {
        const element = foodCart[i];
        //element.number={count};
        total=total+(element.price);

         name=element.title;
        price=element.price;

        
    }

    //const tax=total*0.10;


    //const{title,price}=foodCart;
    //console.log("cart inside",foodCart);
    return (
        <div>
            {/* <h1>this cart page</h1> */}
            <h2>Purchase info</h2>
            <h3>name:{name}</h3>
            <h3>Item quantity number:{count}</h3>
            <h3>price:{price*count}</h3>
            <h3>tax:{(price*count)*0.10.toFixed(2)}</h3>
            <h3>food total:{((price*count)+(price*count)*0.10).toFixed(2)}</h3>

            <Link to="/place-order">
                <button>review button</button>
            </Link>
            
            

        </div>
    );
};

export default Cart;