

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addToDatabaseCart } from '../../utilities/databaseManager';
//import Cart from '../Cart/Cart';
//import { addToDatabaseCart } from '../../utilities/databaseManager';

const FoodDetailInfo = (props) => {

    
    const {foodId} = useParams();

    const specificFood = fakeData.find(el =>el.id === foodId);

    const{id,title,detailDescription,category,price,img} =specificFood;
    //console.log(specificFood);

    // const[cart,setCart]=useState([]);//cart use state 


    const [count,setCount]=useState(1);  //number of the specific food item


    const btnMinus =()=>{
        const newCount = count-1;
        if (newCount>=1) {
            setCount(newCount);
        }
        else{
            alert("Food item can not be zero");
        }

    }

    const btnPlus =()=>{
        const newCount = count+1;
        setCount(newCount);
    }

    // const btnHandler = (count) =>{
    //     if (count<=1) {
    //        return  setCount(1)
    //     }
    //     else{
    //        return  setCount(count);
    //     }
        
    // }


    const countShow = (count)=>{
       if(count<=1){return 1}
       else{return count}
    }

    // count countBtn=(count)=>{
    //     if(count<=1){
    //        return setCount(count);
    //     }
    //     else{return setCount();}
    // }

    const addToCartBtnHandler = (specificFood) => {
        
        specificFood.quantity = count;
        props.addToCartBtnHandler(specificFood);
        
        //addToDatabaseCart(specificFood.id,count); //save in db
        alert(specificFood.title + "\nQuantity :"+specificFood.quantity+"\nAdded to your cart");
    }
    
    
    // const addCartButton =(sFood)=>{
    //     //console.log("add cart button click",sFood);
    //     const newCart=[...cart,sFood];
    //     setCart(newCart);

    //     //const repeatFood =newCart.filter(el=>el.id===sFood.id);
        
    //     //const count = repeatFood.length;
    //     if(count>=1){
    //         console.log(count);
    //     addToDatabaseCart(sFood.id,count);
    //     }
        
    // }

   

    return (
        <div>

            <h1>{id} Specific food details are Here....</h1>
            <div style={{textAlign:"center"}}>
                    <Link to="/"><button>Breakfast</button></Link>
                    <Link to="/"><button>Lunch</button></Link>
                    <Link to="/"><button>Dinner</button></Link>
            </div>

           <div style={{width:"40%",float:"left"}}>
                <h3>{category} Item</h3>
                <h4>{title}</h4>
                <p>{detailDescription}</p>
                {/* <h5>${price} <span><button onClick={()=>setCount(count-1)}>-</button> {countShow(count)} <button onClick={()=>setCount(count+1)}>+</button></span> </h5> */}
                <h5>${price} <span><button onClick={()=>btnMinus()} >-</button> {countShow(count)} <button onClick={()=>btnPlus()} style={{color:"green"}}>+</button></span> </h5>
                {/* <button onClick={()=>addCartButton(specificFood)} >Add cart</button> */}
                <button onClick={()=>addToCartBtnHandler(specificFood)} ><FontAwesomeIcon icon={faShoppingCart} /> Add cart</button>

           </div>
           <div style={{width:"60%",float:"left"}}>
               <img src={img} alt=""style={{width:"100%"}}/>
           </div>
           
           {/* <Cart foodInfo={cart} count={count}></Cart> */}

        </div>  
    );
};

export default FoodDetailInfo;