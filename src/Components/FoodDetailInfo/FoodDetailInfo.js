

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const FoodDetailInfo = () => {

    
    const {foodId} = useParams();
    const specificFood = fakeData.find(el =>el.id === foodId);

    const{id,title,detailDescription,category,price,img} =specificFood;
    //console.log(specificFood);

    const[cart,setCart]=useState([]);//cart use state 


    const addCartButton =(sFood)=>{
        console.log("add cart button click",sFood);
        const newCart=[...cart,sFood];
        setCart(newCart);

        const repeatFood =newCart.filter(el=>el.id===sFood.id);
        const count = repeatFood.length;
        addToDatabaseCart(sFood.id,count);
    }

    return (
        <div>
            {/* <h1>{id} Specific food details are Here....</h1> */}
            <div>
                    <Link to="/food-display"><button>Breakfast</button></Link>
                    <Link to="/food-display"><button>Lunch</button></Link>
                    <Link to="/food-display"><button>Dinner</button></Link>
            </div>
           <div style={{width:"40%",float:"left"}}>
                <h3>{category} Item</h3>
                <h4>{title}</h4>
                <p>{detailDescription}</p>
                <h5>${price} <span><button>-</button>1<button>+</button></span> </h5>
                <button onClick={()=>addCartButton(specificFood)} >Add cart</button>
           </div>
           <div style={{width:"60%",float:"left"}}>
               <img src={img} alt=""style={{width:"100%"}}/>
           </div>
           <Cart foodInfo={cart}></Cart>

        </div>  
    );
};

export default FoodDetailInfo;