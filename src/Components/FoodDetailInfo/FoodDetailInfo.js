

import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';

const FoodDetailInfo = () => {

    const {foodId} = useParams();
    const specificFood = fakeData.find(el =>el.id ===foodId);

    const{id,title,detailDescription,category,price,img} =specificFood;
    console.log(specificFood);
    return (
        <div>
            <h1>id={foodId} Specific food details are Here....</h1>
            <div>
                    <a href="">Breakfast</a>
                    <a href="">Lunch</a>
                    <a href="">Dinner</a>
            </div>
           <div>
                <h3>{category} Item</h3>
                <h4>{title}</h4>
                <p>{detailDescription}</p>
                <h5>${price} <span><button>+</button>1<button>-</button></span> </h5>
                <button>Add cart</button>
           </div>
           <div>
               <img src={img} alt=""/>
           </div>

        </div>
    );
};

export default FoodDetailInfo;