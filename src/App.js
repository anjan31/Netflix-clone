
import './App.css';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      
      <Router>
        <Routes>
          
          <Route path="/"  element = {<HomeScreen />}/>
          <Route path="/users"  element = {<SignIn />}/>

           
          
        </Routes>
      
    </Router>
          
    </div>
  );
}

export default App;
