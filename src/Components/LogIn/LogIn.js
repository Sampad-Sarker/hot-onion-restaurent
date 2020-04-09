import React from 'react';
import './LogIn.css';
import { useForm } from 'react-hook-form'

const LogIn = () => {
    
    
      const { register, handleSubmit, watch, errors } = useForm() 
      const onSubmit = data => { console.log(data) }
    
      //console.log(watch('example')) // watch input value by passing the name of it
    
      return (
        // <button>SignIn withGoogle</button>
        // {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form className="formStyle" onSubmit={handleSubmit(onSubmit)}>  
            
                {/* include validation with required or other standard HTML validation rules */}
                <input name="Name"  ref={register({ required: true })} placeholder="Name"/>
                {errors.Name && <span>Name is required</span>}
                
                <input name="Email"  ref={register({ required: true })} placeholder="Email"/>
                {errors.Email && <span>Email is required</span>}
                
                <input name="password" ref={register({ required: true })} placeholder="Password"/>
                {errors.password && <span>Password is required</span>}

                <input name="confirm_password" ref={register({ required: true })} placeholder="Confirm Password"/>
                {errors.confirm_password && <span>Confirm Password is required</span>}
                
                
                <input type="submit" />
            
        </form>
      )
    
};

export default LogIn;