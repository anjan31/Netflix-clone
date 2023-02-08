import React, { useState,useEffect} from 'react'
import './nav.css';

function Nav() {
const [show,setShow] = useState(false);

const trasistionNavbar = () => {  
  if(window.scrollY>100)
     setShow(true); 
     else
     setShow(false);
}

useEffect(() => {
   window.addEventListener('scroll',trasistionNavbar);

  return () => {
    window.removeEventListener('scroll',trasistionNavbar);
  }
}, [])




  return (
    <div className={show?"nav nav_black":"nav"} >

        <div className="nav_contents">

        <img className='nav_logo' 
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
            alt="Netflix logo" />

            <img 
            className='nav_avatar' 
            src="https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg" 
            alt="Avatar" />


        </div>
        
        
            

          



    </div>
  )
}

export default Nav