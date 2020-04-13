import React from 'react';
import map from"../../image/map.PNG";
import { useAuth } from '../LogIn/userAuth';
import { useState } from 'react';
import { useEffect } from 'react';

const OrderComplete = (props) => {
    const auth = useAuth();

    const [orderId,setOrderId] = useState(); 
    useEffect(() => {
        setOrderId(props.orderId)
        window.scrollTo(0, 0)
        
    }, [props])
    
    return (
        <div>
            {/* <h1>Final order submit page</h1> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={map} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h5>Your Location</h5>
                                {
                                    props.deliveryInfo &&
                                    <p>{props.deliveryInfo.flat}, {props.deliveryInfo.road}</p> 
                                   
                                } 
                        </div>

                        <div>
                        <h5>Shop Address</h5>
                            <p>Gulshan Plaza Restaurant</p>
                        </div>

                        <h1>09:00</h1>
                        <p>Estimated Delivery</p>

                        <div>
                                <h6>Hamim</h6>
                                <p>Your Rider</p>

                            <h4>Thank You {auth.user.name}</h4>

                        </div>

                        <button>Order</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderComplete;