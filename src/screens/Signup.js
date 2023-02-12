import React, { useRef } from 'react'
import { auth } from '../firebase';
import './signup.css'

function Signup() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => { 
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((auth) => {
      console.log(auth);
       } 
    ).catch((e) =>{
    alert(e.message);

    })  ;
  };

  const signIn = (e) => { 
    e.preventDefault();
    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).then((auth) =>
     {console.log(auth); 
    }
    ).catch((err) =>
     {alert(err.message);
    }) ;

  }

  return (
    <div className="signup">

       

        <form className='form' >
        <h1>Sign In</h1>
           
      <input ref={emailRef} className='inp1' type="text" placeholder='Email Address' />
      <input ref={passwordRef} className='inp2'  type="password" placeholder='Password' />
      <button onClick={signIn} className='butt'>Sign In</button>

      <h4>
        New to netflix?  
       <span onClick={register} className='sign' > Sign Up now</span> .</h4>
      
        </form>

    </div>
  )
}

export default Signup