
import './App.css';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import React, {useEffect} from 'react'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';




function App() {
  const users = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth)
      {
        
        
       // console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else{
        
        dispatch(logout);
      }
    })
  
    return unsubscribe;
  }, [dispatch])
  
  
  return (
    <div className="App">
      
      
      <Router>
        <Routes>
          
          <Route path="/"  element = {users?<HomeScreen />:<SignIn />}/>
         

           
          
        </Routes>
      
    </Router>
          
    </div>
  );
}

export default App;
