import React from 'react';
import logo from '../../image/logo2.png';
import bgImg from '../../image/bannerbackground.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            {/* <h1>This header</h1> */}
            <div className="container-fluid">
                <div className="row d-flex bd-highlight m-0 p-0">
                        <div className="p-2  bd-highlight"><a className="navbar-brand" href="/">
                        <img src={logo} width="15%" height="5%" alt="logo"/>
                        </a></div>
                        <div className="p-2 flex-shrink-1 bd-highlight"><button type="button" className="btn btn-sm"><FontAwesomeIcon icon={faShoppingCart} /></button></div>
                        <div className="p-2 flex-shrink-1 bd-highlight"><button  type="button" className="btn btn-light">Login</button><button type="button" className="btn btn-success">SignUp</button></div>
                        {/* <div class="p-2 flex-shrink-1 bd-highlight"><button>Signup</button></div> */}
                </div>

                    <div className="row  img-container">
                        {/* <div className="col-12"> */}
                            <img src={bgImg} alt="" className="img-fluid"/>
                            <div className="text-over-img ">
                               <h1>Best Food Waiting for You</h1>
                               <nav className="navbar navbar-light" >
                                    <form className="form-inline">
                                        <input className="form-control"  type="search" placeholder="Search" ></input>
                                        <button className="btn btn-outline-success " type="submit">Search</button>
                                    </form>
                                </nav>

                            </div>
                        {/* </div> */}
                    </div>
                
                
                
            </div>
            
            
            
        </div>
    );
};

export default Header;