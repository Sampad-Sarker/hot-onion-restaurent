import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    const addInventoryBtn =()=>{

        const foods = fakeData[0];
        console.log("before add",foods);

        fetch("https://powerful-depths-96129.herokuapp.com/addFoods",{   //server address

            method:"POST",
            body:JSON.stringify(fakeData),
            headers:{"Content-type":"application/json"}
        })
        .then(res=>res.json())
        .then(data=>{console.log("post successful",data)})
        .catch(err=>{console.log(err)})

    }
    return (
        <div>
            <h1>Add inventory to sell more.......</h1>

            <button disabled onClick={addInventoryBtn}>add inventory</button>
        </div>
    );
};


export default Inventory;