import React, { useState } from 'react'
import './signin.css'
import Signup from './Signup';

function SignIn() {
  

  const [signin,setSignin] = useState(false);

 


  
  return (

    
    
      <div >
      <div className='navi_contents'>
          <img className='navi'
           src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" />
          
          <button onClick={ ()=>setSignin(true)} className='but'> 
            Sign In
           </button>
      </div>
  
           <div className="text">
             {signin?(<Signup/>):
             <>
                  <h1>Unlimited movies, TV shows, and more.</h1>
                  <h3>Watch anywhere. Cancel anytime.</h3>
                  <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            
                            <form >
                              <input className='email' type="text" name="Email" id="email" placeholder=' Email Address' />
                              <button onClick={ ()=> setSignin(true)}  className='started'>GET STARTED  </button>
                            </form>
                            </>
             }
        
           </div>
          
           
           
  
      
      </div>






    
 
  );
}

export default SignIn